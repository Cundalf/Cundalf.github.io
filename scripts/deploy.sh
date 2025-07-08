#!/bin/bash

# Script de despliegue manual para servidor SSH
# Uso: ./scripts/deploy.sh [servidor]

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuración
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Función para mostrar mensajes con color
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar si se proporcionó el servidor
if [ -z "$1" ]; then
    error "Uso: $0 [servidor]"
    echo "Ejemplo: $0 produccion"
    exit 1
fi

SERVER_ENV="$1"

# Cargar configuración del servidor
CONFIG_FILE="$PROJECT_ROOT/deploy-config.json"
if [ ! -f "$CONFIG_FILE" ]; then
    error "No se encontró el archivo de configuración: $CONFIG_FILE"
    echo "Crear el archivo deploy-config.json con la configuración del servidor"
    exit 1
fi

# Obtener configuración usando jq (debe estar instalado)
if ! command -v jq &> /dev/null; then
    error "jq no está instalado. Instálalo con: sudo apt-get install jq"
    exit 1
fi

SSH_HOST=$(jq -r ".${SERVER_ENV}.host" "$CONFIG_FILE")
SSH_USER=$(jq -r ".${SERVER_ENV}.user" "$CONFIG_FILE")
SSH_PORT=$(jq -r ".${SERVER_ENV}.port" "$CONFIG_FILE")
DEPLOY_PATH=$(jq -r ".${SERVER_ENV}.deployPath" "$CONFIG_FILE")
SSH_KEY=$(jq -r ".${SERVER_ENV}.sshKey" "$CONFIG_FILE")

# Verificar que la configuración existe
if [ "$SSH_HOST" = "null" ]; then
    error "Configuración para el servidor '$SERVER_ENV' no encontrada en $CONFIG_FILE"
    exit 1
fi

log "Iniciando despliegue para el servidor: $SERVER_ENV"
log "Host: $SSH_HOST"
log "Usuario: $SSH_USER"
log "Puerto: $SSH_PORT"
log "Ruta de despliegue: $DEPLOY_PATH"

# Construir la aplicación
log "Construyendo la aplicación Next.js..."
cd "$PROJECT_ROOT"
npm run build

# Crear archivo comprimido
log "Creando archivo comprimido..."
cd out
tar -czf ../site.tar.gz .
cd ..

# Crear comando SSH
SSH_CMD="ssh -i $SSH_KEY -p $SSH_PORT $SSH_USER@$SSH_HOST"

# Crear backup en el servidor
log "Creando backup del sitio actual..."
$SSH_CMD "mkdir -p ~/backups && if [ -d '$DEPLOY_PATH' ]; then tar -czf ~/backups/site-backup-\$(date +%Y%m%d-%H%M%S).tar.gz -C '$DEPLOY_PATH' .; fi"

# Subir archivo al servidor
log "Subiendo archivos al servidor..."
scp -i "$SSH_KEY" -P "$SSH_PORT" site.tar.gz "$SSH_USER@$SSH_HOST:/tmp/"

# Extraer archivos en el servidor
log "Extrayendo archivos en el servidor..."
$SSH_CMD "
    mkdir -p '$DEPLOY_PATH' &&
    rm -rf '$DEPLOY_PATH'/* &&
    cd '$DEPLOY_PATH' &&
    tar -xzf /tmp/site.tar.gz &&
    rm -f /tmp/site.tar.gz &&
    chmod -R 755 '$DEPLOY_PATH' &&
    echo 'Despliegue completado exitosamente'
"

# Limpiar archivos temporales
log "Limpiando archivos temporales..."
rm -f site.tar.gz

log "¡Despliegue completado exitosamente!"
log "El sitio debería estar disponible en: http://$SSH_HOST" 
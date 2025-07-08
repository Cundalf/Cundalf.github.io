# Guía de Despliegue - Portfolio

Este documento explica cómo configurar y desplegar tu portfolio en GitHub Pages y en tu servidor SSH.

## Configuración Inicial

### 1. GitHub Pages

#### Configuración en GitHub

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. GitHub Pages detectará automáticamente el workflow desde la rama `master`

#### Configuración de Permisos

Los workflows ya están configurados con los permisos necesarios. El despliegue se ejecutará automáticamente cuando hagas push a la rama `master`.

### 2. Servidor SSH

#### Configuración de Secretos en GitHub

Para el despliegue SSH, necesitas configurar los siguientes secretos en GitHub:

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Secrets and variables** → **Actions**
3. Agrega los siguientes secretos:

```
SSH_HOST          # Dirección IP o dominio de tu servidor
SSH_USER          # Usuario SSH para conectarse
SSH_PRIVATE_KEY   # Clave privada SSH (contenido completo)
SSH_PORT          # Puerto SSH (generalmente 22)
DEPLOY_PATH       # Ruta donde se desplegará el sitio (ej: /var/www/html)
```

#### Generación de Claves SSH

Si no tienes claves SSH configuradas:

```bash
# Generar nueva clave SSH
ssh-keygen -t rsa -b 4096 -C "tu-email@example.com"

# Copiar clave pública al servidor
ssh-copy-id usuario@tu-servidor.com

# Mostrar clave privada para copiar a GitHub Secrets
cat ~/.ssh/id_rsa
```

#### Configuración del Servidor

Tu servidor debe tener:

1. **Servidor Web** (Apache, Nginx, Caddy, etc.)
2. **Acceso SSH** habilitado
3. **Directorio de despliegue** creado con permisos apropiados

**Nota sobre Caddy:** Caddy es especialmente recomendado para este tipo de despliegue porque:
- Automáticamente obtiene y renueva certificados SSL/TLS
- Configuración más simple y legible
- Detecta automáticamente aplicaciones SPA (Single Page Applications)
- Compresión gzip automática
- Configuración más fácil de mantener

**Ejemplo para Caddy:**
```bash
# Crear directorio de despliegue
sudo mkdir -p /var/www/portfolio
sudo chown -R tu-usuario:caddy /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio

# Configurar Caddyfile
sudo nano /etc/caddy/Caddyfile
```

**Configuración del Caddyfile:**
```caddy
# Ejemplo para tu dominio
tu-dominio.com {
    root * /var/www/portfolio
    file_server
    try_files {path} {path}/ /index.html
    
    # Opcional: Configurar headers para SPA
    header {
        # Cachear assets estáticos
        Cache-Control "public, max-age=31536000" /assets/*
        
        # Headers de seguridad
        X-Content-Type-Options nosniff
        X-Frame-Options DENY
        X-XSS-Protection "1; mode=block"
        Referrer-Policy strict-origin-when-cross-origin
    }
    
    # Opcional: Gzip compression
    encode gzip
    
    # Opcional: Logs
    log {
        output file /var/log/caddy/portfolio.log
        format single_field common_log
    }
}

# Opcional: Redireccionar www a no-www
www.tu-dominio.com {
    redir https://tu-dominio.com{uri}
}
```

**Ejemplo para Apache:**
```bash
# Crear directorio de despliegue
sudo mkdir -p /var/www/html
sudo chown -R tu-usuario:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# Configurar VirtualHost (ejemplo)
sudo nano /etc/apache2/sites-available/portfolio.conf
```

**Ejemplo para Nginx:**
```bash
# Crear directorio de despliegue
sudo mkdir -p /var/www/portfolio
sudo chown -R tu-usuario:nginx /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio

# Configurar server block
sudo nano /etc/nginx/sites-available/portfolio
```

## Despliegue Manual

### Configuración para Despliegue Manual

1. Copia el archivo de configuración:
```bash
cp deploy-config.example.json deploy-config.json
```

2. Edita `deploy-config.json` con los datos de tu servidor:
```json
{
  "produccion": {
    "host": "tu-servidor.com",
    "user": "tu-usuario",
    "port": "22",
    "deployPath": "/var/www/html",
    "sshKey": "~/.ssh/id_rsa"
  }
}
```

3. Asegúrate de tener `jq` instalado:
```bash
# Ubuntu/Debian
sudo apt-get install jq

# macOS
brew install jq
```

### Comandos de Despliegue

```bash
# Despliegue a producción
npm run deploy:prod

# Despliegue a staging
npm run deploy:staging

# Despliegue interactivo (te pide el servidor)
npm run deploy:manual
```

## Workflows Automatizados

### GitHub Pages

- **Archivo:** `.github/workflows/github-pages.yml`
- **Trigger:** Push a rama `master`
- **Resultado:** Sitio disponible en `https://tu-usuario.github.io/tu-repositorio`

### Servidor SSH

- **Archivo:** `.github/workflows/ssh-deploy.yml`
- **Trigger:** Push a rama `master`
- **Resultado:** Sitio desplegado en tu servidor

## Proceso de Despliegue

### 1. Desarrollo y Despliegue

```bash
# Desarrollar localmente
npm run dev

# Hacer cambios...
git add .
git commit -m "Actualizar portfolio"

# Desplegar (activa workflows automáticos)
git push origin master
```

### 2. Despliegue Automático

Al hacer push a `master`:
1. Se ejecuta el workflow de GitHub Pages
2. Se ejecuta el workflow de SSH
3. Los sitios se actualizan automáticamente

**Nota:** El despliegue es completamente automático. Cada push a `master` actualiza ambos sitios.

## Monitoreo

### Logs de Despliegue

- **GitHub Pages:** Ve a la pestaña "Actions" en tu repositorio
- **SSH:** Los logs aparecen en la misma pestaña "Actions"

### Verificación

- **GitHub Pages:** `https://tu-usuario.github.io/tu-repositorio`
- **Servidor SSH:** `http://tu-servidor.com`

## Troubleshooting

### Problemas Comunes

1. **Error de permisos SSH:**
   - Verificar que la clave SSH esté correctamente configurada
   - Verificar permisos del directorio de despliegue

2. **Error de build:**
   - Verificar que todas las dependencias estén instaladas
   - Revisar logs en la pestaña Actions

3. **GitHub Pages no funciona:**
   - Verificar que Pages esté habilitado
   - Verificar que la rama source esté correcta (debe ser master)

### Comandos Útiles

```bash
# Verificar conexión SSH
ssh -T git@github.com

# Verificar conexión al servidor
ssh usuario@tu-servidor.com

# Verificar build local
npm run build

# Analizar bundle
npm run build:analyze

# Comandos específicos para Caddy
caddy validate --config /etc/caddy/Caddyfile    # Validar configuración
sudo systemctl reload caddy                     # Recargar configuración
sudo systemctl status caddy                     # Verificar estado
sudo journalctl -u caddy -f                     # Ver logs en tiempo real
caddy fmt --overwrite /etc/caddy/Caddyfile     # Formatear Caddyfile
```

## Estructura de Archivos

```
.github/
├── workflows/
│   ├── github-pages.yml    # Workflow para GitHub Pages
│   └── ssh-deploy.yml      # Workflow para servidor SSH
scripts/
└── deploy.sh               # Script de despliegue manual
deploy-config.example.json  # Ejemplo de configuración
deploy-config.json          # Configuración (no commitear)
```

## Seguridad

- **Nunca commitear** `deploy-config.json` (ya está en `.gitignore`)
- **Usar secretos de GitHub** para información sensible
- **Rotar claves SSH** periódicamente
- **Usar HTTPS** cuando sea posible

## Backup

Los workflows automáticamente crean backups antes del despliegue:
- **SSH:** Backup en `~/backups/` en el servidor
- **GitHub Pages:** Historial en Git

## Soporte

Si necesitas ayuda:
1. Revisar logs en GitHub Actions
2. Verificar configuración de secretos
3. Probar conexión SSH manual
4. Revisar permisos del servidor 
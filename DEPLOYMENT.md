# Guía de Despliegue - Portfolio

Este documento explica cómo configurar y desplegar tu portfolio.

## 🚀 Opciones de Despliegue

### 1. GitHub Pages (Recomendado)
El despliegue es automático vía GitHub Actions al hacer push a `master`.
1. En GitHub: **Settings** → **Pages**.
2. **Source**: Selecciona **GitHub Actions**.

### 2. Servidor SSH
Requiere configurar **Secrets** en GitHub (**Settings** → **Secrets** → **Actions**):
- `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, `SSH_PORT` (22), `DEPLOY_PATH`.

#### Configuración Rápida
```bash
# Generar clave
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_portfolio
# Copiar al servidor
ssh-copy-id -i ~/.ssh/id_rsa_portfolio.pub usuario@tu-servidor.com
```

## 🛠️ Comandos de Despliegue Manual
Si prefieres no usar CI/CD temporalmente:
- `npm run deploy:prod`: Despliega a producción.
- `npm run deploy:staging`: Despliega a staging.
> Requiere un archivo `deploy-config.json` basado en `deploy-config.example.json`.

## 🔍 Troubleshooting SSH
Si el despliegue falla con `Permission denied (publickey)`:
1. **Validar Clave**: Asegúrate de que `SSH_PRIVATE_KEY` en GitHub incluya los headers `-----BEGIN ...-----` y `-----END ...-----`.
2. **Permisos en Servidor**:
   ```bash
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/authorized_keys
   ```
3. **Test de Conexión**: Usa el workflow **"Test SSH Connection"** en la pestaña **Actions** de GitHub para diagnosticar problemas rápidamente.

## 🌐 Configuración de Servidor (Ejemplo Caddy)
Caddy es ideal por su simplicidad y SSL automático:
```caddy
tu-dominio.com {
    root * /var/www/portfolio
    file_server
    try_files {path} {path}/ /index.html
    encode gzip
}
```
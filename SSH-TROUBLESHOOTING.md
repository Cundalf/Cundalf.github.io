# 🔧 Guía de Troubleshooting SSH

## ❌ Error Actual
```
ssh: unable to authenticate, attempted methods [none publickey], no supported methods remain
```

## 🔍 Causas Posibles
1. **Secrets no configurados** en GitHub
2. **Clave SSH privada mal formateada** 
3. **Clave pública no copiada al servidor**
4. **Permisos incorrectos** en el servidor

## 🚀 Solución Paso a Paso

### Paso 1: Generar Claves SSH
```powershell
# Ejecutar este script
.\scripts\setup-ssh-deploy.ps1
```

### Paso 2: Configurar GitHub Secrets
1. Ve a: `https://github.com/Cundalf/Cundalf.github.io/settings/secrets/actions`
2. Agrega estos secrets:

```
SSH_HOST          → tu-servidor.com
SSH_USER          → tu-usuario
SSH_PRIVATE_KEY   → -----BEGIN OPENSSH PRIVATE KEY-----
                    (clave completa del script)
                    -----END OPENSSH PRIVATE KEY-----
SSH_PORT          → 22
DEPLOY_PATH       → /var/www/html
```

### Paso 3: Copiar Clave Pública al Servidor
```bash
# Desde tu máquina local
ssh-copy-id -i ~/.ssh/deploy_key.pub usuario@tu-servidor.com

# O manualmente
cat ~/.ssh/deploy_key.pub | ssh usuario@tu-servidor.com "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### Paso 4: Verificar Permisos en el Servidor
```bash
# Conectarse al servidor
ssh usuario@tu-servidor.com

# Verificar permisos
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chown -R $USER:$USER ~/.ssh
```

### Paso 5: Probar Conexión
```bash
# Desde tu máquina local
ssh -i ~/.ssh/deploy_key usuario@tu-servidor.com
```

## 🧪 Workflow de Test

Usa el workflow **"Test SSH Connection"** para verificar:
1. Ve a **Actions** → **Test SSH Connection**
2. Clic en **"Run workflow"**
3. Revisa los logs de debug

## ✅ Verificación Final

Si todo está correcto, deberías ver:
```
SSH_HOST exists: true
SSH_USER exists: true
SSH_PORT exists: true
SSH_PRIVATE_KEY exists: true
DEPLOY_PATH exists: true
Private key starts with: -----BEGIN OPENSSH PRIVATE KEY-----
Private key ends with: -----END OPENSSH PRIVATE KEY-----
✅ SSH connection successful!
```

## 🆘 Si Sigue Fallando

1. **Verifica formato de clave**: Debe incluir `-----BEGIN` y `-----END`
2. **Regenera las claves**: Ejecuta el script otra vez
3. **Verifica secrets**: Todos deben existir en GitHub
4. **Prueba conexión manual**: `ssh -i ~/.ssh/deploy_key usuario@servidor`

## 📞 Comandos de Diagnóstico

```bash
# Ver claves disponibles
ls -la ~/.ssh/

# Verificar formato de clave
head -1 ~/.ssh/deploy_key
tail -1 ~/.ssh/deploy_key

# Probar conexión con debug
ssh -i ~/.ssh/deploy_key -v usuario@servidor
``` 
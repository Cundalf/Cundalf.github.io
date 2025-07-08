# Portfolio - Sitio Personal

Portfolio personal desarrollado con Next.js y desplegado automáticamente en GitHub Pages y servidor SSH.

## 🚀 Desarrollo y Despliegue

```bash
# Desarrollar localmente
npm run dev

# Hacer cambios y commitear
git add .
git commit -m "Actualizar contenido"

# Desplegar (activa workflows automáticos)
git push origin master
```

El despliegue es automático: cada push a `master` actualiza tanto GitHub Pages como tu servidor SSH.

## 🛠️ Comandos Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Servidor de producción
npm run lint         # Linter
npm run deploy:prod  # Despliegue manual a producción
npm run deploy:staging # Despliegue manual a staging
```

## 📦 Despliegue Automático

Cada push a `master` activa automáticamente:
- ✅ Actualización de GitHub Pages
- ✅ Actualización del servidor SSH
- ✅ Creación de backups automáticos

## 🔧 Configuración

- **GitHub Pages**: Configurado automáticamente
- **Servidor SSH**: Requiere secretos en GitHub Actions
- **Despliegue manual**: Requiere `deploy-config.json`

Ver [`DEPLOYMENT.md`](DEPLOYMENT.md) para instrucciones detalladas.

## 📝 Tecnologías

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI
- GitHub Actions

## 🌐 URLs

- **GitHub Pages**: `https://tu-usuario.github.io/tu-repositorio`
- **Servidor SSH**: `https://tu-dominio.com`

## 📚 Documentación

- [Guía de Despliegue Completa](DEPLOYMENT.md)
- [Configuración de Servidor](server-config-examples/) 
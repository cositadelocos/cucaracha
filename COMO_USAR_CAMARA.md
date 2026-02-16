# 🪳 Sensor de Cucarachas - Sistema de Detección por Gestos

## 🚀 CÓMO USAR LA CÁMARA

### ⚠️ IMPORTANTE: La cámara web requiere HTTPS o localhost

Los navegadores **bloquean la cámara** por seguridad cuando abres archivos HTML directamente (`file://`).

## 📌 OPCIÓN 1: Usar Localhost (Más Rápido)

1. Abre PowerShell en la carpeta del proyecto
2. Ejecuta: `python servidor.py`
3. Se abrirá automáticamente en: http://localhost:8000

## 🌐 OPCIÓN 2: Publicar en la WEB GRATIS (Funciona en cualquier dispositivo)

### Usando GitHub Pages (Recomendado):

**Paso 1:** Crea una cuenta en GitHub (gratis): https://github.com

**Paso 2:** Instala Git en tu PC (si no lo tienes)

**Paso 3:** Abre PowerShell en esta carpeta y ejecuta:

```powershell
# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Primer commit - Sensor de cucarachas"

# Crear repositorio en GitHub y conectar
# (Reemplaza TU_USUARIO y TU_REPO con tus datos)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

**Paso 4:** En GitHub:
- Ve a Settings → Pages
- En "Source" selecciona "main"
- Guarda

**Paso 5:** Tu página estará en:
```
https://TU_USUARIO.github.io/TU_REPO/sensor-camara.html
```

### 🎯 Alternativas Más Fáciles (Sin Git):

#### A) Netlify Drop (Arrastra y suelta):
1. Ve a: https://app.netlify.com/drop
2. Arrastra toda la carpeta del proyecto
3. Te dará una URL con HTTPS

#### B) Vercel:
1. Ve a: https://vercel.com
2. Arrastra la carpeta
3. Despliega con un clic

#### C) GitHub Pages (Sin comandos):
1. Crea un repositorio en GitHub
2. Sube los archivos desde la web
3. Activa GitHub Pages en Settings

## 🔧 Si no quieres publicar en internet:

Simplemente usa: `python servidor.py`

Es la forma más rápida y funciona perfectamente.

## 📱 Ventajas de publicar en la web:

✅ Funciona en cualquier dispositivo (PC, tablet, celular)  
✅ Puedes compartir el link con amigos  
✅ GRATIS para siempre  
✅ HTTPS incluido (cámara funciona)  
✅ No necesitas dejar el servidor corriendo  

## 🎮 URLs del Proyecto:

- **Teoría:** `index.html`
- **Simulador drag & drop:** `simulador.html`
- **Sensor con gestos:** `sensor-camara.html`
- **Test de cámara:** `test-camara.html`

## ⚡ Resumen Rápido:

### Para uso local:
```
python servidor.py
```

### Para publicar en web:
1. Sube a GitHub
2. Activa GitHub Pages
3. Comparte tu link

¡Eso es todo! 🎉

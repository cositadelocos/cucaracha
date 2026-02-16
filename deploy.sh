#!/bin/bash

echo "🚀 DEPLOY RÁPIDO A GITHUB PAGES"
echo "================================"
echo ""

# Verificar si Git está instalado
if ! command -v git &> /dev/null
then
    echo "❌ Git no está instalado"
    echo "📥 Descárgalo de: https://git-scm.com/downloads"
    exit
fi

echo "✅ Git detectado"
echo ""

# Preguntar al usuario
echo "📝 Necesito algunos datos:"
read -p "Tu usuario de GitHub: " GITHUB_USER
read -p "Nombre del repositorio (ej: sensor-cucarachas): " REPO_NAME

echo ""
echo "📦 Inicializando proyecto..."

# Inicializar Git
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "🚀 Primer commit - Sistema de detección de cucarachas"

# Conectar con GitHub
echo ""
echo "🔗 Conectando con GitHub..."
git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"

# Crear rama main
git branch -M main

echo ""
echo "📤 Subiendo archivos a GitHub..."
git push -u origin main

echo ""
echo "✅ ¡LISTO!"
echo ""
echo "🌐 Ahora ve a:"
echo "   https://github.com/$GITHUB_USER/$REPO_NAME/settings/pages"
echo ""
echo "📋 Y sigue estos pasos:"
echo "   1. En 'Source' selecciona 'main'"
echo "   2. Haz clic en 'Save'"
echo "   3. Espera 1-2 minutos"
echo ""
echo "🎉 Tu página estará en:"
echo "   👉 https://$GITHUB_USER.github.io/$REPO_NAME/sensor-camara.html"
echo ""

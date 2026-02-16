@echo off
echo ========================================
echo   DEPLOY RAPIDO A GITHUB PAGES
echo ========================================
echo.

REM Verificar si Git esta instalado
git --version >nul 2>&1
if errorlevel 1 (
    echo - Git no esta instalado
    echo - Descargalo de: https://git-scm.com/downloads
    pause
    exit /b
)

echo + Git detectado
echo.

REM Preguntar al usuario
set /p GITHUB_USER="Tu usuario de GitHub: "
set /p REPO_NAME="Nombre del repositorio (ej: sensor-cucarachas): "

echo.
echo Inicializando proyecto...

REM Inicializar Git
git init

REM Agregar archivos
git add .

REM Commit inicial
git commit -m "Primer commit - Sistema de deteccion de cucarachas"

REM Conectar con GitHub
echo.
echo Conectando con GitHub...
git remote add origin https://github.com/%GITHUB_USER%/%REPO_NAME%.git

REM Crear rama main
git branch -M main

echo.
echo Subiendo archivos a GitHub...
git push -u origin main

echo.
echo ========================================
echo   LISTO!
echo ========================================
echo.
echo Ahora ve a:
echo   https://github.com/%GITHUB_USER%/%REPO_NAME%/settings/pages
echo.
echo Y sigue estos pasos:
echo   1. En 'Source' selecciona 'main'
echo   2. Haz clic en 'Save'
echo   3. Espera 1-2 minutos
echo.
echo Tu pagina estara en:
echo   https://%GITHUB_USER%.github.io/%REPO_NAME%/sensor-camara.html
echo.
pause

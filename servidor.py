import http.server
import socketserver
import webbrowser
import os

PORT = 8000

# Cambiar al directorio donde están los archivos HTML
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
})

print(f"""
╔════════════════════════════════════════════════════════════╗
║     🚀 SERVIDOR LOCAL INICIADO                            ║
╚════════════════════════════════════════════════════════════╝

📡 Servidor corriendo en: http://localhost:{PORT}

🌐 Abre tu navegador y visita:
   • http://localhost:{PORT}/index.html
   • http://localhost:{PORT}/sensor-camara.html
   • http://localhost:{PORT}/simulador.html

⚠️  IMPORTANTE: 
   • NO cierres esta ventana mientras uses la aplicación
   • La cámara funciona SOLO con servidor HTTP (localhost)
   • Para detener el servidor presiona Ctrl+C

🎥 Para usar la cámara:
   1. Ve a http://localhost:{PORT}/sensor-camara.html
   2. Haz clic en "ACTIVAR CÁMARA"
   3. Permite el acceso a la cámara cuando te lo pida el navegador

════════════════════════════════════════════════════════════
""")

# Abrir navegador automáticamente
webbrowser.open(f'http://localhost:{PORT}/index.html')

# Iniciar servidor
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n✓ Servidor detenido correctamente")
        httpd.shutdown()

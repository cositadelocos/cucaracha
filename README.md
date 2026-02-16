# 🔌 Simulador de Compuertas Lógicas - Sensor para Cucarachas

## 📋 Descripción del Proyecto

Este proyecto simula compuertas lógicas básicas (AND, OR, NOT, NAND, NOR, XOR) y un circuito combinacional diseñado para un sistema de eliminación selectiva de cucarachas. El sistema utiliza lógica digital para garantizar que solo se active cuando se detecta una cucaracha y NO hay otros animales presentes.

## 🎯 Características

### Compuertas Lógicas Implementadas:
- ✅ **AND**: Salida 1 solo si ambas entradas son 1
- ✅ **OR**: Salida 1 si al menos una entrada es 1
- ✅ **NOT**: Invierte la entrada
- ✅ **NAND**: NOT AND (inverso de AND)
- ✅ **NOR**: NOT OR (inverso de OR)
- ✅ **XOR**: Salida 1 si las entradas son diferentes

### Circuito Combinacional:
**Fórmula**: `Salida = (A AND B) AND (NOT C)`

**Donde**:
- `A`: Sensor de detección inicial de cucaracha (0 o 1)
- `B`: Sensor de confirmación de cucaracha (0 o 1)
- `C`: Sensor de detección de otro animal (0 o 1)

**El sistema se activa solo cuando**:
- A = 1 AND B = 1 (ambos sensores confirman presencia de cucaracha)
- C = 0 (NO se detecta otro tipo de animal)

Esto garantiza la **eliminación selectiva** sin dañar otros animales.

## 🚀 Cómo Usar

### Opción 1: Versión HTML Interactiva (Recomendado)
1. Abre el archivo `index.html` en cualquier navegador web
2. Verás todas las tablas de verdad de las compuertas lógicas
3. Usa el probador interactivo al final de la página para probar diferentes combinaciones de entradas

### Opción 2: Simulador Visual con Drag & Drop
1. Desde `index.html`, haz clic en el botón "🎮 SIMULADOR INTERACTIVO"
2. O abre directamente `simulador.html`
3. Arrastra animales desde el panel izquierdo hacia la zona de trampa
4. Observa cómo el sistema evalúa si debe activarse o proteger al animal

### Opción 3: Sensor de Cámara con Gestos (¡NUEVO! 🆕)
1. Desde `index.html`, haz clic en el botón "📹 SENSOR DE CÁMARA CON GESTOS"
2. O abre directamente `sensor-camara.html`
3. Presiona "ACTIVAR CÁMARA" y permite el acceso a tu webcam
4. Usa gestos con tu mano para simular la detección:
   - **☝️ 1 Dedo (índice)**: Simula detección de cucaracha (Sensor A)
   - **✊ Puño cerrado**: Confirma que es una cucaracha (Sensor B)
   - **✋ Mano abierta (5 dedos)**: Simula otro animal presente (Sensor C)
5. Observa cómo los sensores se activan y el sistema toma decisiones en tiempo real
6. Cuando hagas ☝️ + ✊ (sin ✋), el sistema eliminará la "cucaracha" con efectos visuales 💥

### Opción 4: Versión JavaScript en Node.js
1. Abre una terminal en la carpeta del proyecto
2. Ejecuta: `node compuertas-logicas.js`
3. Verás todas las tablas de verdad en la consola

## 📊 Tabla de Verdad del Circuito Principal

```
A | B | C | A AND B | NOT C | SALIDA
--|---|---|---------|-------|--------
0 | 0 | 0 |    0    |   1   |   0
0 | 0 | 1 |    0    |   0   |   0
0 | 1 | 0 |    0    |   1   |   0
0 | 1 | 1 |    0    |   0   |   0
1 | 0 | 0 |    0    |   1   |   0
1 | 0 | 1 |    0    |   0   |   0
1 | 1 | 0 |    1    |   1   |   1  ← ÚNICA ACTIVACIÓN
1 | 1 | 1 |    1    |   0   |   0
```

**Solo hay 1 combinación de 8 que activa el sistema**: A=1, B=1, C=0

## 🔧 Estructura del Proyecto

```
├── compuertas-logicas.js  # Versión de consola con todas las implementaciones
├── index.html             # Página principal con teoría y navegación
├── simulador.html         # Simulador visual interactivo (drag & drop)
├── sensor-camara.html     # Sensor con detección de gestos por cámara (IA)
└── README.md              # Este archivo
```

## 💡 Caso de Uso: Sensor de Cucarachas

Este circuito lógico podría implementarse en un dispositivo que:

1. **Sensor A**: Detecta movimiento característico de cucarachas
2. **Sensor B**: Confirma el tamaño y forma de una cucaracha mediante visión
3. **Sensor C**: Detecta la presencia de mascotas u otros animales

El sistema solo activa el mecanismo de eliminación cuando:
- ✅ Ambos sensores confirman que es una cucaracha (A=1, B=1)
- ✅ No hay otros animales en el área (C=0)

Esto previene:
- ❌ Falsos positivos que podrían dañar mascotas
- ❌ Activaciones accidentales
- ❌ Daño a animales no objetivo

## 🛠️ Tecnologías Utilizadas

- JavaScript (ES6+)
- HTML5
- CSS3
- **MediaPipe Hands** (Detección de gestos con IA)
- **Canvas API** (Renderizado en tiempo real)
- **WebRTC** (Acceso a cámara web)

## 📝 Notas Técnicas

- Las compuertas trabajan con valores booleanos internamente
- Se convierten a binario (0/1) para la visualización
- El circuito usa operaciones lógicas en cascada
- Todas las 8 combinaciones posibles (2³) se muestran en la tabla de verdad

## 🎓 Propósito Educativo

Este proyecto es ideal para:
- Aprender lógica digital básica
- **Experimentar con visión por computadora e IA**
- **Comprender detección de gestos y control por cámara**
- **Aplicar Machine Learning en interfaces interactivas**

## 🚀 Características Avanzadas del Sensor de Cámara

### Detección de Gestos en Tiempo Real
- Usa **MediaPipe Hands** de Google para detección precisa de manos
- Identifica 21 puntos clave en cada mano
- Respuesta en tiempo real (<50ms de latencia)
- Funciona con cualquier webcam

### Integración con Lógica de Circuitos
- Los gestos se mapean directamente a los sensores A, B y C
- Aplica la lógica `(A AND B) AND (NOT C)` en tiempo real
- Feedback visual instantáneo con LEDs virtuales
- Efectos de eliminación cuando se activa el sistema

### Experiencia Interactiva
- Interfaz estilo cámara de vigilancia
- Efectos visuales de explosión 💥 al eliminar
- Sonidos de confirmación
- Estadísticas en tiempo real
- Sistema de seguimiento preciso

## 📋 Requisitos para el Sensor de Cámara

- Navegador moderno (Chrome, Edge, Firefox recomendados)
- Webcam funcional
- Conexión a internet (para cargar MediaPipe desde CDN)
- Permisos de cámara habilitados

## 🔒 Privacidad

- Todo el procesamiento se realiza **localmente en tu navegador**
- No se envían imágenes a ningún servidor
- No se guardan datos ni grabaciones
- MediaPipe se ejecuta completamente del lado del cliente
- Entender tablas de verdad
- Ver aplicaciones prácticas de circuitos combinacionales
- Estudiar sistemas de decisión basados en lógica booleana

---

**Desarrollado para demostración de compuertas lógicas y aplicaciones en sistemas de control inteligente**

// ========================================
// SIMULADOR DE COMPUERTAS LÓGICAS
// Proyecto: Sensor para cucarachas
// ========================================

// Definición de compuertas lógicas básicas
const AND = (a, b) => a && b;
const OR = (a, b) => a || b;
const NOT = (a) => !a;
const NAND = (a, b) => !(a && b);
const NOR = (a, b) => !(a || b);
const XOR = (a, b) => (a || b) && !(a && b);

// Función para convertir booleano a binario (0 o 1)
const toBinary = (bool) => bool ? 1 : 0;

// Función para mostrar la tabla de verdad de compuertas de 2 entradas
function mostrarTablaVerdad2Entradas(nombre, operacion) {
    console.log(`\n${'='.repeat(40)}`);
    console.log(`TABLA DE VERDAD: ${nombre}`);
    console.log(`${'='.repeat(40)}`);
    console.log('A\tB\t|\tSalida');
    console.log('-'.repeat(40));
    
    for (let a = 0; a <= 1; a++) {
        for (let b = 0; b <= 1; b++) {
            const resultado = operacion(a, b);
            console.log(`${a}\t${b}\t|\t${toBinary(resultado)}`);
        }
    }
}

// Función para mostrar la tabla de verdad de NOT (1 entrada)
function mostrarTablaVerdadNOT() {
    console.log(`\n${'='.repeat(40)}`);
    console.log(`TABLA DE VERDAD: NOT`);
    console.log(`${'='.repeat(40)}`);
    console.log('A\t|\tSalida');
    console.log('-'.repeat(40));
    
    for (let a = 0; a <= 1; a++) {
        const resultado = NOT(a);
        console.log(`${a}\t|\t${toBinary(resultado)}`);
    }
}

// Función para el circuito combinacional: (A AND B) AND (NOT C)
function circuitoCombinacional(a, b, c) {
    const andAB = AND(a, b);
    const notC = NOT(c);
    const resultado = AND(andAB, notC);
    return resultado;
}

// Función para mostrar la tabla de verdad del circuito combinacional
function mostrarCircuitoCombinacional() {
    console.log(`\n${'='.repeat(60)}`);
    console.log('CIRCUITO COMBINACIONAL: (A AND B) AND (NOT C)');
    console.log(`${'='.repeat(60)}`);
    console.log('A\tB\tC\t|\tA AND B\t|\tNOT C\t|\tSalida');
    console.log('-'.repeat(60));
    
    for (let a = 0; a <= 1; a++) {
        for (let b = 0; b <= 1; b++) {
            for (let c = 0; c <= 1; c++) {
                const andAB = AND(a, b);
                const notC = NOT(c);
                const salida = circuitoCombinacional(a, b, c);
                console.log(`${a}\t${b}\t${c}\t|\t${toBinary(andAB)}\t|\t${toBinary(notC)}\t|\t${toBinary(salida)}`);
            }
        }
    }
}

// ========================================
// EJECUCIÓN PRINCIPAL
// ========================================

console.log('\n');
console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║   SIMULADOR DE COMPUERTAS LÓGICAS                        ║');
console.log('║   Proyecto: Sensor para eliminación de cucarachas        ║');
console.log('╚═══════════════════════════════════════════════════════════╝');

// Mostrar todas las tablas de verdad
mostrarTablaVerdad2Entradas('AND', AND);
mostrarTablaVerdad2Entradas('OR', OR);
mostrarTablaVerdadNOT();
mostrarTablaVerdad2Entradas('NAND', NAND);
mostrarTablaVerdad2Entradas('NOR', NOR);
mostrarTablaVerdad2Entradas('XOR', XOR);

// Mostrar el circuito combinacional
mostrarCircuitoCombinacional();

console.log('\n');
console.log(`${'='.repeat(60)}`);
console.log('ANÁLISIS DEL CIRCUITO:');
console.log(`${'='.repeat(60)}`);
console.log('La salida es 1 (TRUE) solo cuando:');
console.log('  - A = 1 AND B = 1 (ambos sensores detectan cucaracha)');
console.log('  - C = 0 (NO se detecta otro tipo de animal)');
console.log('\nEsto asegura que el sistema solo active cuando:');
console.log('  ✓ Se confirma presencia de cucaracha (A=1, B=1)');
console.log('  ✓ NO hay otro animal presente (C=0)');
console.log(`${'='.repeat(60)}\n`);

// Exportar las funciones para uso en otros módulos (si se usa Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AND,
        OR,
        NOT,
        NAND,
        NOR,
        XOR,
        circuitoCombinacional
    };
}

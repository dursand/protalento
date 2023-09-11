// Ejercicio 1: Mostrar mensaje en consola mediante un callback
function ejercicio1() {
    function mostrarMensaje(callback) {
        callback('Este es un mensaje en la consola');
    }

    function callbackConsoleLog(message) {
        console.log(message);
    }

    mostrarMensaje(callbackConsoleLog);
}

// Ejercicio 2: Determinar el tipo de dato de una variable y mostrar su contenido
function ejercicio2() {
    function mostrarTipoYContenido(variable, callback) {
        const tipo = typeof variable;
        callback(`Tipo de dato: ${tipo}, Contenido: ${variable}`);
    }

    function callbackConsoleLog(message) {
        console.log(message);
    }

    mostrarTipoYContenido(42, callbackConsoleLog);
}

// Ejercicio 3: Realizar operaciones matemáticas con dos números mediante un callback
function ejercicio3() {
    function operacionesMatematicas(a, b, callback) {
        callback(a + b);
    }

    function suma(resultado) {
        console.log(`Suma: ${resultado}`);
    }

    function resta(resultado) {
        console.log(`Resta: ${resultado}`);
    }

    function multiplicacion(resultado) {
        console.log(`Multiplicación: ${resultado}`);
    }

    function division(resultado) {
        console.log(`División: ${resultado}`);
    }

    operacionesMatematicas(10, 5, suma);
    operacionesMatematicas(10, 5, resta);
    operacionesMatematicas(10, 5, multiplicacion);
    operacionesMatematicas(10, 5, division);
}

// Ejercicio 4: Convertir cadena a mayúsculas o minúsculas mediante un callback
function ejercicio4() {
    function convertirCadena(cadena, callback) {
        callback(cadena);
    }

    function mayusculas(cadena) {
        console.log(cadena.toUpperCase());
    }

    function minusculas(cadena) {
        console.log(cadena.toLowerCase());
    }

    convertirCadena("PejeLagarto", mayusculas);
    convertirCadena("PejeLagarto", minusculas);
}

// Ejercicio 5: Filtrar tiempos mayores a 2 horas en minutos mediante un callback
function ejercicio5() {
    const tiemposEnMinutos = [120, 80, 200, 100];

    function filtrarTiempos(tiempos, callback) {
        const tiemposFiltrados = tiempos.filter(tiempo => tiempo > 120); // 120 minutos = 2 horas
        callback(tiemposFiltrados);
    }

    function mostrarTiempos(tiempos) {
        console.log(`Tiempos mayores a 2 horas: ${tiempos}`);
    }

    filtrarTiempos(tiemposEnMinutos, mostrarTiempos);
}
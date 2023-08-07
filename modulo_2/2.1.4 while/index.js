//Primer punto.  Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let numero = prompt("Profavor ingrese un numero");

let i = 1;

while (i < numero) {
    if ((i % 5) == 0) {
        console.log(i);
    }
    i++;
}


// segundo punto. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.


let num1 = prompt("Ingrese numero 1 - 50:");
let num2 = prompt("Ingrese otro numero 1-50:");

while (i <= 50) {
    // if (num1 == "" || num2 == "") break;

    if (num1 == i || num2 == i) {
        console.log(i + " Loteria");
    } else {
        console.log(i);
    }
    i++;
}

//tercer punto.  Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

const arreglo = [];

let numero3;

while (!(numero3 == 0)) {
    numero3 = prompt("Por favor ingresa un numero, para salir oprima 0");
    parseInt(numero);

    if (!isNaN(numero3) && numero3 != 0) {

        arreglo.push(Number(numero3));
    }
};

const elemento = document.getElementById("elemento");
elemento.innerText = arreglo;
console.log(arreglo);
 
// cuarto punto. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

let input, cadena = "";

while (!(input == "0")) {

    input = prompt("Ingresa un caracter o palabra");

    if (!isNaN(input) && input != " ") {
        alert("No se pueden numeros")
    } else {
        cadena = cadena + input;
    }

};

const elemento = document.getElementById("elemento");
elemento.innerText = cadena;
console.log(cadena);

// Quinto punto. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let input1;

while (!(input1 == "domingo")) {

    input1 = prompt("Ingresa un dia de la semana");

    if (!isNaN(input1) && input1 != " ") {
        alert("No se pueden numeros")
    } else {
        input1.toLowerCase();
        if (input1 === "lunes") {
            alert("Hoy es lunes, un dia feriado");
        } else if (input1 === "viernes") {
            alert("Vamonos de rumba");
        } else if (input1 === "sabado") {
            alert("Dia de deporte");
        } else if (input1 === "domigo") {
            alert("Ve a descansar");
        } else {
            alert("Muchas clases");
        }
    }

};

const elemento = document.getElementById("elemento");
elemento.innerText = cadena;
console.log(cadena);
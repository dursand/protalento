//primer ejercicio
let re1 = prompt("Eres belisimo/a");
if (re1 == "si"){
    alert("Ciertamente");
}
else if (re1 == "no"){
    alert("No te creo");
}
else { alert("Por favor responde si o no")}//


// Segundo ejercicio
let re2 = prompt ("Por favor ingresa un número")
if (re2 % 2 == 0) {
  alert("El numero " + re2 + " es divisible entre 2");
} else {
  alert("El numero " + re2 + " no es divisible entre 2");}
  
// Tercer ejercicio 
let re3 = prompt ("Por favor ingresa un número")
if (re3 % 2 == 0) {
  alert("El numero " + re3 + " es un número par");
} else {
  alert("El numero " + re3 + " es un número impar");}
  
// Cuarto ejercicio

let re4 = parseInt( prompt("Numero de cliente"));

if (re4 == 1000) {
    alert("Ganaste premio")
} else {
    alert("Lo sentimos, sigue intentando")}

// quinto 

const primerNumero = parseFloat(prompt("Ingresa el primer número:"));
const segundoNumero = parseFloat(prompt("Ingresa el segundo número:"));

if (isNaN(primerNumero) || isNaN(segundoNumero)) {
  console.log("Al menos uno de los valores ingresados no es un número válido.");
} else {
  if (primerNumero < segundoNumero) {
    console.log(primerNumero + " es menor que " + segundoNumero + ".");
  } else {
    console.log(segundoNumero + " es menor que " + primerNumero + ".");
  }
}


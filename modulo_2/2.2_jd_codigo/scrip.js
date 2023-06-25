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

let re4 = parseFloat( prompt("Numero de cliente"));

if (re4 == 1000) {
    alert("Ganaste premio")
} else {
    alert("Lo sentimos, sigue intentando")}

// Quinto ejercicio 

let primerNumero = parseInt(prompt("Por favor ingresa el primer número:"));
let segundoNumero = parseInt(prompt("Por favor ingresa el segundo número:"));

if (isNaN(primerNumero) || isNaN(segundoNumero)) {
  alert("Al menos uno de los valores ingresados no es un número válido.");
} else {
  if (primerNumero < segundoNumero) {
    alert(primerNumero + " es menor que " + segundoNumero + ".");
  } else {
    alert(segundoNumero + " es menor que " + primerNumero + ".");
  }
}

// Sexto ejercicio 

let primerN= parseInt(prompt("para determinar el numero mayor por favor ingresa el primer número:"));
let segundoN = parseInt(prompt("Por favor ingresa el segundo número:"));
let tercerN = parseInt(prompt("Por favor ingresa el tercer número:"));

if (primerN < segundoN) {
  numa = segundoN;
} else if (primerN >= segundoN) {
  numa = primerN;
} 

if (numa < tercerN) { 
alert("el numero mayor es: "+tercerN);
} else if (numa > tercerN) {
alert("el numero mayor es: "+numa);
} else {
alert("el numero mayor y que se repite es "+numa);
}

// Septimo ejercicio

let diasem = prompt("Por favor ingrese un dia de la semana ej: lunes ");
let diasem1 = diasem.toLowerCase();
if (diasem1 == "lunes") {
    alert(" `Haz siempre lo mejor que puedas. Lo que plantes ahora, lo cosecharás más tarde.` -Og Mandino ");
} else if (diasem1 == "martes" || diasem1 == "miercoles" || diasem1 == "jueves") {
    alert(" `Los desafíos son los que hacen que la vida sea interesante y superarlos es lo que hace que la vida tenga sentido.` -Joshua ");
} else if (diasem1 == "viernes") {
    alert(" `La acción es la clave fundamental de todo éxito.` -Pablo Picasso");
} else if(diasem1 == "sabado" || diasem1 == "domingo"){
    alert(" `Los obstáculos son esas cosas espantosas que ves cuando apartas la vista de tu objetivo.` -Henry Ford ")
} else {
    alert("ingresaste un valor diferente a un dia de la semana")
}

// octavo ejercicio

let calif = parseInt(prompt("Por favor ingrese una calificacion entre 1 y 10: "))

if (calif <1) {
  alert("Por favor ingrese valor entre 1 y 10");
} else if (calif <6){
  alert("Reprobado");
} else if (calif <= 8){
  alert("regular");
} else if (calif == 9){
  alert("bien" );
} else if (calif == 10){
  alert("excelente");
} else {
  alert("Por favor ingrese valor entre 1 y 10");
}

// noveno ejercicio 

let toping = parseInt(prompt("Por favor selectione el numero del toping deseado para conocer el valor final de su compra : 1  sin topings / 2  toping Oreo / 3  toping kitkat / 4  toping brownie / 5  galleta")) 

if (toping == 1){
    alert("el valor final de su helado sin toping es 50 MXN");
} else if (toping == 2){
    alert("el valor final de su helado con toping Oreo es 60 MXN ");
}  else if (toping == 3){
    alert("el valor final de su helado con toping Kitkat es 65 MXN ");
} else if (toping == 4){
    alert("el valor final de su helado con toping Brownie es 70 MXN ");
} else if (toping == 5){
    alert("No tenemos este toping, lo sentimos; el valor final de su helado sin toping es 50 MXN ");
} else {
    alert("Por favor intentelo nuevamente seleccione el numero con el toping deseado.")
}

// dicimo ejercicio

let programa = parseInt(prompt("Por favor ingrese numero del programa educativo: 1 - Course / 2 - Carrera / 3 - Master"))
let descuento = parseInt(prompt("Por favor ingrese numero del descuento a aplicar: 1 - Beca Facebook / 2 - Beca Google / 3 - Beca Jesua / 4 - ninguno"))

if ((programa == 1) && (descuento == 1)){
    alert("el valor a pagar mensual es $" + Math.trunc(4999 * 0.80) + " MX el valor total a pagar es $" + Math.trunc((4999 * 0.80) * 2) + " MX");
} else if ((programa == 1) && (descuento == 2)){
    alert("el valor a pagar mensual es $" + Math.trunc(4999 * 0.85) + " MX el valor total a pagar es $" + (Math.trunc(4999 * 0.85) * 2) + " MX");
} else if ((programa == 1) && (descuento == 3)){
    alert("el valor a pagar mensual es $" + Math.trunc(4999 * 0.50) + " MX el valor total a pagar es $" + (Math.trunc(4999 * 0.50) * 2) + " MX");
} else if ((programa == 1) && (descuento == 4)){
    alert("el valor a pagar mensual es $" + (4999) + " MX el valor total a pagar es $" + ((4999) * 2) + " MX");
} else if ((programa == 2) && (descuento == 1)){
    alert("el valor a pagar mensual es $" + Math.trunc(3999 * 0.80) + " MX el valor total a pagar es $" + Math.trunc((3999 * 0.80) * 6) + " MX");
} else if ((programa == 2) && (descuento == 2)){
    alert("el valor a pagar mensual es $" + Math.trunc(3999 * 0.85) + " MX el valor total a pagar es $" + (Math.trunc(3999 * 0.85) * 6) + " MX");
} else if ((programa == 2) && (descuento == 3)){
    alert("el valor a pagar mensual es $" + Math.trunc(3999 * 0.50) + " MX el valor total a pagar es $" + (Math.trunc(3999 * 0.50) * 6) + " MX");
} else if ((programa == 2) && (descuento == 4)){
    alert("el valor a pagar mensual es $" + (3999) + " MX el valor total a pagar es $" + ((3999) * 6) + " MX");
} else if ((programa == 3) && (descuento == 1)){
    alert("el valor a pagar mensual es $" + Math.trunc(2999 * 0.80) + " MX el valor total a pagar es $" + Math.trunc((2999 * 0.80) * 12) + " MX");
} else if ((programa == 3) && (descuento == 2)){
    alert("el valor a pagar mensual es $" + Math.trunc(2999 * 0.85) + " MX el valor total a pagar es $" + (Math.trunc(2999 * 0.85) * 12) + " MX");
} else if ((programa == 3) && (descuento == 3)){
    alert("el valor a pagar mensual es $" + Math.trunc(2999 * 0.50) + "MX el valor total a pagar es $" + (Math.trunc(2999 * 0.50) * 12) + " MX");
} else if ((programa == 3) && (descuento == 4)){
    alert("el valor a pagar mensual es $" + (2999) + " MX el valor total a pagar es $" + ((2999) * 12) + " MX");
} else {
    alert("porfavor seleccione opciones validas")
}

// undecimo ejercicio 

let vehiculo = parseInt(prompt("Por favor ingrese el tipo de vehiculo: 1 - coche / 2 - moto / 3 - autobus"))
let litro = parseInt(prompt("Por favor ingrese la cantidad de litros"))

if ((vehiculo == 1) && ((litro <= 100))){
alert("El valor total al pagar es $" + ((litro * 0.20) + 5) + " MX");
} else if ((vehiculo == 1) && ((litro > 100))){
    alert("El valor total al pagar es $" + ((litro * 0.20) + 10) + " MX");
} else if ((vehiculo == 2) && ((litro <= 100))){
    alert("El valor total al pagar es $" + ((litro * 0.10) + 5) + " MX");
} else if ((vehiculo == 2) && ((litro > 100))){
    alert("El valor total al pagar es $" + ((litro * 0.10) + 10) + " MX");
} else if ((vehiculo == 3) && ((litro <= 100))){
    alert("El valor total al pagar es $" + ((litro * 0.5) + 5) + " MX");
} else if ((vehiculo == 3) && ((litro > 100))){
    alert("El valor total al pagar es $" + ((litro * 0.5) + 10) + " MX");
} else {
    alert("por favor ingrese un valor valido")
}
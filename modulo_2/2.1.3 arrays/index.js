// primer punto  - Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let array1 = []


function numeroazar(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 10; i++) {
  array1.push(numeroazar(1, 10));
}

console.log(array1);



// segundo punto - El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

let string1 = prompt("Porfavor ingrese un string y separe los valores con comas (,): ");

console.log(string1);

let array2 = string1.split(',');

console.log(array2);

// De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

let array3 = [10, 40, 30, 20, 15, 5];

console.log("Array base: " + array3);

function ordenararray3(a, b) {
  return a - b;
}

console.log("Array ordenado " + array3.sort(ordenararray3));

var max = Math.max(...array3);

var min = Math.min(...array3);

console.log("Mayor numero: " + max);

console.log("Menor numero: " + min);
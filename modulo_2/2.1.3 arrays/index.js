// primer punto  - Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

var array1 = []


function numeroazar() {
  parseInt(Math.random()*10);
}

for (let i = 0; i < 10; i++) {
  array1.push(numeroazar(0, 10));
}

console.log(array1);

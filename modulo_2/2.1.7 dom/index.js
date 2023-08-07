let productosVendidos = document.querySelector(".productosVendidos");
let sumaDinero = document.querySelector(".sumaDinero");
let empleadoMes = document.querySelector(".empleadoMes");


let opcion, producto1, producto2, producto3, producto4;


let datosEmpleado1 = [], datosEmpleado2 = [], total1 = 0, total2 = 0, suma1 = 0, suma2 = 0;


function guardar() {
    if (opcion == "opcion1") {
        datosEmpleado1 = [producto1, producto2, producto3, producto4];
    } else if (opcion == 'opcion2') {
        datosEmpleado2 = [producto1, producto2, producto3, producto4];
    }
}

function cantidadProductosVendidos() {
    if (opcion == "opcion1") {
        total1 = 0;
        for (let i of datosEmpleado1) total1 += i;
    } else if (opcion == "opcion2") {
        total2 = 0;
        for (let i of datosEmpleado2) total2 += i;
    }
    productosVendidos.innerHTML = "Juana Vendio: " + total1 + " productos y Pedro: " + total2 + " productos";
}

function sumaTotalDinero() {
    suma1 = (datosEmpleado1[0] * 200) + (datosEmpleado1[1] * 180) + (datosEmpleado1[2] * 160) + (datosEmpleado1[3] * 150);

    suma2 = (datosEmpleado2[0] * 200) + (datosEmpleado2[1] * 180) + (datosEmpleado2[2] * 160) + (datosEmpleado2[3] * 150);

    sumaDinero.innerHTML = "Juana Vendio: " + suma1 + " USD y Pedro: " + suma2 + " USD";

    if (suma1 > suma2) {
        empleadoMes.innerHTML = "El empleado del mes por mayoria de ventas es Juana";
    } else if (suma1 < suma2) {
        empleadoMes.innerHTML = "El empleado del mes por mayoria de ventas es Pedro";
    } else if (suma1 === suma2) {
        empleadoMes.innerHTML = "Ambos vendieron lo mismo";
    }
}


function handleSubmit(event) {
    event.preventDefault();

    opcion = document.getElementById("opcion").value;

    producto1 = parseInt(document.getElementById("producto1").value);
    producto2 = parseInt(document.getElementById("producto2").value);
    producto3 = parseInt(document.getElementById("producto3").value);
    producto4 = parseInt(document.getElementById("producto4").value);

    guardar();
    cantidadProductosVendidos();
    sumaTotalDinero();

    producto1 = document.getElementById("producto1"); producto1.value = "";
    producto2 = document.getElementById("producto2"); producto2.value = "";
    producto3 = document.getElementById("producto3"); producto3.value = "";
    producto4 = document.getElementById("producto4"); producto4.value = "";
}

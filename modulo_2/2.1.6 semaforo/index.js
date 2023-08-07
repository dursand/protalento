let tiempo = 0;
let stop = true;

let rojo = document.getElementById("rojo");
let amarillo = document.getElementById("amarillo");
let verde = document.getElementById("verde");


function parar() {
    stop = false;
    console.log("terminar");
}

function prenderLuz() {
    tiempo++;
    if (tiempo === 1) {
        rojo.classList.add("rojo");
        amarillo.classList.remove("amarillo");
        verde.classList.remove("verde");

    } else if (tiempo === 2) {
        amarillo.classList.add("amarillo");
        rojo.classList.remove("rojo");
        verde.classList.remove("verde");

    } else if (tiempo === 3) {
        verde.classList.add("verde");
        rojo.classList.remove("rojo");
        amarillo.classList.remove("amarillo");

    }
    if (tiempo >= 3) {
        tiempo = 0;
    }
}

setInterval(() => {
    if (stop) {
        prenderLuz();
    }
}, 1000);
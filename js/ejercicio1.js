document.write(`Ejercicio 1: Calcular el área de un rectángulo: Pide al usuario la base y la altura de un rectángulo, y
muestra el área en la consola. En centímetros.`);

function obtenerValoresXY() {
    const x = +prompt("Ingresa la base del triángulo (cm):");
    const y = +prompt("Ingresa la altura del triángulo (cm):");
    calcularAreaTriangulo(x, y);
}

function calcularAreaTriangulo(base, altura) {
    console.log(`El área del triángulo con base ${base}cm y altura ${altura}cm es ${base*altura}cm^2.`);
}
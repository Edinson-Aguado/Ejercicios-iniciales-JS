document.write(`Ejercicio 3: Solicita al usuario dos números y una operación (+, -, *, /) usando prompt. Muestra el
resultado de la operación en un alert.`);

alert("La operación se hará en el orden siguiente: El primero y luego el segundo, para considerar la división.");
const numero1 = +prompt("Ingresa el primer número:");
const numero2 = +prompt("Ingresa el segundo número:");
const operacion = prompt("Ingresa la operación (+, -, *, /):");

if (operacion === '+') {
    alert(`La suma es: ${numero1+numero2}.`);
} else if (operacion === '-') {
    alert(`La resta es: ${numero1-numero2}.`);
} else if (operacion === '*') {
    alert(`El producto es: ${numero1*numero2}.`);
} else if (operacion === '/') {
    if (numero2 !== 0) {
        alert(`La división es: ${numero1/numero2}.`);
    } else {
        alert(`No se puede dividir por 0.`);
    }
} else {
    alert(`¡Operación incorrecta!`);
}
document.write(`Ejercicio 5: Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas.
Muestra el resultado en un alert.`);

const minutos = parseFloat(prompt("Ingrese un numero para representar en minutos. (Positivo, porque el tiempo es positivo)."));

const segundos = 60;
const horas = 60;
if (minutos > 0) {
    alert(`Minutos: ${minutos}. En segundos: ${minutos*segundos}s. En horas ${minutos/horas} hs.`);
} else {
    alert("Número negativo. Ingrese un número positivo.");
}

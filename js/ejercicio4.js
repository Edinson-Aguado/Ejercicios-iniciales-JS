document.write(`Ejercicio 4: Pide al usuario dos valores y muestra cómo se intercambian entre sí. Por ejemplo, si ingresa
a=5 y b=10, el resultado será a=10 y b=5. Los resultados se deben mostrar con un document.write donde se muestre 
si el user ingreso a=5 y b=10:
    a = 10
    b = 5`);

function isValid(a, b) {
    if (a === '') {
        return false;
    } else if (b === ''){
        return false;
    } else if (a === null) {
        return false;
    } else if (b === null){
        return false;
    } else {
        return true;
    }
    // No se cuales son los operadores de concatenación y disyunción.
}

let valor1 = +prompt("Ingrese el primer valor para a:");
let valor2 = +prompt("Ingrese el segundo valor para b:");
if (isValid(valor1, valor2)) {
    alert(`a = ${valor1}. b = ${valor2}. Acontinuación se intercambiarán los valores.`);
    let aux = valor1;
    valor1 = valor2;
    valor2 = aux;
    alert(`a = ${valor1}. b = ${valor2}.`);
} else {
    alert("No se ingresaron correctamente los datos.");
}

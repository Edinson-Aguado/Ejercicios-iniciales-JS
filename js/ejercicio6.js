document.write(`Ejercicio 6: Calcular el IVA de un producto. Solicita al usuario el precio de un producto 
en dolares y su precio final a pesos (1dolar = $1130), además tenemos que sumarle el IVA 
(21%). Muestra el precio total en un alert.`);

const precioDolares = +prompt("Ingrese precio del producto en dólares. Positivo.");
if (precioDolares > 0) {
    const precioPesos = precioDolares*1130;
    const precioFinalPesos = precioPesos + (precioPesos*0.21);
    alert(`Precio en pesos: ${precioPesos} ARS. Precio final con el IVA (21%) agregado: ${precioFinalPesos} ARS.`);
} else {
    alert("Dato incrrecto, el valor debe de ser mayor a 0.");
}



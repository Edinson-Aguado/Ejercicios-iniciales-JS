document.write(`Ejercicio 8: Tu lista de compras. Crea un array llamado listaDeCompras con cinco cosas que comprarías en tu próxima
visita al supermercado. Muestra cada elemento del array en la consola.
`);

const listaDeCompras = ["Carne", "Harina", "Huevos", "Vegetales", "Vino"];

for (let compra of listaDeCompras) {
    console.log(`${listaDeCompras.indexOf(compra)+1}- ${compra}.`);
}
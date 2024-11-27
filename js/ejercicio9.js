document.write(`Ejercicio 9: Películas o series para ver. Define un array miListaDePendientes 
con títulos de cuatro películas o series que quieres ver.

• Usa el método push para agregar una quitan película.
• Modifica el nombre de la 2da película del array por una nueva.
• Muestra el array actualizado por consola.`);

const miListaDePendientes = ["Yo antes de ti", "La ley de los audaces", "Interestelar", "Vikingos"] // Borrenme la memoria para volver a ver Vikingos.

// Usar el método push para agregar una película.

miListaDePendientes.push("Mujercitas");

// Modificar el nombre de la 2da película del array por una nueva.

miListaDePendientes[1] = "Peaky Blinders";

// Muestra el array actualizado por consola.

console.log(miListaDePendientes);

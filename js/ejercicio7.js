document.write(`Ejercicio 7: Define un objeto auto donde se especifiquen al menos 6 propiedades que lo conformen, si
se les ocurren más propiedades del número solicitado colocarlas. Mostrar el resultado en
un console log. Hacer un document.write para mostrar un mensaje dinámico en base a 2
propiedades que hayan elegido, ejemplo:

document.write('El auto objeto.propiedad1 es uno de los autos más potentes en el
mercado alcanzando una velocidad de object.propiedad2 por hora!')
<br>
`);

const ferrariF80 = {
    modelo: "F80",             // Modelo específico del auto.
    fabricante: "Ferrari",     // Marca del fabricante \(°-°)/ 
    velocidadMaxima: 500,      // Velocidad máxima en km/h.
    potencia: 1200,            // Potencia en caballos de fuerza (HP).
    tipoMotor: "Híbrido",      // Tipo de motor (híbrido: gasolina + eléctrico).
    peso: 800,                 // Peso del auto en kilogramos.
    autonomia: 150,            // Autonomía estimada en kilómetros (modo eléctrico).
    aceleracion: 2.2,          // Tiempo en segundos para ir de 0 a 100 km/h.
    precio: 2800000,           // Precio estimado en dólares.
    añoFabricacion: 2024       // Año en que se lanzó o planeó el modelo.
}

console.log(ferrariF80);

document.write(`<hr>
    <h3>DATOS DEL AUTO</h3>
    Aceleracion: ${ferrariF80.aceleracion}. <br>
    Autonomía: ${ferrariF80.autonomia}. <br>
    Año fabricación: ${ferrariF80.añoFabricacion}. <br>
    Fabricante: ${ferrariF80.fabricante}. <br>
    Modelo: ${ferrariF80.modelo}. <br>
    Peso: ${ferrariF80.peso}. <br>
    Potencia: ${ferrariF80.potencia}. <br>
    Precio: ${ferrariF80.precio}. <br>
    Tipo motor: ${ferrariF80.tipoMotor}. <br>
    Velocidad máxima: ${ferrariF80.velocidadMaxima}. <br>
`);

const mensaje = `El ${ferrariF80.fabricante} ${ferrariF80.modelo} es un superdeportivo con una velocidad máxima de ${ferrariF80.velocidadMaxima} km/h, impulsado por un motor ${ferrariF80.tipoMotor}. Su precio estimado es de ${ferrariF80.precio.toLocaleString()} USD.`;

document.write("<hr><br><br>", mensaje);
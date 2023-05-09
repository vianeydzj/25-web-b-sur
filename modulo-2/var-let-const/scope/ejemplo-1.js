//Anbito global

// Caindo usamos "var", estas variables tienen un alcance global y pjeden ser accedidas y mosificadas desde cualquier parte del documento 

//cuando usamos let, creamos variables que pueden ser accedicdas de forma global y local haciendo una deferenciación 

let nombre = "Vianey"

if (true){
    //cuando usamos una estructura con llaves, se genera un alcance propio
    let nombre = "Enrique"
    console.log("Alcance local " +nombre)
}

console.log("Alcance global " +nombre);
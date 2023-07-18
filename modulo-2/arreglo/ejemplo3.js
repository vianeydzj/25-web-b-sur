//Un arreglo es conocido como una referencia 

const frutas =["Uva","Manzana","Pera"];
console.log(frutas[1]);

frutas[1]= "piña";

//SI MODIFICAS UNA PROPIEDAD, SE VA A MODIFICAR EN EL ARREGLO ANTERIOR

console.log(frutas[1]);
console.log("Arreglo despues de modificarlo", frutas);
//SQUARE BRAKECTS

const litaAleatoria = ["Hola, mundo",23, [2.3,1.4,1.6], true, null]

console.log(litaAleatoria[2]);

//SI QUIERO ACCEDER AL VALOR DE UN ELEMENTO EN PARTICULAR, TENGO QUE ESCOGERLO DE ACUERDO A SU POSICIÓN Y CON AYUDA DE LA NOTACIÓN DE CORCHETES CUADRADOS O SQUARE BREAKET NOTATION


//1.leer un arreglo de enteros, sacar media y promedio

const enteros= [2,3,5,6,12,22,30,32]

let promedio = (enteros) =>{
    
let sumaTotal=0;

for (let i = 0; i < enteros.length; i++) {
    sumaTotal+=enteros[i];
    
}
return sumaTotal/enteros.length;
}

console.log(promedio(enteros)); 

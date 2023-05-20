//LEER NODOS 

let parrafo = document.getElementById("parrafo");

let segundoParrafo = document.getElementsByClassName("segundo-parrafo");

let todosLosSpan = document.getElementsByTagName("span");

console.log("primer parrafo", parrafo);

console.log("segundo parrafo", segundoParrafo);

console.log("todos los span", todosLosSpan);

// forma de leer nodos, mas generalista y poderosa, tambien gasta mas recursos/ no suele ser relevante 

//SELECCINA EL PRIMER ELEMENTO DE SU TIPO QUE ENCUENTRE 
let titulo = document.querySelector(".titulo");

//SELECCIONA TODOS LOS ELEMENTOS DE SU TIPO QUE ENCUENTRA
//Y LOS ELEMENTOS EN ALGO LLAMADO LA NodeList, que no es un arreglo pero se puede convertir en uno
let todosLosTitulos = document.querySelector(".titulo");
console.log("accediendo a todos los elementos de la clase .titulo",todosLosTitulos);


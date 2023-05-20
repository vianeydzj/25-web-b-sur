//ESTOY LEYENDO UN NODO DE HTML Y ALMACENANDOLO EN UNA VARIABLE

let texto= document.getElementById("texto")
let parrafo = document.getElementById("parrafo");
let boton = document.getElementById("boton");

function imprimirTextoEnElDocumento() {

//let textoConvertidoEnNumero = parseFloat(texto.value); 

parrafo.textContent = texto.value; 
parrafo.style.color = "blue";
parrafo.style.backgroundColor = "red";
parrafo.style.fontSize = "35px";

};

    boton.addEventListener("click",function(){
        imprimirTextoEnElDocumento();
    })
 
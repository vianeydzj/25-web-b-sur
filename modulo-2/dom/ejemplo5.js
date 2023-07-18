let nombre = document.getElementById("nombre");

nombre.addEventListener("input",function(e){
    console.log(e.target.value);

})

let titulo = document.getElementById("titulo");

titulo.addEventListener("mouseover",function(){
 //console.log("lista de clase", titulo.classList);

 titulo.classList.remove("texto-azul");
 titulo.classList.add("texto-rojo");

})

titulo.addEventListener("mouseout",function(){
    titulo.classList.add("texto-azul");
    titulo.classList.remove("texto-rojo");
})
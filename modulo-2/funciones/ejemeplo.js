
//1 DECLARAMOS LA FUNCION 

function saludar() {
    return "Hola Mundo"
}

2// EJECUTAMOS LA FUNCION 

console.log(saludar());

//PIDO PARAMETROS 

function SunaDosNumeros(primerNumero, SegundoNumero) {
    let resultadoDeLaSumaDeDosNumeros = primerNumero + SegundoNumero;
    //return resultadoDeLaSumaDeDosNumeros;

    // OTRA FOME DE HACERLO MAS DIRECTO
    return primerNumero + SegundoNumero;
    
}
//RESIBEN ARGUMENTOS 
console.log(SunaDosNumeros(3,18))
console.log(SunaDosNumeros(10,18))
//LA FUNCION FLECHA, NOS DA UNA SINTAXIS MAS LIMPIA Y FACIL DE LEER 

//SE ALMACENA EN CONSTANTES O VARIABLES 

//EN LAS FUNCIONES FLECHA, NO EXISTE EL OBJETO THIS, POR LO TANTO NO PUEDEN SER USADAS PARA CREAR PROTOTIPOS

const saludar = () => {
    return "Hola mundo";
}; 

console.log(saludar()); 

//SHORT ARROW FUNTION / FUNCION CORTA DE FLECHA 
// REGLAS DE SINTAXIS EN ARROW FUNTIONS 
// SI MI FUCION SOLO RETORMNA UN VALOR, PUEDO QUITAR EN RETURN EXPLICITO , LOS PARENTESIS, las llaves Y HACER USO DEL RETURN IMPICITO 

const SunaDosNumeros = (primerNumero, segundoNumero) => primerNumero + segundoNumero;
console.log(SunaDosNumeros(5,78));

//SHORT ARROW FUNTION CON UN PARAMETRO 
//SI TIENES SOLO UN PARAMETRO, LE PUEDES QUITAR LOS PARENTESIS

const saludar2= personaASaludar => `Hola` ${personaASaludar}

console.log(saludar2("Arturo")); 
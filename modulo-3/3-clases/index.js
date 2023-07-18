//se genera una clase llamada perro con atributos y metodo
class Perro{
    constructor(peso,color,raza){
        this.peso = peso;
        this.color = color;
        this.patas = 4;
        this.raza = raza;
    }

    ladrar(){
        return 'waau'
    }
}

//instancia Perro
// generar un objeto a partir de la clase

// const chilaquil = new Perro('28', 'cafe','Husky');
// console.log(chilaquil);
// console.log(chilaquil.ladrar())


//se genera una clase llamada persona 
class Persona{
    constructor(nombre,edad,RFC,sexo,peso,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.RFC = RFC;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura; 
    }

    calcularIMC(){
        
    }

    esMayorDeEdad(){


    }
}
// instancia persona 
const personaUno = new Persona('Arturo',25,'ARTY6152','Maculino','75kg','1.70cm')
console.log(personaUno)

class Cuenta{
    constructor(titular,saldoAtual,retiro){
        this.titular = personaUno.nombre
        this.saldoAtual = saldoAtual 
        this.retiro = retiro
    }
}

// instanciar cuenta

const cuentaUno = new Cuenta(personaUno,'$500','$300')
console.log(cuentaUno)
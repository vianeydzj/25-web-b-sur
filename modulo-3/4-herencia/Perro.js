const Animal = require('./Animal')

class Perro extends Animal {
    constructor(nombre,edad,raza){
        super(nombre)
        this.edad = edad
        // this.patas = 4
        // this.raza = raza
    }
    ladrar(){
        return 'wuaauu wuaauu'
    }
}

module.exports = Perro;

const Animal = require('./Animal');

class Gato extends Animal {
    constructor(nombre, edad, color,patas,orejas){
        super(nombre)
        this.pulgas = pulgas
        this.edad = edad
        this.color = color
        this.patas = 4
        this.orejas = true
    }
    ronronear(){
        return 'rrrrrrr'

    }
}
module.exports = Gato;
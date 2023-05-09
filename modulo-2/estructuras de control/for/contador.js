
// del 1 al 20 cuantos numeros son pares?

var contador = 0;


for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        contador = contador +1
        console.log(`${i} es par`);
        
    }
    
}
console.log(`del 0 al 10, existen ${contador} numeros que son pares `);
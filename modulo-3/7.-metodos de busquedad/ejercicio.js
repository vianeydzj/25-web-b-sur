// Ejercicios de Búsqueda (Secuencial y Binaria)
// 1 .- Crear una función que encuentre el número más repetido en un array
// Ejemplo Input - [3,6,1,8,2,3,6,3,2,5,6]
// Salida -> 6


function linearSearch(element,array) {
    let found = false;
    let p = -1;
    let index = 0;

    while(!found && index < array.length){
        if (array[index] == element) {
            found = true
            p = index;
            element +=1;

        }
        else{
            index +=1; 
        }
    }
    return p 
}

console.log(linearSearch(r,[3,6,1,8,2,3,6,3,2,5,6]));


// 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
// Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
// Salida → [‘e’,‘a’,‘d’,‘f’]


// 3.- Crear una función que busque el número más grande en un arreglo
// Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
// Salida -> 12


// 4.- Crear una función que busque el número más pequeño en el arreglo
// Ej. [1,4,5,-1,-7,2,3,9]
// Salida -->  -7


// 5.- Crear una clase llamada  Contacto con los siguientes datos
// Nombre 
// Apellidos
// Telefono


// Después crear una clase que sea ListaContactos la cual tendrá dos métodos
// Agregar un contacto
// Buscar un contacto por nombre


// Prueba que tus clases funcionen correctamente.

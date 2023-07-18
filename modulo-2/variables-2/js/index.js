// 1.Datos de entrada
//Nombre,apellido, año de nacimiento,año actual, por medio de divición obtener la edad. 

var nombre;
var apellido;
var añoNacimiento;
var añoActual;
var edad;

//2.Que tengo que hacer con los datos

 nombre=prompt('Por favor ingresa tu nombre:');
 apellido=prompt('Ingrese su apellido');
 añoNacimiento= Number(prompt('Ingrese su año de nacimiento'));
 añoActual= Number(prompt('Ingrese el año actual'));

edad=añoActual-añoNacimiento;

//3.Como y que debo mostrar al usuario

/*document.write(nombre)
document.write(apellido)
document.write(edad)*/

alert(`${nombre} ${apellido}, tu edad actual es: ${edad}`);


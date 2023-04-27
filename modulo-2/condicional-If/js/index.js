var nombreCompleto, añoNacimiento, añoActual, edad, msg, CantidadCaracteres;

//Datos 

nombreCompleto=prompt('Por favor ingresa tu nombre:');
añoNacimiento= Number(prompt('Ingrese su año de nacimiento'));
añoActual= Number(prompt('Ingrese el año actual'));

//Proceso logico

edad= añoActual-añoNacimiento;

if(nombreCompleto== "" || añoActual==0 || añoNacimiento==0){
   msg='Te hacen falta datos';
}
else if(añoNacimiento>añoActual){
    msg='Cuidado, el año de Nacimiento no puede ser mayor al actual';
}
else{
    if(edad<=11){
        msg=`Hola ${nombreCompleto} tu eres un niño aún`;
    }
    else if (edad>13 && edad< 18){
        msg=`Hola ${nombreCompleto} eres un adolescente`;
    }
    else if (edad>=18 && edad< 65){
        msg=`Hola ${nombreCompleto} eres un adulto`;
    }
    else{
        msg=`Hola ${nombreCompleto} tu eres un adulto mayor`;
    }

}


//Resultado / salida de datos 

alert(msg);
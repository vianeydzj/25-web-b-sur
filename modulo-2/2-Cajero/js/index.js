

var cuentas =[
    {nombre: "Mali",saldo: 200,password: 'helloworld'},
    {nombre: "Gera",saldo: 290,password: '133t'},
    {nombre: "Maui",saldo: 67,password: '123'}
];

//funcion para validar datos e ingresar a la pagina de inicio
function login() {
nombre = document.getElementById("nombre").value;
password = document.getElementById("password").value;

    if (nombre == "Mali" && password == 'helloworld') {      
        window.location.replace("inicio-Mali.html"); 
        
} else if (nombre == "Gera" && password == '133t') {
    window.location.replace("inicio-Gera.html"); 

} else if (nombre == "Maui" && password == '123') {
    window.location.replace("incio-Maui.html");
}else {
     alert("Datos incorrectos");
}
}

//Funciones para retirar y depositar cantidades con la condicion de que el saldo actual desbe ser mayor a 10 y menor a 990

function ingresarMonto() {
  var cantidad=parseInt(document.getElementById("cant").value);
  var cantidad1=parseInt(document.getElementById("cantI").value);

  if (cantidad <= 990 ) {
    document.getElementById("cant").value=(cantidad + cantidad1);
  }else{ 
    alert("Saldo no valido, ingrese otra cantidad");
   
  }  
}

function retirarMonto() {
  var cantidad=parseInt(document.getElementById("cant").value);
  var cantidad2=parseInt(document.getElementById("cantR").value);
  if (cantidad >= 10 ) {
    document.getElementById("cant").value=(cantidad - cantidad2);
  }else{ 
    alert("Saldo no valido, ingrese otra cantidad");
  }  
  }






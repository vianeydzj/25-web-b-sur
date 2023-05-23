

var cuentas =[
    {nombre: "Mali",saldo: 200,password: 'helloworld'},
    {nombre: "Gera",saldo: 290,password: '133t'},
    {nombre: "Maui",saldo: 67,password: '123'}
];

//funcion para validar dator e ingresar a la pagina de inicio
function login() {
nombre = document.getElementById("nombre").value;
password = document.getElementById("password").value;

    if (nombre == "Mali" && password == 'helloworld') {      
        window.location= "2-Cajero\inicio-Mali.html";  
} else if (nombre == "Gera" && password == '133t') {
    

} else if (nombre == "Maui" && password == '123') {
    
}else {
     alert("Datos incorrectos");
}

}

function consultarMonto() {
 if (condition) {
    
 }
}



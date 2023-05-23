

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





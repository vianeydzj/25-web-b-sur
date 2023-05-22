var cuentas =[
    {nombre: "Mali",saldo: 200,password: 'helloworld'},
    {nombre: "Gera",saldo: 290,password: '133t'},
    {nombre: "Maui",saldo: 67,password: '123'}
];


function login() {
nombre = document.getElementById("nombre").value;
password = document.getElementById("password").value;

    if (nombre == "Mali" && password == 'helloworld') {      
        window.location = "inicio.html" 
        aler
} else if (nombre == "Gera" && password == '133t') {
    window.location = "inicio.html";
} else if (nombre == "Maui" && password == '123') {
    window.location = "inicio.html";
} else {
    alert("Datos incorrectos");
}
}


var cuentas =[
    {nombre: "Mali",saldo: 200,password: 'helloworld'},
    {nombre: "Gera",saldo: 290,password: '133t'},
    {nombre: "Maui",saldo: 67,password: '123'}
];

nombre = document.getElementById("nombre").value;
    password = document.getElementById("password").value;

function login() {
    if (nombre == "Mali" && password == "helloworld") {      
        alert("si");
}else {
    alert("Datos incorrectos");
}
}
const express = require('express');
const bodyParser = require ('body-parser') 
const app = express();
const port = 3000

//configuracion para recibir el body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send({message:'Esto es una peticición'});
})

app.get('/Home/', (req,res) =>{
    res.json({message:'Bienvenido a la App'});
})

//params 
//http // LocalHost:3000/user/1215 
app.get('/user/uid',(req,res) =>{
    console.log(req.params);
    const uid = req.params.uid
    res.send({message: `El id buscado: ${uid}`})
})

app.listen(port, () =>{
    console.log(`escuchando desde el puerto ${port}`)
})
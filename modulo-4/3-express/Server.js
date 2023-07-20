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
//haciendo una peticion utilizando variables y json
//http://localhost:3000/search?q=gato&color=azul&vidas=9  
app.get('/search',(req,res) =>{
 console.log(req.query);
 const {q,color,vidas} =req.query
 res.send ({q,color,vidas}) 
})

app.post('/create/user',(req,res) =>{
    console.log(req.boby);
    const{name,email,age,is_active} = req.body 
    res.status (201).send ({
        id:'10',
        name,
        email,
        age,
        is_active 
    });
});

app.get('/')

app.listen(port, () =>{
    console.log(`escuchando desde el puerto ${port}`)
})
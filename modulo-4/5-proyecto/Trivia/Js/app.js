const dif = document.getElementById("dif") //Variable que se usará para obtener y posteriormente guardar el valor del comboBox (Select) "Dificultad"
const tipo = document.getElementById("tipo") //Variable que se usará para obtener y posteriormente guardar el valor del comboBox (Select) "Tipo de respuesta"
const cat = document.getElementById("cat") //Variable que se usará para obtener y posteriormente guardar el valor del comboBox (Select) "Categoria"
const form = document.getElementById("form") //Variable para asignarle el formulario y ocultarlo depuúes de haber presionado el botón,
const trivia = document.getElementById("trivia") //Variable para obetneer en donde se colocaran los datos del comboBox "Categoria"

var urlQuiz; //Variable global en la que se le asignará el url del quiz para ser creado
var preguntas; //Aquí se guardarán las preguntas obtenidas por la consulta a a la api
var ban; //Bandera axiliar para determinar si hay un quiz empezado o no.
var cont; //Contador para llevar el conteo de las preguntas
var puntaje = 0; //Aquí se asignará el puntaje obtenido en las preguntas

//---------------------------------------------------------- Consultas a la API ---------------------------------------------------------------------------------------//

/* Recuperar categorias */
const categorias = {
    render: () => {
        const urlApi = 'https://opentdb.com/api_category.php';
        const container = document.querySelector('#cat');
        let contentHTML = '';

        fetch(urlApi)
            .then(res => res.json())
            .then((json) => {
                // console.log(json.trivia_categories)
                for (const category of json.trivia_categories) {
                    // console.log(category.name);
                    contentHTML += `
                    <option value="${category.id}">${category.name}</option>
                    `;
                }
                container.innerHTML = contentHTML;
            })
    }
};
categorias.render();

/* Crear un quiz de opción múltiple*/
const quiz1 = {
    render: () => {
        const urlApi = urlQuiz;
        const container = document.querySelector('#trivia');
        let contentHTML = '';

        fetch(urlApi)
            .then(res => res.json())
            .then((json) => {
                if (!ban) { //Si ban = false, se asigna el 0 contador, porque siginifica que se acaba de iniciar un quiz nuevo
                    cont = 0;
                    ban = true;
                    puntaje = 0;
                }
                preguntas = json.results;
                console.log(preguntas)

                contentHTML += `
                <h1 id="noPregunta">Pregunta ${cont + 1}</h1>
                <h4 id="pregunta">${preguntas[cont].question}</h4>
                <form action="">
                    <div class="opcion">
                        <button  id="correcta" onclick="return respuestaOM(event);">${preguntas[cont].correct_answer}</button>
                    </div>
                    <div class="opcion">
                        <button  id="incorrecta1" onclick="return respuestaOM(event);">${preguntas[cont].incorrect_answers[0]}</button>
                    </div>
                    <div class="opcion">
                        <button  id="incorrecta2" onclick="return respuestaOM(event);">${preguntas[cont].incorrect_answers[1]}</button>
                    </div>
                    <div class="opcion">
                        <button  id="incorrecta3" onclick="return respuestaOM(event);">${preguntas[cont].incorrect_answers[2]}</button>
                    </div>
                    <input id="siguiente" type="button" disabled onclick="return siguientePreguntaOM()"; value="Siguiente">
                </form>
                `;
                container.innerHTML = contentHTML;
            })
    }
};

/* Crear un quiz de True or False*/
const quiz2 = {
    render: () => {
        let urlApi = urlQuiz;
        const container = document.querySelector('#trivia');
        let contentHTML = '';

        fetch(urlApi)
            .then(res => res.json())
            .then((json) => {
                if (!ban) { //Si ban = false, se asigna el 0 contador, porque siginifica que se acaba de iniciar un quiz nuevo
                    cont = 0;
                    ban = true;
                    puntaje = 0;
                }
                preguntas = json.results;
                console.log(preguntas)

                contentHTML += `
                <h1 id="noPregunta">Pregunta ${cont + 1}</h1>
                <h4 id="pregunta">${preguntas[cont].question}</h4>
                <form action="">
                    <div class="opcion">
                        <button id="correcta" onclick="return respuestaTF(event);">${preguntas[cont].correct_answer}</button>
                    </div>
                    <div class="opcion">
                        <button id="incorrecta1" onclick="return respuestaTF(event);">${preguntas[cont].incorrect_answers[0]}</button>
                    </div>
                    <input id="siguiente" type="button" disabled onclick="return siguientePreguntaTF();" value="Siguiente">
                </form>
                `;
                container.innerHTML = contentHTML;
            })
    }
};


//----------------------------------------------------------------------Funciones de botones---------------------------------------------------------------------------//
//---------------- Crea la trivia ---------------\\
function crearTrivia() {
    ban = false;
    urlQuiz = `https://opentdb.com/api.php?amount=10&category=${cat.value}&difficulty=${dif.value}&type=${tipo.value}`;
    console.log(urlQuiz);
    if (tipo.value == "multiple") {
        console.log(tipo.value)
        quiz1.render();
    } else {
        console.log(tipo.value)
        quiz2.render();
    }

    /* Ocultar el formulario */
    form.style.display = "none";
    trivia.style.display = "block";
    return false;
}

//---------------- Funcion para elegir una respuesta de opción múltiple ----------------\\
function respuestaOM(event) {
    // Obtener el ID del botón que fue presionado
    var idBotonPresionado = event.target.id;
    //Obtener el elemento mediante el id para poder modificarlo
    var boton = document.getElementById(idBotonPresionado);

    // Llamar a la función correspondiente según el ID
    if (idBotonPresionado == "correcta") {
        console.log("Respuesta correcta");
        boton.style.backgroundColor = "rgb(33, 231, 19)";
        puntaje += 100;
    } else {
        console.log("Respuesta incorrecta");
        boton.style.backgroundColor = "#a90808";
    }
    //Bloquear todos los botones después de seleccionar una respuesta
    document.getElementById("correcta").style.opacity = "0.6";
    document.getElementById("correcta").style.cursor = "not-allowed";
    document.getElementById("correcta").disabled = true;
    for (let i = 1; i < 4; i++) {
        document.getElementById(`incorrecta${i}`).style.opacity = "0.6";
        document.getElementById(`incorrecta${i}`).style.cursor = "not-allowed";
        document.getElementById(`incorrecta${i}`).disabled = true;
    }
    //Habilita el boton para acceder a la siguiente pregunta
    document.getElementById("siguiente").style.opacity = "1";
    document.getElementById("siguiente").style.cursor = "pointer";
    document.getElementById("siguiente").disabled = false;

    return false;
}

//---------------- Funcion para elegir una respuesta de True or false ----------------\\
function respuestaTF(event) {
    // Obtener el ID del botón que fue presionado
    var idBotonPresionado = event.target.id;
    //Obtener el elemento mediante el id para poder modificarlo
    var boton = document.getElementById(idBotonPresionado);

    // Llamar a la función correspondiente según el ID
    if (idBotonPresionado == "correcta") {
        console.log("Respuesta correcta");
        boton.style.backgroundColor = "rgb(33, 231, 19)";
        puntaje += 100;
    } else {
        console.log("Respuesta incorrecta");
        boton.style.backgroundColor = "#a90808";
    }
    //Bloquear los botones después de seleccionar una respuesta
    document.getElementById("correcta").style.opacity = "0.6";
    document.getElementById("correcta").style.cursor = "not-allowed";
    document.getElementById("correcta").disabled = true;

    document.getElementById("incorrecta1").style.opacity = "0.6";
    document.getElementById("incorrecta1").style.cursor = "not-allowed";
    document.getElementById("incorrecta1").disabled = true;
    //Habilita el boton para acceder a la siguiente pregunta
    document.getElementById("siguiente").style.opacity = "1";
    document.getElementById("siguiente").style.cursor = "pointer";
    document.getElementById("siguiente").disabled = false;

    return false;
}

//---------------- Funcion para la siguiente pregunta de opción múltiple ----------------\\
function siguientePreguntaOM() {
    if (cont == 9) {
        pantallaPuntaje();
    } else {
        //Cambia el numero de la pregunta
        cont++;
        document.getElementById("noPregunta").textContent = `Pregunta ${cont + 1}`;
        //Cambiar la pregunta
        document.getElementById("pregunta").textContent = `${preguntas[cont].question}`;
        //Cambiar las respuestas, desbloquear los botones y pintar de nuevo al color estandar los botones
        document.getElementById("correcta").textContent = preguntas[cont].correct_answer;
        document.getElementById("correcta").style.opacity = "1";
        document.getElementById("correcta").style.cursor = "pointer";
        document.getElementById("correcta").disabled = false;
        document.getElementById("correcta").style.backgroundColor = "#e7e7e7";
        //Incorrectas
        for (let i = 1; i < 4; i++) {
            document.getElementById(`incorrecta${i}`).textContent = preguntas[cont].incorrect_answers[i - 1];
            document.getElementById(`incorrecta${i}`).style.opacity = "1";
            document.getElementById(`incorrecta${i}`).style.cursor = "pointer";
            document.getElementById(`incorrecta${i}`).disabled = false;
            document.getElementById(`incorrecta${i}`).style.backgroundColor = "#e7e7e7";
        }
        console.log(`Puntaje: ${puntaje}`);
        console.log(`Contador: ${cont}`);
    }
    return false;
}

//---------------- Funcion para la siguiente pregunta de True or False ----------------\\
function siguientePreguntaTF() {
    //Si el contador es igual a 9, significa que la trivia ha concluido, por lo que se llamará a una función que mosyrará la pantalla de puntaje.
    if (cont == 9) {
        pantallaPuntaje();
    } else {
        //Cambia el numero de la pregunta
        cont++;
        document.getElementById("noPregunta").textContent = `Pregunta ${cont + 1}`;
        //Cambiar la pregunta
        document.getElementById("pregunta").textContent = `${preguntas[cont].question}`;
        //Cambiar las respuestas, desbloquear los botones y pintar de nuevo al color estandar los botones
        document.getElementById("correcta").textContent = preguntas[cont].correct_answer;
        document.getElementById("correcta").style.opacity = "1";
        document.getElementById("correcta").style.cursor = "pointer";
        document.getElementById("correcta").disabled = false;
        document.getElementById("correcta").style.backgroundColor = "#e7e7e7";
        //Incorrectas
        document.getElementById("incorrecta1").textContent = preguntas[cont].incorrect_answers[0];
        document.getElementById("incorrecta1").style.opacity = "1";
        document.getElementById("incorrecta1").style.cursor = "pointer";
        document.getElementById("incorrecta1").disabled = false;
        document.getElementById("incorrecta1").style.backgroundColor = "#e7e7e7";
        console.log(`Puntaje: ${puntaje}`);
        console.log(`Contador: ${cont}`);
    }
    return false;
}

//---------------- Funcion para el apartado del puntaje ----------------\\
function pantallaPuntaje() {
    const container = document.querySelector('#pantallaPuntaje');
    let contentHTML;
    if (puntaje == 1000) {
        contentHTML = `
        <h1>Trivia Concluida!</h1>
        <h4>Impecable! Tu puntaje ha sido de ${puntaje} puntos!</h4>
        <form action="">
            <input id="nuevaTrivia" type="button" onclick="return newTrivia();" value="Crear nueva Trivia">
        </form>
        `;        
    }else if (puntaje > 700 && puntaje < 1000) {        
        contentHTML = `
        <h1>Trivia Concluida!</h1>
        <h4>Muy bien! Tu puntaje ha sido de ${puntaje} puntos!</h4>
        <form action="">
            <input id="nuevaTrivia" type="button" onclick="return newTrivia();" value="Crear nueva Trivia">
        </form>
        `;        
    }else if (puntaje > 500  && puntaje <=700 ) {        
        contentHTML = `
        <h1>Trivia Concluida!</h1>
        <h4>Con un poco de práctica, llegarás mas lejos! Tu puntaje ha sido de ${puntaje} puntos!</h4>
        <form action="">
            <input id="nuevaTrivia" type="button" onclick="return newTrivia();" value="Crear nueva Trivia">
        </form>
        `;        
    }else if (puntaje < 600) {        
        contentHTML = `
        <h1>Trivia Concluida!</h1>
        <h4>No te rinadas, sigue intentando! Tu puntaje ha sido de ${puntaje} puntos!</h4>
        <form action="">
            <input id="nuevaTrivia" type="button" onclick="return newTrivia();" value="Crear nueva Trivia">
        </form>
        `;        
    }
    container.innerHTML = contentHTML;
    trivia.style.display = "none";
    document.getElementById("pantallaPuntaje").style.display = "block";
    document.getElementById("nuevaTrivia").style.opacity = "1";
    return false;
}

//---------------- Funcion para regresar a el apartado inical para crear el quiz ----------------\\
function newTrivia() {
    document.getElementById("pantallaPuntaje").style.display = "none";
    form.style.display = "block";
    preguntas = "";
    return false;
}
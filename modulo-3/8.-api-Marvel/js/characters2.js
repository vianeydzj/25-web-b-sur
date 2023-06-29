const popularBox = document.querySelector("#personajes");
let allCharacters = [];
let allCharacters2 = [];

// Renderizado de películas 
const renderizarPersonajes = (listado) => {
  listado.forEach((personaje) => {
    let urlpersonaje = personaje.urls[0].url;
    const myDiv = `
    <div class="col-md-4">
        <a href="${urlpersonaje}" target="_blank">
            <img src="${personaje.thumbnail.path}.${personaje.thumbnail.extension}" alt="${personaje.name}" class="img-thumbnail">
        </a>
        <h3 class="title">${personaje.name}</h3>
    </div>`;
    popularBox.innerHTML += myDiv;
  });
}

// Obtener películas populares
const getCharacters = async () => {
  const response = await fetch(
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=648d8e7c24286feb92ff8f70c9aad7ab&hash=584bdc748dae00bc0c25a7c48bed9ff4",

  );
  return response.json();
};


getCharacters().then((response) => {
  allCharacters = response.data.results;
  // renderizarPersonajes(allCharacters)
  renderizarPersonajes(allCharacters2)
});

const getCharacters2 = {
  render: () => {
    const urlApi1 = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=648d8e7c24286feb92ff8f70c9aad7ab&hash=584bdc748dae00bc0c25a7c48bed9ff4';
    const urlApi2 = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=modified&ts=1&apikey=648d8e7c24286feb92ff8f70c9aad7ab&hash=584bdc748dae00bc0c25a7c48bed9ff4';
    const urlApi3 = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&ts=1&apikey=648d8e7c24286feb92ff8f70c9aad7ab&hash=584bdc748dae00bc0c25a7c48bed9ff4';
    fetch(urlApi1)
    .then(res => res.json())
    .then((json) => {
      // console.log(json)
      for (const character of json.data.results) {
        allCharacters2.push(character);
      }
    })

    fetch(urlApi2)
    .then(res => res.json())
    .then((json) => {
      // console.log(json)
      for (const character of json.data.results) {
        allCharacters2.push(character);
      }
    })

    fetch(urlApi3)
    .then(res => res.json())
    .then((json) => {
      // console.log(json)
      for (const character of json.data.results) {
        allCharacters2.push(character);
      }
    })
  }
}

const formulario = document.querySelector('#search')
const buscador = (search) => {
  popularBox.innerHTML = ''
  let a_minusculas = search.toLowerCase();
  // let resultado = allCharacters.filter((character_name) => character_name.name.toLowerCase().includes(a_minusculas));
  let resultado = allCharacters2.filter((character_name) => character_name.name.toLowerCase().includes(a_minusculas));
  renderizarPersonajes(resultado)
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault()
  let valor_buscado = event.target["character"].value
  buscador(valor_buscado)
})

getCharacters2.render();
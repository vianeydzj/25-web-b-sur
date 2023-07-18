const creatorList = document.querySelector('#creators-list');

// la funcion async es para hacer un apartado que hace un lado la funcion y compila las demas funciones y lo deja al final 
const getStan = async () => {
  // la fetch es para que traiga los datos de la api 
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/creators?firstName=Stan&lastName=Lee&ts=1&apikey=648d8e7c24286feb92ff8f70c9aad7ab&hash=584bdc748dae00bc0c25a7c48bed9ff4",
    );
    return await response.json();
    
};

const getCreators = async () => {
    // la fetch es para que traiga los datos de la api 
      const response = await fetch(
        "https://gateway.marvel.com:443/v1/public/creators?ts=1&apikey=648d8e7c24286feb92ff8f70c9aad7ab&hash=584bdc748dae00bc0c25a7c48bed9ff4",
      );
      return await response.json();
      
  };
  
getStan().then((response) =>
    // console.log(response)
    response.data.results.forEach((creator) => {
        const creatorItem = document.createElement("li"); //creamos elemento li
        const creatorLink = document.createElement("a"); // creamos elemento elemento a
        creatorLink.innerText = `${creator.firstName} ${creator.lastName}`; // damos un nombre al elemento 
        creatorLink.classList.add("dropdown-item"); //añadimos la clase al elemento a
        creatorLink.setAttribute("href", "#"); // agregamos el tributo href al elemento a 
        genreItem.appendChild(creatorLink); // agregamos com hijo el elemento a al elemento li (<li><a> <li><a>)
        creatorList.appendChild(creatorItem); //agregamos cada elemento li como hijo del elemento ul 
    })
);
getCreators().then((response) =>
    // console.log(response)
    response.data.results.forEach((creator) => {
        const creatorItem = document.createElement("li"); //creamos elemento li
        const creatorLink = document.createElement("a"); // creamos elemento elemento a
        creatorLink.innerText = `${creator.firstName} ${creator.lastName}`; // damos un nombre al elemento 
        creatorLink.classList.add("dropdown-item"); //añadimos la clase al elemento a
        creatorLink.setAttribute("href", "#"); // agregamos el tributo href al elemento a 
        creatorItem.appendChild(creatorLink); // agregamos com hijo el elemento a al elemento li (<li><a> <li><a>)
        creatorList.appendChild(creatorItem); //agregamos cada elemento li como hijo del elemento ul 
    })
);
const marvel = {
    render: () => {
        const urlApi = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=648d8e7c24286feb92ff8f70c9aad7ab&hash=584bdc748dae00bc0c25a7c48bed9ff4';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlApi)
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                for (const character of json.data.results) {                    
                    let urlCharacter = character.urls[0].url;
                    contentHTML += `
                    <div class="col-md-4">
                        <a href="${urlCharacter}" target="_blank">
                            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${character.name}</h3>
                    </div>`;

                }
                container.innerHTML = contentHTML;
            })
    }
};

marvel.render();
const genreList = document.querySelector('#genres-list');


const getGenres = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=es",
      {
        // method: 'get',
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y1MDc4ZjE1MDZjZGRkOGY0MmE0NzM0YzEyYjgwZSIsInN1YiI6IjY0N2U4OTBlY2NkZTA0MDBkZTkwMzVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BB9jwHotnvCorrZShKLb-9YzBOUp5G41K4hDWE01v1E"
        }),
      }
    );
    return await response.json();
    
  };
  //Se utiliza el then para obtener el valor retornado de la fucnion
  //getGenres().then(x => console.log(x));
{/* <li><a class="dropdown-item" href="#">Action</a></li> */}

// genreLink.classList.add('dropdown-item','dropdown-item2')
// genreLink.setAttribute('href','#') 
// genreItem.appendChild(genreLink)

getGenres().then((response) =>
response.genres.forEach((genre) => {
  const genreItem = document.createElement("li");
  const genreLink = document.createElement("a");
  genreLink.innerText = genre.name;
  genreLink.classList.add("dropdown-item");
  genreLink.setAttribute("href", "#");
  genreItem.appendChild(genreLink);
  genreList.appendChild(genreItem);
})
);
    


  
const popularBox = document.querySelector("#popular");



const getPopular = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=es&page=1',
    {
      // method: 'get',
      headers: new Headers({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTNmMzMyMzkxMmEzN2QwYmY4MDBmYjhmODYyYWM2MiIsInN1YiI6IjYyMTVjMzc0YmQxMDFlMDAxYmM4NTc0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KGWT_v3k4KetupTNHFXYXZjbSMn89goD0u8cdG0hrSw",
      }),
    }
  );
  // console.log(1)
  
  return await response.json();
};

let movies = []


//[
//   "SpiderMan",
//   "Transformers",
//   "Cars",
//   "Harry Potter",
//   "John Wick",
//   "El Rey León",
// ];

getPopular().then((response)=> {
response.results.forEach((movie) => {
    console.log(movie)
  const myDiv =
    `<div class="col-lg-3" mb-4>
      <a href="#" class="">
        <img class="img-fluid" src="https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}"/> 
        <h6>${movie.title}</h6>
        <apan>${movie.vote_average}</apan>
      </a>
    </div>`;
  popularBox.innerHTML += myDiv;
})
});



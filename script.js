// fijo el escuchador de eventos de primero esta vez en click
document.getElementById('searchButton').addEventListener('click', searchMovies)
let urlbase = 'https://api.themoviedb.org/3/search/movie'
let api_key = '5eabc5f6fc88760bd646f7215e53bfb3'
let url_img = 'https://image.tmdb.org/t/p/w500'
let resultContainer = document.getElementById('results')


//hacer funcion
function searchMovies() {
    resultContainer.innerHTML = 'Cargando...'
    // .value para mostrar lo que esta escrito
    let searchInput = document.getElementById('searchInput').value
    // para buscar la api en themoviedb fetch
    fetch(`${urlbase}?api_key=${api_key}&query=${searchInput}`)
        .then(response => response.json())
        .then(response => displayMovie(response.results))


}
function displayMovie(movies) {
  
    if (movies.length === 0) {
        resultContainer.innerHTML = 'No se encontraron peliculas'
        return
    }
    movies.forEach(movie => {
    let divMovie = document.createElement('div')
    divMovie.classList.add('movie')
    let title = document.createElement('h1')
    title.textContent = movie.title
    let relaseDate = document.createElement('p')
    relaseDate.textContent = 'La fecha de lanzamiento fue' + movie.release_date
    let overview = document.createElement('p')
    overview.textContent = movie.overview
    let posterPath = url_img + movie.poster_path
    let poster = document.createElement('img')
    poster.src = posterPath
    divMovie.appendChild(poster)
    divMovie.appendChild(title)
    divMovie.appendChild(overview)
    divMovie.appendChild(relaseDate)
    resultContainer.appendChild(divMovie    )
    })
}   

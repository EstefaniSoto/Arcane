const api_key = 'dc3632b5d090c1887dcaccbf46f8a6a1';
const base_url = 'https://api.themoviedb.org/3';
const peliculas_seleccionada = document.getElementById('pelicula');

async function obtenerImagenPeliculaPorNombre(nombrePelicula) {
  const buscarEndpoint = '/search/movie';
  const buscarUrl = `${base_url}${buscarEndpoint}?api_key=${api_key}&query=${nombrePelicula}`;

  try {
    const buscarResponse = await fetch(buscarUrl);
    const buscarData = await buscarResponse.json();

    if (buscarResponse.ok) {

      const resultados = buscarData.results;

      if (resultados.length > 0) {

        const pelicula = resultados[0];
        const imagenUrl = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
        return imagenUrl;

      } else {
        console.log('No se encontró ninguna película con ese nombre.');
      }
    } else {
      console.log('Error en la solicitud de búsqueda:', buscarData.status_message);
    }
  } catch (error) {
    console.log('Error de conexión:', error);
  }
}

const retornar_imagen = ()=>{
    peliculas_seleccionada.addEventListener('change', () =>{
    const seleccion = peliculas_seleccionada.value 
    obtenerImagenPeliculaPorNombre(seleccion).then(imagenUrl => {
   
        const imagenElement = document.getElementById('imagen');
        imagenElement.src = imagenUrl;
      })
      .catch(error => {
        console.log('Error:', error);
      });
})
}
retornar_imagen()
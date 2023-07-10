const api_key = 'dc3632b5d090c1887dcaccbf46f8a6a1';
const base_url = 'https://api.themoviedb.org/3';
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", validarFormulario);


async function validarFormulario(e) {
  e.preventDefault();

  const url = await obtenerImagen(e.target["pelicula"].value);

  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  const datos_usuario = {
    nombre: e.target["nombre"].value,
    numero: e.target["numero"].value,
    email: e.target["correo"].value,
    fecha: e.target["fecha"].value
  }
  
 if(usuarios) {
  localStorage.setItem("usuarios", JSON.stringify([...usuarios, datos_usuario]));
 }

 if (!usuarios){
  localStorage.setItem("usuarios", JSON.stringify([datos_usuario]));
  }

  Swal.fire({
    title: 'Porfavor confirma tus datos',
    html: 
        '<div class="container">'+
            '<div class="text">'+
              `<h2 class="pop-up-text">Reserva de: ${e.target["nombre"].value}</h2>` +
              `<br><br> <label class='categoria'>Pelicula: ${e.target["pelicula"].value}</label>`+
              `<br><br> <label class='categoria'>Fecha: ${e.target["fecha"].value} </label>` +
              `<br><br> <label class='categoria'>Hora: ${e.target["hora"].value}</label>` +
            '</div>'+
          '<div class="imagen">'+
              `<img id="imagen" src=${url} alt="">`+
          '</div>'+
          
        '</div>' ,
    width: '70%',
    icon: "info",
    confirmButtonText: 'Si, confirmar reserva.',
    showCancelButton: true,
    confirmButtonColor: '#3caf3e',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Reservada!',
        'Tu reserva ha sido registrada.',
        'success'
      )
    }
  })
 this.reset();
  const database = JSON.parse(localStorage.getItem("usuarios"));
  console.log(database)
}

async function obtenerImagen (nombrePelicula) {
  const buscarEndpoint = '/search/movie';
  const buscarUrl = `${base_url}${buscarEndpoint}?api_key=${api_key}&query=${nombrePelicula}`;

  try {
    const data = await fetch(buscarUrl);
    const { results } = await data.json();
    
    if (!results){
      console.log("Su imagen no se encuentra.")
    };
    return `https://image.tmdb.org/t/p/w500${results[0].poster_path}`;

  } catch (error) {
    console.log('Error de conexión:', error);
  }
}


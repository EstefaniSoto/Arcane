const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const pelicula = document.querySelector("#pelicula").value;
  const fecha = document.querySelector("#fecha").value;
  localStorage.setItem("nombreUsuario", nombre);
  localStorage.setItem("pelicula", pelicula);
  localStorage.setItem("fecha", fecha);
  alert(`${nombre}, tus tickets para la pelicula *${pelicula}* han sido reservados con exito!`);
  
  // Obtén los datos del Local Storage
  const localStorageData = {
    nombre: localStorage.getItem("nombreUsuario"),
    pelicula: localStorage.getItem("pelicula"),
    fecha: localStorage.getItem("fecha"),
  };
  
  const database = `[
    {
        "nombre": "paola",
        "numero": "8296058217",
        "correo": "dp673162@gmail.com",
        "pelicula": "SUPER MARIO BROS (2D)",
        "tanda": "5:30PM-7:00PM",
        "fecha": "16/06/2023"
    }]`
  // Actualiza los datos del array jsonData con los datos del Local Storage
  const jsonData = JSON.parse(database);
  jsonData[0] = localStorageData;

  console.log(jsonData); // Array JSON actualizado

  // Convierte el array JSON de nuevo a formato de cadena de texto
  const updatedData = JSON.stringify(jsonData);
  console.log(updatedData); // Cadena de texto JSON actualizada

  // Guarda los datos actualizados en el Local Storage si es necesario
  // localStorage.setItem('nombreDelArray', updatedData);
}

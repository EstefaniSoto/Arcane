const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault();
    nombre = document.querySelector("#nombre").value
    pelicula = document.querySelector("#pelicula").value
    fecha = document.querySelector("#fecha").value
    localStorage.setItem("nombreUsuario", nombre);
    localStorage.setItem("pelicula", pelicula);
    localStorage.setItem("fecha", fecha);
    alert(`${nombre}, tus tickets para la pelicula *${pelicula}* han sido reservados con exito!`)
    console.log(nombre)
}

// const fs = require('fs');

// // Leer el contenido del archivo JSON
// const contenidoJSON = fs.readFileSync('./database.json', 'utf8');

// // Analizar el contenido JSON en un objeto JavaScript
// const objetoJSON = JSON.parse(contenidoJSON);

// // Utilizar el objeto JS
// console.log(objetoJSON);
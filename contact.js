document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var sugerencia = document.getElementById('sugerencia').value;

    var mensaje = {
        "nombre": nombre,
        "email": email,
        "sugerencia": sugerencia
    };

    // Enviar el mensaje al servidor utilizando una solicitud HTTP
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/guardar-mensaje', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(mensaje));

    alert('Mensaje enviado, gracias!');

    // Restablecer los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('sugerencia').value = '';
});

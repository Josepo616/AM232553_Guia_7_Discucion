document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('formularioContacto');

    formulario.addEventListener('submit', function(event) {
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        var nombreValido = /^[A-Za-z\s]+$/.test(nombre);
        var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!nombreValido) {
            alert('Por favor, ingrese un nombre válido.');
            event.preventDefault();
        }

        if (!emailValido) {
            alert('Por favor, ingrese un correo electrónico válido.');
            event.preventDefault();
        }

        // No se valida el mensaje, ya que puede contener varios tipos de caracteres

    });
});

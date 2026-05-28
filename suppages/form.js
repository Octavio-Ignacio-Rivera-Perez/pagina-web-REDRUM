function EmailValido(email) {
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronEmail.test(email);
}

document.getElementById('Registro').addEventListener('submit', function(event) {

    let errores = [];

    let nombre = document.getElementById('nombre').value;

    let edad = document.getElementById('edad').value;

    let email = document.getElementById('email').value;

    let password = document.getElementById('password').value;


    if (nombre === '') {

        errores.push('El campo nombre es obligatorio.');

    }

    if (email === '') {

        errores.push('El campo email es obligatorio.');

    } else if (!EmailValido(email)) {

        errores.push('El campo email no es válido.');

    }

    if (edad === '') {

        errores.push('El campo edad es obligatorio.');

    }

    if (password === '') {

        errores.push('El campo password es obligatorio.');

    } else if (password.length <= 8) {

        errores.push('La contraseña debe tener al menos 8 caracteres.');
    }

    if (errores.length > 0) {
        event.preventDefault();
        alert(errores.join('\n'));
    }

});
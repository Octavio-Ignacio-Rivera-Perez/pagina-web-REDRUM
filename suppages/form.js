let fileHandle;

function EmailValido(email) {
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronEmail.test(email);
}

function descargarCSV(datos) {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "Nombre,Edad,Email\n"
        + `${datos.nombre},${datos.edad},${datos.email}`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "registro_usuarios.csv");
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link);
}

document.getElementById('Registro').addEventListener('submit', async function(event) {

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
        alert(errores.join('\n'));
    } else {
        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const nuevaLinea = `${nombre},${edad},${email},${password}\n`;

        const blob = new Blob([nuevaLinea], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        
        a.href = url;
        a.download = "form.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        alert("Formulario enviado");
        this.reset();
    }
});
const fileDirectory = window.location.pathname.split('/')
const fileName = fileDirectory[fileDirectory.length - 1]

if (fileName == 'contacto.html') {
    const nombreInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const botonEnviar = document.querySelector('.boton');
    const mensajeTextarea = document.querySelector('.mensaje');

    botonEnviar.addEventListener('click', () => {
        const email = emailInput.value;
        const nombre = nombreInput.value;
        const mensaje = mensajeTextarea.value;

        console.log(mensaje);

        localStorage.setItem('email', email);
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('mensaje', mensaje);

        if (email === '') {
            alert('Por favor ingrese su email.');
            return;
        }

        if (nombre === '') {
            alert('Por favor ingrese un nombre.');
            return;
        }

        if (mensaje === '') {
            alert('Por favor ingrese su mensaje.');
            return;
        }

        Swal.fire({
            title: 'Nos estaremos contactando en la brevedad',
            html: '¡Tu mensaje se ha enviado correctamente!',
            icon: 'info',
        });

        emailInput.value = '';
        nombreInput.value = '';
        mensajeTextarea.value = '';
    });   
}
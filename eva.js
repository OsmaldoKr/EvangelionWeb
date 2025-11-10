document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formPedidoEva');
    const mensaje = document.getElementById('mensaje');
    const btnLimpiar = document.getElementById('btnLimpiar');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Capturar datos
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const modelo = document.getElementById('modelo').value;
        const noticias = document.getElementById('noticias').checked;

        // Validar
        if (!nombre || !correo || !modelo) {
            mostrarMensaje('Completa todos los campos obligatorios.', true);
            return;
        }

        let msj = `Pedido enviado. <br>Cliente: ${nombre} <br>Modelo: ${modelo}`;
        if (noticias) {
            msj += '<br>¡Recibirás noticias NERV y descuentos!';
        }
        mostrarMensaje(msj, false);
        form.reset();
    });

    btnLimpiar.addEventListener('click', function() {
        form.reset();
        mostrarMensaje('Campos limpios.', false);
    });

    function mostrarMensaje(msj, error) {
        mensaje.innerHTML = msj;
        mensaje.style.color = error ? '#e94063' : '#ffecb3';
    }
});

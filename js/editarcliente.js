import { obtenerClienteId } from "./API.js";

(function() {
    const form = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id');
        const cliente = await obtenerClienteId(idCliente);

        mostrarCliente(cliente);
    })

    function mostrarCliente(cliente) {
        
        // Forma 1: simple
        // const { nombre, email, telefono, empresa, id } = cliente;

        // document.querySelector('#nombre').value   = nombre;
        // document.querySelector('#email').value    = email;
        // document.querySelector('#telefono').value = telefono;
        // document.querySelector('#empresa').value  = empresa;
        // document.querySelector('#id').value       = id;
        

        // Forma 2: mas optima y moderna
        Object.entries(cliente).forEach(([key, value]) => {
            const input = form.elements[key];
            if (input) input.value = value;
        });

        /* Explicación:
            _ Object.entries: convierte ese objeto en un array de parejas [clave, valor] 
            _ .forEach(...): Recorremos el array una pareja (clave-valor) a la vez.
            _ ([key, value]) => { ... }: Destructuración del array que llega -> la primera posición va a la variable key, la segunda a value. EJ: [clave-valor] - [nombre-Watch], y asi en cada vuelta.

            *Dentro del ForEach*
            _ const input = form.elements[key]:
                \_ form es nuestro formulario <form id="formulario">.
                \_ form.elements es la colección nativa de todos los campos que tienen name="..." dentro del formulario.
                \_ Al hacer form.elements[key] buscas el campo cuyo name coincide con la key actual (nombre, email, etc.).
                \_ Ejemplo: cuando key === 'email', form.elements['email'] te devuelve el <input name="email">.
            
            _ if (input) input.value = value:
                \_ Si existe un campo con ese name, le asignas el valor que viene del objeto.
                \_ Si no existe (porque el objeto tuviera una propiedad de más) simplemente no haces nada → evitas errores.
        */
    }
})();
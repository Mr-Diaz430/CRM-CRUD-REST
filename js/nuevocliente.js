import { nuevoCliente } from "./API.js";
import { mostrarAlerta } from "./funciones.js";


(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
    
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }
        
        if ( validarObj(cliente) ) {
            mostrarAlerta('Todos los campos son obligatorios!');
            return;
        }

        nuevoCliente(cliente);

    }

    // Valida si los campos del formulario estan vacios.
    function validarObj(obj) {
        return !Object.values(obj).every(input => input.trim() !== '');
    }

})(); //IFFE - funciones que no salgan de este archivo
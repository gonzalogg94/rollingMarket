// agregar logica principal del ecommerce




// agregamos importamos funciones y clases de otros archivos js

import {validarEmail, validarPassword} from "./helpers.js";


// declaramos variables
let formulario = document.getElementById("loging");
let usuario=document.getElementById("usuario");
let password=document.getElementById("inputPassword");

// agregamos los eventos.
usuario.addEventListener('blur', ()=>{validarEmail(usuario)});
password.addEventListener('blur', ()=>{validarPassword(password)});


// funciones


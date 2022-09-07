import { validarCodigo,validarNombre,validarDescripcion, validarImagen } from "./helpers.js";
// import {Producto} from "./classProducto.js";
// // declaramos variables
// let listaLimieza = JSON.parse(localStorage.getItem("listaLimpiezaKey")) || [];
// let listaBebidas = JSON.parse(localStorage.getItem("listaBebidasKey")) || [];
// let listaLacteos = JSON.parse(localStorage.getItem("listaLacteosKey")) || [];
// let listaElectronica = JSON.parse(localStorage.getItem("listaElectronicaKey")) || [];

// variables formulario producto
const modalProducto = new bootstrap.Modal(document.getElementById("productosModal"));
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let imagen= document.getElementById("imagenProducto");


// eventos formulario producto
codigo.addEventListener("blur", () => {
    validarCodigo(codigo);
  });
nombre.addEventListener("blur", () => {
    validarNombre(nombre);
  });
descripcion.addEventListener("blur", () => {
    validarDescripcion(descripcion);
  });

imagen.addEventListener("blur", () => {
    validarImagen(imagen);
  });



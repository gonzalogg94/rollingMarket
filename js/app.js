
import Producto from ".classProducto.js";
import { validarEmail, validarPassword } from "./helpers.js";

// declaramos variables
const modalLogin = new bootstrap.Modal(document.getElementById("modalLogin"));
const mail = "rollingmarket@gmail.com";
const pass = "rollingMarket2022*";
let listaLimieza = JSON.parse(localStorage.getItem("listaLimpiezaKey")) || [];
let listaBebidas = JSON.parse(localStorage.getItem("listaBebidasKey")) || [];
let listaLacteos = JSON.parse(localStorage.getItem("listaLacteosKey")) || [];
let listaElectronica = JSON.parse(localStorage.getItem("listaElectronicaKey")) || [];
let formulario = document.getElementById("loging");
let usuario = document.getElementById("usuario");
let password = document.getElementById("inputPassword");

// agregamos los eventos.
formulario.addEventListener("submit", validarAdm);
usuario.addEventListener("blur", () => {
  validarEmail(usuario);
});
password.addEventListener("blur", () => {
  validarPassword(password);
});

// funciones

function validarAdm(e) {
  e.preventDefault();
  if (mail === usuario.value && pass === password.value) {
    let administrador = document.getElementById("administrador");
    administrador.className = "nav-item";
    modalLogin.hide();
  } else {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "El mail o la contraseña son incorrectos",
    });
    limpiarLogin();
  }
}
function limpiarLogin() {
  formulario.reset();
  usuario.className = "form-control";
  password.className = "form-control";
}


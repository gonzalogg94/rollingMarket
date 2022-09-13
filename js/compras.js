import { validarPassword, validarEmail } from "./helpers.js";

// Declaracion de variables.
const modalLoginCompras = new bootstrap.Modal(
  document.getElementById("modalLoginCompras")
);
const mail = "rollingmarket@gmail.com";
const pass = "rollingMarket2022*";
let estadoSesion = JSON.parse(sessionStorage.getItem("sesionKey"));
let formLoginCompras = document.getElementById("formLoginCompras");
let usuarioCompras = document.getElementById("usuarioCompras");
let passwordCompras = document.getElementById("passwordCompras");
let ventanaLogin = document.getElementById("ventanaLogin");
let ventanaAdministrador = document.getElementById("ventanaAdministrador");

// declaracion de eventos.
formLoginCompras.addEventListener("submit", validarAdm);
usuarioCompras.addEventListener("blur", () => {
  validarEmail(usuarioCompras);
});
passwordCompras.addEventListener("blur", () => {
  validarPassword(passwordCompras);
});

// Validar usuario al iniciar la pagina
if (estadoSesion == true) {
  ventanaLogin.className = "nav-item d-none";
  ventanaAdministrador.className = "nav-item";
} else {
  validarAdm();
}

// funciones
function validarAdm(e) {
  e.preventDefault();
  if (mail === usuarioCompras.value && pass === passwordCompras.value) {
    ventanaAdministrador.className = "nav-item active";
    ventanaLogin.className = "nav-item d-none";
    sessionStorage.setItem("sesionKey", JSON.stringify(true));
    modalLoginCompras.hide();
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
  formLoginError.reset();
  usuarioCompras.className = "form-control";
  passwordCompras.className = "form-control";
}
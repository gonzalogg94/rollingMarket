import { validarPassword, validarEmail } from "./helpers.js";

const modalLoginError = new bootstrap.Modal(
  document.getElementById("modalLoginError")
);
const mail = "rollingmarket@gmail.com";
const pass = "rollingMarket2022*";
let estadoSesion = JSON.parse(sessionStorage.getItem("sesionKey"));
let formLoginError = document.getElementById("formLoginError");
let usuarioError = document.getElementById("usuarioError");
let passwordError = document.getElementById("passwordError");
let ventanaLogin = document.getElementById("ventanaLogin");
let ventanaAdministrador = document.getElementById("ventanaAdministrador");

formLoginError.addEventListener("submit", validarAdm);
usuarioError.addEventListener("blur", () => {
  validarEmail(usuarioError);
});
passwordError.addEventListener("blur", () => {
  validarPassword(passwordError);
});

if (estadoSesion == true) {
  ventanaLogin.className = "nav-item d-none";
  ventanaAdministrador.className = "nav-item";
} else {
  validarAdm();
}

function validarAdm(e) {
  e.preventDefault();
  if (mail === usuarioError.value && pass === passwordError.value) {
    ventanaAdministrador.className = "nav-item active";
    ventanaLogin.className = "nav-item d-none";
    sessionStorage.setItem("sesionKey", JSON.stringify(true));
    modalLoginError.hide();
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
  usuarioError.className = "form-control";
  passwordError.className = "form-control";
}

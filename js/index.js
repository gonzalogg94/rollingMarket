import { validarEmail, validarPassword } from "./helpers.js";

const modalLogin = new bootstrap.Modal(document.getElementById("modalLogin"));
const mail = "rollingmarket@gmail.com";
const pass = "rollingMarket2022*";
let estadoSesion = JSON.parse(sessionStorage.getItem("sesionKey"));
let formulario = document.getElementById("loging");
let usuario = document.getElementById("usuario");
let password = document.getElementById("inputPassword");
let loginIndex = document.getElementById("loginIndex");
let administradorIndex=document.getElementById("administrador");



// agregamos los eventos.
formulario.addEventListener("submit", validarAdm);
usuario.addEventListener("blur", () => {
  validarEmail(usuario);
});
password.addEventListener("blur", () => {
  validarPassword(password);
});

// validar usurio con sesion storage

if (estadoSesion == true) {
  loginIndex.className="nav-item d-none"
  administradorIndex.className="nav-item"
} else{
  validarAdm();
}
  

  // funciones
  function validarAdm(e) {
    e.preventDefault();
    if (mail === usuario.value && pass === password.value) {
      let administrador = document.getElementById("administrador");
      administrador.className = "nav-item active";
      loginIndex.className = "nav-item d-none";
      sessionStorage.setItem("sesionKey", JSON.stringify(true));
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

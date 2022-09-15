import { validarPassword, validarEmail } from "./helpers.js";

const modalLoginNosotros = new bootstrap.Modal(
  document.getElementById("modalLoginNosotros")
);
const mail = "rollingmarket@gmail.com";
const pass = "rollingMarket2022*";
let formLoginNosotros = document.getElementById("formLoginNosotros");
let estadoSesion = JSON.parse(sessionStorage.getItem("sesionKey"));
let usuarioNosotros = document.getElementById("usuarioNosotros");
let passwordNosotros = document.getElementById("passwordNosotros");
let opcionAdministrador = document.getElementById("opcionAdministrador");
let opcionLogin = document.getElementById("opcionLogin");

formLoginNosotros.addEventListener("submit", validarAdm);
usuarioNosotros.addEventListener("blur", () => {
  validarEmail(usuarioNosotros);
});
passwordNosotros.addEventListener("blur", () => {
  validarEmail(passwordNosotros);
});

if (estadoSesion == true) {
  opcionLogin.className = "nav-item d-none";
  opcionAdministrador.className = "nav-item";
} else {
  validarAdm();
}

function validarAdm(e) {
  e.preventDefault();
  if (mail === usuarioNosotros.value && pass === passwordNosotros.value) {
    opcionAdministrador.className = "nav-item active";
    opcionLogin.className = "nav-item d-none";
    sessionStorage.setItem("sesionKey", JSON.stringify(true));
    modalLoginNosotros.hide();
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
  formLoginNosotros.reset();
  usuarioNosotros.className = "form-control";
  passwordNosotros.className = "form-control";
}

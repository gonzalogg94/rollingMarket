import { validarPassword, validarEmail } from "./helpers.js";

// Declaracion de variables.
const modalLoginDetalles = new bootstrap.Modal(
    document.getElementById("modalLoginDetalles")
  );
  const mail = "rollingmarket@gmail.com";
  const pass = "rollingMarket2022*";
  let estadoSesion = JSON.parse(sessionStorage.getItem("sesionKey"));
  let formLoginDetalles = document.getElementById("formLoginDetalles");
  let usuarioDetalles = document.getElementById("usuarioDetalles");
  let passwordDetalles = document.getElementById("passwordDetalles");
  let ventanaLogin = document.getElementById("ventanaLogin");
  let ventanaAdministrador = document.getElementById("ventanaAdministrador");

//   declaracion de eventos
formLoginDetalles.addEventListener("submit", validarAdm);
usuarioDetalles.addEventListener("blur", () => {
  validarEmail(usuarioDetalles);
});
passwordDetalles.addEventListener("blur", () => {
  validarPassword(passwordDetalles);
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
    if (mail === usuarioDetalles.value && pass === passwordDetalles.value) {
      ventanaAdministrador.className = "nav-item active";
      ventanaLogin.className = "nav-item d-none";
      sessionStorage.setItem("sesionKey", JSON.stringify(true));
      modalLoginDetalles.hide();
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
  formLoginDetalles.reset();
  usuarioDetalles.className = "form-control";
  passwordDetalles.className = "form-control";
}

import { validarPassword, validarEmail } from "./helpers.js";

const parametroCodigo = new URLSearchParams(window.location.search);

let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let productoBuscado = listaProductos.find((itemProducto) => {
  return itemProducto.codigo === parametroCodigo.get("codigo");
});

function tipoDeCategoria() {
  if (productoBuscado.categoria === "categoria1") {
    tipoCategoria = "Limpieza";
  } else if (productoBuscado.categoria === "categoria2") {
    tipoCategoria = "Bebidas";
  } else if (productoBuscado.categoria === "categoria3") {
    tipoCategoria = "Lácteos";
  } else {
    tipoCategoria = "Electrónica";
  }
}
let tipoCategoria;
tipoDeCategoria();
console.log(tipoCategoria);

let detalle = document.querySelector("#cardDetalles");
detalle.innerHTML = `<div class="card-body">
<div class="text-center">
  <h1 class="text-center mb-3">${productoBuscado.nombre}</h1>
  <div class="mb-3">
    <div class="row g-0">
      <div class="col-md-4 mb-2">
        <img
          src="${productoBuscado.imagen}"
          class="img-fluid rounded-start"
          alt="${productoBuscado.nombre}"
        />
      </div>
      <div class="col-md-8 container">
        <div>
          <div class="card colorVerde mb-3" >
              <div class="card-header text-start"><h4>Detalles</h4></div>
              <div class="card-body text-start ">
                <div class="row">
                  <div class="col-6 fw-bold"><p>Código <br>${productoBuscado.codigo}</p>
                    <p>Categoría <br>${tipoCategoria}</p>
                </div>
                  <div class="col-6 fw-bold ">
                    <p>Precio <br>$ ${productoBuscado.precio}</p>
                    <p>Stock <br>${productoBuscado.cantidad}</p>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="card fondoLateral fw-bold">
  <div class="card-body">
    <h5>Descripción</h5>
    <div class=" d-flex justify-content-center m-3">
      <div>
        <p>${productoBuscado.descripcion}</p>
      </div>
    </div>
  </div>
</div>
  </div>`;

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

formLoginDetalles.addEventListener("submit", validarAdm);
usuarioDetalles.addEventListener("blur", () => {
  validarEmail(usuarioDetalles);
});
passwordDetalles.addEventListener("blur", () => {
  validarPassword(passwordDetalles);
});

if (estadoSesion == true) {
  ventanaLogin.className = "nav-item d-none";
  ventanaAdministrador.className = "nav-item";
} else {
  validarAdm();
}

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

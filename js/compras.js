import { validarPassword, validarEmail } from "./helpers.js";


//Maquetado del detalle
let listaCompras = JSON.parse(localStorage.getItem('listaComprasKey')) || [];
listaCompras.map((producto)=>{crearTablaCompras(producto)});

//cargaInicial();
function crearTablaCompras(producto){
  let tablaCompra = document.querySelector("#detalleDeComprar");
  tablaCompra.innerHTML += `<div class="card-header text-center my-4">
  <h2>${producto.nombre}</h2>
  </div>
  <div class="card-body text-start ">
  <div class="row">
    <div class="col-lg-4 col-md-4 col-12 card">
      <img class="w-100" src="${producto.imagen}" alt="${producto.nombre}">
  </div>
    <div class="col-lg-8 col-md-8 col-12 text-center">
      <h5 class="mb-5">${producto.descripcion}</h5>
      <h3>Precio</h3>
      <h5>$${producto.precio}</h5>
      <hr>
      <h4>Código de Barra</h4>
      <p>${producto.codigoBarra}</p>
      <button class="btn btn-danger" onclick="eliminarProducto('${producto.codigoBarra}')">Eliminar</button>
    </div>
  </div>
  </div>`
  let sumatoria = document.querySelector("#sumatoria");
  sumatoria.innerHTML = `<button class="btn btn-success my-4" onclick="sumatoria()">
  <a  class="text-white text-decoration-none fs-3">Pagar</a>
</button>`
};

//Eliminar Compra
window.eliminarProducto = function (codigo){
  Swal.fire({
    title: "Quitar Producto",
    text: "Estas por eliminar los productos con el mismo nombre en el carrito",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#51BA49",
    cancelButtonColor: "#d33",
    confirmButtonText: "Quitar",
    cancelButtonText: "Conservar",
  }).then((result) => {
    if (result.isConfirmed) {
      let copiaListaCompras = listaCompras.filter((compra)=>{return compra.codigoBarra != codigo});
      listaCompras = copiaListaCompras;
      guardarDatosLS();
      actualizarTabla();
      Swal.fire(
        "Listo!",
        "El carrito se actualizó",
        "success"
      );
    }
  });
}
function guardarDatosLS() {
  localStorage.setItem("listaComprasKey", JSON.stringify(listaCompras));
};
function actualizarTabla() {
  let tablaProductos = document.getElementById("detalleDeComprar");
  tablaProductos.innerHTML = "";
  cargaInicial();
};
function cargaInicial() {
  if (listaCompras.length > 0) {
    listaCompras.map((producto)=>{crearTablaCompras(producto)});
  }
};

//Sumatoria
window.sumatoria = function(){
  let suma = 0;
  listaCompras.forEach((producto)=>{sumarPrecios(producto)});
  function sumarPrecios(producto){
    suma += parseInt(producto.precio)
 };
 Swal.fire({
  title: `$${suma}`,
  text: "Este es tú monto para abonar",
  icon: 'success',
  showCancelButton: true,
  confirmButtonColor: '#51BA49',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Pagar',
  cancelButtonText: 'Seguir Comprando'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      '<a href="/pages/error404.html">Link de Pago</a>'
    )
  }
})
};

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
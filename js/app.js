import {
  validarCodigo,
  validarNombre,
  validarDescripcion,
  validarImagen,
  validarCategoria,
  validarPrecio,
  validarStock,
} from "./helpers.js";

// variales relacionadas al inicio de sesion de paginas nosotros
const modalLoginNosotros = new bootstrap.Modal(document.getElementById("modalLoginNosotros"));
let formLoginNosotros=document.getElementById("formLoginNosotros");
const mail = "rollingmarket@gmail.com";
const pass = "rollingMarket2022*";
let estadoSesionNosotros = JSON.parse(sessionStorage.getItem("sesionKey"));
let loginNosotros=document.getElementById("loginNosotros");
// let administradorNosotros=document.getElementsById("administradorNosotros");
let loginError=document.getElementById("loginError");
let administradorError=document.getElementById("administradorError");
let loginDetalles=document.getElementById("loginDetalles");
let administradorDetalles=document.getElementById("administradorDetalles");
let usuarioNosotros=document.getElementById("usuarioNosotros");
let passwordNosotros=document.getElementById("passwordNosotros");
let administradorNosotros=document.getElementById("administradorNosotros");
let loginPaginaNosotros=document.getElementById("loginPaginaNosotros");
// variables formulario producto
// const modalProducto = new bootstrap.Modal(
//   document.getElementById("productosModal")
// );
let formularioProductos = document.getElementById("formularioProductos");
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagenProducto");
let categoria = document.getElementById("tipoDeProductos");
let precio = document.getElementById("precio");
let stock = document.getElementById("stock");


if (estadoSesionNosotros == true) {
  loginNosotros.className = "nav-item d-none";
  administradorNosotros.className ="nav-item";
  loginError.className = "nav-item d-none";
  administradorError.className = "nav-item active";
  loginDetalles.className = "nav-item d-none";
  administradorDetalles.className = "nav-item active";
} else {
  console.log("el usurario no esta logueado")
}

formLoginNosotros.addEventListener("submit", validarUsuarioNosotros);

function validarUsuarioNosotros(e) {
  e.preventDefault();
  if (mail === usuarioNosotros.value && pass === passwordNosotros.value) {
    administradorNosotros.className = "nav-item";
    loginNosotros.className = "d-none";
    sessionStorage.setItem("sesionKey",JSON.stringify(true));
    console.log("usuario logueado")
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
  formulario.reset();
  usuarioNosotros.className = "form-control";
  passwordNosotros.className = "form-control";
}











// eventos formulario producto
// codigo.addEventListener("blur", () => {
//   validarCodigo(codigo);
// });
// nombre.addEventListener("blur", () => {
//   validarNombre(nombre);
// });
// descripcion.addEventListener("blur", () => {
//   validarDescripcion(descripcion);
// });

// imagen.addEventListener("blur", () => {
//   validarImagen(imagen);
// });
// categoria.addEventListener("blur", () => {
//   validarCategoria(categoria);
// });
// precio.addEventListener("blur", () => {
//   validarPrecio(precio);
// });
// stock.addEventListener("blur", () => {
//   validarStock(stock);
// });




import {
  validarCodigo,
  validarNombre,
  validarDescripcion,
  validarImagen,
  validarCategoria,
  validarPrecio,
  validarStock,
} from "./helpers.js";


// import {Producto} from "./classProducto.js";
// // declaramos variables
// let listaLimieza = JSON.parse(localStorage.getItem("listaLimpiezaKey")) || [];
// let listaBebidas = JSON.parse(localStorage.getItem("listaBebidasKey")) || [];
// let listaLacteos = JSON.parse(localStorage.getItem("listaLacteosKey")) || [];
// let listaElectronica = JSON.parse(localStorage.getItem("listaElectronicaKey")) || [];

// variales relacionadas al inicio de sesion
let estadoSesion = JSON.parse(sessionStorage.getItem("sesionKey"));
let loginNosotros=document.getElementById("loginNosotros");
// let administradorNosotros=document.getElementsById("administradorNosotros");
let loginError=document.getElementById("loginError");
let administradorError=document.getElementById("administradorError");
let loginDetalles=document.getElementById("loginDetalles");
let administradorDetalles=document.getElementById("administradorDetalles");

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

// eventos formulario producto

if (estadoSesion == true) {
  loginNosotros.className = "nav-item d-none";
  administradorNosotros.className ="nav-item";
  loginError.className = "nav-item d-none";
  administradorError.className = "nav-item active";
  loginDetalles.className = "nav-item d-none";
  administradorDetalles.className = "nav-item active";
} else {
  loginNosotros.className = "nav-item";
  administradorNosotros.className = "nav-item d-none";
  loginError.className = "nav-item";
  administradorError.className = "nav-item d-none";
  loginDetalles.className = "nav-item";
  administradorDetalles.className = "nav-item d-none";
}





formularioProductos.addEventListener("submit", crearProducto);

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
categoria.addEventListener("blur", () => {
  validarCategoria(categoria);
});
precio.addEventListener("blur", () => {
  validarPrecio(precio);
});
stock.addEventListener("blur", () => {
  validarStock(stock);
});

function crearProducto() {
  console.log("desde la funcion crear producto");
}

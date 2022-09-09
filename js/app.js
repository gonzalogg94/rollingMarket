import { Producto } from "./classProducto.js";
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

// variables formulario producto
const modalProducto = new bootstrap.Modal(
  document.getElementById("productosModal")
);


const modalFormProductos = new bootstrap.Modal(document.querySelector(`#productosModal`));
const btnCrearProducto = document.querySelector(`#btnAñadirProducto`);

//Array Lista de Productos
let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey')) || [];

//Elementos del Formulario
let formularioProductos = document.getElementById("formularioProductos");
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagenProducto");
let categoria = document.getElementById("tipoDeProductos");
let precio = document.getElementById("precio");
let stock = document.getElementById("stock");

//Añaden Eventos
btnCrearProducto.addEventListener('click', mostrarFormulario);
formularioProductos.addEventListener('submit', crearProducto);

function mostrarFormulario(){
  modalFormProductos.show();
  codigo.value = uuidv4();
};

// Programacion del boton añadir productos

function crearProducto(e) {
  e.preventDefault();

  //Validaciones necesarias

  let precio = document.getElementById("precio");
  const nuevoProducto = new Producto (codigo.value, nombre.value, descripcion.value, imagen.value, categoria.value, precio.value, stock.value);
  listaProductos.push(nuevoProducto);
  console.log(listaProductos);
  guardarDatosLS();
  limpiarFormulario();
  modalFormProductos.hide();

} 

function limpiarFormulario(){
  formularioProductos.reset();
  //resetear las clases de bootstrap dadas por las validaciones
  codigo.value = uuidv4();
  nombre.className = "form-control"
  descripcion.className = "form-control"
  imagen.className = "form-control"
  categoria.className = "form-control"
  precio.className = "form-control"
  stock.className = "form-control"
};

function guardarDatosLS(){
  localStorage.setItem('listaProductosKey', JSON.stringify(listaProductos));
};



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







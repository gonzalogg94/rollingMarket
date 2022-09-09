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

cargaInicial();
function cargaInicial(){
  if(listaProductos.length > 0){
    listaProductos.map((itemProducto) => {crearFila(itemProducto)});
  } else{
    //mensaje que indique no hay nada para maquetar
    window,alert("No hay nada para maquetar");
  };
};

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
  crearFila(nuevoProducto);
  limpiarFormulario();
  swal("Producto Añadido");
  modalFormProductos.hide();
};

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

function crearFila(itemProducto){
  let tablaProductos = document.querySelector('#tablaProductos');
  tablaProductos.innerHTML += `<td class="text-center">${itemProducto.codigo}</td>
  <td class="text-center">${itemProducto.nombre}</td>
  <td class="text-center">${itemProducto.precio}</td>
  <td class="text-center">${itemProducto.categoria}</td>
  <td class="text-center">${itemProducto.imagen}</td>
  <td class="text-center">${itemProducto.descripcion}</td>
  <td class="text-center">${itemProducto.cantidad}</td>
  <td class="text-center">
    <button class="btn btn-warning mx-1" onclick>
      <i class="bi bi-pencil-square" onclick=""></i>
    </button>
    <button class="btn btn-danger mx-1" onclick="">
      <i class="bi bi-x-square"></i>
    </button>
  </td>`
};


//Validaciones
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







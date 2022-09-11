import {
  validarCodigo,
  validarNombre,
  validarDescripcion,
  validarImagen,
  validarCategoria,
  validarPrecio,
  validarStock,
} from "./helpers.js";
import producto from "./classProducto.js"

// declaracion de variables

let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagenProducto");
let categoria = document.getElementById("tipoDeProductos");
let precio = document.getElementById("precio");
let stock = document.getElementById("stock");
let listaProductos=JSON.parse(localStorage.getItem("listaProductosKey"))||[];
let formularioProductos = document.getElementById("formularioProductos");
const modalFormProductos= new bootstrap.Modal(document.getElementById("modalProductos"))
const btnCrearProducto=document.getElementById("btnCrearProducto");

// eventos formulario producto
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
btnCrearProducto.addEventListener("click",mostrarFormulario);
formularioProductos.addEventListener("submit",crearProducto)



// funciones
function mostrarFormulario(){
  modalFormProductos.show();
  codigo.value=uuidv4()
}
function crearProducto(e){
e.preventDefault();
// agregar las validaciones
const nuevoProducto= new producto(codigo.value,nombre.value,descripcion.value,imagen.value,categoria.value,precio.value,stock.value);
listaProductos.push(nuevoProducto);
console.log(listaProductos)
guardarDatosLS();
limpiarFormulario();
modalFormProductos.hide();
}


function limpiarFormulario(){
  formularioProductos.reset();
}
function guardarDatosLS(){
  localStorage.setItem("listaProductosKey",JSON.stringify(listaProductos))
}



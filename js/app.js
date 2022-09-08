import {
  validarCodigo,
  validarNombre,
  validarDescripcion,
  validarImagen,
  validarCategoria,
  validarPrecio,
  validarStock,
} from "./helpers.js";
import {Producto} from "./classProducto.js";
// // declaramos variables

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];


// variables formulario producto
const modalProducto = new bootstrap.Modal(document.getElementById("productosModal"));
const btnCrearProducto = document.querySelector(`#btnCrearProducto`)
console.log(btnCrearProducto)
btnCrearProducto.addEventListener('click', crearProducto)




let formularioProductos = document.getElementById("formularioProductos");
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagenProducto");
let categoria = document.getElementById("tipoDeProductos");
let precio = document.getElementById("precio");
let stock = document.getElementById("stock");

//eventos submit

function crearProducto(e){
  e.preventDefault();
  let producto = new Producto();
  producto.modificarCodigo = codigo.value;
  producto.modificarNombre = nombre.value;
  producto.modificarDescripcion = descripcion.value;
  producto.modificarImagen = imagen.value;
  producto.modificarCategoria = categoria.value;
  producto.modificarPrecio = precio.value;
  producto.modificarStock = stock.value;

console.log(producto)

listaProductos.push(producto);
guardaDatosEnLS();

  
}

function guardaDatosEnLS(){
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos))
}



// eventos formulario producto

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



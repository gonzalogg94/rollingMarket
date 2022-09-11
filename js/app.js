import {
  // validarCodigo,
  validarNombre,
  validarDescripcion,
  validarImagen,
  validarCategoria,
  validarPrecio,
  validarStock,
} from "./helpers.js";
import {Producto} from "./classProducto.js";
// // declaramos variables

// resetear localstorage DEBUGGING
let resetearLs = false
if(resetearLs){
  let listaVacia = []
  localStorage.setItem("listaProductosKey", JSON.stringify(listaVacia))
}
//********************* */

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];

cargaInicial();
function cargaInicial(){

  if (listaProductos.length > 0){
    listaProductos.map((producto) => {
      crearFila(producto)
      console.log(producto)
    })
  }
}


// variables formulario producto
const modalFormProductos = new bootstrap.Modal(document.querySelector(`#productosModal`));
const btnCrearProducto = document.querySelector(`#btnAñadirProducto`);

function mostrarFormulario(){
  modalFormProductos.show();
  codigo.value = uuidv4();
};




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
  const nuevoProducto = new Producto();
  nuevoProducto.modificarCodigo = codigo.value;
  nuevoProducto.modificarNombre = nombre.value;
  nuevoProducto.modificarDescripcion = descripcion.value;
  nuevoProducto.modificarImagen = imagen.value;
  nuevoProducto.modificarCategoria = categoria.value;
  nuevoProducto.modificarPrecio = precio.value;
  nuevoProducto.modificarStock = stock.value;


console.log(nuevoProducto)

listaProductos.push(nuevoProducto);
guardaDatosEnLS();

crearFila(nuevoProducto);

ordenarProductos();
 
}

function crearFila(producto) {
  let tablaProductos = document.querySelector("#tablaProductos");
  tablaProductos.innerHTML += `<tr>
    <th scope="row">${producto.codigo}</th>
    <td>${producto.nombre}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.imagen}</td>
    <td>${producto.categoria}</td>
    <td>${producto.precio}</td>
    <td>${producto.stock}</td>
    <td>
      <button class="btn btn-warning" onclick="editarProducto('${producto.mostrarCodigo}')">
        <i class="bi bi-pencil-square"></i>
      </button>
      <button class="btn btn-danger" onclick="borrarProducto('${producto.mostrarCodigo}')">
        <i class="bi bi-x-square"></i>
      </button>
    </td>
  </tr>`;
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



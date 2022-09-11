import {
  validarCodigo,
  validarNombre,
  validarDescripcion,
  validarImagen,
  validarCategoria,
  validarPrecio,
  validarCantidad,
} from "./helpers.js";
import producto from "./classProducto.js";

// declaracion de variables

let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagenProducto");
let categoria = document.getElementById("tipoDeProductos");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let listaProductos =JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let formularioProductos = document.getElementById("formularioProductos");
const modalFormProductos = new bootstrap.Modal(
  document.getElementById("modalProductos")
);
const btnCrearProducto = document.getElementById("btnCrearProducto");

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
cantidad.addEventListener("blur", () => {
  validarCantidad(cantidad);
});
btnCrearProducto.addEventListener("click", mostrarFormulario);
formularioProductos.addEventListener("submit", crearProducto);


cargaInicial();

// funciones
function cargaInicial(){
if(listaProductos.length>0){
  // dibujar filas en la tabla
listaProductos.map((Producto)=>{crearFila(Producto)});
}
}

function crearFila(Producto){
  console.log(Producto)
  let tablaProductos=document.getElementById("tablaProductos");
  tablaProductos.innerHTML += `<tr>
  <th class="text-center" scope="row">${Producto.codigo}</th>
  <td class="text-center">${Producto.nombre}</td>
  <td class="text-center">${Producto.descripcion}</td>
  <td class="text-center">${Producto.imagen}</td>
  <td class="text-center">${Producto.categoria}</td>
  <td class="text-center">$${Producto.precio}</td>
  <td class="text-center">${Producto.cantidad}</td>
  <td>
    <button class="btn btn-warning" onclick="editarProducto('${Producto.codigo}')">
      <i class="bi bi-pencil-square"></i>
    </button>
    <button class="btn btn-danger" onclick="borrarProducto('${Producto.codigo}')">
      <i class="bi bi-x-square"></i>
    </button>
  </td>
</tr>`;
}

function mostrarFormulario() {
  modalFormProductos.show();
  codigo.value = uuidv4();
}

function crearProducto(e) {
  e.preventDefault();
  // agregar las validaciones
  if (
    validarNombre(nombre) &&
    validarDescripcion(descripcion) &&
    validarImagen(imagen) &&
    validarCategoria(categoria) &&
    validarPrecio(precio) &&
    validarCantidad(cantidad)
  ) {
    const nuevoProducto = new producto(
      codigo.value,
      nombre.value,
      descripcion.value,
      imagen.value,
      categoria.value,
      precio.value,
      cantidad.value
    );
    listaProductos.push(nuevoProducto);
    console.log(listaProductos);
    guardarDatosLS();
    limpiarFormulario();
    crearFila(nuevoProducto);
    modalFormProductos.hide();
  } else {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Usted debe llenar todos los campos",
    });
  }
}

function limpiarFormulario() {
  formularioProductos.reset();
  nombre.className = "form-control";
  descripcion.className = "form-control";
  imagen.className = "form-control";
  categoria.className = "form-control";
  precio.className = "form-control";
  cantidad.className = "form-control";
}
function guardarDatosLS() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}

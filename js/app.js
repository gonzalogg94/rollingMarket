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

let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagenProducto");
let categoria = document.getElementById("tipoDeProductos");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let productoNuevo = true;
let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let formularioProductos = document.getElementById("formularioProductos");
const modalFormProductos = new bootstrap.Modal(
  document.getElementById("modalProductos")
);
const btnCrearProducto = document.getElementById("btnCrearProducto");

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

function cargaInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((Producto) => {
      crearFila(Producto);
    });
  }
}

function crearFila(Producto) {
  let tablaProductos = document.getElementById("tablaProductos");
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
  productoNuevo = true;
  limpiarFormulario();
  modalFormProductos.show();
  codigo.value = uuidv4();
}

function crearProducto(e) {
  e.preventDefault();

  if (
    validarNombre(nombre) &&
    validarDescripcion(descripcion) &&
    validarImagen(imagen) &&
    validarCategoria(categoria) &&
    validarPrecio(precio) &&
    validarCantidad(cantidad)
  ) {
    if (productoNuevo) {
      generarProducto();
    } else {
      actualizarProducto();
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Usted debe completar todos los campos",
    });
  }
}

function generarProducto() {
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
  Swal.fire({
    icon: "success",
    title: "Ok",
    text: "Su producto ha sido creado",
  });
  modalFormProductos.hide();
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

window.borrarProducto = function (codigo) {
  Swal.fire({
    title: "Eliminar Producto",
    text: "Estas por eliminar el producto seleccionado",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#51BA49",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let copiaListaProductos = listaProductos.filter(
        (Producto) => Producto.codigo != codigo
      );
      listaProductos = copiaListaProductos;

      guardarDatosLS();

      actualizarTabla();
      Swal.fire(
        "Eliminado",
        "El producto se ha eliminado con éxito",
        "success"
      );
    }
  });
};
function actualizarTabla() {
  let tablaProductos = document.getElementById("tablaProductos");
  tablaProductos.innerHTML = "";
  cargaInicial();
}

window.editarProducto = function (codigoBuscado) {
  productoNuevo = false;
  modalFormProductos.show();
  let productoBuscado = listaProductos.find(
    (Producto) => Producto.codigo === codigoBuscado
  );
  codigo.value = productoBuscado.codigo;
  nombre.value = productoBuscado.nombre;
  descripcion.value = productoBuscado.descripcion;
  imagen.value = productoBuscado.imagen;
  categoria.value = productoBuscado.categoria;
  precio.value = productoBuscado.precio;
  cantidad.value = productoBuscado.cantidad;
};

function actualizarProducto() {
  let posicionProducto = listaProductos.findIndex(
    (Producto) => Producto.codigo === codigo.value
  );

  listaProductos[posicionProducto].nombre = nombre.value;
  listaProductos[posicionProducto].descripcion = descripcion.value;
  listaProductos[posicionProducto].imagen = imagen.value;
  listaProductos[posicionProducto].categoria = categoria.value;
  listaProductos[posicionProducto].precio = precio.value;
  listaProductos[posicionProducto].cantidad = cantidad.value;

  guardarDatosLS();

  actualizarTabla();
  modalFormProductos.hide();
  limpiarFormulario();
  Swal.fire(
    "Actualizado",
    "El producto se ha actualizado con éxito",
    "success"
  );
}

export default class Producto {
  constructor(
    codigo,
    nombre,
    descripcion,
    imagen,
    categoria,
    precio,
    cantidad
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.categoria = categoria;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  set modificarCodigo(nuevoCodigo) {
    this.codigo = nuevoCodigo;
  }

  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  set modificarPrecio(nuevoPrecio) {
    this.precio = nuevoPrecio;
  }

  set modificarCategoria(nuevaCategoria) {
    this.categoria = nuevaCategoria;
  }

  set modificarImagen(nuevaImagen) {
    this.imagen = nuevaImagen;
  }

  set modificarDescripcion(nuevaDescripcion) {
    this.descripcion = nuevaDescripcion;
  }

  set modificarCantidad(nuevaCantidad) {
    this.cantidad = nuevaCantidad;
  }

  get mostrarCodigo() {
    return this.codigo;
  }

  get mostrarNombre() {
    return this.nombre;
  }

  get mostrarPrecio() {
    return this.precio;
  }

  get mostrarCategoria() {
    return this.categoria;
  }

  get mostrarImagen() {
    return this.imagen;
  }

  get mostrarDescripcion() {
    return this.descripcion;
  }

  get mostrarCantidad() {
    return this.cantidad;
  }
}

import Producto from "./classProducto.js";
import { validarEmail, validarPassword } from "./helpers.js";
let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
const modalLogin = new bootstrap.Modal(document.getElementById("modalLogin"));
const mail = "rollingmarket@gmail.com";
const pass = "rollingMarket2022*";
let estadoSesion = JSON.parse(sessionStorage.getItem("sesionKey"));
let formulario = document.getElementById("loging");
let usuario = document.getElementById("usuario");
let password = document.getElementById("inputPassword");
let loginIndex = document.getElementById("loginIndex");
let administradorIndex = document.getElementById("administrador");

window.detalleProducto = function (codigo) {
  window.location.href =
    window.location.origin + `/pages/detalles.html?codigo=` + codigo;
};
let listaCompras = JSON.parse(localStorage.getItem("listaComprasKey")) || [];

window.agregarAlCarrito = function (codigo) {
  const parametroCodigo = codigo;
  let listaProductos =
    JSON.parse(localStorage.getItem("listaProductosKey")) || [];
  let productoBuscado = listaProductos.find((itemProducto) => {
    return itemProducto.codigo === parametroCodigo;
  });
  productoBuscado["codigoBarra"] = uuidv4();
  listaCompras.push(productoBuscado);
  numeroDeProductos = listaCompras.length;
  numerito();
  localStorage.setItem("listaComprasKey", JSON.stringify(listaCompras));
};
let numeroDeProductos = listaCompras.length;

listaProductos.map((producto) => {
  crearCardProducto(producto);
});
formulario.addEventListener("submit", validarAdm);
usuario.addEventListener("blur", () => {
  validarEmail(usuario);
});
password.addEventListener("blur", () => {
  validarPassword(password);
});

if (estadoSesion == true) {
  loginIndex.className = "nav-item d-none";
  administradorIndex.className = "nav-item";
} else {
  validarAdm();
}

function validarAdm(e) {
  e.preventDefault();
  if (mail === usuario.value && pass === password.value) {
    let administrador = document.getElementById("administrador");
    administrador.className = "nav-item active";
    loginIndex.className = "nav-item d-none";
    sessionStorage.setItem("sesionKey", JSON.stringify(true));
    modalLogin.hide();
  } else {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "El mail o la contrase??a son incorrectos",
    });
    limpiarLogin();
  }
}

function limpiarLogin() {
  formulario.reset();
  usuario.className = "form-control";
  password.className = "form-control";
}

function crearCardProducto(producto) {
  if (producto.categoria === "categoria1") {
    let productos = document.getElementById("limpieza");
    productos.innerHTML += `<aside class="col-lg-3 col-md-6 col-sm-12 mt-2">
  <div class="card text-center">
    <img
    src="${producto.imagen}"
    class="card-img-top w-100"
    alt="${producto.nombre}"
    />
    <div class="card-body fondoCards">
      <h5 class="card-title">
         ${producto.nombre}
      </h5>
      <h5>$${producto.precio}</h5>
      <span class="badge text-bg-warning">${producto.cantidad} productos disponibles</span>
      <div class="row mt-4">
        <div class="col-6">
          <button class="btn colorVerde" onclick="detalleProducto('${producto.codigo}')"><a class="text-black text-decoration-none">Detalles</a></button>
        </div>
        <div class="col-6">
          <button class="btn col-6" onclick="agregarAlCarrito('${producto.codigo}')">
            <i class="bi bi-cart4 text-dark fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</aside>`;
  } else if (producto.categoria === "categoria2") {
    let productos = document.getElementById("bebidas");
    productos.innerHTML += `<aside class="col-lg-3 col-md-6 col-sm-12 mt-2">
  <div class="card text-center">
    <img
    src="${producto.imagen}"
    class="card-img-top w-100"
    alt="${producto.nombre}"
    />
    <div class="card-body fondoCards">
      <h5 class="card-title">
         ${producto.nombre}
      </h5>
      <h5>$${producto.precio}</h5>
      <span class="badge text-bg-warning">${producto.cantidad} productos disponibles</span>
      <div class="row mt-4">
        <div class="col-6">
          <button class="btn colorVerde" onclick="detalleProducto('${producto.codigo}')"><a class="text-black text-decoration-none">Detalles</a></button>
        </div>
        <div class="col-6">
          <button class="btn col-6" onclick="agregarAlCarrito('${producto.codigo}')">
            <i class="bi bi-cart4 text-dark fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</aside>`;
  } else if (producto.categoria === "categoria3") {
    let productos = document.getElementById("lacteos");
    productos.innerHTML += `<aside class="col-lg-3 col-md-6 col-sm-12 mt-2">
  <div class="card text-center">
    <img
    src="${producto.imagen}"
    class="card-img-top w-100"
    alt="${producto.nombre}"
    />
    <div class="card-body fondoCards">
      <h5 class="card-title">
         ${producto.nombre}
      </h5>
      <h5>$${producto.precio}</h5>
      <span class="badge text-bg-warning">${producto.cantidad} productos disponibles</span>
      <div class="row mt-4">
        <div class="col-6">
          <button class="btn colorVerde" onclick="detalleProducto('${producto.codigo}')"><a class="text-black text-decoration-none">Detalles</a></button>
        </div>
        <div class="col-6">
          <button class="btn col-6" onclick="agregarAlCarrito('${producto.codigo}')">
            <i class="bi bi-cart4 text-dark fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</aside>`;
  } else {
    let productos = document.getElementById("electronica");
    productos.innerHTML += `<aside class="col-lg-3 col-md-6 col-sm-12 mt-2">
  <div class="card text-center">
    <img
    src="${producto.imagen}"
    class="card-img-top w-100"
    alt="${producto.nombre}"
    />
    <div class="card-body fondoCards">
      <h5 class="card-title">
         ${producto.nombre}
      </h5>
      <h5>$${producto.precio}</h5>
      <span class="badge text-bg-warning">${producto.cantidad} productos disponibles</span>
      <div class="row mt-4">
        <div class="col-6">
          <button class="btn colorVerde" onclick="detalleProducto('${producto.codigo}')"><a class="text-black text-decoration-none">Detalles</a></button>
        </div>
        <div class="col-6">
          <button class="btn col-6" onclick="agregarAlCarrito('${producto.codigo}')">
            <i class="bi bi-cart4 text-dark fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</aside>`;
  }
  numerito();
}

function numerito() {
  let numero = document.getElementById("carritoCompras");
  numero.innerHTML = `<a href="../pages/listaCompras.html"><i class="bi bi-cart4 text-dark fs-5"></i></a>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      ${numeroDeProductos}
      <span class="visually-hidden">unread messages</span>
    </span>`;
}

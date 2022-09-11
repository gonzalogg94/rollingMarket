import { Producto } from "./classProducto.js";
import { validarEmail, validarPassword } from "./helpers.js";

  // *************************************   DEBUG   *****************************************
    let debug = true 
  // *************************************   DEBUG   *****************************************

  

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];

const modalLogin = new bootstrap.Modal(document.getElementById("modalLogin"));
const mail = "rollingmarket@gmail.com";
const pass = "rollingMarket2022*";
let formulario = document.getElementById("loging");
let usuario = document.getElementById("usuario");
let password = document.getElementById("inputPassword");

// agregamos los eventos.
formulario.addEventListener("submit", validarAdm);
usuario.addEventListener("blur", () => {
  validarEmail(usuario);
});
password.addEventListener("blur", () => {
  validarPassword(password);
});

// funciones
function validarAdm(e) {
  e.preventDefault();

  // *************************************   DEBUG   *****************************************
  
  if(debug){
    let administrador = document.getElementById("administrador");
      administrador.className = "nav-item";
      modalLogin.hide();
      return 
  }
  // *************************************   DEBUG   *****************************************






  if (mail === usuario.value && pass === password.value) {
    let administrador = document.getElementById("administrador");
    administrador.className = "nav-item";
    modalLogin.hide();
  } else {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "El mail o la contraseña son incorrectos",
    });
    limpiarLogin();
  }
}
function limpiarLogin() {
  formulario.reset();
  usuario.className = "form-control";
  password.className = "form-control";
}


function ordenarProductos(){
  for (let i = 0; i < listaProductos.length; i++) {
    switch (listaProductos[i].categoria) {
      case "categoria1": 
      crearCardProducto(listaProductos[i], `#limpieza`)
        
        break;
      case "categoria2": 
      crearCardProducto(listaProductos[i], `#bebida`)
        
        break;
      case "categoria3": 
      crearCardProducto(listaProductos[i], `#lacteo`)
        
        break;
      case "categoria4": 
      crearCardProducto(listaProductos[i], `#electronica`)
        
        break;
      
    }
  }
    
  }


ordenarProductos();


function crearCardProducto(producto, containerId){
  let productos = document.querySelector(containerId)
  productos.innerHTML += `<aside class="col-lg-3 col-md-6 col-sm-12">
  <div class="card">
    <img src="${producto.imagen}" class="card-img-top w-75" alt="producto">
    <div class="card-body fondoCards">
      <h5 class="card-title">
        ${producto.nombre}
      </h5>
      
      <h5>${producto.precio}</h5>
      <span class="badge text-bg-warning">${producto.stock} disponibles</span>
      <div class="row mt-4">
        <div class="col-6">
          <button class="btn colorVerde"><a class="text-black text-decoration-none" href="./pages/error404.html">Detalles</a></button>
        </div>
        <div class="col-6">
          <button class="btn col-6">
            <i class="bi bi-cart4 text-dark fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</aside>`
  
}




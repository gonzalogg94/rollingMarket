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
       console.log("es categoria 1")
        
        break;
      case "categoria2": 
       console.log("es categoria 2")
        
        break;
      case "categoria3": 
       console.log("es categoria 3")
        
        break;
      case "categoria4": 
       console.log("es categoria 4")
        
        break;
    
      default:
        break;
    }
    
  }
}

ordenarProductos();
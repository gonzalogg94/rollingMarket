import Producto from ".classProducto.js";

let listaLimieza = JSON.parse(localStorage.getItem("listaLimpiezaKey")) || [];
let listaBebidas = JSON.parse(localStorage.getItem("listaBebidasKey")) || [];
let listaLacteos = JSON.parse(localStorage.getItem("listaLacteosKey")) || [];
let listaElectronica = JSON.parse(localStorage.getItem("listaElectronicaKey")) || [];
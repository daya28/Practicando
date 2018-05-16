// LAS VARIABLES

// variables boleana
var boleana = true;
console.log("boleana",boleana);


// Variables de tipo arreglo

var colores = ["rojo","amarillo"];
console.log("colores",colores[0])

// Variables de tipo objeto 
// (object = propiedad,valor)

var jugo = {ingrediente1:"fresa",
			ingrediente2:"mandarina",
			ingrediente3:"banano"}
console.log("jugo",jugo.ingrediente1);


// Variables DOM Modelos de objeto del documento 

var caja = document.querySelector("#caja");
console.log("caja",caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";


var cajas = document.querySelectorAll(".cajas");
console.log("cajas",cajas);



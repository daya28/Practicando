// CICLO FOR
/*1er parametro me dice que empieza en 0, el 2do parametro me dice que no se repita hasta 5 veces, y el 3er parametro (i++) que vaya incrementando de a una sola unidad
*/

for(var i = 0; i < 5; i++){

	console.log("i", i);

}	
/*________________________________________________________*/
// Ejemplo de donde usar el ciclo For

var cajas = document.querySelectorAll(".cajas");
console.log("cajas",cajas);

for(var i = 0; i < cajas.length; i++){

	cajas[i].style.width = "20px";
	cajas[i].style.height = "20px";
	cajas[i].style.background = "blue";
	cajas[i].style.margin = "5px";
	cajas[i].style.display = "inline-block";

}

/*________________________________________________________*/

// CICLO WHILE 
var n = 1;

while(n <= 5){
	console.log("n",n);
	// coloco la consola antes del conteo (n++) para que me empiece a contar desde el 1, o el valor de la var
	n++;
}

// CICLO DO WHILE 
var p = 1;

do{
	console.log("p",p);
	p++

}
while(p <= 5)

/* Estos CICLOS se pueden adaptar al caso que yo quiera, no tiene que ser ajuro para un solo tipo de operacion */
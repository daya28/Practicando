// Javascript

/*var caja = document.querySelector("#caja");

caja.addEventListener("click", cambiarColor);

function cambiarColor(){

	caja.style.background = "red";

	console.log('colorrojo');
} */

// JQuery

$("#caja").click(function(){

	$("#caja").css({"background":"red", 
					"width":"400px", 
					"height":"100px"});


});

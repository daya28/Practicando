// CONDICIONES
/*=============================================*/
/* Quiero que me muestre si a es mayor que b, sino si a es igual a b, 
*/

var a = 5;
var b = 10;

if(a > b){

	console.log("a es mayor que b");

}else if(a == b){
// si voy a utilizar el else if debo terminar con else.
	console.log("a es lo mismo que b");

}else{

	console.log("a no es lo mismo que b y a es menor que b");
}

// CAMBIOS
/*=============================================*/
var dia = "lunes";

switch(dia){

	case "sabado":
	console.log("voy a estudiar php");
	break;

	case "martes":
	console.log("voy a estudiar css");
	break;

	default: console.log("voy a estudiar js")
	// cierro el ciclo con default
};
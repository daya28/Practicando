// FUNCIONES SIN PARAMETROS

// 1. Declaro la funcion

function saludos(){

	// Tarea de la funcion
	console.log("saludo","hola")

}

// 2. Ejecutamos la funcion
// No se le pone nada dentro del parentesis porque es funcion sin parametros
saludos();

// FUNCIONES CON PARAMETROS
function operacion(digito1, digito2){

// sume dos parametros
	var resultado = digito1 + digito2;
	console.log("resultado",resultado);
}

operacion(5,7);
operacion(10,5);

// FUNCIONES CON RETORNO SIN PARAMETROS
function retorno1(){

	var numero = 5;
	return numero;

}

console.log(retorno1())
// Devuelve un valor, en este caso el valor del numero

// FUNCIONES CON RETORNO CON PARAMETROS
// El valor se vuelve dinamico cuando retorno con parametros en la funcion (la de color naranja)
function retorno2(numero){

	return numero;
}

console.log(retorno2(10));

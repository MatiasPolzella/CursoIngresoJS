/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese clave");

	while ( clave != "utn750"){
		clave = prompt("Clave invalida. Reingrese clave: ");

	}
	alert("Clave Valida!!!");
	
}

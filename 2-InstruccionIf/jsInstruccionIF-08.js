function mostrar()
{
	let edad;
	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if (estado != "Divorciado" && estado != "Casado" && edad >= 18) {
		alert("Es soltero y no es menor");
	}
	
}
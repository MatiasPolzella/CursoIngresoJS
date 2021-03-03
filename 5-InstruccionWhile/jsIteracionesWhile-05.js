/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese sexo f/m: ");

	while ( !(sexo == "f" || sexo == "m")){
		sexo = prompt("Error. Ingrese sexo f/m: ");

	}

	document.getElementById("txtIdSexo").value = sexo;


	
}
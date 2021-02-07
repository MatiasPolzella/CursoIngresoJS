/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	
	nombre = prompt("Ingrese su nombre"); //asigno a la variable el valor que le pido

	document.getElementById("txtIdNombre").value = nombre; //muestro por pantalla el nombre
}


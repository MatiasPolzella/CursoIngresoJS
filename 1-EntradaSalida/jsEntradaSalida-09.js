/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*
1- Identificar datos y reservar memoria para ellos (sueldo, aumento, nuevo sueldo)
2- Conseguir el sueldo
3- Calcular el aumento del 10%
4- Calcular el nuevo sueldo
5- Informo el nuevo sueldo */

function mostrarAumento()
{

	let sueldo;
	let aumento;
	let nuevoSueldo;

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	aumento = sueldo * 10 / 100;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo.toFixed(2);

	
}

  function mostrar()
{
	let numero = 0;
	let i = 0;

	while( i < 5){
		
		numero = numero + parseInt(prompt("Ingrese un numero: "));

		i++;
	}

	document.getElementById("txtIdSuma").value = numero;
	document.getElementById("txtIdPromedio").value = numero / 5;

}
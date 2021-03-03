function mostrar()
{
	let numero;
	let min = 1;
	let max = 10;

	numero = Math.floor(Math.random()* (max - 1 + min)) + min;

	alert(numero);
}
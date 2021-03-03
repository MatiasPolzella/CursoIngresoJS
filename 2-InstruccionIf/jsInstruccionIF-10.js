function mostrar()
{
	let nota;

	nota = Math.floor(Math.random() *10) + 1;

	if (nota >= 9) {
		alert(nota + " Excelente");
	} else if ( nota >= 4) {
			alert(nota + " Aprobo");
	} else {
		alert(nota + " Vamos la próxima se puede");
	}
 
 }
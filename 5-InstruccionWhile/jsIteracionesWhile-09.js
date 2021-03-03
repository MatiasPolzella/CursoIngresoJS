/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let seguir;
	let flag = 0;
	
	do {
		numero = parseInt(prompt("Ingrese un numero: "));

		if (flag == 0 || numero > maximo){
			maximo = numero;
			
		}

	    if (flag == 0 || numero < minimo){
			minimo = numero;
			flag = 1;
		}

		seguir = prompt("Quiere ingresar otro numero?: ");
	} while(seguir == "s");


	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

	



}

//estrategia de resolucion
//1- declaracion de variables (numero,max,min,seguir)
//2- genero un bucle del tipo mientras el usuario quiera
//---------- aca coloco el codigo que va dentro del bucle
//3- pido un numero
//4- valido el numero
//5- identifico si estoy en la pimer iteracion o en las siguientes
//5.1- si estoy en la pimer iteracion, numero va a ser mi maximo y mi minimo
//5.2- si no estoy en la primer iteracion,
//5.2.1- me fijo si el numeor es un nuevo maximo (de ser asi lo actualizo)
//5.2.2- me fijo si el numero es un nuevo minimo (de ser asi lo actualizo)
//6- pregunto si ingresa otro numero 
//-------------
//7- informoel maximo y el minimo
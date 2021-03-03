/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  let numero;
  let seguir;
  let acumNeg = 0;   
  let acumPos = 0;
  let contPos = 0;
  let contNeg = 0;
  let contCeros = 0;
  let contPares = 0;
  let promPos = 0;
  let promNeg = 0;
  let diferencia;

  do {
    numero = parseInt(prompt("Ingrese un numero: "));
    
    if (numero < 0) {
      acumNeg += numero;
	  contNeg++;
	  
    } else if (numero == 0) {
     contCeros++;

    } else {
     acumPos += numero;
	 contPos++; 
    }

	if (numero % 2 == 0){
		contPares++;
	}

    seguir = prompt("Quiere ingresar otro numero?: ");
  } while (seguir == "s");

  if (contPos > 0){
	promPos = acumPos / contPos;
	
  }

  if (contNeg > 0){
	promNeg = acumNeg / contNeg;
  }

  diferencia = contPos - contNeg;

  console.log("1-Suma de los negativos: " + acumNeg);               
  console.log("2-Suma de los positivos: " + acumPos);               
  console.log("3-Cantidad de positivos: " + contPos);               
  console.log("4-Cantidad de negativos: " + contNeg);               
  console.log("5-Cantidad de ceros: " + contCeros);               
  console.log("6-Cantidad de pares: " + contPares);               
  console.log("7-Promedio de positivos: " + promPos);               
  console.log("8-Promedio de negativos: " + promNeg);               
  console.log("9-Diferencia: " + diferencia);               

}

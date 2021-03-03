function mostrar() {
  let numero;
  let contadorDivisores = 0;

  numero = parseInt(prompt("Ingrese un numero: "));
  while (isNaN(numero)){
	  numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "))
  }

  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      contadorDivisores++;
    }
  }

  if (contadorDivisores == 2) {
    alert(numero + " es primo");
  } else {
    alert(numero + " no es primo");
  }
} 


//otra forma
/*function mostrar() {

let numero;
  let contadorDivisores = 0;

  numero = parseInt(prompt("Ingrese un numero: "));

  for (let i = 2; i <= numero; i++) {
    if (numero % i == 0) {
      contadorDivisores++;
    }
  }

  if (contadorDivisores != 0 || numero <= 1) {
    alert(numero + " no es primo");
  } else {
    alert(numero + " es primo");
  }
}*/
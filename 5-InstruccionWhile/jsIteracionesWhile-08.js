/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let numero;
  let acumPos = 0;
  let acumNeg = 1;
  let seguir;
  let flag = 1;

  do {
    numero = parseInt(prompt("Ingrese un numero: "));
    while (isNaN(numero)) {
      numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
    }

    if (numero >= 0) {
      acumPos = acumPos + numero;
    } else {
      acumNeg = acumNeg * numero;
      flag = 0;
    }

    seguir = prompt("Quiere continuar?: ");
  } while (seguir == "s");

  if (flag) {
    acumNeg = 0;
  }

  document.getElementById("txtIdSuma").value = acumPos;
  document.getElementById("txtIdProducto").value = acumNeg;
}
// estrategia de resolucion
// 1- declarar variables (numero, acumulador de positivos y un acumulador de negativos)
// 2- debo generar un bucle del tipo mientras el usuario quiera
//----- aca empieza lo que debo hacer dentro del bucle-----
//3- pido un numero
//4- validar que sea un numero
//5- analizar el signo del numero
//6- actualizo el acumulador que corresponda
//7- le pregunto al usuario si quiere continuar (si quiere continuar retrocedemos hasta el punto 3)
//------ fin del bucle---
//8- (si no quiere continuar) mostrar los resultados

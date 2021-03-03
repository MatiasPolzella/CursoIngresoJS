/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() 
{
  let seguir;
  let numero;
  let acumulador = 0;
  let contador = 0;

  do {
    numero = parseInt(prompt("Ingrese un numero: "));
    acumulador = acumulador + numero;
    contador++;

    seguir = prompt("Quiere ingresar otro numero? ")
   
      
    } while (seguir == "s");
   
    promedio = acumulador / contador;

    document.getElementById("txtIdSuma").value = acumulador;
    document.getElementById("txtIdPromedio").value = promedio;
    
  } 

  



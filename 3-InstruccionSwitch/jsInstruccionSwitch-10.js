function mostrar() {
  let destino;
  let estacion;
  let flag = 0;

  destino = document.getElementById("txtIdDestino").value;
  estacion = document.getElementById("txtIdEstacion").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        flag = 1;
      }
      break;
    case "Verano":
      if (destino == "Mar del plata" || destino == "Cataratas") {
        flag = 1;
      }
      break;
    case "Otoño":
      flag = 1;
      break;
    case "Primavera":
      if (destino != "Bariloche") {
        flag = 1;
      }
      break;
  }
  if (flag == 1) {
    alert("Se viaja");
  } else {
    alert("No se viaja");
  }
}

// ESTRATEGIA de resolucion
// 1- definir variables
// 2- relevar los datos de entrada (destino / estacion)
// 3- definir un ambito para cada estacion
// 4- dentro de cada ambito del punto anterior definir un ambito para cada destino
// 5- calculamos el precio final
// 6- informamos el precio final

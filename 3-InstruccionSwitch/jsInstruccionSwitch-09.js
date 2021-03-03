function mostrar() {
  let destino;
  let estacion;
  let precioFinal;
  let descuento = 0;
  let aumento = 0;
  const PRECIO = 15000;

  destino = document.getElementById("txtIdDestino").value;
  estacion = document.getElementById("txtIdEstacion").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        aumento = 20;
      } else if (destino == "Mar del plata") {
        descuento = 20;
      } else {
        descuento = 10; //Cordoba y cataratas
      }
      break;
    case "Verano":
      if (destino == "Bariloche") {
        descuento = 20;
      } else if (destino == "Mar del plata") {
        aumento = 20;
      } else {
        aumento = 10; //Cordoba y cataratas
      }
      break;
    case "Otoño":
    case "Primavera":
      if (destino != "Cordoba") {
        aumento = 10;
      }
      break;
  }

  if (aumento != 0) {
    precioFinal = PRECIO + (PRECIO * aumento) / 100;
  } else if (descuento != 0) {
    precioFinal = PRECIO - (PRECIO * descuento) / 100;
  } else {
    precioFinal = PRECIO;
  }

  alert("Precio final $" + precioFinal);
}

// ESTRATEGIA de resolucion
// 1- definir variables
// 2- relevar los datos de entrada (destino / estacion)
// 3- definir un ambito para cada estacion
// 4- dentro de cada ambito del punto anterior definir un ambito para cada destino
// 5- calculamos el precio final
// 6- informamos el precio final

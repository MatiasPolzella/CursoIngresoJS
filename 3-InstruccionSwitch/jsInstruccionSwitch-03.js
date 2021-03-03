function mostrar() {
  let mes;

  mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Febrero":
      alert("Este mes no tiene mas de 29 dias");
      break;
    default:
      alert("Este mes tiene 30 dias o mas");
  }
}

// if (mes == "Febrero") {
//alert("este mes tiene mas de 29 dias");
//}

// else {
//alert("este mes tiene 30 dias o mas");
//}

// asi seria la resolución original, no con Switch

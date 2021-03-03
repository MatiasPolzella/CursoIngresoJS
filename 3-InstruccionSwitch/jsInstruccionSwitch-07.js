function mostrar() {
  let destino;

  destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Bariloche":
      alert("esta al Oeste");
      break;
    case "Cataratas":
      alert("Esta al Norte");
      break;
    case "Mar del plata":
      alert("Esta al Este");
      break;
    case "Ushuaia":
      alert("Esta al Sur");
      break;
  }
}

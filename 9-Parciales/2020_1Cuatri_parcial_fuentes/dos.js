function mostrar()
{
    let tipo;
    let cantidadDeBolsas;
    let precioPorBolsa;
    let respuesta;
    let acumuladorDeBolsas;
    let precioBrutoTotal;
    let precioBrutoProducto;
    let porcentaje;
    let descuento;
    let precioConDescuento;
    let acumuladorCal;
    let acumuladorCemento;
    let acumuladorArena;
    let tipoConMasUnidades;
    let banderaDelPrimerProducto;
    let tipoMasCaro;
    let tipoMasCaroPrecio;
    



    banderaDelPrimerProducto = "es el primero";
    acumuladorCal = 0;
    acumuladorCemento = 0;
    acumuladorArena = 0;

    acumuladorDeBolsas = 0;
    precioBrutoTotal = 0;

    respuesta = "s";
    while (respuesta == "s"){
        tipo = prompt("Ingrese tipo");
        while (tipo != "arena" && tipo != "cal" && tipo != "cemento"){
            tipo = prompt("Error. Ingrese tipo");
        }

        cantidadDeBolsas = prompt("Ingrese cantidad de bolsas");
        cantidadDeBolsas = parseInt(cantidadDeBolsas);
        while (cantidadDeBolsas < 1) {
            cantidadDeBolsas = prompt("Error. Ingrese cantidad de bolsas");
            cantidadDeBolsas = parseInt(cantidadDeBolsas);
        }

        precioPorBolsa = prompt("Ingrese cantidad de bolsas");
        precioPorBolsa = parseInt(precioPorBolsa);
        while (precioPorBolsa < 1) {
            precioPorBolsa = prompt("Error. Ingrese cantidad de bolsas");
            precioPorBolsa = parseInt(precioPorBolsa);
        }

        acumuladorDeBolsas = acumuladorDeBolsas + cantidadDeBolsas;
        precioBrutoProducto = cantidadDeBolsas * precioPorBolsa;
        precioBrutoTotal = precioBrutoTotal + precioBrutoProducto;

        if (banderaDelPrimerProducto == "es el primero"){
            banderaDelPrimerProducto = "ya paso";
            tipoMasCaro = tipo;
            tipoMasCaroPrecio = precioPorBolsa;
        } else{
            if (precioPorBolsa > tipoMasCaroPrecio){
            tipoMasCaro = tipo;
            tipoMasCaroPrecio = precioPorBolsa;
            }
        }

        switch(tipo)
        {
            case "arena":
            acumuladorArena = acumuladorArena + cantidadDeBolsas    
            break;
            case "cal":
            acumuladorCal = acumuladorCal + cantidadDeBolsas    
            break;
            case "cemento":
            acumuladorCemento = acumuladorCemento + cantidadDeBolsas    
            break;
        }



        respuesta = prompt("Seguir ?")
    }

    if (acumuladorArena > acumuladorCemento && acumuladorArena > acumuladorCal){
        //arena
        tipoConMasUnidades = "arena";

    } else{
        if (acumuladorCal > acumuladorCemento){
            //cal
            tipoConMasUnidades = "cal";
        } else {
            //cemento
            tipoConMasUnidades = "cemento";
        }
    }





 if (acumuladorDeBolsas > 30)
 {
     porcentaje = 25;
 }else 
 {
   if (acumuladorDeBolsas > 10)
     {
         porcentaje = 15;
     }else
     {
         porcentaje = 0;
     }
 }
if (porcentaje != 0 ){
    descuento = precioBrutoTotal * porcentaje / 100;
    precioConDescuento = precioBrutoTotal - descuento;  
    console.log ("Pagar con descuento: " + precioConDescuento);
}
// El importe total a pagar, bruto sin descuento
console.log ("bruto sin descuento: " + precioBrutoTotal);
console.log ("el tipo mas comprado es: " + tipoConMasUnidades);
console.log ("el tipo mas comprado es: " + tipoMasCaro);


}

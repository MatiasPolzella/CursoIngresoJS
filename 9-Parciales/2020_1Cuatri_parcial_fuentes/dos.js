/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
    let precio;
    let cantidad;
    let importe;
    let subtotal = 0;
    let seguir;
    let acumC = 0;
    let acumCal = 0;
    let acumA = 0;
    let acumBolsas = 0;
    let descuento;
    let neto;
    let maxPrecio;
    let maxTipo;
    let flag = 1  // porque es del tipo desea continuar
    let tipoMaxBolsas;


    do{
        tipo = prompt("Ingrese tipo cal/arena/cemento: ");
        while(tipo != "cal" && tipo != "cemento" && tipo != "arena"){
            tipo = prompt("Error. Ingrese tipo cal/arena/cemento: ");
        }
        cantidad = parseInt(prompt("Ingrese cantidad: "));
        while(isNaN(cantidad) || cantidad <= 0){
            cantidad = parseInt(prompt("Error. Ingrese cantidad: "));
        }
        precio = parseInt(prompt("Ingrese precio: "));
        while(isNaN(precio) || precio <= 0){
            precio = parseInt(prompt("Error. Ingrese cantidad: "));
        }
        importe = precio * cantidad;
        subtotal += importe;

        acumBolsas += cantidad;

        switch(tipo){
            case "arena":
                acumA += cantidad;
                break;
                case "cal":
                acumCal += cantidad;
                break;
                case "cemento":
                acumC += cantidad;
                break;
        }

        if (flag || precio > maxPrecio){
            maxPrecio = precio;
            maxTipo = tipo;
            flag = 0;
        }

        seguir = prompt("Quiere comprar algo mas ?");
    }while (seguir == 's');

    //calculo el descuento
    if (acumBolsas < 10){
        descuento = 0;
    }
    else if(acumBolsas < 30){
        descuento = 0.15;
    }
    else{
        descuento = 0.25;
    }

    if (acumA > acumC && acumA > acumCal){
        tipoMaxBolsas = "Arena";
    }
    else if (acumC >= acumA && acumC > acumCal){
        tipoMaxBolsas = "Cemento";
    }
    else {
        tipoMaxBolsas = "Cal";
    }

    console.log("a- Importe Bruto a pagar $ " + subtotal);

    if (descuento !=0){
        neto = subtotal - subtotal * descuento;
        console.log("b- Importe neto a pagar $ " + neto);
    }

    console.log("d- el tipo con mas cantidad de bolsas es " + tipoMaxBolsas);

    console.log("f- el tipo mas caro es " + maxTipo + " con un valor de $" + maxPrecio);

}

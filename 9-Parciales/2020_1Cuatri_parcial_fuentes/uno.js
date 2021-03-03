
function mostrar()
{

 let tipo;
 let precio;
 let cantidad;
 let marca
 let fabricante;
 let acumuladorBarbijo = 0;
 let acumuladorAlcohol = 0;
 let acumuladorJabon = 0;
 let contBarbijo = 0;
 let contAlcohol = 0;
 let contJabon = 0;
 let precioAlcoholBarato;
 let cantidadAlcoholBarato;
 let fabricanteAlcoholBarato;
 let promedioCompra;
 let mayorTipo;
 let flagAlcohol = 0;
 let mensajeAlcohol = "No se compraron alcoholes";
 let mensajeb;
 let mensajeJabon;


 for (let i = 0; i < 1; i++){
	 tipo = prompt('Ingrese tipo "barbijo", "jabon", o "alcohol": ');
	 while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){
		 tipo = prompt('Tipo invalido. Ingrese tipo "barbijo", "jabon", o "alcohol": ');
	 } 
	 precio = parseFloat(prompt("Ingrese precio $(200-300):"));
	 while (precio < 100 || precio > 300 || isNaN(precio)){
		 precio = parseFloat(prompt("Error. Ingrese precio $(200-300):"));
	 }
	 cantidad = parseInt(prompt("Ingrese cantidad max 1000:"));
	 while (!(cantidad > 0 && cantidad <= 1000)) {
		 cantidad = parseInt(prompt("Error. ingrese cantidad max 1000:"));
	 }
	 marca = prompt("Ingrese marca: ");
	 fabricante = prompt("Ingrese fabricante: ");

	 switch(tipo){
		 case "alcohol":
			 acumuladorAlcohol += cantidad;
			 contAlcohol++;

			 if (flagAlcohol == 0 || precioAlcoholBarato > precio){
				 precioAlcoholBarato = precio;
				 cantidadAlcoholBarato = cantidad;
				 fabricanteAlcoholBarato = fabricante;
				 flagAlcohol = 1;
			 }
			 break;
			 
			 case "barbijo":
				 acumuladorBarbijo += cantidad;
				 contBarbijo++;
				 break;
				 
				 case "jabon":
					 acumuladorJabon += cantidad;
					 contJabon++;
					 break;
	 }

 }

 if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
  mayorTipo = "Alcohol";
  promedioCompra = acumuladorAlcohol / contAlcohol;
 }
else if (acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >= acumuladorAlcohol){
mayorTipo = "Barbijo";
promedioCompra = acumuladorBarbijo / contBarbijo;
}
else{
mayorTipo = "Jabon";
promedioCompra = acumuladorJabon / contJabon;
}

if (flagAlcohol == 1){
mensajeAlcohol = "Fabricante alcohol barato: " + fabricanteAlcoholBarato +
"\nCantidad: " + cantidadAlcoholBarato +
"\nPrecio: " + precioAlcoholBarato;


}
mesajeb = "Tipo con mas unidades: " + mayorTipo + " Promedio: " + promedioCompra;
mensajeJabon = "Unidades de jabon: " + acumuladorJabon;

alert(mensajeAlcohol + "\n" + mensajeb + "\n" + mensajeJabon);
}
 










// estrategia de resolucion
// 1- declaracion de variables 
// 2- generar un bucle que se repita 5 veces (tipo, cantidad, precio, importeB, importeN, descuento, seguir) valido todo segun corresponda
// (utilizo un for porque conozco de antemano la cantidad de repeticiones

// A- tengo que reconocer si el producto es alcohol y recordar el precio la cantidad y el fabricante de el de menor precio
// B- (el promedio por compra es esa cantidad de unidades (700 barbijos en tres compras, 700/3=233,33 promedio). Tengo que acumular
// las cantidades de unidades de cada tipo y la cantidad de tipo de producto para sacar el promedio de compra del acumulador mayor.
// C-tengo que acumular la cantidad de jabones (me sirve lo que hago en el punto B).

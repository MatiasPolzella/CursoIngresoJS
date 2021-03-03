function mostrar()
{
	let sexo;
	let edad;
	let temperatura;
	let estadoCivil;
	let nombre;
	let seguir;

	let flag = -1;
	let maxTemp;
	let maxNombre;
	
	let contMayorViudo = 0;
	let contHSV = 0;
	let contJovatoConFiebre = 0;
	let acumEdadHS = 0;
	let contHS = 0;
	let promedio;

	do{
		nombre = prompt("Ingrese nombre: ");
		edad = parseInt(prompt("Ingrese edad: "));
		while (edad < 0 || isNaN(edad)){
			edad = parseInt(prompt("Error. Ingrese edad: "));
		}
		sexo = prompt("Ingrese sexo f/m: ");
		while(sexo != 'f' && sexo != 'm'){
			sexo = prompt("Error. Ingrese sexo f/m: ");

		}
		estadoCivil = prompt("Ingrese estado civil soltero/casado/viudo: ");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Error. Ingrese estado civil soltero/casado/viudo f/m:");

		}

		temperatura = parseFloat(prompt("Ingrese temperatura: "));
		while(temperatura <= 0 || isNaN(temperatura)){
			temperatura = parseFloat(prompt("Error. Ingrese temperatura: "));
		}

		// Cosas para ir resolviendo del punto a

		if (flag || temperatura > maxTemp ){
			maxTemp = temperatura;
			maxNombre = nombre;
			flag = 0;
		}

		//cosas que tengo que ir resolviendo para el punto b

		if (edad >= 18 && estadoCivil == "viudo"){
			contMayorViudo++;
		}

		//punto c

		if(sexo == 'm' &&  estadoCivil != "casado"){
			contHSV++;
		}

		if (edad > 60 && temperatura > 38){
			contJovatoConFiebre++;
		}
		if (sexo == "m" & estadoCivil == "soltero"){
			acumEdadHS += edad;
			contHS++;
		}




		seguir = prompt("Quiere ingresar otro pasajero?: ");
	} while (seguir == "s");

	console.log("a) El nombre de la persona con mas temperatura es " + maxNombre + " con "+ maxTemp + "°C");
	console.log("b) Mayores viudos: " + contMayorViudo); 
	console.log("c) Hombres solteros o viudos: " + contHS); 
	console.log("d) Jovatos con fiebres " + contJovatoConFiebre); 
	
	if (contHS != 0){
		promedio = acumEdadHS / contHs;
		console.log("e) Promedio de hombres solteros: " + promedio);
	}
	else {
		console.log("e) No se registraron hombres solteros");
	}









}

var salir = 0;
var mensaje = "";

do{
	if(mensaje != ""){
		mensaje = "Tu Resultado es: \n" + mensaje;
		mensaje+= "\n\n\n";
	}
	var option = parseInt(prompt(mensaje  + "Escoja una opcion:\n"+ "1. Suma\n" + "2.- Resta\n" + "3.- multiplicacion\n" + "4.- Division\n" + "5.- Modulo\n" + "6.- Mayor que...\n" + "7.- Menor que...\n" + "8.- salir\n"));
			
	if (option>0 && option<8) {
		var numero1 = parseInt(prompt("Ingresa el #1"));
		var numero2 = parseInt(prompt("Ingresa el #2"));
		switch (option) {
			case 1:
				result = numero1 + numero2;
				mensaje = "La suma es : " + result;
				break;
			case 2:
				result = numero1 - numero2;
				mensaje = "La resta es : " + result;
				break;
			case 3:
				result = numero1 * numero2;
				mensaje = "La multiplicacion es : " + result;
				break;
			case 4:
				result = numero1/ numero2;
				mensaje = "La division es : " + result;
				break;
			case 5:
				result = numero1%numero2;
				mensaje = "El modulo es : " + result;
				break;
			case 6:
				result = numero1 > numero2;
				mensaje = "El numero " + numero1 + " es mayor que " + numero2 + ": " + result;
				break;
			case 7:
				result = numero1 < numero2;
				mensaje = "El numero " + numero1 + " es menor que " + numero2 + ": " + result;
				break;
		} 
	} else  if( option == 8) {
		salir = 8;
	}else{
		mensaje = "Esta opcion no es valida";
	}
	document.write(mensaje);

}while (salir != 8);
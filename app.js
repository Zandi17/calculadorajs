var salir = 0;
do{
var option = parseInt(prompt("Escoja una opcion:\n"+ "1. Suma\n" + "2.- Resta\n" + "3.- multiplicacion\n" + "4.- Division\n" + "5.- Modulo\n" + "6.- Mayor que...\n" + "7.- Menor que...\n" + "8.- salir\n"));
		
if (option>0 && option<8) {
	var numero1 = parseInt(prompt("Ingresa el #1"));
	var numero2 = parseInt(prompt("Ingresa el #2"));
	var suma = numero1 + numero2;
		var resta = numero1 - numero2;
		var multiplicacion = numero1 * numero2;
		var division = numero1 / numero2;
		var modulo = numero1 % numero2;
		var mayor = numero1 > numero2;
		var menor = numero1 < numero2;

	switch (option) {
		case 1:
			document.write ("La suma es : " + (suma));
			break;
		case 2:
			document.write ("La resta es : " + (resta));
			break;
		case 3:
			document.write ("La multiplicacion es : " + (multiplicacion));
			break;
		case 4:
			document.write ("La division es : " + (division));
			break;
		case 5:
			document.write ("El modulo es : " + (modulo));
			break;
		case 6:
			document.write ("El numero " + numero1 + " es mayor que " + numero2 + ": " + (mayor));
			break;
		case 7:
			document.write ("El numero " + numero1 + " es menor que " + numero2 + ": " + (menor));
			break;
	} 

} else  if( option == 8) {
		document.write ("salir");
		salir = 8;
	}else{
		document.write ("Esta opcion no es valida");
	}
}while (salir != 8);
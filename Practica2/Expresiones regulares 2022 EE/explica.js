// Hay dos formar de declarar expresiones regulares

// La primera, expresiones regulares directas

let variable=/expresión-regular/claves;

// La segunda, es mediante un objeto de la clase RegExp

let variable=new RegExp("expresión-regular","claves");


// En las expresiones regulares vamos a poner
// - Caracteres que tienen significado
// - Caracteres que deben tener ese valor

// caracteres con significado que utilizamos en las expresiones regulares

// punto . -> representa un caracter que puede ser cualquiera.
//  \d     -> representa un caracter que es un dígito
//  \D     -> representa un caracter cualquiera del código ASCII
//            que no sea dígito.
//  \s     -> representa un caracter de espacio.
//  \S     -> representa un caracter que no sea espacio
//  \w     -> representa un caracter un caracter alfanumérico:
//				letras, dígitos y el signo de subrayado "_"
//  \W     -> representa un caracter que no sea alfanumérico, no puede ser
//				ni letra, ni dígito ni el caracter del subrayado "_"
//  \b     -> indica el límite de palabra, puede indicar inicio o final.

let primera = /ana/i;  // que contine la cadena ana, y que ana puede formar 
//							parte de otras palabras. Ejemplo 
//							ana, anaconda, manada, cana
let segunda = /\bana\b/i; // que tiene la cadena ana como palabra.
//							solo representa si contine ana y que no forma
//							parte de otras palabras.

// expresión-1|expresión-2   -> Se puede poner una de las dos expresiones
let tercera =/a|e/i;
let cuarta =/\b((ana)|(elena))\b/i
// los parentesis me sirven para realizar agrupaciones
// [lista-caracteres]   -> representa un único caracter que puede ser 
//							cualquiera de los indicados en la lista de caracteres

let quina =/[aeiouáéíóúü]/i   // representa una vocal
// [^lista-caracteres]  -> representa un único caracter que puede ser 
//							cualquiera excepto los caracteres indicados en la
//							la lista de caracteres.
let sexta=/[^aeiouáéíóúü]/i  // representa un caracter que no sea un vocal.
//							una consonante, un dígito, un caracter especial

// [caracter_inicial-caracter_final]  -> representa un caracter que puede ser
//							cualquiera dentro del rango indicado por 
//							el caracter inicial y final.
let septima =/[0-9]/		// representa un dígito
let octava =/[a-z]/i		// representa una letra del alfabeto inglés

// [^caracter_inicial-caracter_final]  -> representa un caracter que no sea
//							encuentre en el rango indicado por el
//							caracter inicial y final

let novena =/[^0-9]/		// representa un caracter que no es un dígito.
let decima =/[^a-z]/i		// representa un caracter que no sea una letra del 
//								alfabeto inglés

// [caracter_inicial1-caracter_final1lista-caracteres1caracter_inicial2-caracter_final2lista-caracteres2]
// representa un caracter que puede ser cualquiera de los indicados en las lista objeto
// bien cualquiera que se incluya dentro de los rangos.

let undecima=/[0-9a-záéíóúüñ]/i  // represena un caracter que puede ser una letra
//									o bien un dígito.

let duodecima=/[\da-záéíóúüñ]/i   // igual al anterior
// ^  -> inicio de entrada o de línea
// $  -> final de entrada o de línea
let trece=/^ana$/i;  	// que es igual a ana
// caracteres para repiticiones de caracteres1caracter_inicial2-caracter_final2lista-caracteres2
//  *   -> que el caracter anterior puede estar de 0 a n veces.
//  +   -> que el caracter anterior puede estar de 1 a n veces.
//  ?   -> que el caracter anterior puede estar o no, 0 ó 1 vez.
//  {número} -> que el caracter anterior va a estar el número de veces indicado
//  {número1,número2}  -> que el caracter anterior va a estar de número1 a 
//							número2 de veces.
//  {núemro,}  -> que el caracter anterior va estar al menos el núemro de veces
//					indicado por número. De número de veces a n veces.

// Si queremos poner un caracter que tiene significado, este caracter debe ir
// precedido del caracter \.


// Nota importante. 
//¿Que diferencia hay entre una expresión regular directa y la expresión
// regular del objeto RegExp?
// La diferencia que hay es que cuando en la expresión regular directa
// aparece el caracter \ en la expresión regular del objeto RegExp va a 
// aparecer ducplicada.

// Las siguientes expresiones regualares son iguales.
let catorce=/^\d{5}\-\s\/\d{2,4}\.\w{6}$/i;
let quince=new RegExp("^\\d{5}\\-\\s\\/\\d{2,4}\\.\\w{6}$","i");

// Claves
//  i  -> para que no se haga diferencia entre mayúisculas y minúsculas
//  g  -> para indicar que es global.

// Métodos con expresiones regulares

// expresión-regular.test(cadena) -> nos indica mediante un valor lógico
// si la cadena se encuadra en la expresión regular.

// cadena1.replace(expresion-regular, cadena2) -> nos devuelve una cadena
// en la cual el caracter (si no incluimos la clave q)o los caraceteres (si incluimos la clave q) que coindiden con al expresión 
// regular se sustituyen por la cadena2
let micadena="Juan vive en madrid";
let una=/\s/;
let una=new RegExp("\\s");
let doscadenas=micadena.replace(una,""); 
//doscadenas="Juanvive en madrid"
let dos=/\s/g;
let dos=new RegExp("\\s","g");
let trescadenas=micadena.replace(dos,"");
//  trescadenas="Juanviveenmadrid"

//expresión regular para el teléfono
let ertel=/^[6-9]\d{8}$/;
// expresión regular para el código postal
let ercp=/^\d{4,5}$/;
let ercp1=/^((0?[1-9])|([1-4]\d)|(5[0-2]))\d{3}$/;

// expresión regular para la fecha
let erfecha=/^\d?\d[\-\/]\d?\d[\-\/](\d\d)?\d\d$/;
let erfecha1=/^((0?[1-9])|([12]\d)|(3[01]))[\-\/]((0?[1-9])|(1[0-2]))[\-\/](\d\d)?\d\d$/;
let erfecha2=/^((((0?[1-9])|([12]\d)|(3[01]))[\-\/]((0?[13578])|(1[02])))|(((0?[1-9])|([12]\d)|(30))[\-\/]((0?[469])|(11)))|(((0?[1-9])|([12]\d))[\-\/]0?2))[\-\/](\d\d)?\d\d$/;
let erfecha3=/^(((((0?[1-9])|([12]\d)|(3[01]))[\-\/]((0?[13578])|(1[02])))|(((0?[1-9])|([12]\d)|(30))[\-\/]((0?[469])|(11))))[\-\/]\d\d)|
				((((0?[1-9])|[12]\d))[\-\/]0?2[\-\/](([02468][048])|([13579][26])))|
				(((0?[1-9])|(1\d)|(2[0-8]))[\-\/]0?2(([02468][1235679])|([13579][01345789])))$/;
let erfecha4=/^((((((0?[1-9])|([12]\d)|(3[01]))[\-\/]((0?[13578])|(1[02])))|(((0?[1-9])|([12]\d)|(30))[\-\/]((0?[469])|(11))))[\-\/]\d{4}))|
			   ((((0?[1-9])|[12]\d))[\-\/]0?2[\-\/](([02468][048]00)|([13579][26]00)|(\d\d[2468][048])|(\d\d[13579][26])|(\d\d0[48]))|
  			   (((0?[1-9])|(1\d)|(2[-8]))[\-\/]0?2(([02468][1235679]00)|([13579][01345789]00)|(\d\d[02468][1235679])|(\d\d[13579][01345789]))))$/;				
















// AJAX con jQuery
// LO primero cargar jQuery
// En jquery existen sobre todo cuatro método para ajax
//	- load
//	- get 
//	- post
// 	- ajax

// El método load

// como cargar un fichero del servidor, o bien la 
// respuesta de un programa del servidor.
// Lo vamos a cargar en un párrafo (div).

$(selector-párrafo).load(fichero)

<div id="resultado"> </div>
<div id="final"> </div>


$("#resultado").load("datos.txt");
$("#final").load("primero.php");

// Llamada a un programa php con parámetros y usando
// el método GET.

// Si el valor de los parámetros no tiene espacios en
// blanco dentro de los mismos.


$(selector-párrafo).load(programa.php?parámetro1=valor1&parametro2=valor2 ... [,nombre-función])

<div id="final"> </div>
$("#final").load("segundo.php?nombre="+vnombre+"&apellidos"+vapellidos);

<div id="datos" hidden> </div>
<input type="text" id="resultadofinal" />

$("#datos").load("segundo.php?nombre="+vnombre+"&apellidos"+vapellidos,muestra);

function muestra(valor){
	$("#resultadofinal").val(valor);
}

// Si los parámetros que se pasan tienen espacios se debe usar

$(selector-párrafo).load(programa.php?$.param({parámetros1:valor1, parametro2:valor2 ...}) [, función])

<div id="final"> </div>
$("#final").load("segundo.php?"+$.param({nombre:vnombre,apellidos:vapellidos}));

<div id="datos"> </div>
<input type="text" id="resultadofinal" />

$("#datos").load("segundo.php?"+$.param({nombre:vnombre,apellidos:vapellidos}),muestra);
function muestra(valor){
	$("#resultadofinal").val(valor);
}

// Llamada a un programa php con parámetros y usando
// el método POST.

$(selector-párrafo).load(programa.php,{parámetro1:valor1,parámetro2:valor2} [, nombre-función])

<div id="final"> </div>
$("#final").load("segundo.php",{nombre:vnombre,apellidos:vapellidos});

<div id="datos"> </div>
<input type="text" id="resultadofinal" />

$("#datos").load("segundo.php",{nombre:vnombre,apellidos:vapellidos},muestra);
function muestra(valor){
	$("#resultadofinal").val(valor);
}

// El método get

$.get(fichero [, parámetros][, nombre-función][, tipo-dato-devuelve])

// Los parámetros siempre tienen el siguiente formato

{parámetro1:valor1,parámetro2:valor2, ...}

// El tipo de datos que devuelve puede servidor
//	- xml
//	- json
//	- scripts
//	- html

<input type="text" id="resultadofinal" />

$.get("tercero.php",{nombre:vnombre,apellidos:vapellidos}, muestra);

function muestra(resul){
	$("#resultadofinal").val(resul);
}

<div id="datos"> </div>

$.get("midatos.txt", destino);

function destino(total){
	$("#datos").text(total);
}

// El método post

$.post(fichero [, parámetros][, nombre-función][, tipo-dato-devuelve])

// Los parámetros siempre tienen el siguiente formato

{parámetro1:valor1,parámetro2:valor2, ...}

// El tipo de datos que devuelve puede servidor
//	- xml
//	- json
//	- scripts
//	- html

<input type="text" id="resultadofinal" />

$.post("tercero.php",{nombre:vnombre,apellidos:vapellidos}, muestra);

function muestra(resul){
	$("#resultadofinal").val(resul);
}


// El método ajax

$.ajax(url [, objeto-configuración]);
$.ajax(objeto-configuración);

$.ajaxSetup(objeto-configuración);
$.ajax();

// en el objeto configuración vamos a tener

url : programa.php
data : objeto-parámetros
data-type: xml | html| script|json | jsonp | text
method: GET| POST
headers: objeto-cabeceras
success: nombre-función-satifactoria
error: función-error
complete: función-final
contentType:false;
processData:false;

// cabecera para xml
headers:{"Content-Type":"application/x-www-form-urlencoded"}
// cabcera para json
headers:{"Content-Type":"application/json"}
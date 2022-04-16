Ajax con jQuery
Existen 
load
get
post
ajax, ajaxSetup
Método Load
Recibe el contenido de un fichero
$("selector").load("fichero")

Pasar parametros mediante GET
$("selector").load("programa.php?nombre-campo1=valor1&nombre-campo2=valor2", función);
los valores no deben llevar espacios. 

Si los valores llevan espacios o pueden llevarlos pondremos
$("selector").load("programa.php?"+$.param({nombre-campo1:valor1,nombre-campo2:valor2}), función);

Pasar parámetros mediante POST
$("selector").load("programa",{nombre-campo1:valor1,nombre-campo-2:valor-2}, función)

Función  $.get, paso de parámetros mediante get o sin parámetros
$.get("fichero", función)

$.get("programa",parámetros, función, tipo-dato-devuelve);

Función $.post, paso de parámetro mediante post
$.post("programa",parámetros, función, tipo-dato-devuelve);

Función $.ajax para cargar un fichero
formato 1
$.ajax("fichero", {success:función});

formato 2
crear un objeto de configuración
let configura={ url:"fichero",
				success:función}
$.ajax(configura);

formato 3
crear un objeto de configuración
let configura={ url:"fichero",
				success:función}
$.ajaxSetup(configura)
$.ajax();

Función $.ajax para llamar a un programa

formato 1
$.ajax("programa", {method:"GET"|"POST",
				data:parámetros,
				dataType:"json"|"text"|"xml",
				headers:cabcera,
				success:función-correcto,
				error:función-error,
				complete:función-final);

formato 2
crear un objeto de configuración
let configura={ url:"programa",
				method:"GET"|"POST",
				data:parámetros,
				dataType:"json"|"text"|"xml",
				headers:cabcera,
				success:función-correcto,
				error:función-error,
				complete:función-final}
$.ajax(configura);

formato 3
crear un objeto de configuración
let configura={ url:"programa",
				method:"GET"|"POST",
				data:parámetros,
				dataType:"json"|"text"|"xml",
				headers:cabcera,
				success:función-correcto,
				error:función-error,
				complete:función-final}
$.ajaxSetup(configura)
$.ajax();

Cuando se pasa un objeto FormData en el objeto de configuración deberemos
incluir
	contentType:false,
	processData:false
	
	








$(window).on("load",inicio);

function inicio(){
	$("#solicitud").on("click",proceso);
}

function proceso(){

	// establecer conexión con el servidor
	let vnombre=$("#nombre").val();
	let vapellidos=$("#apellidos").val();
		// solicitud a un programa php con paso de parámetros en variable
		// mediante post
	$("#resultado").load("php/ajax-03.php", {nombr:vnombre,apelli:vapellidos},muestra);
}

function muestra(valor){
	$("#sueldo").val(valor);
}
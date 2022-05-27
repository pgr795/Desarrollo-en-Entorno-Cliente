$(window).on("load",inicio);

function inicio(){
	$("#solicitud").on("click",proceso);
}

function proceso(){

	//  establecer conexión con el servidor
	let vnombre=$("#nombre").val();
	let vapellidos=$("#apellidos").val();
		// solicitud a un programa php con paso de parámetros en variable
		// mediante post
	
		
	let nada=$.get("php/ajax-04-1.php", {nombr:vnombre,apelli:vapellidos},procesar,"json")
		
}

function procesar(misDatos){
	//let misDatos=JSON.parse(dato);
	$("#resultado").text(misDatos.nombre + " " + misDatos.apellidos+ " " + misDatos.sueldo);	
}

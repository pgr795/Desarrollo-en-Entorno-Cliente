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
	let configuracion={	method:"post",
						data:{nombr:vnombre,apelli:vapellidos},
						success:procesar}
		
		
	let nada=$.ajax("php/ajax-06-3.php", configuracion);
		
}

function procesar(dato){
	$("#resultado").text(dato);	
}

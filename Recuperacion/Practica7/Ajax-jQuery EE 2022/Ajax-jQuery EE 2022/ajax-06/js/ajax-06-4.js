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
						dataType:"json",
						success:procesar}
		
	let nada=$.ajax("php/ajax-06-4.php", configuracion)
		
}

function procesar(misDatos){
	//let misDatos=JSON.parse(dato);
	$("#resultado").text(misDatos.nombre + " " + misDatos.apellidos+ " " + misDatos.sueldo);	
}

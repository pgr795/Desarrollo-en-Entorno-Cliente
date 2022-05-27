$(window).on("load",inicio);

function inicio(){
	$("#solicitud").on("click",proceso);
}

function proceso(){

	// establecer conexión con el servidor
	let vnombre=$("#nombre").val();
	let vapellidos=$("#apellidos").val();
		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
	let configuracion={	
						url:"php/ajax-06.php",
						method:"get",
						data:{nombr:vnombre,apelli:vapellidos},
						success:muestra
					}
	$.ajax( configuracion);
}

function muestra(valor){
	$("#resultado").text(valor);
}

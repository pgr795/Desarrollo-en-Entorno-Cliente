$(window).on("load",inicio);
	
function inicio(){
	$("#solicitud").on("click",proceso);
}

function proceso(){
	let vnombre=$("#nombre").val();
	let vapellidos=$("#apellidos").val();
		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
	//let configuracion={method:"GET"};
	$("#resultado").load("php/ajax-02.php?nombre="+vnombre+"&apellidos="+vapellidos);
}


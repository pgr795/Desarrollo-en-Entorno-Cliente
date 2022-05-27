$(window).on("load",inicio);

	
function inicio(){
	$("#solicitud").on("click",proceso);
	
}

function proceso(){
	
	let vnombre=$("#nombre").val();
	let vapellidos=$("#apellidos").val();
		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
	let misdatos= new FormData();
	misdatos.append("nombr",vnombre);
	misdatos.append("apelli",vapellidos);
	
	let configura={
		method:"POST",
		data:misdatos,
		success:procesar,
		contentType: false,
		processData: false
	}
		
	$.ajax("php/ajax-10.php", configura);
}


function procesar(resultado){
	$("#resultado").text(resultado);	
}
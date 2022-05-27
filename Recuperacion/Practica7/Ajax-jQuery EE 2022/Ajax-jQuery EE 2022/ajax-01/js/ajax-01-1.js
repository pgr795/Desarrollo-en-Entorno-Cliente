$(window).on("load",inicio);

function inicio(){
	// solicitud del contenido de un fichero de tipo texto
	
	let dato=$.get("texto/programa.txt", muestra);
	
	
}

function muestra(valor){
	$("#resultado").text(valor);
}
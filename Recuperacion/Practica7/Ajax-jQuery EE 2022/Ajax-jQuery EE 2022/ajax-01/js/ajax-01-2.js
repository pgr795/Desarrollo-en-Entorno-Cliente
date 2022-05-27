$(window).on("load",inicio);

function inicio(){
	// solicitud del contenido de un fichero de tipo texto
	let configuracion={success: muestra}
	let dato=$.ajax("texto/programa.txt",configuracion);
	
	
}

function muestra(valor){
	$("#resultado").text(valor);
}
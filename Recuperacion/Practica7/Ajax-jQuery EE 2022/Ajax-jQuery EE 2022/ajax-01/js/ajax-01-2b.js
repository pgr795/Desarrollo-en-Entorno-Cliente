$(window).on("load",inicio);

function inicio(){
	// solicitud del contenido de un fichero de tipo texto
	let configuracion={
						url:"texto/programa.txt",
						success: muestra}
	let dato=$.ajax(configuracion);
}

function muestra(valor){
	$("#resultado").text(valor);
}
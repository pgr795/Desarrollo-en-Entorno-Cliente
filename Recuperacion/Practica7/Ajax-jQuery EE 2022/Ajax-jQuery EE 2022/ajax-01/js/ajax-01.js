$(window).on("load",inicio);

function inicio(){
	// solicitud del contenido de un fichero de tipo texto
	$("#resultado").load("texto/programa.txt")		
}

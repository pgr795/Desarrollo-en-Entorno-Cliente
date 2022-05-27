$(window).on("load",inicio);

	
function inicio(){
		
		// solicitud del contenido de un fichero de tipo texto
	let configuracion={
		url:"xml/libros.xml",
		dataType:"xml",
		success:procesar
	}
	$.ajaxSetup(configuracion);
	$.ajax();
		
}



function procesar(datos){	
	let registros=$(datos).find("Libros");
	let padre=$("#resultado>tbody")
	for (let i=0;i < $(registros).length;i++){
		let miTitulo=$(registros).eq(i).find("TITULO").eq(0).text();
		let miAutor=$(registros).eq(i).find("AUTOR").eq(0).text();
		let miTema=$(registros).eq(i).find("TEMA").eq(0).text();
		let miEditorial=$(registros).eq(i).find("EDITORIAL").eq(0).text();		
		$(padre).append("<tr><td>"+miTitulo+"</td><td>"+miAutor+"</td><td>"+
						miTema+"</td><td>"+miEditorial+"</td></tr>");
	}
}
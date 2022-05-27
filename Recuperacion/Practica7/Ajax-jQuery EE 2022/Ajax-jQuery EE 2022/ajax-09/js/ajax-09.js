$(window).on("load",inicio);

function inicio(){
	$("#solicitud").on("click",proceso);
}

function proceso(){
	
	let vnombre=$("#nombre").val();
	let vapellidos=$("#apellidos").val();
	let cadenaxml="<personal><persona><nombre apellidos=' "+vapellidos+"'>"+vnombre+
						"</nombre></persona></personal>";
	
	let estado={
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		dataType:"xml",
		data:cadenaxml,
		success:procesar
	}
	$.ajax("php/ajax-09.php", estado)
		
}



function procesar(misdatos){
	
	let nom=$(misdatos).find("nombre").eq(0);
	let ape=$(nom).attr("apellidos");
	let suel=$(nom).attr("sueldo");
	let cadena=nom.text() + "  " + ape + "  "+suel;
	$("#resultado").text(cadena);	
}
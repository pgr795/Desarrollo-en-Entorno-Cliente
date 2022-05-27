$(window).on("load",inicio);
	
function inicio(){
	$("#solicitud").on("click",proceso);
}

function proceso(){
	
	let vnombre=$("#nombre").val();
	let vapellidos=$("#apellidos").val();
	let cadenaxml="<personal><persona><nombre>"+vnombre+"</nombre><apellidos>"
					+vapellidos+"</apellidos></persona></personal>";
	
	
	let estado={
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		dataType:"xml",
		data:cadenaxml,
		success:procesar
	}
	$.ajax("php/ajax-08.php", estado);
		
}



function procesar(misdatos){
		
	let nom=$(misdatos).find("nombre").eq(0).text();
	let ape=$(misdatos).find("apellidos").eq(0).text();
	let suel=$(misdatos).find("sueldo").eq(0).text();
	let cadena=nom + "  " + ape + "  "+suel;
	$("#resultado").text(cadena);	
}
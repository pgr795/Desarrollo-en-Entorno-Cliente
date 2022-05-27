$(window).on("load",inicio);
	
function inicio(){
	$("#solicitud").on("click",proceso);
}

function proceso(){

	let vnombre=$("#nombre").val();
	let vapellidos=$("#apellidos").val();
	
	let datos={
		nombr:vnombre,
		apelli:vapellidos
	}
	let datosJSON=JSON.stringify(datos);
		
	let configura={
		method:"POST",
		headers:{"Content-Type":"application/json"},
		dataType:"json",
		data:datosJSON,
		success:procesar
	}
	$.ajax("php/ajax-07.php", configura)
		
}

function procesar(misdatos){
	//let misdatos=JSON.parse(dato);
	$("#resultado").text(misdatos.nombre +"  " + misdatos.apellidos + "  " +misdatos.sueldo);		
}
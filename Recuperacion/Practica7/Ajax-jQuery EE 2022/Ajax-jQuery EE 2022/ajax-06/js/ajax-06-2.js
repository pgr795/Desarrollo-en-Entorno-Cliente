$(window).on("load",inicio);

function inicio(){
	$("#solicitud").on("click",proceso);
}

function proceso(){

	//  establecer conexión con el servidor
	let vnombre=$("#nombre").val();
	let vapellidos=$("#apellidos").val();
		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
	let configuracion={	method:"get",
						data:{nombr:vnombre,apelli:vapellidos},
						dataType:"xml",
						success:procesar}
		
		
	let nada=$.ajax("php/ajax-06-2.php",configuracion);
		
}

function procesar(dato){
	let nom=$(dato).find("nombre").eq(0).text();
	let ape=$(dato).find("apellidos").eq(0).text();
	let sue=$(dato).find("sueldo").eq(0).text();
	$("#resultado").text(nom + " " + ape+ " " + sue);	
}

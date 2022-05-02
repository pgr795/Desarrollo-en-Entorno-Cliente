$(window).on("load",comienzo);

function comienzo(){
	$("#nuevo").on("click",anyadir);
}

function anyadir(){
	let valorNombre=$("#nombre").val().trim();
	if (valorNombre!=""){
		$("#lista").append("<li>"+valorNombre+"</li>");
	}
}


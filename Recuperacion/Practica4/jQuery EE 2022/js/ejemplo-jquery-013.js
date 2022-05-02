$(window).on("load",comienzo);

function comienzo(){
	$("#nuevo").on("click",anyadir);
}

function anyadir(){
	let valorNombre=$("#nombre").val().trim();
	let valorDefinicion=$("#definicion").val().trim();
	if (valorNombre!="" && valorDefinicion!=""){
		$("#lista").append("<dt>"+valorNombre+"</dt><dd>"+valorDefinicion+"</dd>");
	}
}


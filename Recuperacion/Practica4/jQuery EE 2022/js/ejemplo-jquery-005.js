$(window).on("load",comienzo);

function comienzo(){
	$("#nuevo").on("click",anyadir);
}

function anyadir(){
	let valorNombre=$("#nombre").val().trim();
	let valorValor=$("#valor").val().trim();
	if (valorNombre!="" && valorValor!=""){
		$("#tabla>tbody").append("<tr><td>"+valorNombre+"</td><td>"+valorValor+"</td></tr>");
		
	}
}


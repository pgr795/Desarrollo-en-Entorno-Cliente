$(window).on("load",comienzo);

function comienzo(){
	$("#nuevo").on("click",anyadir);
}

function anyadir(){
	let valorNombre=$("#nombre").val().trim();
	let valorValor=$("#valor").val().trim();
	if (valorNombre!="" && valorValor!=""){
		let lineas=$("#tabla>tbody>tr");
		let ausente=true;
		let indice=0;
		while (ausente && indice < $(lineas).length){
			let celdas=$(lineas).eq(indice).find("td");
			if ($(celdas).eq(0).text()==valorNombre &&
				$(celdas).eq(1).text()==valorValor)
				ausente=false;
			indice+=1;
		}
		if (ausente)
			$("#tabla>tbody").append("<tr><td>"+valorNombre+"</td><td>"+valorValor+"</td></tr>");
	}
}


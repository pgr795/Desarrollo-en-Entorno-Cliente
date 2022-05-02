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
			let numeroValor=parseInt(valorValor,10);
			let numeroCelda=parseInt($(celdas).eq(1).text(),10);
			if ($(celdas).eq(1).text()==valorValor)
				ausente=false
			else if (numeroCelda<numeroValor){
				ausente=false;
				$(lineas).eq(indice).before("<tr><td>"+valorNombre+"</td><td>"+valorValor+"</td></tr>");
			}
			indice+=1;
		}
		if (ausente)
			$("#tabla>tbody").append("<tr><td>"+valorNombre+"</td><td>"+valorValor+"</td></tr>");
	}
}


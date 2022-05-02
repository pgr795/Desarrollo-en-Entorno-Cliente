$(window).on("load",comienzo);

function comienzo(){
	$("#nuevo").on("click",anyadir);
}

function anyadir(){
	let valorNombre=$("#nombre").val().trim();
	if (valorNombre!=""){
		let todos=$("#lista>li");
		let indice=0;
		let ausente=true;
		while (ausente && indice < $(todos).length){
			if ($(todos).eq(indice).text()==valorNombre)
				ausente=false;
			indice+=1;
		}
		if (ausente)
			$("#lista").append("<li>"+valorNombre+"</li>");
	}
}


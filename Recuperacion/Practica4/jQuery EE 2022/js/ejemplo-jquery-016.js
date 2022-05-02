$(window).on("load",comienzo);

function comienzo(){
	$("#nuevo").on("click",anyadir);
}

function anyadir(){
	let valorNombre=$("#nombre").val().trim();
	let valorDefinicion=$("#definicion").val().trim();
	if (valorNombre!="" && valorDefinicion!=""){
		let todosTerminos=$("#lista>dt");
		let ausente=true;
		let indice=0;
		while (ausente && indice < $(todosTerminos).length){
			if (valorNombre == $(todosTerminos).eq(indice).text()){
				ausente=false
				$(todosTerminos).eq(indice).after("<dd>"+valorDefinicion+"</dd>");
			} else if (valorNombre < $(todosTerminos).eq(indice).text()){
				ausente=false;
				$(todosTerminos).eq(indice).before("<dt>"+valorNombre+"</dt><dd>"+valorDefinicion+"</dd>")
			}
			indice +=1;
		}
		if (ausente)
			$("#lista").append("<dt>"+valorNombre+"</dt><dd>"+valorDefinicion+"</dd>");
	}
}


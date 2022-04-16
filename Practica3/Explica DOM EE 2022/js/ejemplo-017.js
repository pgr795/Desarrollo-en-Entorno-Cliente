// añadir elementos a lista de definición, sin repeticiones del nombre
if (document.addEventListener)
	window.addEventListener("load",comienzo)
else if (document.attachEvent)
	window.attachEvent("onload",comienzo);

function comienzo(){
	let boton=document.getElementById("nuevo");
	if (document.addEventListener)
		boton.addEventListener("click",anyadirElemento)
	else if (document.attachEvent)
		boton.attachEvent("onclick",anyadirElemento);
}

function anyadirElemento(){
	let valorNombre=document.getElementById("nombre").value.trim().toLowerCase();
	let valorDefinicion=document.getElementById("definicion").value.trim().toLowerCase();
	if (valorNombre!="" && valorDefinicion!="" ){
		let miLista=document.getElementById("lista");
		let todos=miLista.getElementsByTagName("dt");
		let ausente=true;
		let indice=0;
		while (ausente && indice < todos.length){
			if (valorNombre==todos.item(indice).textContent){
				ausente=false;
				let nuevaDefinicion=document.createElement("dd");
				let textoDefinicion=document.createTextNode(valorDefinicion);
				nuevaDefinicion.appendChild(textoDefinicion);
				if (indice==todos.length -1)
					miLista.appendChild(nuevaDefinicion)
				else 
					miLista.insertBefore(nuevaDefinicion,todos.item(indice+1));
				
			}
				
			indice+=1;
		}
		if (ausente) {
			let nuevoNombre=document.createElement("dt");
			let nuevaDefinicion=document.createElement("dd");
			
			let textoNombre=document.createTextNode(valorNombre);
			let textoDefinicion=document.createTextNode(valorDefinicion);
			
			nuevoNombre.appendChild(textoNombre);
			nuevaDefinicion.appendChild(textoDefinicion);
			
			miLista.appendChild(nuevoNombre);
			miLista.appendChild(nuevaDefinicion);
		}
	} else
		alert("Hay alguna caja de texto sin valor");
}
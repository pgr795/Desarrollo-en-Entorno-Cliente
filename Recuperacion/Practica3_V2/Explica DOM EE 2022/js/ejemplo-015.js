// añadir elementos a lista de definición
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
		let nuevoNombre=document.createElement("dt");
		let nuevaDefinicion=document.createElement("dd");
		
		let textoNombre=document.createTextNode(valorNombre);
		let textoDefinicion=document.createTextNode(valorDefinicion);
		
		nuevoNombre.appendChild(textoNombre);
		nuevaDefinicion.appendChild(textoDefinicion);
		
		miLista.appendChild(nuevoNombre);
		miLista.appendChild(nuevaDefinicion);
		
		
	} else
		alert("Hay alguna caja de texto sin valor");
}
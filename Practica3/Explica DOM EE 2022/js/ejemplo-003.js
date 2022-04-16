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
	let valor=document.getElementById("nombre").value.trim().toLowerCase();
	if (valor!=""){
		let lista=document.getElementById("animales");
		let nuevo=document.createElement("li");
		let nuevoTexto=document.createTextNode(valor);
		nuevo.appendChild(nuevoTexto);
		lista.appendChild(nuevo);
	}
	
}
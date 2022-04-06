// añadir elementos a la lista ordenandos en modo descendente
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
		let elementos=lista.getElementsByTagName("li");
		let indice=0;
		let ausente=true;
		while (ausente && indice < elementos.length){
			if (valor==elementos.item(indice).textContent)
				ausente=false
			else if (valor>elementos.item(indice).textContent){
				let nuevo=document.createElement("li");
				let nuevoTexto=document.createTextNode(valor);
				nuevo.appendChild(nuevoTexto);
				lista.insertBefore(nuevo, elementos.item(indice));
				ausente=false;
			}
			indice+=1;
		}
		if (ausente){
			let nuevo=document.createElement("li");
			let nuevoTexto=document.createTextNode(valor);
			nuevo.appendChild(nuevoTexto);
			lista.appendChild(nuevo);
		}
	}
}
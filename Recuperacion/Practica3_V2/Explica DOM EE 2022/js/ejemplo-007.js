// añadir elementos a la tabla
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
	let valorFamilia=document.getElementById("familia").value.trim().toLowerCase();
	let valorEjemplares=document.getElementById("ejemplares").value.trim().toLowerCase();
	if (valorNombre!="" && valorFamilia!="" && valorEjemplares!=""){
		let miTabla=document.getElementById("animales");
		let padre=miTabla.querySelector("tbody");
		
		let nuevaLinea=document.createElement("tr");
		let nuevoNombre=document.createElement("td");
		let nuevaFamilia=document.createElement("td");
		let nuevosEjemplares=document.createElement("td");
		let textoNombre=document.createTextNode(valorNombre);
		let textoFamilia=document.createTextNode(valorFamilia);
		let textoEjemplares=document.createTextNode(valorEjemplares);
		
		nuevoNombre.appendChild(textoNombre);
		nuevaFamilia.appendChild(textoFamilia);
		nuevosEjemplares.appendChild(textoEjemplares);
		
		nuevaLinea.appendChild(nuevoNombre);
		nuevaLinea.appendChild(nuevaFamilia);
		nuevaLinea.appendChild(nuevosEjemplares);
		
		padre.appendChild(nuevaLinea);
		
	} else
		alert("Hay alguna caja de texto sin valor");
}
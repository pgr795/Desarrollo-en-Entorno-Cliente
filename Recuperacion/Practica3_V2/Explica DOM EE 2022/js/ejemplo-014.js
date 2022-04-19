// añadir elementos a la tabla sin repeticiones de nombre y familia,
// ordenado por familia en modo ascendente y por nombre en modo ascendente.
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
	let valorEjemplares=document.getElementById("ejemplares").value.trim();
	if (valorNombre!="" && valorFamilia!="" && valorEjemplares!=""){
		let miTabla=document.getElementById("animales");
		let padre=miTabla.querySelector("tbody");
		let lineas=padre.getElementsByTagName("tr");
		let indice=0;
		let ausente=true;
		while (ausente && indice < lineas.length){
			let celdas=lineas.item(indice).getElementsByTagName("td");
			if (valorNombre==celdas.item(0).textContent &&
				valorFamilia==celdas.item(1).textContent){
				ausente=false;
				let valorCelda=parseInt(celdas.item(2).textContent,10);
				valorEjemplares=parseInt(valorEjemplares,10);
				let resultado=valorCelda+valorEjemplares;
				celdas.item(2).textContent=resultado;
			} else if (valorFamilia< celdas.item(1).textContent){
				ausente=false;
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
				
				padre.insertBefore(nuevaLinea, lineas.item(indice));
			} else if (valorFamilia==celdas.item(1).textContent && 
						valorNombre<celdas.item(0).textContent){
				ausente=false;
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
				
				padre.insertBefore(nuevaLinea, lineas.item(indice));			
			}
			indice+=1;
		}
		if (ausente){
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
		}
	} else
		alert("Hay alguna caja de texto sin valor");
}
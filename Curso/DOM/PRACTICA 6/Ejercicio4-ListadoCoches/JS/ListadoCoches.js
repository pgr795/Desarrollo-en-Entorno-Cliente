// Cuando se pulse el botón de “Añadir Coche” vamos a añadir los
// datos de las cajas de texto (todas deben tener valor) a la tabla que
// tenemos a continuación, los datos deberán aparecer ordenados
// alfabéticamente por marca y modelo en modo descendente. Si se intenta
// introducir una marca y modelo que ya existe en la tabla, entonces
// deberemos modificar el precio, poniendo el nuevo precio introducido.


if (document.addEventListener){
	window.addEventListener("load",inicio)
}
else if (document.attachEvent){
	window.attachEvent("onload",inicio);
}

function inicio(){
	let boton=document.getElementById("anyadir_coche");
	if ( document.addEventListener)
		boton.addEventListener("click",nuevo)
	else if (document.attachEvent)
		boton.attachEvent("onclick",nuevo);
}

function nuevo(){
	let padre=document.querySelector("#coches>tbody");
	let vMarca=document.getElementById("marca").value.trim();
	let vModelo=document.getElementById("modelo").value.trim();
	let vPrecio=document.getElementById("precio").value.trim();

	if(vMarca!="" && vModelo!="" && vPrecio!=""){
		let lineas=padre.getElementsByTagName("tr");
		let inexistente=true;
		let indice=0;
		let marcaActual=vMarca;
		let modeloActual=vModelo;

		while (inexistente && indice < lineas.length){
				let lin=lineas.item(indice);
				let celdas=lin.getElementsByTagName("td");
				let marcaLinea=celdas.item(0).textContent;
				let modeloLinea=celdas.item(1).textContent;


			if (celdas.item(0).textContent==vMarca && celdas.item(1).textContent==vModelo && celdas.item(2).textContent!=vPrecio){
				inexistente=false;
				celdas.item(2).textContent=vPrecio;
			} 
			else if (marcaActual > marcaLinea){
				inexistente=false;
				insertarAntes(lin,vMarca,vModelo,vPrecio);
			}
			else if (marcaActual == marcaLinea) {
					if(modeloActual > modeloLinea){
						inexistente=false;
						insertarAntes(lin,vMarca,vModelo,vPrecio);
					}
			}			
			else if (celdas.item(0).textContent==vMarca && celdas.item(1).textContent==vModelo && celdas.item(2).textContent==vPrecio){
				inexistente=false;
			}
			indice+=1;
		}
		if (inexistente){
			let nlinea=document.createElement("tr");
			let nMarca=document.createElement("td");
			let nModelo=document.createElement("td");
			let nPrecio=document.createElement("td");
			let nvMarca=document.createTextNode(vMarca);
			let nvModelo=document.createTextNode(vModelo);
			let nvPrecio=document.createTextNode(vPrecio);
			nMarca.append(nvMarca);
			nModelo.append(nvModelo);
			nPrecio.append(nvPrecio);

			nlinea.append(nMarca);
			nlinea.append(nModelo);
			nlinea.append(nPrecio);

			padre.append(nlinea);
		}
	}	
}
function insertarAntes(lin,vMarca,vModelo,vPrecio){
	let nlinea=document.createElement("tr");
	let nMarca=document.createElement("td");
	let nModelo=document.createElement("td");
	let nPrecio=document.createElement("td");
	let nvMarca=document.createTextNode(vMarca);
	let nvModelo=document.createTextNode(vModelo);
	let nvPrecio=document.createTextNode(vPrecio);
	nMarca.append(nvMarca);
	nModelo.append(nvModelo);
	nPrecio.append(nvPrecio);
	nlinea.append(nMarca);
	nlinea.append(nModelo);
	nlinea.append(nPrecio);
	lin.before(nlinea);
}	


//Cuando se pulse el botón de “Añadir Localidad”
//vamos a añadir el dato de la caja de texto
//(debe tener valor) a una lista no ordenada,
//los valores en la lista no ordenada deberán aparecer
//ordenados alfabéticamente en modo ascendente y la 
//localidad que se añade nodebe estar presente 
//en la lista no ordenada.


if (document.addEventListener){
	window.addEventListener("load",inicio)
}
else if (document.attachEvent){
	window.attachEvent("onload",inicio);
}

function inicio(){
	let boton=document.getElementById("anyadir");
	if ( document.addEventListener)
		boton.addEventListener("click",nuevo)
	else if (document.attachEvent)
		boton.attachEvent("onclick",nuevo);
}

function nuevo(){
	let padre=document.getElementById("local");
	let vlocalidad=document.getElementById("localidad").value.trim();
	var localidades=padre.getElementsByTagName("li");
	let inexistente=true;
	let indice=0;
	while (inexistente && indice < localidades.length){
		if (vlocalidad == localidades.item(indice).textContent){
			inexistente=false;
		}
		else if (vlocalidad < localidades.item(indice).textContent){
			let nuevoli=document.createElement("li");
			let textoli=document.createTextNode(vlocalidad);
			nuevoli.appendChild(textoli);
			padre.insertBefore(nuevoli,localidades.item(indice));
			inexistente=false;
		}
		indice+=1;
    }
	if (inexistente){
		let nuevoli=document.createElement("li");
		let textoli=document.createTextNode(vlocalidad);
		nuevoli.appendChild(textoli);
		padre.appendChild(nuevoli);
	}
}

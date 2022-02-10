// Cuando se pulse el botón de “Añadir Definición” vamos a añadir los
// datos de las cajas de texto a una lista de definición (ambas cajas de texto
// deben tener valor), que se encuentra a continuación, en la cual la palabra
// es el término y el concepto es la definición. Si el término se repite en la
// lista de definición entonces deberemos añadir ese nuevo concepto como
// una nueva definición del término.

if (document.addEventListener){
	window.addEventListener("load",inicio)
}
else if (document.attachEvent){
	window.attachEvent("onload",inicio);
}

function inicio(){
	let definiciones=document.getElementById("anyadir");
	if ( document.addEventListener)
		definiciones.addEventListener("click",anadirDefinicion);
	else if (document.attachEvent)
		definiciones.attachEvent("onclick",anadirDefinicion);
}

function anadirDefinicion(){
	let padre=document.querySelector("#definicion");
	let vPalabra=document.getElementById("palabra").value.trim();
	let vConcepto=document.getElementById("concepto").value.trim();
	let definiciones=padre.getElementsByTagName("dt");
	let indice=0;
	let inexistente=true;


	if(vPalabra!="" && vConcepto!=""){

		while (inexistente && indice < definiciones.length){
			let lineaConcepto=definiciones.item(indice);	
			let palabraRepetida=definiciones.item(indice).textContent;
			if (vPalabra == palabraRepetida){
				inexistente=false;
				let nuevodd=document.createElement("dd");
				let textodd=document.createTextNode(vConcepto);
				nuevodd.append(textodd);
				lineaConcepto.after(nuevodd);
			}
			indice+=1;
		}
	}
	else{
		inexistente=false;
	}
	if (inexistente){
		let nuevodt=document.createElement("dt");
		let nuevodd=document.createElement("dd");
		
		let textodt=document.createTextNode(vPalabra);
		let textodd=document.createTextNode(vConcepto);
		
		nuevodt.appendChild(textodt);
		nuevodd.appendChild(textodd);
		
		padre.appendChild(nuevodt);
		padre.appendChild(nuevodd);
	}
}

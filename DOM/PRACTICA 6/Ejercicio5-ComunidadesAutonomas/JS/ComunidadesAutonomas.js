if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
	let comunidades = document.getElementById('comunidades');

    if (document.addEventListener) {
      comunidades.addEventListener("change",provincias);
    }
    else if (document.attachEvent){
      comunidades.attachEvent("change",provincias);
    }
}

function provincias(){
	let selectComunidades=document.getElementById("comunidades");
	let comunidadSeleccionada = selectComunidades.options[selectComunidades.selectedIndex].value;
	let provincias= new Array();
	let padre = document.getElementById("provincia");
	borrarOptions(padre);
	
	switch(comunidadSeleccionada){

		case "Andalucia":
				provincias = ["Almería","Cádiz","Cordoba","Granada","Huelva","Jaén","Málaga","Sevilla"];
					for (let i = 0; i < provincias.length; i++){
							let nuevaOptions=document.createElement("option");
							let texto=document.createTextNode(provincias[i]);
							nuevaOptions.appendChild(texto);
							padre.append(nuevaOptions);
					}
				incluirMensaje("Buena comida y ambiente");
				break;


		case "Aragon":
				provincias = ["Huesca","Teruel","Zaragoza"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	
			
			
		case "Asturias":
				provincias = ["Asturias"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena Sidra");
				break;


		case "IslasBaleares":
				provincias = ["IslasBaleares"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Islas Baleares");
				break;


		case "Canarias":
				provincias = ["Las Palmas","Santa Cruz de Tenerife"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;		


		case "Cantabria":
				provincias = ["Cantabria"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	


		case "CastillayLeon":
				provincias = ["Avila","Burgos","Leon","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;


		case "CastillaLaMancha":
				provincias = ["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	
			
			
		case "Cataluña":
				provincias = ["Barcelona","Girona","Lleida","Tarragona"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	
				
				
		case "ComunidadValenciana":
				provincias = ["Alicante","Castellon","Valencia"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;


		case "Extremadura":
				provincias = ["Badajoz","Caceres"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;
				
				
		case "Galicia":
				provincias = ["A Coruña","Lugo","Ourense","Pontevedra"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	


		case "Madrid":
				provincias = ["Madrid"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;


		case "Murcia":
				provincias = ["Murcia"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	
				
				
		case "Navarra":
				provincias = ["Navarra"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	


		case "PaisVasco":
				provincias = ["Alava","Bizkaia","Gipuzkoa"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;


		case "LaRioja":
				provincias = ["La Rioja"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;		


		case "Ceuta":
				provincias = ["Ceuta"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	
		
		case "Melilla":
				provincias = ["Melilla"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
			break;			
	}
}


function borrarOptions(padre) {
	while (padre.firstChild) {
  		padre.removeChild(padre.firstChild);
	}
}
function incluirMensaje(mensaje) {
	document.getElementById('mensajeComunidad').textContent = mensaje;
}

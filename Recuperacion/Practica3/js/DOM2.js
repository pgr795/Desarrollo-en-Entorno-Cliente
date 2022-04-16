if(document.addEventListener){
  window.addEventListener("load",inicio)  
}
else if(document.attachEvent){
    window.attachEvent("onload",inicio);
}

function inicio(){
    let desplegable=document.getElementById("comunidades");
    if(document.addEventListener){
        desplegable.addEventListener("change",provincias)
    }
    else if(document.attachEvent){
        desplegable.attachEvent("onchange",provincias);
    }
}

function provincias(){
    borrarProvincias();
    let comunidad=document.getElementById("comunidades").value;
    let padre=document.getElementById("provincias");
    let provincias=new Array();
    

    switch(comunidad){
    	case "Andalucia":
				provincias = ["Almería","Cádiz","Cordoba","Granada","Huelva","Jaén","Málaga","Sevilla"];
					for (let i = 0; i < provincias.length; i++){
							let nuevaOptions=document.createElement("option");
							let texto=document.createTextNode(provincias[i]);
							nuevaOptions.appendChild(texto);
							padre.append(nuevaOptions);
					}
				break;


		case "Aragon":
				provincias = ["Huesca","Teruel","Zaragoza"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;	
			
			
		case "Principado de Asturias":
				provincias = ["Asturias"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;


		case "Illes Balears":
				provincias = ["Illes Balears"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;


		case "Canarias":
				provincias = ["Las Palmas","Santa Cruz de Tenerife"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;		


		case "Cantabria":
				provincias = ["Cantabria"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;	


		case "Castilla y Leon":
				provincias = ["Avila","Burgos","Leon","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;


		case "Castilla La Mancha":
				provincias = ["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;	
			
			
		case "Cataluna":
				provincias = ["Barcelona","Girona","Lleida","Tarragona"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;	
				
				
		case "Comunitat Valenciana":
				provincias = ["Alicante","Castellon","Valencia"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;


		case "Extremadura":
				provincias = ["Badajoz","Caceres"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;
				
				
		case "Galicia":
				provincias = ["A Coruña","Lugo","Ourense","Pontevedra"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;	


		case "Comunidad de Madrid":
				provincias = ["Madrid"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;


		case "Región de Murcia":
				provincias = ["Murcia"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;	
				
				
		case "Comunidad Foral de Navarra":
				provincias = ["Navarra"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;	


		case "Pais Vasco":
				provincias = ["Alava","Bizkaia","Gipuzkoa"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;


		case "La Rioja":
				provincias = ["La Rioja"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;		


		case "Ciudad Autónoma de Ceuta":
				provincias = ["Ceuta"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				break;	
		
		case "Ciudad Autónoma de Melilla":
				provincias = ["Melilla"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
			break;			
	}
}
function borrarProvincias(){
    let provincias=document.getElementById("provincias");
    let longitud=provincias.length
    if(longitud!=0){
        for (let i = 0; i < longitud; i++) {
                provincias.item(0).remove();
        }
    }
}
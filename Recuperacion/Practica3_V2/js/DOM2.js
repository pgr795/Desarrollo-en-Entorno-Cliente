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
	//let comunidades=document.getElementById("comunidades");

	let Andalucia=["Almería","Cádiz","Cordoba","Granada","Huelva","Jaén","Málaga","Sevilla"];
	let Aragon=["Huesca","Teruel","Zaragoza"];
	let Asturias=["Asturias"];
	let IllesBalears=["Illes Balears"];
	let Canarias=["Las Palmas","Santa Cruz de Tenerife"];
	let Cantabria=["Cantabria"];
	let CastillaLeon=["Avila","Burgos","Leon","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"];
	let CastillaLaMancha=["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"];
	let Cataluna=["Barcelona","Girona","Lleida","Tarragona"];
	let Valencia=["Alicante","Castellon","Valencia"];
	let Extremadura=["Badajoz","Caceres"];
	let Galicia=["A Coruña","Lugo","Ourense","Pontevedra"];
	let Madrid=["Madrid"];
	let Murcia=["Murcia"];
	let Navarra=["Navarra"];
	let PaisVasco=["Alava","Bizkaia","Gipuzkoa"];
	let LaRioja=["La Rioja"];
	let Ceuta=["Ceuta"];
	let Melilla=["Melilla"];
	
	let padre=document.getElementById("provincias");
	let valorComunidad=document.getElementById("comunidades").value;
	let provincia=eval(valorComunidad);

	for (let i = 0; i < provincia.length; i++) {
		let nuevaOptions=document.createElement("option");
		let texto=document.createTextNode(provincia[i]);
		nuevaOptions.appendChild(texto);
		padre.append(nuevaOptions);
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
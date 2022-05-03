$(window).on("load",inicio);

function inicio(){
    $("#imagen").on("click",cambiarImagen);
    $("#Galicia").on("click",Galicia);
    $("#Andalucia").on("click",Andalucia);
    $("#Cantabria").on("click",Cantabria);
    $("#CastillaLeon").on("click",CastillaLeon);
    $("#Asturias").on("click",Asturias);
}

function cambiarImagen() {
    let imagenes=["acueducto","comillas","cordoba","giralda"];
    let imagen=$("#cambioImagen[src='']");
    if(imagen.length==0){
        let imagenActual=$("#cambioImagen").attr("alt");
        let index=imagenes.indexOf(imagenActual);
        if(index!=3){
            index+=1;
            $("#cambioImagen").attr("src","./img/"+imagenes[index]+".jpg");
            $("#cambioImagen").attr("alt",imagenes[index]);
        }
        else if(index==3){
            $("#cambioImagen").attr("src","./img/"+imagenes[0]+".jpg");
            $("#cambioImagen").attr("alt",imagenes[0]);
        }
    }
    else{
        $("#cambioImagen").attr("src","./img/"+imagenes[0]+".jpg");
        $("#cambioImagen").attr("alt",imagenes[0]);
    }
}
function Galicia(){
    let Galicia=["A Coruña","Lugo","Ourense","Pontevedra"];
    let informacion="Galicia es una comunidad autónoma española, considerada nacionalidad histórica según su estatuto de autonomía, situada en el noroeste de la península ibérica";
    let existe=$("#Galicia p");
    
    if(existe.length==0){
        //CSS
        $("#Galicia").css({
            "background-color": "lightblue",
            "color": "white",
            "font-size": "14pt",
            "font-family": "Comic Sans MS"
        })

    //Lista 
        $("#Galicia").prepend("<ul>");
        for (let index = 0; index < Galicia.length; index++) {
            $("#Galicia").prepend("<li>"+Galicia[index]+"</li>");
        }
        $("#Galicia").prepend("</ul>");

        //Informacion
        $("#Galicia").prepend("<p>"+informacion+"</p>");
    }
}
function Andalucia(){
	let Andalucia=["Almería","Cádiz","Cordoba","Granada","Huelva","Jaén","Málaga","Sevilla"];
    let informacion="Andalucía es una comunidad autónoma española reconocida como nacionalidad histórica por su Estatuto de Autonomía";
    let existe=$("#Andalucia p");
    
    if(existe.length==0){
        //CSS
        $("#Andalucia").css({
            "background-color": "greenyellow",
            "color": "white",
            "font-size": "13pt",
            "font-family": "Calibri"
        })

        //Lista 
        $("#Andalucia").prepend("<ul>");
        for (let index = 0; index < Andalucia.length; index++) {
            $("#Andalucia").prepend("<li>"+Andalucia[index]+"</li>");
        }
        $("#Andalucia").prepend("</ul>");

        //Informacion
        $("#Andalucia").prepend("<p>"+informacion+"</p>");
    }
}
function Cantabria(){
	let Cantabria=["Cantabria"];
    let existe=$("#Cantabria p");
    
    if(existe.length==0){
        //CSS
        $("#Cantabria").css({
            "background-color": "red",
            "color": "white",
            "font-size": "14pt",
            "font-family": "Courier New"
        })

        //Informacion
        let informacion="Cantabria es una comunidad autónoma española de carácter uniprovincial, definida como comunidad histórica en su Estatuto de Autonomía";
        $("#Cantabria").prepend("<p>"+informacion+"</p>");
    }
}
function CastillaLeon(){
	let CastillaLeon=["Avila","Burgos","Leon","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"];
    let informacion="Es una comunidad autónoma española, referida como «comunidad histórica y cultural» en su Estatuto de Autonomía"; 
    let existe=$("#CastillaLeon p");
    
    if(existe.length==0){
        //CSS
        $("#CastillaLeon").css({
            "background-color": "yellow",
            "color": "red",
            "font-size": "12pt",
            "font-family": "Verdana"
        })

        //Lista 
        $("#CastillaLeon").prepend("<ul>");
        for (let index = 0; index < CastillaLeon.length; index++) {
            $("#CastillaLeon").prepend("<li>"+CastillaLeon[index]+"</li>");
        }
        $("#CastillaLeon").prepend("</ul>");

        //Informacion
        $("#CastillaLeon").prepend("<p>"+informacion+"</p>");
    }
}
function Asturias(){
    let Asturias=["Asturias"];
    let informacion="El Principado de Asturias es una comunidad autónoma uniprovincial de España, con una población de 1 028 244 habitantes. Bañada al norte por las aguas del mar Cantábrico, limita al oeste con la provincia de Lugo, al sur con la provincia de León y al este con Cantabria.";
    let existe=$("#Asturias p");
    
    if(existe.length==0){
        //CSS
        $("#Asturias").css({
            "background-color": "blue",
            "color": "yellow",
            "font-size": "13pt",
            "font-family": "Cambria"
        })

        //Informacion
        $("#Asturias").prepend("<p>"+informacion+"</p>");
    }
}

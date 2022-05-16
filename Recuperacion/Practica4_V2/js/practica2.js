$(window).on("load",inicio);

function inicio(){
    
    $("#imagen").on("click",cambiarImagen);
    $("#Galicia").on("click",Galicia);
    $("#Andalucia").on("click",Andalucia);
    $("#Cantabria").on("click",Cantabria);
    $("#CastillaLeon").on("click",CastillaLeon);
    $("#Asturias").on("click",Asturias);
}

var indice=0;
function cambiarImagen() {
    let imagenes=["acueducto","comillas","cordoba","giralda"];
    indice=(indice+1)%parseInt(imagenes.length,10);
    $("#cambioImagen").attr("src","./img/"+imagenes[indice]+".jpg");
    $("#cambioImagen").attr("alt",imagenes[indice]);
}

function Galicia(){
    borrarRegion();
    let Galicia=["A Coruña","Lugo","Ourense","Pontevedra"];
    let informacion="Galicia es una comunidad autónoma española, considerada nacionalidad histórica según su estatuto de autonomía, situada en el noroeste de la península ibérica";
    let existe=$("#galicia");
    
    if(existe.length==0){
    //CSS
        $("#todos").css({
            "background-color": "lightblue",
            "color": "white",
            "font-size": "14pt",
            "font-family": "Comic Sans MS"
        })

     //Informacion
        $("#todos").append("<p id='informacion'>"+informacion+"</p>");
    //Lista 
        $("#todos").append("<ul id='galicia'>");
        for (let index = 0; index < Galicia.length; index++) {
            $("#galicia").append("<li>"+Galicia[index]+"</li>");
        }
        $("#galicia").append("</ul>");
    }
}
function Andalucia(){
    borrarRegion();
	let Andalucia=["Almería","Cádiz","Cordoba","Granada","Huelva","Jaén","Málaga","Sevilla"];
    let informacion="Andalucía es una comunidad autónoma española reconocida como nacionalidad histórica por su Estatuto de Autonomía";
    let existe=$("#andalucia");
    
    if(existe.length==0){
        //CSS
        $("#todos").css({
            "background-color": "greenyellow",
            "color": "white",
            "font-size": "13pt",
            "font-family": "Calibri"
        })

        //Informacion
        $("#todos").append("<p id='informacion'>"+informacion+"</p>");

        //Lista 
        $("#todos").append("<ul id='andalucia'>");
        for (let index = 0; index < Andalucia.length; index++) {
            $("#andalucia").append("<li>"+Andalucia[index]+"</li>");
        }
        $("#todos").append("</ul>");
    }
}
function Cantabria(){
    borrarRegion();
	let Cantabria=["Cantabria"];
    let existe=$("#informacion");
    
    if(existe.length==0){
         //Informacion
         let informacion="Cantabria es una comunidad autónoma española de carácter uniprovincial, definida como comunidad histórica en su Estatuto de Autonomía";
         $("#todos").prepend("<p id='informacion'>"+informacion+"</p>");
        
        //CSS
        $("#todos").css({
            "background-color": "red",
            "color": "white",
            "font-size": "14pt",
            "font-family": "Courier New"
        })
    }
}
function CastillaLeon(){
    borrarRegion();
	let CastillaLeon=["Avila","Burgos","Leon","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"];
    let informacion="Es una comunidad autónoma española, referida como «comunidad histórica y cultural» en su Estatuto de Autonomía"; 
    let existe=$("#castillaLeon");
    
    if(existe.length==0){
        //CSS
        $("#todos").css({
            "background-color": "yellow",
            "color": "red",
            "font-size": "12pt",
            "font-family": "Verdana"
        })
        //Informacion
        $("#todos").append("<p id='informacion'>"+informacion+"</p>");

        //Lista 
        $("#todos").append("<ul id='castillaLeon'>");
        for (let index = 0; index < CastillaLeon.length; index++) {
            $("#castillaLeon").append("<li>"+CastillaLeon[index]+"</li>");
        }
        $("#todos").append("</ul>");
    }
}
function Asturias(){
    borrarRegion();
    let Asturias=["Asturias"];
    let informacion="El Principado de Asturias es una comunidad autónoma uniprovincial de España, con una población de 1 028 244 habitantes. Bañada al norte por las aguas del mar Cantábrico, limita al oeste con la provincia de Lugo, al sur con la provincia de León y al este con Cantabria.";
    let existe=$("#informacion");
    
    if(existe.length==0){
        //Informacion
          $("#todos").append("<p id='informacion'>"+informacion+"</p>");

        //CSS
        $("#todos").css({
            "background-color": "blue",
            "color": "yellow",
            "font-size": "13pt",
            "font-family": "Cambria"
        })
    }
}
function borrarRegion(){
    let ul=$("#todos").find("ul");
    let todosLi=$("#todos").find("li");
    let informacion=$("#informacion");
    $(ul).remove(); 
    $(informacion).remove(); 
    if(todosLi!=0){
        for (let i=$(todosLi).length -1; i >=0; i--) {
            $(todosLi).eq(i).remove(); 
        }
    }
}
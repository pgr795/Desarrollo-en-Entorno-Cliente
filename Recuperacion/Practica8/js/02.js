if (document.addEventListener) {
    window.addEventListener("load",inicio)
}
else if(document.attachEvent){
    window.attachEvent("onload",inicio);
}

function inicio() {
    let localidad=document.getElementById("localidad");
    let borrar=document.getElementById("borrar");
    if(document.addEventListener){
        localidad.addEventListener("click",lista);
        borrar.addEventListener("click",borrarPais);
    }
    else if (document.attachEvent) {
        localidad.attachEvent("onclick",lista);
        borrar.attachEvent("onclick",borrarPais);
    }
}

function lista() {
    borrar();
    let provincias=new Array("Burgos","Córdoba","A Coruña","León","Mérida","Salamanca","Segovia","Sevilla","Zamora");
    let evalProvincias=new Array("Burgos","Cordoba","Coruna","Leon","Merida","Salamanca","Segovia","Sevilla","Zamora");
    let Burgos=new Array('Arco de Santa María', 'Monasterio de San Juan', 'Puente de Santa María', 'Arco de San Esteban', 'Solar del Cid', 'Arco de Fernán González', 'Antiguo Seminario Mayor', 'Monasterio de Santa María la Real de las Huelgas', 'Catedral', 'El Cid Campeador');
    let Cordoba=new Array('Mezquita-Catedral', 'Alcázares de los Reyes Cristianos', 'Medina Azahara', 'Puente Romano', 'Caballerizas Reales', 'Torre de la Calahorra', ' Templo Romano', 'Torre de la Malmuerta', 'Alminar de San Juan', 'Mausoleos Romanos', 'Capilla de San Bartolomé');
    let Coruna=new Array('Torre de Hércules', 'Obelisco Millenium', 'iglesia de las Capuchinas', 'Castillo de San Antón', 'Convento de Santa Bárbara', 'Convento de Santo Domingo', 'Iglesia de San Jorge', 'iglesia de San Nicolás', 'Colegiata de Santa María', 'Iglesia de Santiago');
    let Leon=new Array('Catedral', 'Basílica de San Isidoro', 'Casa de Botines', 'Convento de las Concepciones', 'Cripta de Puerta Obispo', 'Iglesia de los Padres Capuchinos', 'Iglesia de Nuestra Señora del Camino', 'Iglesia de San Marcelo', 'Iglesia de Santa Ana');
    let Merida=new Array('teatro Romano', 'Templo de Diana', 'Acueducto de los Milagros', 'Puente romano sobre el Guadiana', 'Anfiteatro Romano', 'arco de Trajano', 'Alcazaba árabe', 'Basílica de Santa Eulalia', 'Foro romano', 'Circo Romano', 'Catedral de Santa María', 'Puente romano sobre el Albarregas', 'Templo de Marte');
    let Salamanca=new Array('Catedral Nueva', 'Catedral Vieja', 'Fachada de la Universidad', 'Casa de las Conchas', 'La Clerencia', 'convento de San Esteban', 'Plaza Mayor', 'Casa Lis');
    let Segovia=new Array('Alcázar', 'Acueducto', 'Catedral', 'Real Casa de Moneda', 'Casa de los Picos', 'Iglesia de San Martín', 'Iglesia de la Santísima Trinidad', 'Iglesia de San Esteban', 'Iglesia de San Millán', 'Iglesia de la Vera Cruz', 'Iglesia del Corpus Cristi', 'Monasterio del Parral');
    let Sevilla=new Array('Giralda', 'Torre del Oro', 'Archivo de Indias', 'Casa Pilatos', 'Catedral', 'Palacio de San Telmo', 'Hospital de la Caridad', 'Parque de María Luisa', 'Reales Alcázares', 'Real Maestranza de Caballería', 'Plaza España', 'Baílica de la Macarena', 'Jardines de Murillo');
    let Zamora=new Array('Catedral', 'Puente de Piedra', 'Puerta del Obispo', 'Puerta de Doña Urraca', 'Muralla', 'Monasterio de la Carballeda', 'Puerta de la Traición', 'Molinos de Agua', 'Castillo', 'Palacio de los Monos');
    let localidad=document.getElementById("localidad");
    let localidadOption=localidad.getElementsByTagName("option");
 
    //MODIFICACIONES EN EL HTML 
    let nOrdenado=document.createElement("ul");
    nOrdenado.setAttribute("id","monumetos");
    let ordenado=document.getElementById("monumetos");
    ordenado.after(nOrdenado);
    ordenado.remove();
    
    let monumentos=document.getElementById("monumetos");
    let monumentosLi=monumentos.getElementsByTagName("li");

    for (let i = 0; i < localidadOption.length; i++) {
      if (localidadOption.item(i).selected) {
        let pos = provincias.indexOf(localidadOption.item(i).value.trim());
        let miLocalidad = eval(evalProvincias[pos]);
        for (let x = 0; x < miLocalidad.length; x++) {
            let valido=true;
            let monumento=miLocalidad[x].trim();
            let cont=0;
            while (valido && cont < monumentosLi.length) {
                if(monumento  < monumentosLi.item(cont).textContent){
                    valido=false;
                    let texto=document.createTextNode(monumento);
                    let lista=document.createElement("li");   
                    lista.appendChild(texto);
                    monumentos.insertBefore(lista,monumentosLi.item(cont));
                }
                cont++;
            }
            if(valido){
                let texto=document.createTextNode(monumento);
                let lista=document.createElement("li");   
                lista.appendChild(texto);
                monumentos.appendChild(lista);
            }  
        }
      }
    }       
}
let mispaises=new Array("Alemania","España","Francia","Grecia","Inglaterra","Italia","Portugal");
let evalpais=new Array("alemania","espanya","francia","grecia","inglaterra","italia","portugal");
let alemania=new Array("Baden-Wurtemberg", "Baviera", "Berlín", "Brandeburgo", "Bremen", "Hamburgo", "Hesse", "Mecklemburgo-Pomerania Occidental", "Baja Sajonia", "Renania del Norte-Westfalia", "Renania-Palatinado", "Sarre", "Sajonia", "Sajonia-Anhalt", "Schleswig-Holstein", "Turingia");
let espanya=new Array("Asturias", "Galicia", "Cantabria", "País Vasco", "Navarra", "Aragón","Cataluña", "Castilla y León", "Madrid", "La Rioja", "Extremadura", "Castilla La Mancha", "Valencia", "Murcia", "Andalucía", "Canarias", "Baleares","Zamora","Cáceres");
let francia=new Array("Alsacia", "Aquitania", "Auvernia", "Borgoña", "Bretaña", "Valle del Loira", "Champagne-Ardenas", "Córcega", "Franche-Comte", "Paris / Ile de France", "Languedoc - Roussillon", "Limousin", "Lorena", "Midi-Pyrénées", "Nord Pas-de-Calais", "Normandía", "País del Loira", "Picardía", "Poitou-Charentes", "Provenza-Alpes-Costa Azul", "Rhône-Alpes", "Riviera Costa Azul");
let grecia=new Array("Tracia", "Macedonian", "Tesalia", "Epiro", "Grecia Central", "Peloponeso", "Islas del Egeo", "Islas Jónicas", "Creta");
let inglaterra=new Array("Gran Londres (Greater London)", "Sudeste de Inglaterra (South East England)", "Sudoeste de Inglaterra (South West England)", "Midlands del Oeste (West Midlands)", "Noroeste de Inglaterra (North West England)", "Nordeste de Inglaterra (North East England)", "Yorkshire y Humber (Yorkshire and the Humber)", "Midlands Oriental (East Midlands)" , "Inglaterra mega (East of England)");
let italia=new Array("Abruzzo", "Basilicata", "Calabria", "Campania", "Cerdeña", "Emilia Romagna", "FriuliVeneziaGiulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piamonte", "Puglia", "Sicilia", "Toscana", "Trentino Alto Adige", "Umbria", "Valle d'Aosta", "Veneto","Valle d'Aosta",);
let portugal=new Array("Algarve", "Alto Alentejo", "Baixo Alentejo", "Beira Alta", "BeiraBaixa", "Beira Litoral", "Douro Litoral", "Estremadura", "Minho", "Ribatejo", "Trás-os-Montes", "Alto Douro");

function borrarPais() {
    let seleccion=document.getElementById("paises").value;
    let posicion=mispaises.indexOf(seleccion);
    let mipais=eval(evalpais[posicion]);
    let regiones=document.getElementById("regiones");
    let celdas=regiones.getElementsByTagName("td");
    let valido=true;
    let cont=0;
    for (let i = 0; i < mipais.length; i++) {
      let provincia= mipais[i];
      cont=0;
      valido=true;
      while(valido && cont < celdas.length){
        if(provincia==celdas.item(cont).textContent.trim()){
            valido=false;
            celdas.item(cont).remove();
        }
        cont++;
      }  
    }
}
function borrar(){
    let monumentos=document.getElementById("monumetos");
    let monumentosli=monumentos.getElementsByTagName("li");
    let longitud=monumentosli.length;
    let cont=0;
    if(longitud!=0){
        while (cont<longitud) {
            monumentosli.item(0).remove();
            cont++;
        }
    }
}

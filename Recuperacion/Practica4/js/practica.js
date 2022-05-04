$(window).on("load",inicio);

function inicio(){
    $("#Regiones").on("click",regiones);
}

function regiones(){
    borrarRegiones();
    let region=$("#pais").val();
    let Alemania="Baden-Wurtemberg, Baviera, Berlín, Brandeburgo, Bremen, Hamburgo, Hesse, Mecklemburgo-Pomerania Occidental, Baja Sajonia, Renania del Norte-Westfalia, Renania-Palatinado, Sarre, Sajonia, Sajonia-Anhalt, Shleswig-Holstein, Turingia";
    Alemania=Alemania.split(",");
    let Francia="Alsacia, Aquitania, Auvernia, Borgona, Bretaña, Champagne-Ardenne, Córcega, Franche-Comté, Languedoc-Roussillon, Limousin, Lorraine, Midi-Pirineos, Nord Pas-de-Calais, Normandía, País del Loira, Paris Ile-de-France, Picardía, Poitou-Charentes, Provenza, Rhône-Alpes, Riviera Costa Azul, Valle del Loira";
    Francia=Francia.split(",");
    let Inglaterra="Gran Londres (Greater London), Sudeste de Inglaterra (South East England), Sudoeste de Inglaterra (South West England), Midlands del Oeste (West Midlands), Noroeste de Inglaterra (North West England), Nordeste de Inglaterra (North East England), Yorkshire y Humber (Yorkshire and the Humber),Midlands Oriental (East Midlands), Este de Inglaterra (East of England)";
    Inglaterra=Inglaterra.split(",");
    let Italia="Abruzzo, Basilicata, Calabria, Campania, Cerdeña, Emilia Romagna, Friuli-Venezia Giulia, Lazio, Liguria, Lombardia, Marche, Molise, Piamonte, Puglia, Sicilia, Toscana, Trentino Alto Adige, Umbria, Valle d'Aosta, Veneto";
    Italia=Italia.split(",");
    let Portugal="Alentejo, Algarve, Gran Lisboa, Región de Lisboa, Lisboa y Valle del Tajo, Regiones Autónomas de Portugal, Región Centro (Portugal), Región Norte (Portugal)";
    Portugal=Portugal.split(",");
        if(region!=""){
            if(region=="Alemania"){
                let longitud=Alemania.length;
                let contador=0;
                while(contador<longitud){
                    $("#region").append("<option>"+Alemania[contador]+"</option>");
                    contador++;
                }
            }
            else if(region=="Francia"){
                let longitud=Francia.length;
                let contador=0;
                while(contador<longitud){
                    $("#region").append("<option>"+Francia[contador]+"</option>");
                    contador++;
                }
            }
            else if(region=="Inglaterra"){
                let longitud=Inglaterra.length;
                let contador=0;
                while(contador<longitud){
                    $("#region").append("<option>"+Inglaterra[contador]+"</option>");
                    contador++;
                }
            }
            else if(region=="Italia"){
                let longitud=Italia.length;
                let contador=0;
                while(contador<longitud){
                    $("#region").append("<option>"+Italia[contador]+"</option>");
                    contador++;
                }
            }
            else if(region=="Portugal"){
                let longitud=Portugal.length;
                let contador=0;
                while(contador<longitud){
                    $("#region").append("<option>"+Portugal[contador]+"</option>");
                    contador++;
                }
            }
        }
        else{
        $("#error").val("No has seleccionado un pais");
        }

    // Regiones de Alemania: Baden-Wurtemberg, Baviera, Berlín, Brandeburgo, Bremen, Hamburgo, Hesse, Mecklemburgo-Pomerania Occidental, Baja Sajonia, Renania del Norte-Westfalia, Renania-Palatinado, Sarre, Sajonia, Sajonia-Anhalt, Shleswig-Holstein, Turingia
    // Regiones de Francia: Alsacia, Aquitania, Auvernia, Borgona, Bretaña, Champagne-Ardenne, Córcega, Franche-Comté, Languedoc-Roussillon, Limousin, Lorraine, Midi-Pirineos, Nord Pas-de-Calais, Normandía, País del Loira, Paris Ile-de-France, Picardía, Poitou-Charentes, Provenza, Rhône-Alpes, Riviera Costa Azul, Valle del Loira
    // Regiones de Inglaterra: Gran Londres (Greater London), Sudeste de Inglaterra (South East England), Sudoeste de Inglaterra (South West England), Midlands del Oeste (West Midlands), Noroeste de Inglaterra (North West England), Nordeste de Inglaterra (North East England), Yorkshire y Humber (Yorkshire and the Humber),Midlands Oriental (East Midlands), Este de Inglaterra (East of England)
    // Regiones de Italia: Abruzzo, Basilicata, Calabria, Campania, Cerdeña, Emilia Romagna, Friuli-Venezia Giulia, Lazio, Liguria, Lombardia, Marche, Molise, Piamonte, Puglia, Sicilia, Toscana, Trentino Alto Adige, Umbria, Valle d'Aosta, Veneto
    // Regiones de Portugal: Alentejo, Algarve, Gran Lisboa, Región de Lisboa, Lisboa y Valle del Tajo, Regiones Autónomas de Portugal, Región Centro (Portugal), Región Norte (Portugal).    
}

function borrarRegiones(){
    let options=$("select#region").find("option")//7
    if(options!=0){
        for (let i= 0; i < options.length; i++) {
            $(options).eq(i).remove(); 
        }
    }
}
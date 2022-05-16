    $(window).on("load",inicio);

function inicio(){
    $("#pais").on("click",paises);
    $("#Regiones").on("click",regiones);
}

function paises(){
    let paises="Alemania, Francia, Inglaterra, Italia, Portugal";
    paises=paises.split(",");
    let pais=$("#pais").val();
    let longitud=paises.length;
    let contador=0;
    if(pais==null){
        while(contador<longitud){
            $("#pais").append("<option>"+paises[contador]+"</option>");
            contador++;
        }
    }
}

function regiones(){
    borrarRegiones();
    let vregion=$("#pais").val();
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
    let contador=0;
    if(vregion!=null){
        let region=eval(vregion);
        let longitud=region.length;
        while(contador<longitud){
            $("#region").append("<option>"+region[contador]+"</option>");
            contador++;
        }
    }
    else{
        $("#error").val("No has seleccionado un pais");
    }
}

function borrarRegiones(){
    let options=$("select#region").find("option")//7
    if(options!=0){
        for (let i=$(options).length -1; i >=0; i--) {
            $(options).eq(i).remove(); 
        }
    }
}
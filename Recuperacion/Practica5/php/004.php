<?php
    $entrada=fopen('php://input','r');
	$datos=fgets($entrada);
	$valores=simplexml_load_string($datos);

    $paises=$valores->paises[0]->pais;
    // var_dump($paises);
    $cadenaXML;
    $cadenaXML1="<continente><paises>";
    $cadenaXML2="";
    $cadenaXML3="</paises></continente>"; 
 
    // $paises="España,Alemania";
    // $paises=explode(",",$paises);

    $longitud2=count($paises);
  
    for ($a=0; $a<$longitud2; $a++) {
        $pais=$paises[$a];  
        if($pais=="Alemania"){
            $Alemania="Baden-Wurtemberg,Baviera,Berlín,Brandeburgo,Bremen,Hamburgo,Hesse,Mecklemburgo-Pomerania Occidental,Baja Sajonia,Renania del Norte-Westfalia,Renania-Palatinado,Sarre,Sajonia,Sajonia-Anhalt,Shleswig-Holstein,Turingia";
            $Alemania=explode(",", $Alemania);
            $longitud=count($Alemania);
            $i=0;
            for ($i = 0; $i < $longitud; $i++) {
                $pais=$Alemania[$i];
                $cadenaXML2.="<pais>".$pais."</pais>";
            }
        }
        else if($pais=="España"){
            $España="Galicia,Asturias,Cantabria,País Vasco,Navarra,Aragón,Cataluña,La Rioja,Castilla León,Comunidad Valenciana,Madrid,Extremadura,Castilla La Mancha,Murcia,Andalucía,Islas Canarias,Islas Baleares,Ceuta,Melilla";
            $España=explode(",", $España);
            $longitud=count($España);
            $i=0;
            for ($i = 0; $i < $longitud; $i++) {
                $pais=$España[$i];
                $cadenaXML2.="<pais>".$pais."</pais>";
            }
        }
        else if($pais=="Francia"){
            $Francia="Alsacia,Aquitania,Auvernia,Borgona,Bretaña,Champagne-Ardenne,Córcega,Franche-Comté,Languedoc-Roussillon,Limousin,Lorraine,Midi-Pirineos,Nord Pas-de-Calais,Normandía,País del Loira,Paris Ile-de-France,Picardía,Poitou-Charentes,Provenza,Rhône-Alpes,Riviera Costa Azul,Valle del Loira";
            $Francia=explode(",", $Francia);
            $longitud=count($Francia);
            $i=0;
            for ($i = 0; $i < $longitud; $i++) {
                $pais=$Francia[$i];
                $cadenaXML2.="<pais>".$pais."</pais>";
            }
        }
        else if($pais=="Inglaterra"){
            $Inglaterra="Gran Londres (Greater London),Sudeste de Inglaterra (South East England),Sudoeste de Inglaterra (South West England),Midlands del Oeste (West Midlands),Noroeste de Inglaterra (North West England),Nordeste de Inglaterra (North East England),Yorkshire y Humber (Yorkshire and the Humber),Midlands Oriental (East Midlands),Este de Inglaterra (East of England)";
            $Inglaterra=explode(",", $Inglaterra);
            $longitud=count($Inglaterra);
            $i=0;
            for ($i = 0; $i < $longitud; $i++) {
                $pais=$Inglaterra[$i];
                $cadenaXML2.="<pais>".$pais."</pais>";
            }
        }
        else if($pais=="Italia"){
            $Italia="Abruzzo,Basilicata,Calabria,Campania,Cerdeña,Emilia Romagna,Friuli-Venezia Giulia,Lazio,Liguria,Lombardia,Marche,Molise,Piamonte,Puglia,Sicilia,Toscana,Trentino Alto Adige,Umbria,Valle d'Aosta,Veneto";
            $Italia=explode(",", $Italia);
            $longitud=count($Italia);
            $i=0;
            for ($i = 0; $i < $longitud; $i++) {
                $pais=$Italia[$i];
                $cadenaXML2.="<pais>".$pais."</pais>";
            }
        }
        else if($pais=="Portugal"){
            $Portugal="Alentejo,Algarve,Gran Lisboa,Región de Lisboa,Lisboa y Valle del Tajo,Regiones Autónomas de Portugal,Región Centro (Portugal),Región Norte (Portugal)";
            $Portugal=explode(",", $Portugal);
            $longitud=count($Portugal);
            $i=0;
            for ($i = 0; $i < $longitud; $i++) {
                $pais=$Portugal[$i];
                $cadenaXML2.="<pais>".$pais."</pais>";
            }
        }
    }
    
    $cadenaXML=$cadenaXML1.$cadenaXML2.$cadenaXML3;
    // var_dump($cadenaXML);
    $respuesta=$cadenaXML;
    header('Content-type:text/xml');
    echo $respuesta;
    // var_dump($_POST);
    // var_dump($pais);
?>
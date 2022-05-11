<?php

$autor=$_REQUEST["autor"];

$Cervantes="Don Quijote de la Mancha";
$Sade="Los 120 días de Sodoma";
$Goethe="Fausto";
$Austen="Orgullo y prejuicio";
$Mary="Frankenstein";
$Miguel="Nanas de la cebolla";
$Lorca="Poeta en Nueva York";
$Rafael="La Gallarda";
$Pablo="Veinte poemas de amor";
$Antonio="Campos de castilla";
$Benneditt="La tregua";
$Borges="El libro de arena";
$Cortazar="Casa tomada";
$Unamuno="Niebla";
$Vega="La Arcadia";
if($autor=="CERVANTES"){
    $respuesta=$Cervantes;
    echo $respuesta;
}
else if($autor=="SADE"){
    $respuesta=$Sade;
    echo $respuesta;
}
else if($autor=="GOETHE"){
    $respuesta=$Goethe;
    echo $respuesta;
}
else if($autor=="AUSTEN"){
    $respuesta=$Austen;
    echo $respuesta;
}
else if($autor=="MARY"){
    $respuesta=$Mary;
    echo $respuesta;
}
//---------------------
if($autor=="MIGUEL"){
    $respuesta=$Miguel;
    echo $respuesta;
}
else if($autor=="LORCA"){
    $respuesta=$Lorca;
    echo $respuesta;
}
else if($autor=="RAFAEL"){
    $respuesta=$Rafael;
    echo $respuesta;
}
else if($autor=="PABLO"){
    $respuesta=$Pablo;
    echo $respuesta;
}
else if($autor=="ANTONIO"){
    $respuesta=$Antonio;
    echo $respuesta;
}
//------------------------
if($autor=="BENEDETTI"){
    $respuesta=$Benneditt;
    echo $respuesta;
}
else if($autor=="BORGES"){
    $respuesta=$Borges;
    echo $respuesta;
}
else if($autor=="CORTAZAR"){
    $respuesta=$Cortazar;
    echo $respuesta;
}
else if($autor=="UNAMUNO"){
    $respuesta=$Unamuno;
    echo $respuesta;
}
else if($autor=="VEGA"){
    $respuesta=$Vega;
    echo $respuesta;
}

?>
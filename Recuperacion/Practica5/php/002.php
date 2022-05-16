<?php
//Obtener el valor de los parámetros
    $entrada=fopen('php://input','r');
    $datos=fgets($entrada);
	$datosPHP=json_decode($datos,true);

    $caras=$datosPHP['caras'];
    $vertices=$datosPHP['vertices'];
    $aristas=$caras+$vertices-2;

    $datosNuevos= new stdClass();
	$datosNuevos->caras=$caras;
	$datosNuevos->vertices=$vertices;
	$datosNuevos->aristas=$aristas;
    // $datosPHP=(object) array('caras'=>$caras,'vertices'=>$vertices,'aristas'=>$aristas);
    
    $respuesta=json_encode($datosNuevos);
    
    echo $respuesta;
?>
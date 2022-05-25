<?php
//Obtener el valor de los parámetros
 
    $caras=$_REQUEST['caras'];
    $vertices=$_REQUEST['vertices'];
    $aristas=$caras+$vertices-2;

    $respuesta=$aristas;
    echo $respuesta;
?>
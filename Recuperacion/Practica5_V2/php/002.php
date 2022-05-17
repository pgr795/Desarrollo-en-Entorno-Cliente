<?php
//Obtener el valor de los parámetros
 
    $caras=$_POST['caras'];
    $vertices=$_POST['vertices'];
    $aristas=$caras+$vertices-2;

    $respuesta=$aristas;
    echo $respuesta;
?>
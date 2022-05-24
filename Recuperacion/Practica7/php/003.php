<?php
//Obtener el valor de los parámetros
//Cuidado con los var_dump
// var_dump($_POST);
    $caras=$_REQUEST["caras"];
    $vertices=$_REQUEST["vertices"];
    $aristas=$caras+$vertices-2;
    
    echo $aristas;
?>
<?php
    $entrada=fopen('php://input','r');
    $datos=fgets($entrada);
    $valores=simplexml_load_string($datos);
    // var_dump($valores);
    $marca =$valores -> marcatv2 -> marca;
    $medida =$valores -> marcatv2 -> dimension;

    $dimensiones=["40","50","60","65"];
    $marcas=["LG","SAMSUNG","SONY","XIAOMI"];

    // var_dump($entrada);
    // var_dump($datos);
    // var_dump($valores);
    // var_dump($marca);
    // var_dump($medida);

    $listado=array(
        array(300,500,700,900),
        array(350,450,750,950),
        array(400,600,850,999),
        array(450,650,888,1020)
    );

    $i=array_search($marca,$marcas);
    $i2=array_search($medida,$dimensiones);
    $precio=$listado[$i][$i2];
    
    
    $respuesta="<lista><marcatv2><precio>".$precio."</precio></marcatv2></lista>";

    // var_dump($precio);
    // var_dump($i);
    // var_dump($i2);
    
    header('Content-type:text/xml');

    echo $respuesta;

?>
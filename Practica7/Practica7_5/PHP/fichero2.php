<?php
    $entrada=fopen('php://input','r');
    $datos=fgets($entrada);
    $valores=simplexml_load_string($datos);

    $marca=$valores->marcatv[0]->marca; 
    $medida=$valores->dimensiones[0]->dimension;

    $dimension=["40","50","60","65"];
    $marcas=["LG","SAMSUNG","SONY","XIAOMI"];

    // var_dump($marca);
    // var_dump($medida);

    $listado=array(
        array(300,500,700,900),
        array(350,450,750,950),
        array(400,600,850,999),
        array(450,650,888,1020)
    );

    $i=array_search($marca,$marcas);
    $i2=array_search($medida,$dimension);
    $precio=$listado[$i][$i2];
    // var_dump($precio);
    // var_dump($i);
    // var_dump($i2);

    echo $precio;

?>
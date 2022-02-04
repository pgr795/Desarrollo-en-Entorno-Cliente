<?php
    $entrada=fopen('php://input','r');
    $datos=fgets($entrada);
    $valores=json_decode($datos,true);
    $ancho;
    $alto;
    $fondo;

    // var_dump($valores);
    $nuevo=new stdClass();
    $nuevo->marca=$valores['marcas'];
    $nuevo->electro=$valores['electro'];
    $nuevo->ancho=$ancho;
    $nuevo->alto=$alto;
    $nuevo->fondo=$fondo;
   

   // array("TELEVISION","MOVIL","ALTAVOCES","TABLETS")
    $marcas=array("LG","SAMSUNG","SONY","XIAOMI");
    $electro=array("ALTAVOCES","MOVIL","TABLETS","TELEVISION");
    


    // var_dump($marca);
    // var_dump($medida);

    $medidas=array(
        array("30cm","50cm","70cm","90cm"),
        array("35cm","60cm","78cm","94cm"),
        array("40cm","75cm","81cm","97cm")  
    );
    


    $i=array_search($electro,$valores['electro']);
    
    $ancho=$medidas[0][$i];
    $alto=$medidas[1][$i];
    $fondo=$medidas[2][$i];
  
  
    // var_dump($precio);
    // var_dump($i);
    // var_dump($i2);
   

    $respuesta=json_encode($nuevo);

    echo $nuevo;

?>
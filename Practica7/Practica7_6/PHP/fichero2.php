<?php
    $entrada=fopen('php://input','r');
    $datos=fgets($entrada);
    $valores=json_decode($datos,true);
    $ancho;
    $alto;
    $fondo;

    // var_dump($valores);
    $nuevo=new stdClass();
    $nuevo->marca=$valores['marca1'];
    $nuevo->electro=$valores['electro'];
   
   

   // array("TELEVISION","MOVIL","ALTAVOCES","TABLETS")
    $marcas=array("LG","SAMSUNG","SONY","XIAOMI");
    $electro=array("ALTAVOCES","MOVIL","TABLETS","TELEVISION");
    


    // var_dump($marca);
    // var_dump($medida);

    $medidas=array(
        array([30,40,50],[40,50,60],[50,60,70],[60,100,140]),
        array([33,42,54],[35,48,54],[67,80,58],[83,100,114]),
        array([25,38,44],[45,58,64],[65,70,58],[77,89,124]),
        array([28,32,48],[45,68,54],[58,62,78],[73,82,104])    
    );
    
   

    $i=array_search($valores['marca1'],$marcas);
    $i2=array_search($valores['electro'],$electro);

    $ancho=$medidas[$i][$i2][0];
    $alto=$medidas[$i][$i2][1];
    $fondo=$medidas[$i][$i][2];
  
    $nuevo->ancho=$ancho;
    $nuevo->alto=$alto;
    $nuevo->fondo=$fondo;
 
    $respuesta=json_encode($nuevo);

    echo $respuesta;

?>
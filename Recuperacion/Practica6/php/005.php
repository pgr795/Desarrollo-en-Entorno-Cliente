<?php
   $entrada=fopen('php://input','r');
   $datos=fgets($entrada);
   $datosPHP=json_decode($datos,true);

   $numero1=$datosPHP['numero1'];
   $numero2=$datosPHP['numero2'];
   $numero3=$datosPHP['numero3'];

   $datosNuevos= new stdClass();

   $x;
   $y;
   $discriminante=$numero2*$numero2-(4*$numero1*$numero3);

 if($discriminante>0){
        $discriminante=sqrt($discriminante);
        $x=( ((-1) * $numero2 + $discriminante) /2 * $numero1 );
        $x=number_format($x,2);
        $y=( ((-1) * $numero2 - $discriminante) /2 * $numero1 );
        $y=number_format($y,2);
       
        $datosNuevos->x=$x;
        $datosNuevos->y=$y;
        $respuesta=json_encode($datosNuevos);
        echo $respuesta;
    }
    else{
        $x=number_format((-1)*$numero2/(2*$numero1),1)." + ".number_format(sqrt(((-1)*$discriminante/(2*$numero1))),1)." i ";
        $y=number_format((-1)*$numero2/(2*$numero1),1)." - ".number_format(sqrt(((-1)*$discriminante/(2*$numero1))),1)." i ";

        $datosNuevos->x=$x;
        $datosNuevos->y=$y;
        $respuesta=json_encode($datosNuevos);
        echo $respuesta;
    }
?>
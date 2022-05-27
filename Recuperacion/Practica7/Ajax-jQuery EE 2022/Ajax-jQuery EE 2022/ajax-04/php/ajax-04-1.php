<?php
	$nombre=$_GET["nombr"];
	$apellidos=$_GET["apelli"];
		
	$suel=rand(950,5000);
	$resultado=new stdClass();
	$resultado->nombre=$nombre;
	$resultado->apellidos=$apellidos;
	$resultado->sueldo=$suel;
	$devolver=json_encode($resultado);
	echo $devolver;
?>

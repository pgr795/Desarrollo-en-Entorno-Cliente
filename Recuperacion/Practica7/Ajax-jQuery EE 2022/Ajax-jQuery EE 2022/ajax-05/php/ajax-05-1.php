<?php
	$nombre=$_POST["nombr"];
	$apellidos=$_POST["apelli"];
		
	$suel=rand(950,5000);
	$resultado=new stdClass();
	$resultado->nombre=$nombre;
	$resultado->apellidos=$apellidos;
	$resultado->sueldo=$suel;
	$devolver=json_encode($resultado);
	echo $devolver;
?>

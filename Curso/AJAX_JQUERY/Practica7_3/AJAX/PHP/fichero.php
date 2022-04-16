<?php

	$nombre=$_REQUEST['nombre'];
	$apellidos=$_REQUEST['apellidos'];
	$modulo=$_REQUEST['modulo'];
	$notas=$_REQUEST['notas'];
	
	if($notas<5){
		$respuesta="Suspenso";
	}
	else if($notas==5){
		$respuesta="Aprobado";
	}
	else if($notas==6){
		$respuesta="Bien";
	}
	else if($notas==7 || $notas==8){
		$respuesta="Notable";
	}
	else if($notas>8){
		$respuesta="Sobresaliente";
	}

	echo $respuesta;
	
?>
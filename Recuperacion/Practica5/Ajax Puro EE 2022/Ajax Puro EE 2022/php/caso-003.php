<?php
//  paso de parámetros objeto FormData con POST 
	// Primero obtener el valor de los parámetros
	// posibilidad 1
	$primero=$_POST("first");
	$segundo=$_POST("second");
	// posibilidad 2
	$primero=$_REQUEST("first");
	$segundo=$_REQUEST("second");
	
	// Segundo calcular la respuesta
	
	
	// Tercero devolver la respuesta
	echo $respuesta;
?>
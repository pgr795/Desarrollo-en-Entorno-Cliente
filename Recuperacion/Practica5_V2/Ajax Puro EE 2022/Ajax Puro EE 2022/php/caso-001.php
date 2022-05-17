<?php
//  paso de parámetros con GET
	// Primero obtener el valor de los parámetros
	// posibilidad 1
	$primero=$_GET("first");
	$segundo=$_GET("second");
	// posibilidad 2
	$primero=$_REQUEST("first");
	$segundo=$_REQUEST("second");
	
	// Segundo calcular la respuesta
	
	
	// Tercero devolver la respuesta
	echo $respuesta;
?>
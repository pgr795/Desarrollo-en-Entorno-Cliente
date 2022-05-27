<?php
	$nombre=$_GET["nombr"];
	$apellidos=$_GET["apelli"];
		
	$suel=rand(950,5000);
	$resultado="<personal><persona><nombre>".$nombre."</nombre><apellidos>".$apellidos."</apellidos><sueldo>".$suel."</sueldo></persona></personal>";
	
	header('Content-type:text/xml');
	echo $resultado;
?>

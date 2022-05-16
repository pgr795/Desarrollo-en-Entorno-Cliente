<?php
//  paso de parámetros cadena XML con POST 
	// Primero obtener el valor de los parámetros
		// Hay cuatro posibilidades
			// Posibilidad 1
			$datos=fopen("php://input","r");
			$valores=fgets($datos);
			$datosxml=simplexml_load_string($valores);
			// Posibilidad 2
			$datos=file_get_contents("php://input");
			$datosxml=new SimpleXML($datos);
			// Posibilidad 3
			$datos=file_get_contents("php://input");
			$datosxml=simplexml_load_string($datos);
			// Posibilidad 4
			$datos=fopen("php://input","r");
			$valores=fgets($datos);
			$datosxml= new SimpleXML($valores);
					
	// Segundo calcular la respuesta
		// acceder a los datos xml basado en campos
		$primero=$datosxml->registro[posicion]->campo
		
		$minombre=$datosxml->alumno[0]->nombre;
		
		// acceder a los datos xml basado en atributos
		$primero=$datosxml->registro[posicion]->campo
		$atributos=$primero->attributes();
		$segundo=$atributos['segundo'];
		
		$minombre=$datosxml->alumno[0]->nombre;
		$atributosNombre=$minombre->attributes();
		$miapellido=$atributosNombre['apellidos'];
		$midni=$atributosNombre['dni'];
	
		$nota=rand(1,10);
		
	// Tercero devolver la respuesta
	
	// establecer la cabecera
	header('Content-Type:text/xml');
	// generar la cadena xml de respuesta
	
	
	$respuesta='<personal><alumno><nombre>'.$minombre.
						'</nombre><apellidos>'.$miapellido.
						'</apellidos><dni>'.$midni.
						'</dni><nota>'.$nota.
						'</nota></alumno></personal>';	
	echo $respuesta;
?>
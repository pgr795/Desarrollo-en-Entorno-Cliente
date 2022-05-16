<?php
//  paso de parámetros objeto JSON con POST 
	// Primero obtener el valor de los parámetros
		// Hay dos posibilidades
			// Posibilidad 1
			$datos=fopen("php://input","r");
			$valores=fgets($datos);
			$objeto=json_decode($valores,true);
			// Posibilidad 2
			$datos=file_get_contents("php://input");
			$objeto=json_decode($datos,true);
			
					
	// Segundo calcular la respuesta
				
		$minombre=$objeto['nombre'];
		$miapellido=$objeto['apellidos'];
		$nota=rand(1,10);
		
	// Tercero devolver la respuesta
		
		// generar objeto php
			// Posibilidad 1. Creando una clase
			class devuelta{
				public $nomb;
				public $apell;
				public $not;
			}
			$objeto= new devuelta();
			$objeto->nomb=$minombre;
			$objeto->apell=$miapellido;
			$objeto->not=$nota;
			
			// poisibilidad 2. creando una clase con constructor
			class devuelta{
				public $nomb;
				public $apell;
				public $not;
				public function_construct($a1,$a2,$a3){
					$this->nomb=$a1;
					$this->apell=$a2;
					$this->not=$a3;
				}
			}
			$objeto=new devuelta($minombre,$miapellido,$nota);
			
			// Posibilidad 3. Crear un objeto stdClass
			$objeto=new stdClass();
			$objeto->nomb=$minombre;
			$objeto->apell=$miapellido;
			$objeto->not=$nota;
			
			// Posibilidad 4. Haciendo un casting a un array asociativo
			$objeto=(object) array('nomb'=>$minombre,'apell'=>$miapellido,'not'=>$nota);
	
	// transforma objeto php a objeto JSON
	$respuesta=json_encode($objeto)
	
	echo $respuesta;
?>
function esNif (nif) {
	var caracterControl = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
	var letrasControl = ["X","Y","Z","L","K","M"];
	if(nif.length == 9){
		if(esLetra(nif[0]) && esLetra(nif[8])){
			var nums = nif.substring(1,8);
			if(letrasControl.includes(nif[0]) && caracterControl.includes(nif[8]) && esNumero(nums)){
				nums = letrasControl.indexOf(nif[0]) + nums;
				return caracterControl[nums%23] == nif[8];
			}
			return false;
			alert("Error");
		}else if(esLetra(nif[8])){
			var nums = nif.substring(0,8);
			if(esDigito(nums)){
				return caracterControl[nums%23] == nif[8];
			}
			return false;
			alert("Error");
		}
		return false;
		alert("Error");
	}
	return false;
	alert("Error");
}
 
//--------------------------------------------------------------------------------------------
	

function esCif(cif){
	var caracterControles=["J","A","B","C","D","E","F","G","H","I"];
	var longitud=cif.length;
	var numeros=cif.substring(1,8);
	var letra=cif.substring(0,1);
	var ultimaPosicion=cif.substring(8,9).toUpperCase();
	var validarNumero=true;
	var validarLetra=true;
	var numerosPares=0;
	var numerosImpares=0;
	var resultado;
	var resto;
	var complemento;
	console.log(caracterControles);
	console.log(letra);
	console.log(numeros);
//A1234567D1
//console.log("aaaaaaaaaa");
//console.log("bbbbbbbbbb");	
	if(longitud==9){
		console.log("aaaaaaaaaa");
		if(!(esLetra2(letra))){
			validarLetra=false;
		
		}
		for(var i=0; i < 7; i++){
			var numero=numeros.charAt(i);
			console.log(numero);
			if(esNumero(numero)){
				validarNumero=false;	
				
			}
		}
		console.log(validarLetra)
		console.log(validarNumero)
		if(validarNumero && validarLetra){
			console.log("aaaaaaaaaa2");
			
				for(var i=0; i < 7;i+=2){
					var numero=parseInt(numeros.charAt(i));
					var aux=numero*2;
					console.log(numero);
					console.log(aux);
					if(aux > 9){
						var aux2= aux.toString();
						/* aux+""; */
						for(var i; i < aux2.length; i++){
							numerosImpares+=parseInt(aux2.charAt(i));
						}
					}
					else{
					numerosImpares+=aux;
					console.log("Impar"+numerosImpares);
					}
				}
					console.log("Impares"+numerosImpares);
				
	//A12345671		
				console.log("aaaaaaaaaa3");
				for(var i=1; i < 7;i+=2){
					var numero=numeros.charAt(i);
					numerosPares+=parseInt(numero*2);
					console.log(numero);
					console.log("Par"+numerosPares);
				}
				console.log("Pares"+numerosPares);
				resultado=numerosPares+numerosImpares;
				console.log("Resultado "+resultado);
				
				resto=resultado%10;
				console.log("resto "+resto);
				
				complemento=10-resto;
			
				if(complemento==10){
				 complemento=0;
				}
				
		//Comprobar la ultima posicion 
		//Dos formas letra y numero
			    console.log("aa"+complemento);
				var caracterControl=caracterControles[complemento];
				var numeroControl=caracterControles.lastIndexOf(caracterControl);
				
				console.log(complemento);
				console.log(caracterControl);
				console.log(numeroControl);
				console.log(ultimaPosicion);

				if(esLetra2(ultimaPosicion)){
					if(!(caracterControl.includes(caracterControles))){
					console.log("aaaaaaaaaa4");
					return 1;
					
					}
					else{
					console.log("bbbbbbbbbb4");
					return 2;
					}
				}
				if(!(esNumero(ultimaPosicion))){
					if(numeroControl==complemento){
						console.log("aaaaaaaaaa5");
					return 1;
					}
					else{
						console.log("bbbbbbbbbb5");
					return 2;
					}
				}
				else{
					console.log("bbbbbbbbbb6");
					return 2;
				}
				
				
				
		}
		else{
			console.log("bbbbbbbbbb2");
			return 2;
		}
				
	}	
	else{
		console.log("bbbbbbbbbb");
		return 0;
	}
}
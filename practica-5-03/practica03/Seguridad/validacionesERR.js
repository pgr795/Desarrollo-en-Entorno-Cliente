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

//--------------------------------------------------------------------------------------------

function nif_cif(datos){
var dato=datos;
var mensaje="";

	if(esCif(dato)){
		mensaje="C1";
	}
	else if(esCif(dato)){
		mensaje="C2";
	}
	else{
		mensaje=0;
	}

	if(mensaje==0){
		if(esNif(dato)==1){
			mensaje="N1";
		}	
		else if(esNif(dato)==2){
			mensaje="N2";
		}
		else if(esNif(dato)==3){
			mensaje="N3";
		}
		else if(esNif(dato)==0){
			mensaje=0;
		}
	}
	return mensaje;
}

//--------------------------------------------------------------------------------------------

function codigosControl(parametro,parametro2,parametro3){

var codigodeBanco=parametro;
var sucursal=parametro2;
var numeroDeCuenta=parametro3;

var numero1;
var numero2;
var numero3;

var caracterContro1;
var caracterContro12;

	if(codigodeBanco.length==4){
		var num=parseInt(codigodeBanco.charAt(0))*4;
		var num2=parseInt(codigodeBanco.charAt(1))*8;
		var	num3=parseInt(codigodeBanco.charAt(2))*5;
		var num4=parseInt(codigodeBanco.charAt(3))*10;

		var numero1=num+num2+num3+num4;
	}
	
	if(sucursal.length==4){
		var num=parseInt(codigodeBanco.charAt(0))*9;
		var num2=parseInt(codigodeBanco.charAt(1))*7;
		var	num3=parseInt(codigodeBanco.charAt(2))*3;
		var num4=parseInt(codigodeBanco.charAt(3))*6;
	
		var numero2=num+num2+num3+num4;
		
	}
		var suma=numero1+numero2;
		var resto=suma%11;
		var modulo11=resto-11;
	
		if(modulo11==10){
			caracterContro1=1;
		}
		else if(modulo11==11){
			caracterContro1=0;
		}
		else{
			caracterContro1=resto;
		}
	
	if(numeroDeCuenta.length==10){
		var aux=[1,2,4,8,5,10,9,7,3,6];
			for(let i=0; i<numeroDeCuenta.length;i++){
				var numero3=parseInt(numeroDeCuenta.charAt(i))*aux[i];
			}
	}
		var resto=numero3%11;
		var modulo11=resto-11;
	
		if(modulo11==10){
			caracterContro12=1;
		}
		else if(modulo11==11){
			caracterContro12=0;
		}
		else{
			caracterContro12=resto;
		}	

	return caracterContro1+" "+caracterContro12;
}

//--------------------------------------------------------------------------------------------

function calculoIBANEspanya(parametro){

var codigoDeCuenta=parametro;
var codigoEspanya="142800";
var operacion;
var codigo;
	if(codigoDeCuenta.length==20){
		operacion=parseInt(codigoDeCuenta+codigoEspanya,10);
		operacion=98-(operacion%97);
		var codigo;
		if(operacion>=10){
			codigo="ES"+operacion+parametro;
		}
		else{
			codigo="ES00"+operacion+parametro;
		}
		return codigo;
	}	
}	

//--------------------------------------------------------------------------------------------

function comprobarIBAN(parametro){
	var valido=true;
	
	if(parametro.length >=34){
		
		var tabla=new array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
		console.log(table);
	}
	
	
	
	
	
	
	
	if(valido){
		return true;
	}
	else{
		return false;
	}
	
}







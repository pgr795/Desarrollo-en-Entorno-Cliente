function esLetraPlus(letra){
		var letra = letra.toUpperCase();
		var numeros =("0123456789");
		var masLetras=("ÚÁÉÍÓÑÜ");
		var especiales=(",º.");
		var espacio=(" ");
		console.log(letra);
		console.log(numeros);
		return ((letra >= "A" && letra <="Z") || numeros.includes(letra) || masLetras.includes(letra) || espacio.includes(letra) || especiales.includes(letra));
	}
	
function esLetraYNumeros(letra){
		var letra = letra.toUpperCase();
		var numeros =("0123456789");
		var espacio=(" ");
		console.log(letra);
		return ((letra >= "A" && letra <="Z") ||numeros.includes(letra) || espacio.includes(letra));
	}
	
function esLetra(letra){
		var letra = letra.toUpperCase();
		var masLetras=("Ú,Á,É,Í,Ó,Ñ,Ü");
		var espacio=(" ");
		console.log(letra);
		return ((letra >= "A" && letra <="Z") || masLetras.includes(letra) || espacio.includes(letra));
	}
	
	
function esLetra2(letra){
		var letra = letra.toUpperCase();
		var letras=("A,B,C,D,E,F,G,H,J,U,V,P,Q,R,S,W");
		console.log(letra);
		return (letras.includes(letra));
	}
	
function esNumero(numero){
		console.log(numero);
		return (numero < "0" || numero > "9");
	}

/* function esNIF(nif){
	var valido=true;

	
}

function esCIF(cif){
	
	
}
 */


//--------------------------------------------------------------------------------------------	

function validarCodigoPostal(){
		var validarCodigoPostal = true;
		var codigoPostal = document.primero.cp.value;
		console.log(codigoPostal);	
		for(var i = 0;i < codigoPostal.length; i++){
			console.log("aaaaaaa");
			if(!esNumero(codigoPostal[i])){
				alert("Error");
				return false;
			}			
		}
		codigoPostal = parseInt(codigoPostal);
		return codigoPostal > 1000 && codigoPostal <= 52999;
		}
		
function validarLocalidad(){
			var localidad = document.primero.localidad.value;
			var inicio = localidad.substring(0,3).toUpperCase();
			var medio = localidad.substring(3,localidad.length-3).toUpperCase();
			var fin = localidad.substring(localidad.length-3,localidad.length).toUpperCase();	
			var validarLocalidad = true;
			var longitud= localidad.length;
			var contador = 0;
			var contador2 = 0;
			var contador3 = 0;
			var letra ="";
			console.log(localidad);
			console.log(inicio);
			console.log(medio);
			console.log(fin);
			console.log(longitud);
			
			if(localidad.length > 10 && localidad.length < 30){
				console.log("bb");
				//inicio
				while(contador != inicio.length){
					letra=inicio.charAt(contador);
						console.log("aaaaaaa");
					if(!(esLetra(letra))){
						console.log("aaaaaaa1");
						alert("Error");
						return false;
					}
					contador++;
				}  
				//medio
				while(contador2 != medio.length){
					letra=medio.charAt(contador2);
						console.log("bbbbbb");
					if(!(esLetra(letra))){
						console.log("aaaaaaa2");
						alert("Error");
						return false;
					}
					contador2++;
				}  
				//Fin
				while(contador3 != fin.length){
					letra=fin.charAt(contador3);
						console.log("cccccc");
					if(!(esLetra(letra))){
						console.log("aaaaaaa3");
						alert("Error");
						return false;
					}
					contador3++;
				}  
			}				
		}
		
function validarDomicilio(){
			var domicilio = document.primero.domicilio.value;
			var inicio = domicilio.substring(0,3).toUpperCase();
			var medio = domicilio.substring(3,domicilio.length-1).toUpperCase();
			var fin = domicilio.substring(domicilio.length-1,domicilio.length).toUpperCase();	
			var validardomicilio = true;
			var longitud= domicilio.length;
			var contador = 0;
			var contador2 = 0;
			var contador3 = 0;
			var letra ="";
			console.log(domicilio);
			console.log(inicio);
			console.log(medio);
			console.log(fin);
			console.log(longitud);
			
			if(domicilio.length > 10 && domicilio.length < 30){
				console.log("bb");
				//inicio
				while(contador != inicio.length){
					letra=inicio.charAt(contador);
						console.log("aaaaaaa");
					if(!(esLetra(letra))){
						console.log("aaaaaaa1");
						alert("Error");
						return false;
					}
					contador++;
				}  
				//medio
				while(contador2 != medio.length){
					letra=medio.charAt(contador2);
						console.log("bbbbbb");
					if(!(esLetraPlus(letra))){
						console.log("aaaaaaa2");
						alert("Error");
						return false;
					}
					contador2++;
				}  
				//Fin
				while(contador3 != fin.length){
					letra=fin.charAt(contador3);
						console.log("cccccc");
					if	(!(esLetraYNumeros(letra))){
						console.log("aaaaaaa3");
						alert("Error");
						return false;
					}
					contador3++;
				}  
			}				
		}
		
function validarApellido(){
			var apellido = document.primero.apellidos.value;
			var inicio = apellido.substring(0,4).toUpperCase();
			var medio = apellido.substring(4,apellido.length-5).toUpperCase();
			var fin = apellido.substring(apellido.length-5,apellido.length).toUpperCase();	
			var validarApellido = true;
			var longitud= apellido.length;
			var contador = 0;
			var contador2 = 0;
			var contador3 = 0;
			var letra ="";
			console.log(apellido);
			console.log(inicio);
			console.log(medio);
			console.log(fin);
			console.log(longitud);
			
			if(apellido.length > 12 && apellido.length < 35){
				console.log("bb");
				//inicio
				while(contador != inicio.length){
					letra=inicio.charAt(contador);
						console.log("aaaaaaa");
					if(!(esLetra(letra))){
						console.log("aaaaaaa1");
						alert("Error");
						return false;
					}
					contador++;
				}  
				//medio
				while(contador2 != medio.length){
					letra=medio.charAt(contador2);
						console.log("bbbbbb");
					if(!(esLetra(letra))){
						console.log("aaaaaaa2");
						alert("Error");
						return false;
					}
					contador2++;
				}  
				//Fin
				while(contador3 != fin.length){
					letra=fin.charAt(contador3);
						console.log("cccccc");
					if(!(esLetra(letra))){
						console.log("aaaaaaa3");
						alert("Error");
						return false;
					}
					contador3++;
				}  
			}						
		}
		
function comprobarCP(){
		var cp = document.primero.cp.value;
		let longitud = cp.length;
		let validar= true;
		let aux="";
		console.log(cp);
		console.log(aux);
		console.log(longitud);
		
		if(cp != null && longitud == 5)
		{
			for(i=0;i < cp.length; i++){
				aux = cp.charAt(i);
					if(esNumero(aux)){
						alert("Error");
						validar=false;	
					}	
					/* if(Number.isInteger(aux)){
						validar=false;	
					}	 */					
			}
		}
		else
		{
			validar=false;
		}

		if(validar){
			provincia = provincias[parseInt(cp.substring(0,2))-1];
			document.primero.provincia.value = provincia;
		}
		else{		
			document.primero.provincia.value = "Error";
		}
	}
	
function bienvenido(){
		alert("Bienvenido");
	}

window.onload=inicio;
		
function inicio(){

var provincias =[
"Araba/Álava",
"Albacete",
"Alicante/Alacant",
"Almería",
"Ávila",
"Badajoz",
"Baleares",
"Barcelona",
"Burgos",
"Cáceres",
"Cádiz",
"Castellón/Castelló",
"Ciudad Real",
"Córdoba",
"A Coruña",
"Cuenca",
"Gerona",
"Granada",
"Guadalajara",
"Guipúzcoa",
"Huelva",
"Huesca",
"Jaén",
"León",
"Lérida",
"La Rioja",
"Lugo",
"Madrid",
"Málaga",
"Murcia",
"Navarra",
"Orense",
"Asturias",
"Palencia",
"Las Palmas",
"Pontevedra",
"Salamanca",
"Santa Cruz de Tenerife",
"Cantabria",
"Segovia",
"Sevilla",
"Soria",
"Tarragona",
"Teruel",
"Toledo",
"Valencia/València",
"Valladolid",
"Vizcaya",
"Zamora",
"Zaragoza",
"Ceuta",
"Melilla"];

document.primero.nif.onfocus = fondoRojo;
document.primero.nombre.onfocus = fondoRojo;
document.primero.apellidos.onfocus = fondoRojo;
document.primero.domicilio.onfocus = fondoRojo;
document.primero.localidad.onfocus = fondoRojo;
document.primero.cp.onfocus = fondoRojo;
document.primero.provincia.onfocus = fondoRojo;

document.primero.nif.onblur = fondoBlanco;
document.primero.nombre.onblur = fondoBlanco;
document.primero.apellidos.onblur = fondoBlanco;
document.primero.domicilio.onblur = fondoBlanco;
document.primero.localidad.onblur = fondoBlanco;
document.primero.cp.onblur = fondoBlanco;
document.primero.provincia.onblur = fondoBlanco;

//El evento onchange ocurre cuando se cambia el valor de un elemento. 	
document.primero.cp.onchange= comprobarCP;

document.primero.viajar.onchange = añadirAficionImg;
document.primero.leer.onchange = añadirAficionImg;
document.primero.musica.onchange = añadirAficionImg;
document.primero.cine.onchange = añadirAficionImg;
document.primero.deporte.onchange = añadirAficionImg;
document.primero.cena.onchange = añadirAficionImg;

document.onkeyup = imagenFondo;

window.primero.nombre.onkeypress = comprobarCaracter;
window.primero.apellidos.onkeypress = comprobarCaracter;
window.primero.localidad.onkeypress = comprobarCaracter;

document.primero.onsubmit = enviar;
document.primero.onreset = limpiar;

//--------------------------------------------------------------------------------------------
	function fondoRojo (){
		this.style.backgroundColor = "red";
	}
		
	function fondoBlanco (){
		this.style.backgroundColor = "white";
	}

//--------------------------------------------------------------------------------------------
	function comprobarCP(){
		var cp = document.primero.cp.value;
		let longitud = cp.length;
		let validar= true;
		let aux="";		
		if(cp != null && longitud == 5){
			for(i=0;i < cp.length; i++){
				aux = cp.charAt(i);
				if(esNumero(aux)){									//Number.isInteger(aux)
					validar=false;	
				}			
			}
		}
		else{
			validar=false;
		}
		if(validar){
			var provincia = provincias[parseInt(cp.substring(0,2))-1];
			document.primero.provincia.value = provincia;
		}
		else{		
			document.primero.provincia.value = "Error";
		}
	}
//-------------------------------------------------------------------------------------------------------
	
	var imagenes = ["imagenes/atena acropoli.jpg","imagenes/lisboa torre belem.jpg",
	"imagenes/Paris Torre Eiffel.jpg","imagenes/roma fontana di trevi.jpg","imagenes/Venecia Plaza San Marcos.jpg"];

	var contadorImagenes = 0;
	
	function imagenFondo(event){
		if(event.ctrlKey || event.Keycode == 114){
			if(contadorImagenes == imagenes.length){
			contadorImagenes = 0;
			}
		document.primero.style.backgroundImage = "url('"+imagenes[contadorImagenes]+"')";
		contadorImagenes++;
		}
	}
	
	for (var i = 0; i < 4;i++){
		document.primero.provin[i].onfocus = mostrarImagen;
	}
	
	function mostrarImagen(){
		document.primero.imgprovincia.src = "imagenes/" + this.value + ".jpg";
	}
	
//-----------------------------------------------------------------------------------------------------	
	arrayImagenes = [];
	
	function añadirAficionImg(){
		let imagen = "imagenes/" + this.value + ".jpg";
		if(!arrayImagenes.includes(imagen))
		{
			arrayImagenes.push(imagen);
		}
		else{
			//splice()El método agrega y / o elimina elementos de la matriz. 
			arrayImagenes.splice(arrayImagenes.indexOf(imagen),1);
		}	
	}
	
	var contador = 0;
	
	var intervalImagenes = setInterval(function(){
		if(arrayImagenes.length > 0){
			if(contador == arrayImagenes.length-1){
				contador = 0;
			}else{
				contador++;
			}
			document.primero.img_aficion.src = arrayImagenes[contador];
		}
	},1000);
//--------------------------------------------------------------------------------------------
function comprobarCaracter(event){
	var x = event.key;
	if(!esLetra(x) && x != " "){
		alert("Error");
		return false;
	}
	return true;
}	
//--------------------------------------------------------------------------------------------			
	function validarNombre(){
		var nombre = document.primero.nombre.value;
		var inicio = nombre.substring(0,3).toUpperCase();
		var medio = nombre.substring(nombre.length-2,nombre.length).toUpperCase();
		var fin = nombre.substring(nombre.length-5,nombre.length).toUpperCase();
		var validarNombre = true;
		var contador = 0;
		var contador2 = 0;
		var contador3 = 0;
		var letra ="";
		
		if(nombre.length > 6 && nombre.length < 12){
				//inicio
				while(contador != inicio.length){
					letra=inicio.charAt(contador);
					if(!(esLetra(letra))){
						validarNombre=false;
					}
					contador++;
				}  
				//medio
				while(contador2 != medio.length){
					letra=medio.charAt(contador2);
					if(!(esLetra(letra))){
						validarNombre=false;
					}
					contador2++;
				}  
				//Fin
				while(contador3 != fin.length){
					letra=fin.charAt(contador3);
					if(!(esLetra(letra))){
						validarNombre=false;					
					}
					contador3++;
				}  
				return validarNombre;
		}	
	}
	
//--------------------------------------------------------------------------------------------
	function validarApellido(){
			var apellido = document.primero.apellidos.value;
			var inicio = apellido.substring(0,4).toUpperCase();
			var medio = apellido.substring(4,apellido.length-5).toUpperCase();
			var fin = apellido.substring(apellido.length-5,apellido.length).toUpperCase();	
			var validarApellido = true;
			var contador = 0;
			var contador2 = 0;
			var contador3 = 0;
			var letra ="";
		
			if(apellido.length > 12 && apellido.length < 35){
				//inicio
				while(contador != inicio.length){
					letra=inicio.charAt(contador);
					if(!(esLetra(letra))){
						validarApellido=false;
					}
					contador++;
				}  
				//medio
				while(contador2 != medio.length){
					letra=medio.charAt(contador2);
					if(!(esLetra(letra))){
						validarApellido=false;
					}
					contador2++;
				}  
				//Fin
				while(contador3 != fin.length){
					letra=fin.charAt(contador3);
					if(!(esLetra(letra))){
						return false;
					}
					contador3++;
				}  
			}
		else{
				validarApellido=false;
		}
		return validarApellido;					
	}
//--------------------------------------------------------------------------------------------
 	function validarDomicilio(){
			var domicilio = document.primero.domicilio.value;
			var inicio = domicilio.substring(0,3).toUpperCase();
			var medio = domicilio.substring(3,domicilio.length-1).toUpperCase();
			var fin = domicilio.substring(domicilio.length-1,domicilio.length).toUpperCase();	
			var validardomicilio = true;
			var contador = 0;
			var contador2 = 0;
			var contador3 = 0;
			var letra ="";
			
			if(domicilio.length > 10 && domicilio.length < 30){
				//inicio
				while(contador != inicio.length){
					letra=inicio.charAt(contador);
					if(!(esLetra(letra))){
						validardomicilio=false;
					}
					contador++;
				}  
				//medio
				while(contador2 != medio.length){
					letra=medio.charAt(contador2);
					if(!(esLetraPlus(letra))){
						validardomicilio=false;
					}
					contador2++;
				}  
				//Fin
				while(contador3 != fin.length){
					letra=fin.charAt(contador3);
					if	(!(esLetraYNumeros(letra))){
						validardomicilio=false;
					}
					contador3++;
				}  
			}
			else{
					validardomicilio=false;
			}	
			return validardomicilio;		
		}
//--------------------------------------------------------------------------------------------
	function validarLocalidad(){
			var localidad = document.primero.localidad.value;
			var inicio = localidad.substring(0,3).toUpperCase();
			var medio = localidad.substring(3,localidad.length-3).toUpperCase();
			var fin = localidad.substring(localidad.length-3,localidad.length).toUpperCase();	
			var validarLocalidad = true;
			var contador = 0;
			var contador2 = 0;
			var contador3 = 0;
			var letra ="";

			if(localidad.length > 10 && localidad.length < 30){
				//inicio
				while(contador != inicio.length){
					letra=inicio.charAt(contador);
					if(!(esLetra(letra))){
						validarLocalidad=false;
					}
					contador++;
				}  
				//medio
				while(contador2 != medio.length){
					letra=medio.charAt(contador2);
					if(!(esLetra(letra))){
						validarLocalidad=false;
					}
					contador2++;
				}  
				//Fin
				while(contador3 != fin.length){
					letra=fin.charAt(contador3);
					if(!(esLetra(letra))){
						validarLocalidad=false;
					}
					contador3++;
				}  
			}
			else{
				validarLocalidad=false;
			}	
			return validarLocalidad;		
		}
//--------------------------------------------------------------------------------------------
	function validarCodigoPostal(){
		var codigoPostal = document.primero.cp.value;
		for(var i = 0;i < codigoPostal.length; i++){
			if(!esNumero(codigoPostal[i])){
				alert("Error");
				return false;
			}			
		}
		codigoPostal = parseInt(codigoPostal);
		return codigoPostal > 1000 && codigoPostal <= 52999;
		}
//--------------------------------------------------------------------------------------------
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
		}else if(esLetra(nif[8])){
			var nums = nif.substring(0,8);
			if(esDigito(nums)){
				return caracterControl[nums%23] == nif[8];
			}
			return false;
		}
		return false;
	}
	return false;
}
 
  
//--------------------------------------------------------------------------------------------
	function limpiar(){
		document.primero.img_aficion.src = "";
		document.primero.imgprovincia.src = "";
		intervalImagenes = [];
	}

//--------------------------------------------------------------------------------------------
	function enviar(){
	return esNif(document.primero.nif.value)
	&& validarNombre(document.primero.nombre.value)
	&& validarApellido(document.primero.apellidos.value)
	&& validarDomicilio(document.primero.domicilio.value)
	&& validarLocalidad(document.primero.localidad.value)
	&& validarCodigoPostal(document.primero.cp.value);
}
	
//--------------------------------------------------------------------------------------------	
	function esLetra(letra){
		var letra = letra.toUpperCase();
		var masLetras=("Ú,Á,É,Í,Ó,Ñ,Ü");
		var espacio=(" ");
		console.log(letra);
		return ((letra >= "A" && letra <="Z") || masLetras.includes(letra) || espacio.includes(letra));
	}
	
	function esLetraYNumeros(letra){
		var letra = letra.toUpperCase();
		var numeros =("0123456789");
		var espacio=(" ");
		console.log(letra);
		return ((letra >= "A" && letra <="Z") ||numeros.includes(letra) || espacio.includes(letra));
	}
	
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
	
	function esNumero(numero){
		var numero=numero.charAt(0);
		console.log(numero);
		
		return (numero < "0" || numero > "9");
	}
}

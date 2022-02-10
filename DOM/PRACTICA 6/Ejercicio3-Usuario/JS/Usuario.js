//Cuando se pulse el botón de “Añadir Localidad”
//vamos a añadir el dato de la caja de texto
//(debe tener valor) a una lista no ordenada,
//los valores en la lista no ordenada deberán aparecer
//ordenados alfabéticamente en modo ascendente y la 
//localidad que se añade nodebe estar presente 
//en la lista no ordenada.


if (document.addEventListener){
	window.addEventListener("load",inicio)
}
else if (document.attachEvent){
	window.attachEvent("onload",inicio);
}

function inicio(){
	let botonRegistro=document.getElementById("registrar");
	let aceptarRegistro=document.getElementById("aceptar");
	let cancelarRegistro=document.getElementById("cancelar");
	let botonEntrar=document.getElementById("entrar");
	let aceptarEntrar=document.getElementById("aceptar2");
	let cancelarEntrar=document.getElementById("cancelar2");
	

	if(document.addEventListener){
		botonRegistro.addEventListener("click",abrirRegistro);
		aceptarRegistro.addEventListener("click",comprobarRegistro);
		cancelarRegistro.addEventListener("click",cerrarRegistro);
		botonEntrar.addEventListener("click",abrirEntra);
		aceptarEntrar.addEventListener("click",comprobarEntrar);
		cancelarEntrar.addEventListener("click",cerrarEntrar);
	}
	else{
		botonRegistro.attachEvent("onclick",abrirRegistro);
		aceptarRegistro.attachEvent("onclick",comprobarRegistro);
		cancelarRegistro.attachEvent("onclick",cerrarRegistro);
		botonEntrar.attachEvent("onclick",abrirEntra);
		aceptarEntrar.attachEvent("onclick",comprobarEntrar);
		cancelarEntrar.attachEvent("onclick",cerrarEntrar);
	}
}

	function abrirRegistro(){
		document.getElementById("formRegistro").setAttribute("open",true);
	}
	function comprobarRegistro(){
		//PGR71995Atm
		//pgR7199_At19
		let usuarioRegistro=document.getElementById('usuario').value;
		let contrasenaRegistro=document.getElementById('contrasena').value;
		var usuario=/^[a-záéíóúüñ]{3}([a-záéíóúüñ]|[0-9]){5,9}$/i;
		var contrasena=/^[a-záéíóúüñ]{2}([a-záéíóúüñ]|[0-9]|_){5,9}([a-z0-9áéíóúüñ])$/i;
		let validarUsuario=true;
		let validarContrasena=true;
		
		if(!usuario.test(usuarioRegistro)) {
			validarUsuario=false;
	   }
		if(!contrasena.test(contrasenaRegistro)){
			 validarContrasena=false;
		}
		
		if(validarContrasena && validarUsuario){
			document.cookie="usuario="+usuarioRegistro+" contrasena="+contrasenaRegistro+";expires=true, 30 Jan 2030 00:00:00 GMT;";
			alert("Nuevo usuario registrado");
			cerrarRegistro();
		}
		else{
			alert("Formato Usuario/Contraseña Incorrecto");
		}
	}

	function cerrarRegistro(){
		document.getElementById("formRegistro").removeAttribute("open");
	}
	function abrirEntra(){
		document.getElementById("formEntrar").setAttribute("open",true);
	}

	function comprobarEntrar(){
		let usuario = document.getElementById('usuario2').value;
		let password = document.getElementById('contrasena2').value;
	  	//PGR71995Atm
		//pgR7199_At19
		if (usuario == "" || password == ""){
			alert("No se ha introducido usuario/contraseña");
		}
		else {
			let cadena=document.cookie;
			let nombre=cadena.indexOf(usuario);
			let contrasena=cadena.indexOf("=",nombre+1);
			let fin=cadena.indexOf(";",contrasena+1);
			
			if(fin==-1){
				fin=cadena.length;
			}
	  
		 	 contrasena=cadena.substring(contrasena+1,fin);
	  
		 	 if (contrasena == password) {
				  alert("Bienvenido");
				  cerrarEntrar();
				  document.getElementById("nomUsuario").textContent += " : "+usuario;
				  
				}
		  	else {
				  alert("Usuario o contraseña Incorrecto");
				}
		}
	}
	function cerrarEntrar(){
		document.getElementById("formEntrar").removeAttribute("open");
	}


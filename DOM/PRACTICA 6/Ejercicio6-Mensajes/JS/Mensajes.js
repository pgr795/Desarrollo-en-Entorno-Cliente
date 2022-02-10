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
	let botonMensaje=document.getElementById("anadirMensaje");
    let aceptarMensaje=document.getElementById("aceptarCuadro");
    let cancelarMensaje=document.getElementById("cancelarCuadro");

	if(document.addEventListener){
		botonRegistro.addEventListener("click",abrirRegistro);
		aceptarRegistro.addEventListener("click",comprobarRegistro);
		cancelarRegistro.addEventListener("click",cerrarRegistro);
		botonEntrar.addEventListener("click",abrirEntra);
		aceptarEntrar.addEventListener("click",comprobarEntrar);
		cancelarEntrar.addEventListener("click",cerrarEntrar);
		botonMensaje.addEventListener("click",abrirCuadro);
    	aceptarMensaje.addEventListener("click",anadirMensaje);
     	cancelarMensaje.addEventListener("click",cerrarCuadro);
	}
	else{
		botonRegistro.attachEvent("onclick",abrirRegistro);
		aceptarRegistro.attachEvent("onclick",comprobarRegistro);
		cancelarRegistro.attachEvent("onclick",cerrarRegistro);
		botonEntrar.attachEvent("onclick",abrirEntra);
		aceptarEntrar.attachEvent("onclick",comprobarEntrar);
		cancelarEntrar.attachEvent("onclick",cerrarEntrar);
		botonMensaje.addEventListener("click",abrirCuadro);
      	aceptarMensaje.addEventListener("click",anadirMensaje);
      	cancelarMensaje.addEventListener("click",cerrarCuadro);
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
	function abrirCuadro(){
		cerrarEntrar();
		let dialogo = document.getElementById("dialogMensaje");
		dialogo.setAttribute("open",true);
	}
	function anadirMensaje(){
		let titulo = document.getElementById("titulo").value.toLowerCase();
		let contenido = document.getElementById("comentario").value.toLowerCase();
		let nombre = document.getElementById("usuario").innerHTML;
		nombre = nombre.substr(9);
	
		let ruta = document.getElementById("formMensaje").foto.value;
		let padre = document.getElementById("contenedor");
	
		let contenedor = document.createElement("div");
		let idCon = document.createAttribute("id");
		idCon.value = "mensaje";
		contenedor.setAttributeNode(idCon);
		padre.appendChild(contenedor);
	
		let cabecera = document.createElement("div");
		let idCab = document.createAttribute("id");
		idCab.value = "cabecera";
		cabecera.setAttributeNode(idCab);
		contenedor.appendChild(cabecera);
	
		let imagen = document.createElement("img");
		let src = document.createAttribute("src");
		src.value = ruta;
		imagen.setAttributeNode(src);
		let pnombre = document.createElement("h2");
		let texto = document.createTextNode(nombre);
		pnombre.appendChild(texto);
		cabecera.appendChild(imagen);
		cabecera.appendChild(pnombre);

		let ptitulo=document.createElement("p");
		let negrita = document.createElement("b");
		let texto1=document.createTextNode(titulo);
		negrita.appendChild(texto1);
		ptitulo.appendChild(negrita);
		contenedor.appendChild(ptitulo);

		let pcontenido=document.createElement("p");
		let texto2=document.createTextNode(contenido);
		pcontenido.appendChild(texto2);
		contenedor.appendChild(pcontenido);
	
		cerrarCuadro();
		vacioCuadro();
	}
	function cerrarCuadro() {
		let dialogo = document.getElementById("dialogMensaje");
		dialogo.removeAttribute("open");
	}
	function vacioCuadro() {
		for (let i = 0; i < document.getElementById("formMensaje").elements.length; i++) {
			if (document.getElementById("formMensaje").elements[i].type == "text"){
				document.getElementById("formMensaje").elements[i].value = "";
			}
		}
	}
	  
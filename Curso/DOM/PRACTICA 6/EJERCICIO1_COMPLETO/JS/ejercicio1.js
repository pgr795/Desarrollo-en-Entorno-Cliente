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
	let anadir_Coche=document.getElementById("anyadir_coche");
	let anadir_Localidad=document.getElementById("anyadir");
	let comunidades = document.getElementById("comunidades");
	let definiciones=document.getElementById("anyadirDefinicion");
	
	if (document.addEventListener){
		botonRegistro.addEventListener("click",abrirRegistro);
		aceptarRegistro.addEventListener("click",comprobarRegistro);
		cancelarRegistro.addEventListener("click",cerrarRegistro);
		botonEntrar.addEventListener("click",abrirEntra);
		aceptarEntrar.addEventListener("click",comprobarEntrar);
		cancelarEntrar.addEventListener("click",cerrarEntrar);
		botonMensaje.addEventListener("click",abrirCuadro);
    	aceptarMensaje.addEventListener("click",anadirMensaje);
     	cancelarMensaje.addEventListener("click",cerrarCuadro);
		anadir_Localidad.addEventListener("click",anadirLocalidad);
		anadir_Coche=addEventListener("click",anadirCoche);
		comunidades.addEventListener("change",provincias);
		definiciones.addEventListener("click",anadirDefinicion);
		
	}
	else if (document.attachEvent){
		botonRegistro.attachEvent("onclick",abrirRegistro);
		aceptarRegistro.attachEvent("onclick",comprobarRegistro);
		cancelarRegistro.attachEvent("onclick",cerrarRegistro);
		botonEntrar.attachEvent("onclick",abrirEntra);
		aceptarEntrar.attachEvent("onclick",comprobarEntrar);
		cancelarEntrar.attachEvent("onclick",cerrarEntrar);
		botonMensaje.addEventListener("click",abrirCuadro);
		aceptarMensaje.addEventListener("click",anadirMensaje);
		cancelarMensaje.addEventListener("click",cerrarCuadro);
		anadir_Localidad.attachEvent("onclick",anadirLocalidad);
		anadir_Coche.attachEvent("onclick",anadirCoche);
		comunidades.attachEvent("change",provincias);
		definiciones.attachEvent("onclick",anadirDefinicion);
	}
}
// --------------------------------------------------------------------------
	//USUARIOS
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
	//PGR71995Atm
	//pgR7199_At19
	let usuario = document.getElementById('usuario2').value;
	let password = document.getElementById('contrasena2').value;
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
// --------------------------------------------------------------------------------------------------------
	//LOCALIDADES
function anadirLocalidad(){
	let padre=document.getElementById("local");
	let vlocalidad=document.getElementById("localidad").value.trim();
	var localidades=padre.getElementsByTagName("li");
	let inexistente=true;
	let indice=0;
	while (inexistente && indice < localidades.length){
		if (vlocalidad == localidades.item(indice).textContent){
			inexistente=false;
		}
		else if (vlocalidad < localidades.item(indice).textContent){
			let nuevoli=document.createElement("li");
			let textoli=document.createTextNode(vlocalidad);
			nuevoli.appendChild(textoli);
			padre.insertBefore(nuevoli,localidades.item(indice));
			inexistente=false;
		}
		indice+=1;
    }
	if (inexistente){
		let nuevoli=document.createElement("li");
		let textoli=document.createTextNode(vlocalidad);
		nuevoli.appendChild(textoli);
		padre.appendChild(nuevoli);
	}
}
// --------------------------------------------------------------------------------------------------------
	//AÑADIR COCHES
function anadirCoche(){
	let padre=document.querySelector("#coches>tbody");
	let vMarca=document.getElementById("marca").value.trim();
	let vModelo=document.getElementById("modelo").value.trim();
	let vPrecio=document.getElementById("precio").value.trim();

	if(vMarca!="" && vModelo!="" && vPrecio!=""){
		let lineas=padre.getElementsByTagName("tr");
		let inexistente=true;
		let indice=0;
		let marcaActual=vMarca;
		let modeloActual=vModelo;

		while (inexistente && indice < lineas.length){
				let lin=lineas.item(indice);
				let celdas=lin.getElementsByTagName("td");
				let marcaLinea=celdas.item(0).textContent;
				let modeloLinea=celdas.item(1).textContent;


			if (celdas.item(0).textContent==vMarca && celdas.item(1).textContent==vModelo && celdas.item(2).textContent!=vPrecio){
				inexistente=false;
				celdas.item(2).textContent=vPrecio;
			} 
			else if (marcaActual > marcaLinea){
				inexistente=false;
				insertarAntes(lin,vMarca,vModelo,vPrecio);
			}
			else if (marcaActual == marcaLinea) {
					if(modeloActual > modeloLinea){
						inexistente=false;
						insertarAntes(lin,vMarca,vModelo,vPrecio);
					}
			}			
			else if (celdas.item(0).textContent==vMarca && celdas.item(1).textContent==vModelo && celdas.item(2).textContent==vPrecio){
				inexistente=false;
			}
			indice+=1;
		}
		if (inexistente){
			let nlinea=document.createElement("tr");
			let nMarca=document.createElement("td");
			let nModelo=document.createElement("td");
			let nPrecio=document.createElement("td");
			let nvMarca=document.createTextNode(vMarca);
			let nvModelo=document.createTextNode(vModelo);
			let nvPrecio=document.createTextNode(vPrecio);
			nMarca.append(nvMarca);
			nModelo.append(nvModelo);
			nPrecio.append(nvPrecio);

			nlinea.append(nMarca);
			nlinea.append(nModelo);
			nlinea.append(nPrecio);

			padre.append(nlinea);
		}
	}	
}
function insertarAntes(lin,vMarca,vModelo,vPrecio){
	let nlinea=document.createElement("tr");
	let nMarca=document.createElement("td");
	let nModelo=document.createElement("td");
	let nPrecio=document.createElement("td");
	let nvMarca=document.createTextNode(vMarca);
	let nvModelo=document.createTextNode(vModelo);
	let nvPrecio=document.createTextNode(vPrecio);
	nMarca.append(nvMarca);
	nModelo.append(nvModelo);
	nPrecio.append(nvPrecio);
	nlinea.append(nMarca);
	nlinea.append(nModelo);
	nlinea.append(nPrecio);
	lin.before(nlinea);
}	
// --------------------------------------------------------------------------------------------------------
	//Comunidades
function provincias(){
	let selectComunidades=document.getElementById("comunidades");
	let comunidadSeleccionada = selectComunidades.options[selectComunidades.selectedIndex].value;
	let provincias= new Array();
	let padre = document.getElementById("provincia");
	borrarOptions(padre);
	
	switch(comunidadSeleccionada){

		case "Andalucia":
				provincias = ["Almería","Cádiz","Cordoba","Granada","Huelva","Jaén","Málaga","Sevilla"];
					for (let i = 0; i < provincias.length; i++){
							let nuevaOptions=document.createElement("option");
							let texto=document.createTextNode(provincias[i]);
							nuevaOptions.appendChild(texto);
							padre.append(nuevaOptions);
					}
				incluirMensaje("Buena comida y ambiente");
				break;


		case "Aragon":
				provincias = ["Huesca","Teruel","Zaragoza"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	
			
			
		case "Asturias":
				provincias = ["Asturias"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena Sidra");
				break;


		case "IslasBaleares":
				provincias = ["Islas Baleares"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Islas Baleares");
				break;


		case "Canarias":
				provincias = ["Las Palmas","Santa Cruz de Tenerife"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;		


		case "Cantabria":
				provincias = ["Cantabria"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	


		case "CastillayLeon":
				provincias = ["Avila","Burgos","Leon","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;


		case "CastillaLaMancha":
				provincias = ["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	
			
			
		case "Cataluña":
				provincias = ["Barcelona","Girona","Lleida","Tarragona"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	
				
				
		case "ComunidadValenciana":
				provincias = ["Alicante","Castellon","Valencia"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;


		case "Extremadura":
				provincias = ["Badajoz","Caceres"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;
				
				
		case "Galicia":
				provincias = ["A Coruña","Lugo","Ourense","Pontevedra"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	


		case "Madrid":
				provincias = ["Madrid"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;


		case "Murcia":
				provincias = ["Murcia"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	
				
				
		case "Navarra":
				provincias = ["Navarra"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	


		case "PaisVasco":
				provincias = ["Alava","Bizkaia","Gipuzkoa"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;


		case "LaRioja":
				provincias = ["La Rioja"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;		


		case "Ceuta":
				provincias = ["Ceuta"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
				break;	
		
		case "Melilla":
				provincias = ["Melilla"];
				for (let i = 0; i < provincias.length; i++){
					let nuevaOptions=document.createElement("option");
					let texto=document.createTextNode(provincias[i]);
					nuevaOptions.appendChild(texto);
					padre.append(nuevaOptions);
				}
				incluirMensaje("Buena comida y ambiente");
			break;			
	}
}
function borrarOptions(padre) {
	while (padre.firstChild) {
  		padre.removeChild(padre.firstChild);
	}
}
function incluirMensaje(mensaje) {
	document.getElementById('mensajeComunidad').textContent = mensaje;
}
// --------------------------------------------------------------------------------------------------------
	//AñadirDefinicion
function anadirDefinicion(){
	let padre=document.querySelector("#definicion");
	let vPalabra=document.getElementById("palabra").value.trim();
	let vConcepto=document.getElementById("concepto").value.trim();
	let definiciones=padre.getElementsByTagName("dt");
	let indice=0;
	let inexistente=true;


	if(vPalabra!="" && vConcepto!=""){

		while (inexistente && indice < definiciones.length){
			let lineaConcepto=definiciones.item(indice);	
			let palabraRepetida=definiciones.item(indice).textContent;
			if (vPalabra == palabraRepetida){
				inexistente=false;
				let nuevodd=document.createElement("dd");
				let textodd=document.createTextNode(vConcepto);
				nuevodd.append(textodd);
				lineaConcepto.after(nuevodd);
			}
			indice+=1;
		}
	}
	else{
		inexistente=false;
	}
	if (inexistente){
		let nuevodt=document.createElement("dt");
		let nuevodd=document.createElement("dd");
		
		let textodt=document.createTextNode(vPalabra);
		let textodd=document.createTextNode(vConcepto);
		
		nuevodt.appendChild(textodt);
		nuevodd.appendChild(textodd);
		
		padre.appendChild(nuevodt);
		padre.appendChild(nuevodd);
	}
}
//---------------------------------------------------------------------------------------------------------
	//Añadir Mensaje
function abrirCuadro(){
	cerrarEntrar();
	let dialogo = document.getElementById("dialogMensaje");
	dialogo.setAttribute("open",true);
}
function anadirMensaje(){
	let titulo = document.getElementById("titulo").value.toLowerCase();
	let contenido = document.getElementById("comentario").value.toLowerCase();
	let nombre = document.getElementById("nomUsuario").innerHTML;
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
function vacioCuadro(){
	for (let i = 0; i < document.getElementById("formMensaje").elements.length; i++) {
		if (document.getElementById("formMensaje").elements[i].type == "text") {
			document.getElementById("formMensaje").elements[i].value = "";
		}
	}
}
  
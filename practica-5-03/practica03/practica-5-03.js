window.onload= inicio;

/* console.log("aaaaaaa");		
  console.log("bbbbbbb");	 */
	//NIF 40266637P
	//CIF P8553129B	
    //ES6621000418401234567891	
	//Calle Juan Alonso nº15	
function inicio(){
	document.primero.onsubmit=validar;
}

//------------------------------------------------------------------------------------------------------------------------------------

function validar(){
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

	let enviar=true; 
	let mensaje="";
	
	var razon_Social=document.primero.razonSocial.value;
	var CodEmpresa=document.primero.codigoEmpresa.value;
	var datoCif=document.primero.CifNif.value;
	var direccion=document.primero.direccion.value;
	var localidad=document.primero.localidad.value;
	var codPostal=document.primero.cp.value;
	var telefono=document.primero.telefono.value;
	var fax=document.primero.fax.value;
	var numeroPositivo=document.primero.numeroTrabajadores.value;
	var fecha=document.primero.fechaEmpresa.value;


	var aux=razonSocial(razon_Social);
    var aux2=codigoEmpresa(CodEmpresa);
	var nifCIF=nif_cif(datoCif);
	var aux3=validarDireccion(direccion);
	var aux4=validarLocalidad(localidad);
	var aux5=validarCodigoPostal(codPostal);
	var aux6=validarTelefono(telefono);
	var aux7=validarFax(fax);
	var aux8=numerosPositivos(numeroPositivo);
	var aux9=comprobarFecha(fecha);


	if(!aux){
		enviar=false;
		mensaje+="Razon_Social no cumple el patrón \n";
	}

	if(!aux2){
		enviar=false;
		mensaje+="Codigo de Empresa no cumple el patrón \n";
	}

	if(!aux3){
		enviar=false;
		mensaje+="La Direccion no cumple el patrón \n";
	}

	if(!aux4){
		enviar=false;
		mensaje+="La Localidad no cumple el patrón \n";
	}

	if(!aux5){
		enviar=false;
		mensaje+="El Codigo Postal no cumple el patrón \n";
	}else{
		if(aux5){
			var cp=document.primero.cp.value;
			var provincia = provincias[parseInt(cp.substring(0,2))-1];
			document.primero.provincia.value = provincia;
			document.primero.provincia.onchange= provincia;
		}
		else{		
			document.primero.provincia.value = "Error";
		}
	}

	if(!aux6){
		enviar=false;
		mensaje+="El Telefono no cumple el patrón \n";
	}

	if(!aux7){
		enviar=false;
		mensaje+="El Fax no cumple el patrón \n";
	}
	if(!aux8){
		enviar=false;
		mensaje+="El Numero no es positivo \n";
	}
	if(!aux9){
		enviar=false;
		mensaje+="La Fecha no es valido \n";
	}


		
	/* var cifEs=esCif(datoCif);

	if(cifEs==1){
		console.log("Se ha introducido un cif correcto.");
	
	}
	else if(cifEs==2){
		console.log("Se ha introducido un cif erróneo. El carácter de control es erróneo.");
	
	}
	else if(cifEs==0){
		console.log("Se ha Introducido un dato no valido.No es CIF");
	} */
	
//---------------------------------------------------------------------------------------------------------------------------------
	
	if(nifCIF=="C1"){
		console.log("Se ha introducido un cif correcto.");
	}
	//switch
	else if(nifCIF=="C2"){
		console.log("Se ha introducido un cif erróneo. El carácter de control es erróneo.");
	}
	else if(nifCIF=="N1"){
		console.log("Se ha introducido un NIF correcto");
	}
	else if(nifCIF=="N2"){
		console.log("Se ha introducido un NIF erróneo. El carácter de control es erróneo.");
	}
	else if(nifCIF=="N3"){
		console.log("Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000");
	}
	else if(nifCIF==0){
		console.log("Se ha introducido un dato no válido. No es CIF.");
	}	

//-------------------------------------------------------------------------------------------------------------------------------------
	
    var calculo=calculoIBANEspanya("21000418401234567891");
	console.log(comprobarIBAN(calculo));

	var comprobar=comprobarIBAN(calculo);
	//console.log(comprobarIBAN(calculo));
	console.log(comprobar);
	if(!enviar)
		alert(mensaje);
	return enviar;
}		

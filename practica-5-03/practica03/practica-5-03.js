window.onload= inicio;

/* console.log("aaaaaaa");		
  console.log("bbbbbbb");	 */
	//NIF 40266637P
	//CIF P8553129B	
    //ES6621000418401234567891	
function inicio(){
	document.primero.onsubmit=validar;
}

//------------------------------------------------------------------------------------------------------------------------------------

function validar(){
	
	let enviar=true; 
	let mensaje="";
	var razon_Social=document.primero.razonSocial.value;
	var CodEmpresa=document.primero.codigoEmpresa.value;
	var datoCif=document.primero.CifNif.value;

	var aux=razonSocial(razon_Social);
    var aux2=codigoEmpresa(CodEmpresa);

	if(!aux){
		enviar=false;
		mensaje+="Razon_Social no cumple el patrón \n";
		alert(mensaje);
	}

	if(!aux2){
		enviar=false;
		mensaje+="Razon_Social no cumple el patrón \n";
		alert(mensaje);
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
	
	//NIF M0444444S
	//CIF P8553129B
	var nifCIF=nif_cif(datoCif);
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

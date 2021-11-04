window.onload= inicio;

/* console.log("aaaaaaa");		
  console.log("bbbbbbb");	 */
		
function inicio(){
	document.primero.onsubmit=validar;
	document.primero.cif.onchange=validar;
	
	document.primero.onsubmit=validar;
	document.primero.NifCif.onchange=validar;
}

//------------------------------------------------------------------------------------------------------------------------------------

function validar(){
	let datoNIf=document.primero.nif.value;
	let datoCif=document.primero.cif.value;
	let datoNifCif=document.primero.NifCif.value;
	alert(datoNifCif)
	var cifEs=esCif(datoCif);
	if(cifEs==1){
		console.log("Se ha introducido un cif correcto.");
	
	}
	else if(cifEs==2){
		console.log("Se ha introducido un cif erróneo. El carácter de control es erróneo.");
	
	}
	else if(cifEs==0){
		console.log("Se ha Introducido un dato no valido.No es CIF");
	}
	
//---------------------------------------------------------------------------------------------------------------------------------
	
	//NIF M0444444S
	//CIF P8553129B
	var nifCIF=nif_cif(datoNifCif);
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
	
	//var calculo=calculoIBANEspanya("21000418401234567891");
	//console.log(comprobarIBAN(calculo));
	//alert(calculo);
	var comprobar=comprobarIBAN("PT66210004184012124");
	//console.log(comprobarIBAN(calculo));
	console.log(comprobar);

}		

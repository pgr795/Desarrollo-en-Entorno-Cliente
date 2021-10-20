window.onload= inicio;

/* console.log("aaaaaaa");		
  console.log("bbbbbbb");	 */
		
function inicio(){
	document.primero.onsubmit=validar;
	document.primero.cif.onchange=validar;
//--------------------------------------------------------------------------------------------
}

function validar(){
	let datoNIf=document.primero.nif.value;
	let datoCif=document.primero.cif.value;
	
	if(esCif(datoCif)==1){
	
	
	}
	if(esCif(datoCif)==2){
	
	
	}
	if(esCif(datoCif)==0){
		alert("Se ha Introducido un dato no valido.No es CIF");
	}
	
}
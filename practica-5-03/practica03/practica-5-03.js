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
		alert("Se ha introducido un cif correcto.");
	
	}
	if(esCif(datoCif)==2){
		alert("Se ha introducido un cif erróneo. El carácter de control es erróneo.");
	
	}
	if(esCif(datoCif)==0){
		alert("Se ha Introducido un dato no valido.No es CIF");
	}
	
}
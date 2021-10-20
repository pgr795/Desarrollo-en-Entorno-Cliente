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
			alert("Error");
		}else if(esLetra(nif[8])){
			var nums = nif.substring(0,8);
			if(esDigito(nums)){
				return caracterControl[nums%23] == nif[8];
			}
			return false;
			alert("Error");
		}
		return false;
		alert("Error");
	}
	return false;
	alert("Error");
}
 
//--------------------------------------------------------------------------------------------
	

function esCif(cif){
	var letra=("A,B,C,D,E,F,G,H,J,U,V,P,Q,R,S,W");
	let caracterControl = ["D7","D6","D5","D4","D3","D2","D1"];	
	var longitud=cif.length;
	var numeros=cif.substring(1,8);
	var letra=cif.substring(0,1);
	var digitos=[];
	var resultado;
	console.log(letra);
	console.log(numeros);
	
	if(longitud==10){
			if(esNumero(numeros)&& esLetra(letra)){
				for(var i=0; i < 7;i++){
					if()
				}
				if(resultado >9 ){
					
				}
			}
			else{
				return 2;
			}
	}
	else{
		return 0;
	}
}
function esNif (parametro) {
	var nif=parametro.trim();
	var expRegEsnif=/^([0-9]{7}\d)([TRWAGMYFPDXBNJZSQVHLCKE])$/i;
	var validarEsNif=1;
	if(!expRegEsnif.test(nif)){
		validarEsNif=2;
	}
	return validarEsNif;					
}

//--------------------------------------------------------------------------------------------
	
function esCif(cif){
	var Cif=cif.trim();
	var expRegEsCif1=/^([A-HJUV])([0-9]{8})$/i;
	var expRegEsCif2=/^([PQRSW])([0-9]{7})+([JABCDEGHI])$/i;
	var validarCif=0;
	if(expRegEsCif1.test(Cif)){
		validarCif=1;
	}
	else if(expRegEsCif2.test(Cif)){
		validarCif=1;
	}
	return validarCif;
}
alert();

//--------------------------------------------------------------------------------------------

function nif_cif(datos){
var dato=datos;
var mensaje="";
var aux=esCif(dato);
var aux2=esNif(dato);

if(aux==1){
	mensaje="C1";
}
else if(aux==2){
	mensaje="C2";
}
else if(aux2==1){
	mensaje="N1";
}	
else if(aux2==2){
	mensaje="N2";
}
else if(aux2==0){
	mensaje=0;
}
	return mensaje;
}

// 	if(aux==1){
// 		mensaje="C1";
// 	}
// 	else if(aux==2){
// 		mensaje="C2";
// 	}
// 	else{
// 		mensaje=0;
// 	}

// 	if(mensaje==0){
// 		if(esNif(dato)==1){
// 			mensaje="N1";
// 		}	
// 		else if(esNif(dato)==2){
// 			mensaje="N2";
// 		}
// 		else if(esNif(dato)==3){
// 			mensaje="N3";
// 		}
// 		else if(esNif(dato)==0){
// 			mensaje=0;
// 		}
// 	}
// 	return mensaje;
// }

//--------------------------------------------------------------------------------------------

function codigosControl(parametro,parametro2,parametro3){

var codigodeBanco=parametro;
var sucursal=parametro2;
var numeroDeCuenta=parametro3;

var numero1;
var numero2;
var numero3;

var caracterContro1;
var caracterContro12;

	if(codigodeBanco.length==4){
		var num=parseInt(codigodeBanco.charAt(0),10)*4;
		var num2=parseInt(codigodeBanco.charAt(1),10)*8;
		var	num3=parseInt(codigodeBanco.charAt(2),10)*5;
		var num4=parseInt(codigodeBanco.charAt(3),10)*10;

		var numero1=num+num2+num3+num4;
	}
	
	if(sucursal.length==4){
		var num=parseInt(sucursal.charAt(0),10)*9;
		var num2=parseInt(sucursal.charAt(1),10)*7;
		var	num3=parseInt(sucursal.charAt(2),10)*3;
		var num4=parseInt(sucursal.charAt(3),10)*6;
	
		var numero2=num+num2+num3+num4;
		
	}
		var suma=numero1+numero2;
		var resto=suma%11;
		var modulo11=11-resto;
	
		if(modulo11==10){
			caracterContro1=1;
		}
		else if(modulo11==11){
			caracterContro1=0;
		}
		else{
			caracterContro1=modulo11;
		}
	
		if(numeroDeCuenta.length==10){
			var aux=[1,2,4,8,5,10,9,7,3,6];
			var numero3=0;
				for(let i=0; i<numeroDeCuenta.length;i++){
					numero3+=parseInt(numeroDeCuenta.charAt(i))*aux[i];
				}
		}
		var resto=numero3%11;
		var modulo11=11-resto;
	
		if(modulo11==10){
			caracterContro12=1;
		}
		else if(modulo11==11){
			caracterContro12=0;
		}
		else{
			caracterContro12=modulo11;
		}	

	return caracterContro1+""+caracterContro12;
}

//--------------------------------------------------------------------------------------------

function calculoIBANEspanya(parametro){

var codigoDeCuenta=parametro;
var codigoEspanya="142800";
var operacion;
var codigo;
	if(codigoDeCuenta.length==20){
		operacion=parseInt(codigoDeCuenta+codigoEspanya,10);
		operacion=98-(operacion%97);
		var codigo;
		if(operacion>=10){
			codigo="ES"+operacion+parametro;
		}
		else{
			codigo="ES00"+operacion+parametro;
		}
		return codigo;
	}	
}	

//--------------------------------------------------------------------------------------------

function comprobarIBAN(parametro){
	var iban=parametro.substring(4,34).trim();
    var ExpRegIban=/^([A-Z]{2})([0-9]{2})([0-9A-Z]{0,31})$/i;
	var ibanValido=true;
	if(!ExpRegIban.test(iban)){
		validarEsNif=false;
	}
	return ibanValido;
}
























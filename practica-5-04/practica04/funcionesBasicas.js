function razonSocial(parametro){
	var Razon_Social=parametro;
	var expRegRazonSocial=/^[A-Z][A-Z0-9\.\-ºª]+[0-9A-Z\.]$/i;
	var razonSocialValido=true;
	
	if(!expRegRazonSocial.test(Razon_Social)){
		razonSocialValido=false;
	}
		return razonSocialValido;
	}   


function codigoEmpresa(parametro){
	var codigoEmpresa=true;
	var codigo_Empresa=parametro;
	var expRegCodEmpresa=/^[0-9A-Z]{5,10}$/i;
	if(!expRegCodEmpresa.test(codigo_Empresa)){
		codigoEmpresa=false;
	}
	return codigoEmpresa;
}

function validarDireccion(parametro){
	var direccion = parametro.trim();
	console.log(direccion);
	var direccionValida=true;
	var expRegCodDireccion=/^[0-9A-Z][0-9A-Z\.\-ºª/]+[0-9A-Z]$/i;
	if(!expRegCodDireccion.test(direccion)){
		direccionValida=false;
	}
	return direccionValida;		
}

function validarLocalidad(parametro){
	var localidad = parametro;
	var localidadValida=true;
    var localidadRegExp=/[A-Z][A-Z\s]+[A-Z]/i;
	if(!localidadRegExp.test(localidad)){
		localidadValida=false;
	}
	return localidadValida;	
}

function validarCodigoPostal(parametro){	
	var codigoPostal=parametro.trim();
	var codPostalRegExp=/^([0-5])([1-9])([0-9]{3})$/i;
	var codPostalValida=true;
	if(!codPostalRegExp.test(codigoPostal)){
		codPostalValida=false;
	}
	return codPostalValida;	
}
	
	function validarTelefono(parametro){
		var telefono = parametro.trim();
		var expRegTelefono=/^([967])([0-9]{8})$/i;
		var validartelefono = true;
		if(!expRegTelefono.test(telefono)){
			validartelefono=false;
		}
		return validartelefono;					
	}

	function validarFax(parametro){
		var fax = parametro.trim();
		var expRegfax=/^([9])([0-9]{8})$/i;
		var validarfax = true;
		if(!expRegfax.test(fax)){
			validarfax=false;
		}
		return validarfax;					
	}

	function numerosPositivos(parametro){
		var numeroPositivo = parametro;
		var expRegNumeroPositivo=/^[0-9]*$/i;
		var validarNumeroPositivo = true;
			//inicio
			if(!expRegNumeroPositivo.test(numeroPositivo)){
				validarNumeroPositivo=false;
			}
			return validarNumeroPositivo;						
	}

	function comprobarComunidades(parametro) {
		var comunidades = parametro;
		var contador = 0;
		var validarComunidad=true;
	  
		for (let i = 0; i < comunidades.length; i++) {
		  if (comunidades[i].selected) {
			contador++;
		  }
		}
		if (contador < 2){
			validarComunidad=false;
		}
		return validarComunidad;
	  }

function comprobarFecha(parametro) {
		var fecha=parametro.trim();
		var expRegfecha=/^(((0?[1-9])|([12]\d)|(3[01]))[\-\/]((0?[1-9])|1[012]))[\-\/](\d{2})?\d{2}$/i;
		var fechavalida=true;
		if(!expRegfecha.test(fecha)){
			fechavalida=false;
		}
		return fechavalida;
	}

function comprobarCodBancoYOficina(parametro,parametro2){
	var codbanco=parametro;
	var codoficina=parametro2;
	var codbancoRegExp=/^[0-9]{4}$/i;
	var codoficinaRegExp=/^[0-9]{4}$/i;
	var validarcodbanco=true;
	var validarcodoficina=true;
	if(!codbancoRegExp.test(codbanco)){
		validarcodbanco=false;
	}
	else if(!codoficinaRegExp.test(codoficina)){
		validarcodoficina=false;
	}
	return validarcodoficina && validarcodbanco;					
}

function comprobarNumeroCuenta(parametro){
	var numeroCuenta = parametro;
	var numeroCuentaValida=true;
    var numeroCuentaRegExp=/^[0-9]{10}$/i;
	if(!numeroCuentaRegExp.test(numeroCuenta)){
		numeroCuentaValida=false;
	}
	return numeroCuentaValida;	
}

function comprobarSeleccion(parametro) {
	var contador = 0;
	var seleccion=parametro;
	var valido=true;
	for (var i = 0; i < seleccion.length; i++) {
	  if (seleccion[i].type == "checkbox" && seleccion[i].checked){
		contador++;
	  }
	}
	if (contador < 1){
		comprobarSeleccion = false;
		contador = 0;
	}
	for (var i = 0; i < seleccion.length; i++) {
	  if (seleccion[i].type == "radio" && seleccion[i].checked) {
		  contador++;
	  }
	}
	if (contador > 2){
		comprobarSeleccion = false;
	}
		return valido;
  }

window.onload = inicio;

function inicio() {
    document.formulario.onsubmit = validar;
}

function validar() {
    let envio = true;
    let mensaje = "";

    let nombre = document.formulario.nombre.value.trim();
    let expRegNombre=/^[A-Za-z]{2}[A-Za-z ]{0,14}[A-Za-z]$/i;

    if (!expRegNombre.test(nombre)){
		envio=false;
		mensaje="ErrorNombre";
        document.formulario.errNombre.value = mensaje;   
	}
    else{
        document.formulario.errNombre.value = ""; 
    }

    let apellido = document.formulario.apellido.value;
    let expRegApellido=/^[A-Za-z]{5}[A-Za-z -]{1,28}[A-Za-z]{3}$/i;

    if (!expRegApellido.test(apellido)) {
     	envio=false;
		mensaje="ErrorApellido";
        document.formulario.errApellido.value = mensaje; 
    }
    else{
        document.formulario.errApellido.value = ""; 
    }

    let nif = document.formulario.nif.value.trim();
    let expRegNif=/^[0-9XYZKLM][0-9]{2,7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

    if (!expRegNif.test(nif)) {
         envio = false;
         mensaje = "Error validacion Nif";
         document.formulario.errNif.value = mensaje; 
    }
    else{
        document.formulario.errNif.value = ""; 
    }

    let nacimiento = document.formulario.nacimiento.value.trim();
    let expRegNacimiento=/^[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}$/i;

    if (!expRegNacimiento.test(nacimiento)) {
        envio = false;
        mensaje = "Error validacion Nacimiento";
        document.formulario.errNacimiento.value = mensaje; 
    }
    else{
        document.formulario.errNacimiento.value = ""; 
    }
  

    let tipoVia = document.formulario.tipoVia.value.toLowerCase().trim();
    let expRegTipoVia=/^(calle)|(avenida)|(paseo)|(plaza)|(camino)|(ronda)|(carretera)|(plazuela)$/i;

    if (!expRegTipoVia.test(tipoVia)) {
        envio = false;
        mensaje = "Error validacion tipoVia";
        document.formulario.errTipoVia.value = mensaje; 
    }
    else{
        document.formulario.errTipoVia.value = ""; 
    }

    let denominacionVia = document.formulario.denominacionVia.value.trim();
    let expRegdenominacionVia=/^[a-z][a-z \-ºª]{2,11}[a-z]$/i;

    if (! expRegdenominacionVia.test(denominacionVia)) {
        envio = false;
        mensaje += "Error validacion DenominacionVia";
        document.formulario.errcDenominacionVia.value = mensaje; 
    }
    else{
        document.formulario.errcDenominacionVia.value = ""; 
    }

    let Vnumero = document.formulario.numero.value.trim();
    let expRegNumeros=/^[0-9]{1,3}$/; //(0?0?[1-9])|(0?[1-9]\d)|([1-9]\d{2})

    if (!expRegNumeros.test(Vnumero)) {
        envio = false;
        mensaje = "Error validacion numeros";
        document.formulario.errNumero.value = mensaje; 
    }
    else{
        document.formulario.errNumero.value = ""; 
    }


    let vemail = document.formulario.email.value.trim();
    let expRegEmail=/^[a-z][0-9a-z\-_]+[a-z0-9]@((gmail)|(hotmail)|([a-z]+))\.((com)|(es))$/i;
  
    if (!expRegEmail.test(vemail)) {
        envio = false;
        mensaje = "Error validacion email";
        document.formulario.errEmail.value = mensaje; 
    }
    else{
        document.formulario.errEmail.value = ""; 
    }
   

    let web = document.formulario.web.value.trim();
    //let expRegWeb=/((http:\/\/)|(https:\/\/))?(www\.)?([a-z][a-z0-9\-_ ]+[0-9a-z]\.)+[a-z]{2,4}((\/[a-z][a-z-0-9 _\-]+[a-z0-9])+)(\.(html)|(php)|(htm)|(asp))?/i;
    let expRegWeb=/((http:\/\/)|(https:\/\/))?(www\.)?([a-z][a-z0-9\-_ ]+\.[a-z]{2,4})+((\/[a-z][a-z-0-9 _\-]+[a-z0-9])+)?(\/[a-z]\.(html)|(php)|(htm)|(asp))?/;
    if (!expRegWeb.test(web)) {
        envio = false;
        mensaje = "Error validacion web";
        document.formulario.errWeb.value = mensaje; 
    }
    else{
        document.formulario.errWeb.value = ""; 
    }

    let estadoCivil = document.formulario.civil.value;
    
    if(estadoCivil==""){
        envio=false;
        mensaje = "Error EstadoCivil";
        document.formulario.errEstadoCivil.value = mensaje; 
    }
    else{
        document.formulario.errEstadoCivil.value = ""; 
    }

    //En caso que no funciones recorrer con un array

    //Recorrer un array
    
    let paises=contadorPaises();
    if(paises==false){
        envio=false;
        mensaje = "Error Paises";
        document.formulario.errPaises.value = mensaje; 
    }
    else{
        document.formulario.errPaises.value = ""; 
    }


    let sectores=contadorSectores();
    if(sectores==false){
        envio=false;
        mensaje = "Error sectores";
        document.formulario.errSectores.value = mensaje; 
    }
    else{
        document.formulario.errSectores.value = ""; 
    }
  
    return envio;

}

function contadorSectores(){
    let con = 0;
    let valido=true;
   
    if (document.formulario.Hosteleria.checked){
        con++;
    }
    if (document.formulario.Industria.checked){
        con++;
    } 
    if (document.formulario.Comercio.checked){
        con++;
    }
    if (document.formulario.Agricultura.checked){
        con++;
    }
    if (document.formulario.Ganaderia.checked){
        con++;
    }
    if (document.formulario.Comunicaciones.checked){
        con++;
    }
    if (document.formulario.Informatica.checked){
        con++;
    }

    if (con >= 3) {
        valido=true;
    }
    else{
        valido=false;
    }
    return valido;
}

function contadorPaises(){
    let paises = document.formulario.paises;
    let longitud=paises.length;
    let cont=0;
    for(let i=0; i<longitud; i++){
        if(paises[i].selected){
            cont++;
        }
    }
    if (cont <= 2) {
        valido=true;
    }
    else{
        valido=false;
    }
    return valido;
}
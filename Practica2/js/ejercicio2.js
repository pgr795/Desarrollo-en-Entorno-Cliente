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

    let apellido = document.formulario.apellido.value;
    let expRegApellido=/^[A-Za-z]{5}[A-Za-z -]{1,28}[A-Za-z]{3}$/i;

    if (!expRegApellido.test(apellido)) {
     	envio=false;
		mensaje="ErrorApellido";
        document.formulario.errApellido.value = mensaje; 
    }

    let nif = document.formulario.nif.value.trim();
    let expRegNif=/^[0-9XYZKLM][0-9]{2,7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

    if (!expRegNif.test(nif)) {
         envio = false;
         mensaje = "Error validacion Nif"
         document.formulario.errNif.value = mensaje; 
    }

    let nacimiento = document.formulario.nacimiento.value.trim();
    let expRegNacimiento=/^[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}$/i;

    if (!expRegNacimiento.test(nacimiento)) {
        envio = false;
        mensaje += "Error validacion Nacimiento \n"
        document.formulario.errNif.value = mensaje; 
    }
  

    let tipoVia = document.formulario.tipoVia.value.trim();
    let expRegTipoVia=/^(calle)|(avenida)|(paseo)|(plaza)|(camino)|(ronda)|(carretera)|(plazuela)$/i;

    if (!expRegTipoVia.test(tipoVia)) {
        envio = false;
        mensaje += "Error validacion tipoVia \n"
        document.formulario.errNif.value = mensaje; 
    }


    let Vnumero = document.formulario.numero.value.trim();
    let expRegNumeros=/^[0-9]{3}$/;

    if (!expRegNumeros.test(Vnumero)) {
        envio = false;
        mensaje += "Error validacion numeros \n"
        document.formulario.errNif.value = mensaje; 
    }


    // let vemail = document.formulario.email.value.trim();
    // let expRegEmail;

    // if (!expRegEmail.test(vemail)) {
    //     envio = false;
    //     mensaje += "Error validacion email \n"
    // }
    // else {
    //     document.formulario.nacimiento.value = "";
    // }

    // let web = document.formulario.web.value.trim();
    // let expRegWeb;
    // if (!expRegWeb.test(web)) {
    //     envio = false;
    //     mensaje += "Error validacion web \n"
    // }
    // else {
    //     document.formulario.nacimiento.value = "";
    // }

    // let estadoCivil = document.formulario.civil.value.trim();
    // let expRegEstadoCivil;
    // if (!expRegEstadoCivil.test(estadoCivil)) {
    //     envio = false;
    //     mensaje += "Error validacion web \n"
    // }
    // else {
    //     document.formulario.nacimiento.value = "";
    // }

    // let sectores = document.formulario.sectores.value.trim();
    // let expRegSectores;
    // if (!expRegSectores.test(sectores)) {
    //     envio = false;
    //     mensaje += "Error validacion web \n"
    // }
    // else {
    //     document.formulario.nacimiento.value = "";
    // }

    // let paises = document.formulario.paises.value.trim();
    // let expRegPaises;
    // if (!expRegPaises.test(paises)) {
    //     envio = false;
    //     mensaje += "Error validacion web \n"
    // }
    // else {
    //     document.formulario.nacimiento.value = "";
    // }

    let sectores=contador();
    if(sectores==false){
        envio=false;
        mensaje = "Error sectores \n"
        document.formulario.errSectores.value = mensaje; 
    }
  
    return envio;

}

function contador(){
    let con = 0;
    let valido=true;
   
    if (document.formulario.Soltero.checked == true){
        con++;
    }
    if (document.formulario.Casado.checked == true){
        con++;
    } 
    if (document.formulario.Separado.checked == true){
        con++;
    }
    if (document.formulario.Divorciado.checked == true){
        con++;
    }
    if (document.formulario.Viudo.checked == true){
        con++;
    }
    if (document.formulario.Pareja.checked == true){
        con++;
    }
    if (document.formulario.Otros.checked == true){
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
window.onload = inicio;

function inicio() {
    document.formulario.onsubmit = validar;
}

function validar() {
    let envio = true;
    let mensaje = "";

    let nombre = document.formulario.nombre.value.trim();

    if (!validarNombre(nombre)) {
        envio = false;
        mensaje += "Error validacion nombre \n";
    }
    else {
        document.formulario.nombre.value = "";
    }

    let apellido = document.formulario.apellido.value;

    if (!validarApellido(apellido)) {
        envio = false;
        mensaje += "Error validacion Apellidos \n";
    }
    else {
        document.formulario.apellido.value = "";
    }

    let nif = document.formulario.nif.value.trim();

    if (!validarNif(nif)) {
        envio = false;
        mensaje += "Error validacion Nif \n"
    }
    else {
        document.formulario.nif.value = "";
    }

    let nacimiento = document.formulario.nacimiento.value.trim();

    if (!validarNacimiento(nacimiento)) {
        envio = false;
        mensaje += "Error validacion Nacimiento \n"
    }
    else {
        document.formulario.nacimiento.value = "";
    }

    let tipoVia = document.formulario.tipoVia.value.trim();

    if (!validarTipoVia(tipoVia)) {
        envio = false;
        mensaje += "Error validacion tipoVia \n"
    }
    else {
        document.formulario.tipoVia.value = "";
    }

    let denominacionVia = document.formulario.denominacionVia.value;

    if (!validarDenominacionVia(denominacionVia)) {
        envio = false;
        mensaje += "Error validacion denominacionVia \n"
    }
    else {
        document.formulario.denominacionVia.value = "";
    }

    let Vnumero = document.formulario.numero.value.trim();

    if (!validarNumeros(Vnumero)) {
        envio = false;
        mensaje += "Error validacion numeros \n"
    }
    else {
        document.formulario.numero.value = "";
    }

    let vemail = document.formulario.email.value.trim();

    if (!validarEmail(vemail)) {
        envio = false;
        mensaje += "Error validacion email \n"
    }
    else {
        document.formulario.nacimiento.value = "";
    }

    let web = document.formulario.web.value.trim();

    if (!validarWeb(web)) {
        envio = false;
        mensaje += "Error validacion web \n"
    }
    else {
        document.formulario.nacimiento.value = "";
    }

    if (envio == false) {
        alert(mensaje);
    }
    else {
        return envio;
    }
}

function validarNombre(parametro) {
    let valido = true;
    let datos = parametro.toLowerCase();
    let inicio = datos.substring(0, 2);
    let medio = datos.substring(2, datos.length-1);
    let final = datos.substring(datos.length-1, datos.length);
    let longitud = parametro.length;
    let especiales = " ";
    let cont = 0;

    if (longitud > 3 && longitud < 17) {
        //Inicio
        while (valido && cont < inicio.length) {
            if (inicio.charAt(cont) < "a" || inicio.charAt(cont) > "z") {
                valido = false;
            }
            cont++;
        }
        //Medio
        cont = 0;
        while (valido && cont < medio.length) {
            if (medio.charAt(cont) < "a" || medio.charAt(cont) > "z") {
                if (!especiales.includes(medio.charAt(cont))) {
                    valido = false;
                }
            }
            cont++;
        }
        //Final
        cont = 0;
        while (valido && cont < final.length) {
            if (final.charAt(cont) < "a" || final.charAt(cont) > "z") {
                valido = false;
            }
            cont++;
        }

    }
    else {
        valido = false;
    }
    return valido;
}

function validarApellido(parametro) {
    let valido = true;
    let datos = parametro.toLowerCase();
    let inicio = datos.substring(0, 5);
    let medio = datos.substring(5, datos.length-3);
    let final = datos.substring(datos.length-3, datos.length);
    let longitud = parametro.length;
    let especiales = "- ";
    let cont = 0;

    if (longitud > 9 && longitud < 36) {
        //Inicio
        while (valido && cont < inicio.length) {
            if (inicio.charAt(cont) < "a" || inicio.charAt(cont) > "z") {
                valido = false;
            }
            cont++;
        }
        //Medio
        cont = 0;
        while (valido && cont < medio.length) {
            if (medio.charAt(cont) < "a" || medio.charAt(cont) > "z") {
                if (especiales.includes(final.charAt(cont))) {
                    valido = false;
                }
            }
            cont++;
        }
        //Final
        cont = 0;
        while (valido && cont < final.length) {
            if (final.charAt(cont) < "a" || final.charAt(cont) > "z") {
                valido = false;
            }
            cont++;
        }
    }
    else {
        valido = false;
    }
    return valido;
}

function validarNif(parametro) {
    let valido = true;
    let datos = parametro.toLowerCase();
    let inicio = datos.substring(0, 1);
    let medio = datos.substring(1, datos.length-1);
    let final = datos.substring(datos.length-1, datos.length);
    let longitud = parametro.length;
    let especiales = "xyzklm";
    let especiales2="TRWAGMYFPDXBNJZSQVHLCKE";
    especiales2=especiales2.toLowerCase();
    let cont = 0;

    if (longitud == 9) {
        //Inicio
        while (valido && cont < inicio.length) {
            if (inicio.charAt(cont) < "0" || inicio.charAt(cont) > "9") {
                if (!especiales.includes(inicio.charAt(cont))) {
                    valido = false;
                }
            }
            cont++;
        }
        //Medio
        cont = 0;
        while (valido && cont < medio.length) {
            if (medio.charAt(cont) < "0" || medio.charAt(cont) > "9") {
                valido = false;
            }
            cont++;
        }
        //Final
        cont = 0;
        while (valido && cont < final.length) {
            if (!especiales2.includes(final.charAt(cont))) {
                valido = false;
            }
            cont++;
        }
    }
    else {
        valido = false;
    }
    return valido;
}

function validarNacimiento(parametro) {
    let valido = true;
    let datos = parametro;
    let dias = datos.substring(0, 2);
    let meses = datos.substring(3,5);
    let anos = datos.substring(datos.length-4, datos.length);
    let diasmeses= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    let cont = 0;
    
    let ano=esBisiesto(anos);

    if(ano){
        //Inicio
        diasmeses[1]=29;
                while (valido && cont < dias.length) {
                    if (dias.charAt(cont) < "0" || dias.charAt(cont) > "9") {
                            valido = false;
                    }
                    cont++;
                }
                if(dias < 1 || dias > diasmeses[parseInt(meses)-1]){
                    valido=false; 
                }
            
        //Medio
        cont = 0;
            while (valido && cont < meses.length) {
                if (meses.charAt(cont) < "0" || meses.charAt(cont) > "9") {
                    valido = false;
                }
                cont++;
            }

            if(parseInt(meses)< 1 || parseInt(meses) >12){
                valido=false; 
            }
 
        //Final
        cont = 0;
        while (valido && cont < anos.length) {
            if (anos.charAt(cont) < "0" || anos.charAt(cont) > "9") {
                valido = false;
            }
            cont++;
        }
        return valido;
    }
    else{
         //Inicio
            while (valido && cont < dias.length) {
                if (dias.charAt(cont) < "0" || dias.charAt(cont) > "9") {
                        valido = false;
                }
                cont++;
            }
            // if(dias != 0 && dias < diasmeses[parseInt(meses-1)]){
            //     valido=true; 
            // }
            if(dias < 1 || dias > diasmeses[parseInt(meses-1)]){
                valido=false; 
            }
            let aux=diasmeses[parseInt(meses-1)];
        //Medio
            cont = 0;
            while (valido && cont < meses.length) {
                if (meses.charAt(cont) < "0" || meses.charAt(cont) > "9") {
                    valido = false;
                }
                cont++;
            }

            if(parseInt(meses)< 1 || parseInt(meses) >12){
                valido=false; 
            }
         

        //Final
        cont = 0;
            while (valido && cont < anos.length) {
                if (anos.charAt(cont) < "0" || anos.charAt(cont) > "9") {
                    valido = false;
                }
            cont++;
            }
        return valido;
    }
}
  
function esBisiesto(ano){
  if (((ano % 4 == 0) && (ano % 100 != 0 )) || (ano % 400 == 0)){
        return true; //Es bisiesto
    }
    else{
        return false; //No es bisiesto
    }
}

function validarTipoVia(parametro) {
    let via=parametro.toLowerCase();
    let vias=new Array("calle","avenida","paseo","plaza","camino","ronda","carretera","plazuela");
    let valido=true;
    if(via.includes(vias)){
        valido=false;
    }
    return valido;
}

function validarDenominacionVia(parametro) {
    let valido = true;
    let datos = parametro.toLowerCase();
    let inicio = datos.substring(0,1);
    let medio = datos.substring(1, datos.length-1);
    let final = datos.substring(datos.length-1, datos.length);
    let longitud = parametro.length;
    let especiales = "-ºª ";
    let cont = 0;

    if (longitud < 12) {
        //Inicio
        while (valido && cont < inicio.length) {
            if (inicio.charAt(cont) < "a" || inicio.charAt(cont) > "z") {
                valido = false;
            }
            cont++;
        }
        //Medio
        cont = 0;
        while (valido && cont < medio.length) {
            if (medio.charAt(cont) < "a" || medio.charAt(cont) > "z") {
                if (!especiales.includes(final.charAt(cont))) {
                    valido = false;
                }
            }
            cont++;
        }
        //Final
        cont = 0;
        while (valido && cont < final.length) {
            if (final.charAt(cont) < "a" || final.charAt(cont) > "z") {
                valido = false;
            }
            cont++;
        }
    }
    else {
        valido = false;
    }
    return valido;


}

function validarNumeros(parametro) {
    let numeros=parametro;
    let numeros2=numeros.substring(0,1);
    let numeros3=numeros.substring(0,2);
    let valido=true;
    if (numeros.length > 1 || numeros.length < 3){
        if(numeros2=="0" || numeros3=="00"){
            valido=false;
        }
    }
    return valido;
}

function validarEmail(parametro) {
    let valido=true;
    let email=parametro;
    let arroba=email.indexOf("@");
    let punto=email.indexOf(".");
    let inicio=email.substring(0,arroba);
    let medio=email.substring(arroba+1,punto);
    let final=email.substring(punto+1,email.length);
    let correos=new Array("gmail","hotmail","yahoo","educamadrid");
    let extras=new Array("es","com","org");
    let especiales=" ";
    let cont = 0;

    //inicio
    while (valido && cont < inicio.length) {
        if ((inicio.charAt(cont) < "a" && inicio.charAt(cont) > "z") || (inicio.charAt(cont) < "0" && inicio.charAt(cont) > "9")) {
            if (!especiales.includes(inicio.charAt(cont))) {
                valido = false;
            }
        }
        cont++;
    }
    
    //medio
    cont = 0;
    while (valido && cont < medio.length) {
        if (medio.charAt(cont) < "a" || medio.charAt(cont) > "z") {
            if (!especiales.includes(medio.charAt(cont))) {
                valido = false;
            }
        }
        cont++;
    }

    if(!correos.includes(medio)){
        valido=false;
    }

     //final
     cont = 0;
     while (valido && cont < medio.length) {
        if (medio.charAt(cont) < "a" || medio.charAt(cont) > "z") {
            if (!especiales.includes(medio.charAt(cont))) {
                valido = false;
            }
        }
        cont++;
    }
  
    if(!extras.includes(final)){
        valido=false;
    }
 return valido;
}

function validarWeb(parametro) {
        let valido=true;
        let web=parametro;
        let inicio=web.substring(0,3);//www
        web=web.substring(4,web.length);
        let punto=web.indexOf(".");
        let medio=web.substring(0,punto);
        let final=web.substring(punto+1,web.length);
        let extras=new Array("es","com","org");
        let extras2="www";
        let cont = 0;
    
        //inicio
        if(!extras2.includes(inicio)){
            valido=false;
        }
    
        
        //medio
        cont = 0;
        while (valido && cont < medio.length) {
            if  ((medio.charAt(cont) < "a" && medio.charAt(cont) > "z") || (medio.charAt(cont) < "0" && medio.charAt(cont) > "9")) {
                    valido = false;
            }
        cont++;
        }
    
         //final
         cont = 0;
         while (valido && cont < final.length) {
            if (final.charAt(cont) < "a" || final.charAt(cont) > "z") {
                    valido = false;
                }
            cont++;
        }
      
        if(!extras.includes(final)){
            valido=false;
        }
     return valido;
}

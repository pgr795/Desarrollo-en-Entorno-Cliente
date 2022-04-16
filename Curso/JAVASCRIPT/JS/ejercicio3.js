window.onload=inicio;
function inicio(){
    document.formulario.onsubmit=//validar;
    document.formulario.onsubmit=mensajes;  
    //gid
    //dqs
    //dqa
    //dce
}
function validar(){
    let envio=true;
    let apellidos = document.formulario.apellidos.value;
    let nombre = document.formulario.nombre.value;

    let tipoVia = document.formulario.via.value;
    let nombreVia = document.formulario.nombrevia.value;
    let numero = document.formulario.numero.value;
    let portal = document.formulario.portal.value;
    let pisoPlanta = document.formulario.pisoPlanta.value;
    let puerta = document.formulario.puerta.value;
    let localidad = document.formulario.localidad.value;
    let cp = document.formulario.cp.value;
    let provincia = document.formulario.provincia.value;
    let paisEstado = document.formulario.paisEstado.value;

    let trabajo = document.formulario.trabajo.value;
    let empresa = document.formulario.nombreEmpresa.value;
    let categoriaProfesional = document.formulario.categoriaProfesional.value;

    let aux=comprobarApellido(apellidos);
    let aux2=comprobarNombre(nombre);

    let aux3=comprobarTipoVia(tipoVia);
    let aux4=comprobarNombreVia(nombreVia);
    let aux5=comprobarNumero(numero);
    let aux6=comprobarPortal(portal);

    let aux7=comprobarPisoPlanta(pisoPlanta);
    let aux8=comprobarPuerta(puerta);
    let aux9=comprobarLocalidad(localidad);
    let aux10=comprobarCP(cp);
    let aux11=comprobarProvincia(provincia);

    let aux12=comprobarPaisEstado(paisEstado);
    let aux13=comprobarTrabajo(trabajo);
    let aux14=comprobarEmpresa(empresa);
    let aux15=comprobarCategoria(categoriaProfesional);

    

    if(!aux || !aux2 || !aux3 || !aux4 || !aux5 || !aux6 || !aux7 || !aux8 || !aux9 || !aux10 || !aux11 || !aux12 || !aux13 || !aux14 || !aux15 ){
        envio=false;
    }

    if(!envio){
		alert("No se ha enviado el formulario");
	}
	else{
		alert("Se ha enviado el formulario");
	}
    
    return envio;
}

function mensajes(){
    let aux16=contador();
    borrarCookie();
    
    let cookies=document.cookie;
    let aux=cookies.split("=");
    aux.pop();
    let indice=0;

    while (indice < aux.length) {
        let padre=document.getElementById("mensaje");
        let elementoNuevo=document.createElement("p");
        let textoNuevo=document.createTextNode(aux[indice]);
        let aux2=aux[indice];
        switch (aux[indice]) {
            case "Escuchar Musica":
                elementoNuevo.append(textoNuevo);
                padre.append(elementoNuevo);
                indice++;
                break;
            case "Viajar":
                elementoNuevo.append(textoNuevo);
                padre.append(elementoNuevo);
                indice++;
                break;
            case "Leer":
                elementoNuevo.append(textoNuevo);
                padre.append(elementoNuevo);
                indice++;
                break;
            case "Hacer Deporte":
                elementoNuevo.append(textoNuevo);
                padre.append(elementoNuevo);
                indice++;
                break;
            case "Hacer Fotos":
                elementoNuevo.append(textoNuevo);
                padre.append(elementoNuevo);
                indice++;
                break;
            case "Grabar videos":
                elementoNuevo.append(textoNuevo);
                padre.append(elementoNuevo);
                indice++;
                break;
            case "Salir a Cenar":
                elementoNuevo.append(textoNuevo);
                padre.append(elementoNuevo);
                indice++;
                break;
            case "Salir de Copas":
                elementoNuevo.append(textoNuevo);
                padre.append(elementoNuevo);
                indice++;
                break;
        } 
    }
    let aux3=document.cookie;
    if(aux16){
        alertCookie();
        
    }
}


function contador(){
    let con = 0;
    let valido=true;
   
    if (document.formulario.musica.checked == true){
        var valor=document.formulario.musica.value;
        guardarCookie(valor);
        con++;
    }
    if (document.formulario.viajar.checked == true){
        con++;
        var valor=document.formulario.viajar.value;
        guardarCookie(valor);
    }
    if (document.formulario.leer.checked == true){
        var valor=document.formulario.leer.value;
        guardarCookie(valor);
        con++;
    }
    if (document.formulario.deporte.checked == true){
        var valor=document.formulario.deporte.value;
        guardarCookie(valor);
        con++;
    }
    if (document.formulario.fotos.checked == true){
        var valor=document.formulario.fotos.value;
        guardarCookie(valor);
        con++;
    }
    if (document.formulario.videos.checked == true){
        var valor=document.formulario.videos.value;
        guardarCookie(valor);
        con++;
    }
    if (document.formulario.cenar.checked == true){
        var valor=document.formulario.cenar.value;
        guardarCookie(valor);
        con++;
    }
    if (document.formulario.copas.checked == true){
        var valor=document.formulario.copas.value;
        guardarCookie(valor);
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

function guardarCookie(valor) {
    borrarCookie(valor);
    document.cookie += valor+"=;expires=Thu, 01 Jan 2030 00:00:00 GMT";
}

function borrarCookie(valor){
    document.cookie=valor+"=;expires=Thu, 01 Jan 1974 00:00:00 GMT";
}

function alertCookie() {
    alert(document.cookie); // visualizar: nombre=oeschger;comida favorita=tripa
}

function comprobarApellido(apellidos){
    var valido=true
    if(apellidos.length>7){
        var apellidos=apellidos.toUpperCase();
        var inicio = apellidos.substring(0,1);
        var medio = apellidos.substring(1,apellidos.length-1);
        var fin = apellidos.substring(apellidos.length-1,apellidos.length);

        if(!letras(inicio)){
            valido=false;
        }

        var cont=0;
        while(cont < medio.length){
            var letra=medio.charAt(cont);
            if(!letras2(letra)){
                valido=false;
                break;
            }
            cont++;
        }

        if(!letras(fin)){
            valido=false;
        }
    }
    else{
        valido=false;
    }
    return valido;
}

function comprobarNombre(nombre){
    var valido=true
    if(nombre.length>3 && nombre.length <30){
        var Nombre=nombre.toUpperCase();
        var inicio = Nombre.substring(0,1);
        var medio = Nombre.substring(1,Nombre.length-1);
        var fin = Nombre.substring(Nombre.length-1,Nombre.length);

        if(!letras(inicio)){
            valido=false;
        }

        var cont=0;
        while(cont < medio.length){
            var letra=medio.charAt(cont);
            if(!letras3(letra)){
                valido=false;
                break;
            }
            cont++;
        }

        if(!letras(fin)){
            valido=false;
        }
    }
    else{
        valido=false;
    }
    return valido;
}

function comprobarTipoVia(tipoVia){
    let valido=true
    var tipovia=tipoVia.toUpperCase().trim();
    var vias=["CALLE","PLAZA","CAMINO","AVENIDA","PLAZUELA","BULEVAR","CARRETERA","PASEO","TRAVESIA"];
    if(!vias.includes(tipovia)){
        valido=false;
    }
    return valido;
}

function comprobarNombreVia(nombreVia){
    let valido=true
    if(nombreVia.length>3 && nombreVia.length <35){
        var nombrevia=nombreVia.toUpperCase();
        var inicio = nombrevia.substring(0,1);
        var medio = nombrevia.substring(1,nombrevia.length-1);
        var fin = nombrevia.substring(nombrevia.length-1,nombrevia.length);

        if(!letras(inicio)){
            valido=false;
        }

        var cont=0;
        while(cont < medio.length){
            var letra=medio.charAt(cont);
            if(!letras4(letra)){
                valido=false;
                break;
            }
            cont++;
        }
        if(!letras(fin)){
            valido=false;
        }
    }
    else{
        valido=false;
    }
    return valido;
}

function comprobarNumero(numero){
    let valido=true
    if(!numero.length==0){
        var Numero=numero.toUpperCase();
        var cont=0;
        while(cont < Numero.length){
            var auxespecial=Numero.charAt(cont);
            if(!especial(auxespecial)){
                valido=false;
                break;
            }
            cont++;
        }
    }
    else{
        valido=false;
    }
    return valido;
}

function comprobarPortal(portal){
    let valido=true
    if(!portal.length==0){
        var Portal=portal.toUpperCase();
        var cont=0;
        while(cont < Portal.length){
            var auxPortal=Portal.charAt(cont);
            if(!NumerosLetras(auxPortal)){
                valido=false;
                break;
            }
            cont++;
        }
    }
    return valido;
}

function comprobarPisoPlanta(pisoPlanta){
    let valido=true
    if(!pisoPlanta.length==0){
        var cont=0;
        while(cont < pisoPlanta.length){
            var auxPisoPlanta=pisoPlanta.charAt(cont);
            if(!Numeros(auxPisoPlanta)){
                valido=false;
                break;
            }
            cont++;
        }
    }
    return valido;
}

function comprobarPuerta(puerta){
    let validoLetras=true;
    let validoNumeros=true;
    if(!puerta.length==0){
        var cont=0;
        while(cont < puerta.length){
            var auxPuerta=puerta.charAt(cont);
            if(!Numeros(auxPuerta)){
                validoNumeros=false;
                break;
            }
            cont++;
        }

        cont=0;
        while(cont < puerta.length){
            var auxPuerta=puerta.charAt(cont);
            if(!letras(auxPuerta)){
                validoLetras=false;
                break;
            }
            cont++;
        }

        if(!validoLetras && !validoNumeros){
            valido=false;
        }
        else{
            valido=true;
        }
    }
    else{
        valido=true;
    }
    return valido;
}

function comprobarLocalidad(localidad){
    let valido=true
    if(localidad.length>3 && localidad.length <40){
        var localidad=localidad.toUpperCase();
        var inicio = localidad.substring(0,1);
        var medio = localidad.substring(1,localidad.length-1);
        var fin = localidad.substring(localidad.length-1,localidad.length);

        if(!letras(inicio)){
            valido=false;
        }

        var cont=0;
        while(cont < medio.length){
            var letra=medio.charAt(cont);
            if(!letras4(letra)){
                valido=false;
                break;
            }
            cont++;
        }

        if(!letras(fin)){
            valido=false;
        }
    }
    else{
        valido=false;
    }
    return valido;
}

function comprobarCP(cp){
    let valido=true;

    var cont=0;
    while(cont < cp.length){
        var numero=cp.charAt(cont);
        if(!Numeros(numero)){
            valido=false;
            break;
        }
        cont++;
    }

    return valido;
}

function comprobarProvincia(provincia){
    let valido=true
    if(provincia.length > 6 && provincia.length < 32){
        var provincia = provincia.toUpperCase();
        var inicio = provincia.substring(0,1);
        var medio = provincia.substring(1,provincia.length-1);
        var fin = provincia.substring(provincia.length-1,provincia.length);

        if(!letras(inicio)){
            valido=false;
        }

        var cont=0;
        while(cont < medio.length){
            var letra=medio.charAt(cont);
            if(!letras4(letra)){
                valido=false;
                break;
            }
            cont++;
        }

        if(!letras(fin)){
            valido=false;
        }
    }
    else{
        valido=false;
    }
    return valido;
}

function comprobarPaisEstado(paisEstado){
    let valido=true
    if(paisEstado.length > 8 && paisEstado.length < 28){
        var paisestado=paisEstado.toUpperCase();
        var inicio = paisestado.substring(0,1);
        var medio = paisestado.substring(1,paisestado.length-1);
        var fin = paisestado.substring(paisestado.length-1,paisestado.length);

        if(!letras(inicio)){
            valido=false;
        }

        var cont=0;
        while(cont < medio.length){
            var letra=medio.charAt(cont);
            if(!letras4(letra)){
                valido=false;
                break;
            }
            cont++;
        }
        if(!letras(fin)){
            valido=false;
        }
    }
    else{
        valido=false;
    }
    return valido;
}

function comprobarTrabajo(trabajo){
    let valido=true
    if(trabajo.length > 10 && trabajo.length < 25){
        var Trabajo=trabajo.toUpperCase();
        var inicio = Trabajo.substring(0,1);
        var medio = Trabajo.substring(1,Trabajo.length-1);
        var fin = Trabajo.substring(Trabajo.length-1,Trabajo.length);

        if(!letras(inicio)){
            valido=false;
        }

        var cont=0;
        while(cont < medio.length){
            var letra=medio.charAt(cont);
            if(!letras5(letra)){
                valido=false;
                break;
            }
            cont++;
        }
        if(!letras(fin)){
            valido=false;
        }
    }
    else{
        valido=false;
    }
    return valido;
}

function comprobarEmpresa(empresa){
    let valido=true
    if(empresa.length > 10 && empresa.length < 25){
        var Empresa=empresa.toUpperCase();
        var inicio = Empresa.substring(0,1);
        var medio = Empresa.substring(1,Empresa.length-1);
        var fin = Empresa.substring(Empresa.length-1,Empresa.length);

        if(!letras(inicio)){
            valido=false;
        }

        var cont=0;
        while(cont < medio.length){
            var letra=medio.charAt(cont);
            if(!letras6(letra)){
                valido=false;
                break;
            }
            cont++;
        }
        if(!letras(fin)){
            valido=false;
        }
    }
    else{
        valido=false;
    }
    return valido;
}

function comprobarCategoria(categoriaProfesional){
    let valido=true
    if(categoriaProfesional.length > 8 && categoriaProfesional.length < 20){
        var CategoriaProfesional=categoriaProfesional.toUpperCase();
        var inicio = CategoriaProfesional.substring(0,1);
        var medio = CategoriaProfesional.substring(1,CategoriaProfesional.length-1);
        var fin = CategoriaProfesional.substring(CategoriaProfesional.length-1,CategoriaProfesional.length);

        if(!letras(inicio)){
            valido=false;
        }

        var cont=0;
        while(cont < medio.length){
            var letra=medio.charAt(cont);
            if(!letras7(letra)){
                valido=false;
                break;
            }
            cont++;
        }
        if(!letras(fin)){
            valido=false;
        }
    }
    else{
        valido=false;
    }
    return valido;
}

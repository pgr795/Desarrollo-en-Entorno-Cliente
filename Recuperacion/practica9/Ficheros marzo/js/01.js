window.onload=inicio;

function inicio() {
  
  
  
    document.formulariomarzo.onsubmit=validar;

    document.formulariomarzo.codigoexpor.onfocus=cambiarColores;
    document.formulariomarzo.codigoexpor.onblur=cambiarColores2;

    document.formulariomarzo.nombre.onfocus=cambiarColores;
    document.formulariomarzo.nombre.onblur=cambiarColores2;

    document.formulariomarzo.unidades.onfocus=cambiarColores;
    document.formulariomarzo.unidades.onblur=cambiarColores2;

    document.formulariomarzo.interno.onfocus=cambiarColores;
    document.formulariomarzo.interno.onblur=cambiarColores2;

    document.formulariomarzo.descripcion.onfocus=cambiarColores;
    document.formulariomarzo.descripcion.onblur=cambiarColores2;

    document.formulariomarzo.valor.onfocus=cambiarColores;
    document.formulariomarzo.valor.onblur=cambiarColores2;

    document.formulariomarzo.internacional.onfocus=cambiarColores;
    document.formulariomarzo.internacional.onblur=cambiarColores2;

    document.formulariomarzo.codigoexpor.onfocus=cambiarColores;
    document.formulariomarzo.codigoexpor.onblur=cambiarColores2;

    document.formulariomarzo.caracteristicas.onfocus=cambiarColores;
    document.formulariomarzo.caracteristicas.onblur=cambiarColores2;

    document.formulariomarzo.fecha.onfocus=cambiarColores;
    document.formulariomarzo.fecha.onblur=cambiarColores2;

}

function validar() {
    let enviar=true;
    //Exhaustivas
    let codigoexpor=document.formulariomarzo.codigoexpor.value.trim().toLowerCase();
    let nombre=document.formulariomarzo.nombre.value.trim().toLowerCase();
    let unidades=document.formulariomarzo.unidades.value.trim().toLowerCase();

    //expresiones regulares
    let interno=document.formulariomarzo.interno.value.trim().toLowerCase();
    let descripcion=document.formulariomarzo.descripcion.value.trim().toLowerCase();
    let valor=document.formulariomarzo.valor.value.trim().toLowerCase();

    //regulares  del  objeto RegExp.
    let internacional=document.formulariomarzo.internacional.value.trim().toLowerCase();
    let caracteristicas=document.formulariomarzo.caracteristicas.value.trim().toLowerCase();
    let fecha=document.formulariomarzo.fecha.value.trim().toLowerCase();

    let radio=document.formulariomarzo.tipo.value;
    let select=document.formulariomarzo.comunidad;


    if(radio!=null){
        document.formulariomarzo.tipo.value="Error campo tipo";  
    }


    let contador=0;
    for (let i = 0; i < select.length; i++) {
       if(select.selected){
           contador++;
       } 
    }

    if(contador<4){
        document.formulariomarzo.errcomunidades.value="Error campo comunidades";  
    }

    contador=0;
    if(document.formulariomarzo.madrid.checked)
    contador++;
    if(document.formulariomarzo.barcelona.checked)
    contador++;
    if(document.formulariomarzo.madrid.checked)
    contador++;
   
    if(contador<2){
        document.formulariomarzo.errciudad.value="Error campo ciudad";
    }

    if (!Codigoexpor(codigoexpor)) {
        document.formulariomarzo.errcodigoexpor.value="Error campo codigoexpor";
    }

    if (!Nombre(nombre)) {
        document.formulariomarzo.errnombre.value="Error campo nombre";
    }

    if (!Unidades(unidades)) {
        document.formulariomarzo.errunidades.value="Error campo unidades";
    }

    if (!Interno(interno)) {
        document.formulariomarzo.errinterno.value="Error campo interno";
    }

    if (!Descripcion(descripcion)) {
        document.formulariomarzo.errdescripcion.value="Error campo descripcion";
    }

    if (!Valor(valor)) {
        document.formulariomarzo.errvalor.value="Error campo valor";
    }

    if (!Internacional(internacional)) {
        document.formulariomarzo.errinternacional.value="Error campo internacional";
    }
    if (!Caracteristicas(caracteristicas)) {
        document.formulariomarzo.errcaracteristicas.value="Error campo caracteristicas";
    }

    if (!Fecha(fecha)) {
        document.formulariomarzo.errfecha.value="Error campo fecha";
    }

}

function cambiarColores(evento){
    let miEvento= evento||window.event;
    miEvento.target.style.color="blue";
    miEvento.target.style.backgroundColor="yellow";
}

function cambiarColores2(evento){
    let miEvento= evento||window.event;
    miEvento.target.style.color="black";
    miEvento.target.style.backgroundColor="white";
}

  //Exhaustivas
function Codigoexpor(aux) { 
    let valido=true;
    let cont=0;   
    let posIntg=aux.indexOf("?");
    let posGuion=aux.indexOf("-");
   if (aux.length > 0) {
     if (posIntg >0 || posGuion >0) {
       let inicio = aux.substring(0, posIntg);
       let medio = aux.substring(posIntg, posIntg + 3);
       let final = aux.substring(posIntg + 3, aux.length - 3);
       let final2 =aux.substring(aux.length-3,aux.length);
       let caracteresEspeciales = "$%&*/";
       let caracteresAdicionales = "áéíóúüñ";
       let contadorLetra = 0;
       let contadorNumero = 0;
       let contadorLetra2 = 0;

       while (valido && cont < inicio.length) {
         if (inicio.charAt(cont) < "a" || inicio.charAt(cont) > "z") {
           valido = false;
         }
         else{
            contadorLetra++;
            cont++;
         }
       }

       if (contadorLetra > 3 || contadorLetra < 6) {
         valido = false;
       }
       cont = 0;
       while (valido && cont < inicio.length) {
         if (inicio.charAt(cont) < "0" || inicio.charAt(cont) > "9") {
           valido = false;
         }
         else{
            contadorNumero++;
            cont++;
         }
       }

       if (contadorNumero > 4 || contadorNumero < 8) {
         valido = false;
       }
       cont = 0;

       while (valido && cont < medio.length) {
         if (!caracteresEspeciales.includes(medio.charAt(cont))) {
           valido = false;
         }
       }

       while (valido && cont < final.length) {
         if (final.charAt(cont) < "a" || final.charAt(cont) > "z") {
           if (final.charAt(cont) < "0" || final.charAt(cont) > "9") {
             valido = false;
           }
           else{
            contadorLetra2++;
            cont++;
         }
         }
       }   
       if (contadorNumero > 2 || contadorNumero < 8) {
         valido = false;
       }

       while (valido && cont < final2.length) {
         if (final2.charAt(cont) < "0" && final2.charAt(cont)) {
           valido = false;
         }
       }
       return valido;
     }
   }
   else{
       valido=false;
       return valido;
   }
}
function Nombre(aux) {   
    let valido=true;
    let cont=0;
    let inicio=aux.substring(0,2);
    let medio=aux.substring(2,aux.length-1);
    let final=aux.substring(aux.length-1,aux.length); 
    let caracterEspecial=("#");
    let caracteresEspeciales=("-. "); 
    if (aux.length > 0) {
        while(valido && cont<inicio.length){
            if (inicio.charAt(cont) < "a" || inicio.charAt(cont) > "z") {
            if (inicio.charAt(cont) < "0" || inicio.charAt(cont) > "9") {
                valido = false;
            }
            }
            cont++;
        }

        cont=0;
        if (medio.length > 7 || medio.length < 13) {
          while (valido && cont < medio.length) {
            if (medio.charAt(cont) < "a" || medio.charAt(cont) > "z") {
              if (inicio.charAt(cont) < "0" || inicio.charAt(cont) > "9") {
                if (!caracteresEspeciales.includes(final.charAt(cont))) {
                  valido = false;
                }
              }
            }
            cont++;
          }
        }
        else{
            valido=false;
        }

        if (final.charAt(cont) < "a" || final.charAt(cont) > "z") {
            if (!caracterEspecial.includes(final.charAt(cont))) {
            valido = false;
            }
        }

        return valido;
    }
    else{
        valido = false;
        return valido;
    }
}
function Unidades(aux) {
    let valido=true;
    let cont=0;
    while (valido && cont < aux.length) {
        if (aux.charAt(cont) < "0" || aux.charAt(cont) > "9") {
            valido=false;
        }
        cont++;
    }
    return valido;
}


//Regulares
function Interno(aux) {
  let expRegInterno=/^([0-9]{4,7})([a-z]{5,8})([$|@])([a-z0-9]{2})([a-z0-9]{6})$/;
  let valido = true;
  if (expRegInterno.test(aux)) {
    valido = false;
  }
  return valido;
}
function Descripcion(aux) {
  let expRegDescripcion=/^([a-z]{6})([a-z0-9\-\$\%\/]{7,29})([a-z0-9,]{2})$/;
  let valido = true;
  if (expRegDescripcion.test(aux)) {
    valido = false;
  }
  return valido;
}
function Valor(aux) {
  let expRegValor;
  let valido = true;
  if (expRegValor.test(aux)) {
    valido = false;
  }
  return valido;
}


//Regulares Objeto
function Internacional(aux) { 
    let expRegInternacional;
    let valido=true;
    if(expRegInternacional.test(aux)){
        valido=false;
    }
    return valido; 
 }
function Caracteristicas(aux) { 
    let expRegCaracteristicas;
    let valido=true;
    if(expRegCaracteristicas.test(aux)){
        valido=false;
    }
    return valido; 
 }
function Fecha(aux) { 
    let expRegFecha=new RegExp();
    let valido=true;
    if(expRegFecha.test(aux)){
        valido=false;
    }
    return valido; 
 }
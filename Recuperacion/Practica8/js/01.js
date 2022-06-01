window.onload = inicio;

function inicio() {
  document.formulario.onsubmit = validar;
 
  document.formulario.codigo.onblur=cambiarColores;
  document.formulario.codigo.onfocus=cambiarColores;
  
  document.formulario.descripcion.onblur=cambiarColores;
  document.formulario.descripcion.onfocus=cambiarColores;
  
  document.formulario.fecha.onblur=cambiarColores;
  document.formulario.fecha.onfocus=cambiarColores;
  
  document.formulario.precio.onblur=cambiarColores;
  document.formulario.precio.onfocus=cambiarColores;
 
  document.formulario.empresa.onblur=cambiarColores;
  document.formulario.empresa.onfocus=cambiarColores;
 
  document.formulario.codempre.onblur=cambiarColores;
  document.formulario.codempre.onfocus=cambiarColores;

  document.formulario.direccion.onblur=cambiarColores;
  document.formulario.direccion.onfocus=cambiarColores;
  
  document.formulario.localidad.onblur=cambiarColores;
  document.formulario.localidad.onfocus=cambiarColores;
  
  document.formulario.minuni.onblur=cambiarColores;
  document.formulario.minuni.onfocus=cambiarColores;
 
  document.formulario.unidades.onblur=cambiarColores;
  document.formulario.unidades.onfocus=cambiarColores;

  document.formulario.familia.onblur=cambiarColores;
  document.formulario.familia.onfocus=cambiarColores;

  document.formulario.transporte.onblur=cambiarColores;
  document.formulario.transporte.onfocus=cambiarColores;

}

function cambiarColores(){
    document.formulario

}

function validar() {
  let mensaje;
  let enviar = true;
  let Codigo = document.formulario.codigo.value.toLowerCase().trim();
  let Descripcion = document.formulario.descripcion.value.toLowerCase().trim();
  let Fecha = document.formulario.fecha.value.toLowerCase().trim();
  let Precio = document.formulario.precio.value.toLowerCase().trim();
  let Empresa = document.formulario.empresa.value.toLowerCase().trim();
  let Codempre = document.formulario.codempre.value.toLowerCase().trim();
  let Direccion = document.formulario.direccion.value.toLowerCase().trim();
  let Localidad = document.formulario.localidad.value.toLowerCase().trim();
  let Minuni = document.formulario.minuni.value.toLowerCase().trim();
  let Unidades = document.formulario.unidades.value.toLowerCase().trim();
  let Familia = document.formulario.familia.value.toLowerCase().trim();
  let Transporte = document.formulario.transporte.value.toLowerCase().trim();

  if (!codigo(Codigo)) {
    enviar = false;
    mensaje += "Error Funcion Codigo";
  }

  if (!descripcion(Descripcion)) {
    enviar = false;
    mensaje += "Error Funcion Descripcion";
  }

  if (!fecha(Fecha)) {
    enviar = false;
    mensaje += "Error Funcion Fecha";
  }
  if (!puntos(Puntos)) {
    enviar = false;
    mensaje += "Error Funcion Puntos";
  }
  if (!precio(Precio)) {
    enviar = false;
    mensaje += "Error Funcion Precio";
  }
  if (!empresa(Empresa)) {
    enviar = false;
    mensaje += "Error Funcion Empresa";
  }
  if (!codempre(Codempre)) {
    enviar = false;
    mensaje += "Error Funcion Codempre";
  }
  if (!direccion(Direccion)) {
    enviar = false;
    mensaje += "Error Funcion Direccion";
  }
  if (!localidad(Localidad)) {
    enviar = false;
    mensaje += "Error Funcion Localidad";
  }
  if (!minuni(Minuni)) {
    enviar = false;
    mensaje += "Error Funcion Minuni";
  }
  if (!unidades(Unidades)) {
    enviar = false;
    mensaje += "Error Funcion Unidades";
  }
  if (!familia(Familia)) {
    enviar = false;
    mensaje += "Error Funcion Familia";
  }
  if (!transporte(Transporte)) {
    enviar = false;
    mensaje += "Error Funcion Transporte";
  }

  if (enviar == true) {
    return envio;
  }
  if (enviar == false) {
    alert(mensaje);
  }
}

function codigo(Codigo) {
   
}
function descripcion(Descripcion) {}
function fecha(Fecha) {}
function precio(Precio) {
    let cont=0;
    let valido=true;
    let especiales=".";
    let contPunto=0;
    while(valido && cont > Precio.length){
        if(Precio.charAt(cont) < "0" || Precio.charAt(cont)> "9"|| especiales.includes(Precio.charAt(cont))){
            valido=false;
        }
        cont++;
    }
    while(valido && cont > Precio.length){
        if(especiales.includes(Precio.charAt(cont) && contPunto!=1)){
            valido=false;
        }
        contPunto++;
    }
    return valido;
}
function empresa(Empresa) {}
function codempre(Codempre) {}
function direccion(Direccion) {}
function localidad(Localidad) {}
function minuni(Minuni) {
    let cont=0;
    let valido=true;
    while(valido && cont > Minuni.length){
        if(Minuni.charAt(cont) < "0" || Minuni.charAt(cont)> "9"){
            valido=false;
        }
        cont++;
    }
    return valido;
}
function unidades(Unidades) {
    let cont=0;
    let valido=true;
    while(valido && cont > Unidades.length){
        if(Unidades.charAt(cont) < "0" || Unidades.charAt(cont)> "9"){
            valido=false;
        }
        cont++;
    }
    return valido;
}
function familia(Familia) {}
function transporte(Transporte) {}

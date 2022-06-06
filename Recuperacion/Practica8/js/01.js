window.onload = inicio;

function inicio() {
  document.formulario.codigo.onfocus = cambiarColores;
  document.formulario.codigo.onblur = cambiarColores2;
  
  document.formulario.descripcion.onfocus = cambiarColores;
  document.formulario.descripcion.onblur = cambiarColores2;
  
  document.formulario.fecha.onfocus = cambiarColores;
  document.formulario.fecha.onblur = cambiarColores2;
 
  document.formulario.precio.onfocus = cambiarColores;
  document.formulario.precio.onblur = cambiarColores2;

  document.formulario.empresa.onfocus = cambiarColores;
  document.formulario.empresa.onblur = cambiarColores2;
  
  document.formulario.codempre.onfocus = cambiarColores;
  document.formulario.codempre.onblur = cambiarColores2;

  document.formulario.direccion.onfocus = cambiarColores;
  document.formulario.direccion.onblur = cambiarColores2;
 
  document.formulario.localidad.onfocus = cambiarColores;
  document.formulario.localidad.onblur = cambiarColores2;

  document.formulario.minuni.onfocus = cambiarColores;
  document.formulario.minuni.onblur = cambiarColores2;

  document.formulario.unidades.onfocus = cambiarColores;
  document.formulario.unidades.onblur = cambiarColores2;

  document.formulario.familia.onfocus = cambiarColores;
  document.formulario.familia.onblur = cambiarColores2;

  document.formulario.transporte.onfocus = cambiarColores;
  document.formulario.transporte.onblur = cambiarColores2;

  document.formulario.onsubmit = validar;
}
function cambiarColores(evento) {
  let miEvento=evento||window.event;
	miEvento.target.style.backgroundColor="yellow";
	miEvento.target.style.color="red";
  // miEvento.target.value="";
}
function cambiarColores2(evento) {
	let miEvento=evento||window.event;
	miEvento.target.style.backgroundColor="white";
	miEvento.target.style.color="black";
}
function validar() {
  let mensaje = "";
  let enviar = true;
  let Codigo = document.formulario.codigo.value.toLowerCase().trim();
  let Descripcion = document.formulario.descripcion.value.toLowerCase().trim();
  let Fecha = document.formulario.fecha.value.toLowerCase().trim();
  let Precio = document.formulario.precio.value.toLowerCase().trim();
  
  let Empresa = document.formulario.empresa.value.trim();
  let Codempre = document.formulario.codempre.value.trim();
  let Direccion = document.formulario.direccion.value.trim();
  let Localidad = document.formulario.localidad.value.trim();
  
  let Minuni = document.formulario.minuni.value.trim();
  let Unidades = document.formulario.unidades.value.trim();
  let Familia = document.formulario.familia.value.trim();
  let Transporte = document.formulario.transporte.value.trim();

  let Iva=document.formulario.iva.value;
  let Paises=document.formulario.paises;

//--------------------------------------------------------------
  if (!codigo(Codigo)) {
    enviar = false;
    mensaje += "Error Funcion Codigo \n";
  }
  if (!descripcion(Descripcion)) {
    enviar = false;
    mensaje += "Error Funcion Descripcion \n";
  }
  if (!fecha(Fecha)) {
    enviar = false;
    mensaje += "Error Funcion Fecha \n";
  }
  if (!precio(Precio)) {
    enviar = false;
    mensaje += "Error Funcion Precio \n";
  }
//--------------------------------------------------------------
  if (!empresa(Empresa)) {
    enviar = false;
    mensaje += "Error Funcion Empresa \n";
  }
  if (!codempre(Codempre)) {
    enviar = false;
    mensaje += "Error Funcion Codempre \n";
  }
  if (!direccion(Direccion)) {
    enviar = false;
    mensaje += "Error Funcion Direccion \n";
  }
  if (!localidad(Localidad)) {
    enviar = false;
    mensaje += "Error Funcion Localidad \n";
  }
//--------------------------------------------------------------
  if (!minuni(Minuni)) {
    enviar = false;
    mensaje += "Error Funcion Minuni \n";
  }
  if (!unidades(Unidades)) {
    enviar = false;
    mensaje += "Error Funcion Unidades \n";
  }
  if (!familia(Familia)) {
    enviar = false;
    mensaje += "Error Funcion Familia \n";
  }
  if (!transporte(Transporte)) {
    enviar = false;
    mensaje += "Error Funcion Transporte \n";
  }
//--------------------------------------------------------------
  if (Iva=="") {
    enviar = false;
    mensaje += "Error Iva \n";
  }
  if (!paises(Paises)) {
    enviar = false;
    mensaje += "Error Funcion Paises \n";
  }
  //--------------------------------------------------------------
  let contador=0;
  if (document.formulario.informatica.checked) contador+=1;
  if (document.formulario.hosteleria.checked) contador+=1;
  if (document.formulario.quimica.checked) contador+=1;
  if (document.formulario.sanidad.checked) contador+=1;
  if (document.formulario.electronica.checked) contador+=1;
  if (document.formulario.textil.checked) contador+=1;

  if (contador < 1) {
    enviar=false;
    mensaje+="Debe seleccionar al menos un sector \n";
  }

  if (enviar == true) {
    return enviar;
  }

  if (enviar == false) {
    alert(mensaje);
    return enviar;
  }

}

function codigo(Codigo) {
  if (Codigo.length == 7 || Codigo.length == 11) {
    let cont = 0;
    let valido = true;
    let final=Codigo.substring(Codigo.length-1,Codigo.length);
   
    while (valido && cont > Codigo.length) {
      if (Codigo.charAt(cont) < "0" || Codigo.charAt(cont) > "9") {
        valido = false;
      }
      cont++;
    }

    cont = 0;
    while (valido && cont > final.length) {
      if (final.charAt(cont) < "0" || final.charAt(cont) > "9") {
        valido = false;
      }
      cont++;
    }
    return valido;
  }
}
function descripcion(Descripcion) {
  if (Descripcion.length > 10 || Descripcion.length < 23) {
    let cont = 0;
    let valido = true;
    let especiales = " -";
    let inicio = Descripcion.substring(0, 4);
    let medio = Descripcion.substring(4, Descripcion.length - 1);
    let final = Descripcion.substring(Descripcion.length - 1, Descripcion.length);

    while (valido && cont < inicio.length) {
      if (inicio.charAt(cont) < "a" || inicio.charAt(cont) > "z") {
        valido = false;
      }
      cont++;
    }

    cont = 0;
    while (valido && cont < medio.length) {
      if (medio.charAt(cont) < "a" || medio.charAt(cont) > "z") {
        if (medio.charAt(cont) < "0" || medio.charAt(cont) > "9") {
          if (!especiales.includes(medio.charAt(cont))) {
            valido = false;
          }
        }
      }
    cont++;
    }

    cont = 0;
    while (valido && cont < final.length) {
      if (final.charAt(cont) < "a" || final.charAt(cont) > "z") {
        valido = false;
      }
      cont++;
    }
    return valido;
  }
}
function fecha(Fecha) {
  if (Fecha.length == 10) {
    let cont = 0;
    let valido = true;
    let inicio = Fecha.substring(0, 2);
    let medio = Fecha.substring(Fecha.length - 7, Fecha.length - 5);
    let final = Fecha.substring(Fecha.length - 4, Fecha.length);

    while (valido && cont < inicio.length) {
      if (inicio.charAt(cont) < "0" || inicio.charAt(cont) > "9") {
        valido = false;
      }
      cont++;
    }
    cont = 0;
    while (valido && cont < medio.length) {
      if (medio.charAt(cont) < "0" || medio.charAt(cont) > "9") {
        valido = false;
      }
      cont++;
    }
    if (final >= 1930) {
      cont = 0;
      while (valido && cont < final.length) {
        if (final.charAt(cont) < "0" || final.charAt(cont) > "9") {
          valido = false;
        }
        cont++;
      }
    }
    else if(final <= 1930){
      valido = false;
    }
    return valido;
  }
}
function precio(Precio) {
  let cont = 0;
  let valido = true;
  let especiales = ".";
  let contPunto = 0;
  let entero = Precio.substring(0, 2);
  let decimal = Precio.substring(3, 5);
  if (entero >= 10 && decimal.length <= 2) {
    while (valido && cont < Precio.length) {
      if (Precio.charAt(cont) < "0" || Precio.charAt(cont) > "9"){
        if (!especiales.includes(Precio.charAt(cont))) {
          valido = false;
        }
      }
      cont++;
    }
    cont=0;
    while (valido && cont < Precio.length) {
      if (especiales.includes(Precio.charAt(cont))) {
        if (contPunto == 1) {
          valido = false;
        }
        contPunto++;
      }
      cont++;
    }
  }
  return valido;
}


function empresa(Empresa) {
  let expRegEmpresa=/^([A-Za-z]{3})([A-Za-z0-9\ \.]{7,24})([A-Za-z]|[0-9]){1}$/;
  let valido=true;
  if(!expRegEmpresa.test(Empresa)){
    valido=false;
  }
  return valido;
}
function codempre(Codempre) {
  let expRegCodempre=/^([0-9]{3})(\.)((ABCE)|(CADE)|(FEGU)|(IJOK)|(LIMA))([0-9]{5,8})(\.)([A-Za-z0-9]{5})$/;
  let valido=true;
  if(!expRegCodempre.test(Codempre)){
    valido=false;
  }
  return valido;
}
function direccion(Direccion) {
  let expRegDireccion=/^([A-Za-z]{2})([A-Za-z0-9\.\,\º\ª\\\-]{8,26})([A-Za-z0-9\.])$/i;
  let valido=true;
  if(!expRegDireccion.test(Direccion)){
    valido=false;
  }
  return valido;
}
function localidad(Localidad) {
  let expRegLocalidad=/^[A-Za-z]{5,20}$/;
  let valido=true;
  if(!expRegLocalidad.test(Localidad)){
    valido=false;
  }
  return valido;
}


function minuni(Minuni) {
  let expRegMinuni=new RegExp("^((00)?[3-9]\\d)|(0?[1-9]\\d{2})|([1-9]\\d{3})$","i");
  let valido=true;
  if(!expRegMinuni.test(Minuni)){
    valido=false;
  }
  return valido;
}
function unidades(Unidades) {
  let expRegUnidades=new RegExp("^([1-9]{1})([0-9]){1,}$","i");
  let valido=true;
  if(!expRegUnidades.test(Unidades)){
    valido=false;
  }
  return valido;
}
function familia(Familia) {
  let expRegFamilia=new RegExp("^[A-Za-z]{5}[A-Za-z0-9 \\.\\|\\-]{2,13}[A-Za-z]{3}$");
  let valido=true;
  if(!expRegFamilia.test(Familia)){
    valido=false;
  }
  return valido;
}
function transporte(Transporte) {
  let expRegTransporte=new RegExp("^((SEUR)|(NACEX)|(DHL)|(MRW))$");
  let valido=true;
  if(!expRegTransporte.test(Transporte)){
    valido=false;
  }
  return valido;
}


function paises(Paises) {
  let indice=0;
	let enviar=true;
  for(let i=0; i <Paises.length; i++){
		if (Paises[i].selected){
			indice+=1;
    }
  }
	if (indice < 3){
		enviar=false;
	}
  return enviar;
}
if(window.addEventListener){
  window.addEventListener("load",inicio);
}
else if(window.attachEvent){
  window.attachEvent("onload",inicio);
}

function inicio() {
  let Agregar=document.getElementById("agregar");
  let Borrar=document.getElementById("borrar");
  let Modificar=document.getElementById("modificar");
  let BorrarFila=document.getElementById("BorrarFila");
  let BorrarTodo=document.getElementById("BorrarTodo");
  
  if(document.addEventListener){
    Agregar.addEventListener("click",agregar);
    Borrar.addEventListener("click",borrar);
    Modificar.addEventListener("click",modificar);
    BorrarFila.addEventListener("click",borrarFila);
    BorrarTodo.addEventListener("click",borrarTodo);
  }
  else if(document.attachEvent){
    Agregar.attachEvent("onclick",agregar);
    Borrar.attachEvent("onclick",borrar);
    Modificar.attachEvent("onclick",modificar);
    BorrarFila.attachEvent("onclick",borrarFila);
    BorrarTodo.attachEvent("onclick",borrarTodo);
  }
}

function agregar() {
  borrarErrores();
  let codigo = document.getElementById("Codigo").value;
  let nombre = document.getElementById("Nombre").value.trim();

  let Validar1 = validar(codigo);
  let Validar2 = validar2(nombre);

  if (Validar1 && Validar2) {
    codigo = parseInt(codigo);
    let valido = true;
    let filas = document.querySelectorAll("#tabla>tbody>tr");
    let cont = 0;
    while (valido && cont < filas.length) {
      let fila = filas.item(cont);
      let codigo2 = fila.getElementsByTagName("td").item(0).textContent;
      if (parseInt(codigo, 10) == parseInt(codigo2, 10)) {
        valido = false;
        document.getElementById("error").value="el codigo se ha repetido";
      }
      cont++;
    }
    cont = 0;
    while (valido && cont < filas.length) {
      let fila = filas.item(cont);
      let codigo2 = fila.getElementsByTagName("td").item(0).textContent;
      if (parseInt(codigo, 10) != parseInt(codigo2, 10)) {
        if (parseInt(codigo, 10) > parseInt(codigo2, 10) && valido) {
          valido = false;
          let padre=document.querySelector("#tabla>tbody");
          let NuevaFila=document.createElement("tr");
          let NuevoTD=document.createElement("td");
          let NuevoTD2=document.createElement("td");
          let nuevoText=document.createTextNode(codigo);
          let nuevoText2=document.createTextNode(nombre);
          NuevoTD.appendChild(nuevoText);
          NuevoTD2.appendChild(nuevoText2);
          NuevaFila.appendChild(NuevoTD);
          NuevaFila.appendChild(NuevoTD2);
          padre.insertBefore(NuevaFila,fila);
        }
      } 
      else {
        valido = false;
        document.getElementById("error").value="el codigo se ha repetido";
      }
      cont++;
    }
    if (valido) {
      let padre=document.querySelector("#tabla>tbody");
      let NuevaFila=document.createElement("tr");
      let NuevoTD=document.createElement("td");
      let NuevoTD2=document.createElement("td");
      let nuevoText=document.createTextNode(codigo);
      let nuevoText2=document.createTextNode(nombre);
      NuevoTD.appendChild(nuevoText);
      NuevoTD2.appendChild(nuevoText2);
      NuevaFila.appendChild(NuevoTD);
      NuevaFila.appendChild(NuevoTD2);
      padre.appendChild(NuevaFila);
    }
  } 
  else {
    document.getElementById("error").value="Se ha introducido mal los datos";
  }
}

function borrar() {
  borrarErrores();
  let codigo = document.getElementById("CodigoTabla").value; 
  let filas = document.querySelectorAll("#tabla>tbody>tr");
  let noRepetido = true;
  let cont = 0;
  if(codigo!=""){
    codigo = parseInt(codigo, 10);
    while (noRepetido && cont < filas.length) {
      let celdaCodigo = parseInt(filas.item(cont).getElementsByTagName("td").item(0).textContent);
      if(codigo==celdaCodigo){
          noRepetido=false;
          filas.item(cont).remove();
      }
      cont++;
    }
    if(noRepetido){
      document.getElementById("error1").value="No existe codigo en la tabla";
    }
  }
  else {
    document.getElementById("error1").value="El campo esta vacio";
  }
 
}

function modificar() {
  borrarErrores();
  let codigoTabla = document.getElementById("CodigoTabla2").value;
  let nombreTabla = document.getElementById("NombreTabla").value.trim();
  if (codigoTabla != "" && nombreTabla != "") {
    codigoTabla = parseInt(codigoTabla, 10);
    let filas = document.querySelectorAll("#tabla>tbody>tr");
    let valido = true;
    let cont = 0;
    while (valido && cont < filas.length) {
      let fila = filas.item(cont).getElementsByTagName("td");
      let tabCodigo = parseInt(fila.item(0).textContent, 10);
      let tabNombre = fila.item(1).textContent;
      if (tabCodigo == codigoTabla) {
        valido=false;
        if (tabNombre != nombreTabla) {
          fila.item(1).textContent=nombreTabla;
        }
        else{
          document.getElementById("error2").value="El nombre del campo esta repetido";
        }
      }
      cont++;
    }
  } 
  else {
    document.getElementById("error2").value="Algunos campos estan vacios";
  }
}

function borrarFila() {
  borrarErrores();
  let numFila=parseInt(document.getElementById("NumeroFila").value,10);
  if(numFila!="" && numFila!=0){
    let filas = document.querySelectorAll("#tabla>tbody>tr");
    if(filas.length>=numFila){
      filas.item(numFila-1).remove();
    }
    else {
      document.getElementById("error3").value="No existe la linea "+numFila;
    }
  }
  else {
    document.getElementById("error3").value="El campo esta vacio o pusiste 0";
  }
}

function borrarTodo() {
  borrarErrores();
  let filas = document.querySelectorAll("#tabla>tbody>tr");
  for (let i = 0; i < filas.length; i++) {
    filas.item(i).remove();
  }
}

function validar(aux){
    let valido=true;
    let cont=0;
    while(valido && cont < aux.length){
        if(aux.charAt(cont)< "0" || aux.charAt(cont)>"9"){
            valido=false;
        }
        cont++;
    }
    return valido;
}

function validar2(aux){
    aux=aux.toLowerCase();
    let valido=true;
    let cont=0;
    while(valido && cont < aux.length){
        if(aux.charAt(cont)< "a" || aux.charAt(cont)>"z"){
            valido=false;
        }
        cont++;
    }
    return valido;
}

function borrarErrores() {
  document.getElementById("error").value="";
  document.getElementById("error1").value="";
  document.getElementById("error2").value="";
  document.getElementById("error3").value="";
}

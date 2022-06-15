$(window).on("load", inicio);

function inicio() {
  $("#agregar").on("click", agregar);
  $("#borrar").on("click", borrar);
  $("#modificar").on("click",modificar);
  $("#BorrarFila").on("click", borrarFila);
  $("#BorrarTodo").on("click", borrarTodo);
}

function agregar() {
  borrarErrores();
  let codigo = $("#Codigo").val();
  let nombre = $("#Nombre").val().trim();

  let Validar1 = validar(codigo);
  let Validar2 = validar2(nombre);

  if (Validar1 && Validar2) {
    codigo = parseInt(codigo);
    let valido = true;
    let filas = $("#tabla>tbody>tr");
    let cont = 0;
    while (valido && cont < filas.length) {
      let fila = $(filas).eq(cont);
      let codigo2 = $(fila).find("td").eq(0).text();
      if (parseInt(codigo, 10) == parseInt(codigo2, 10)) {
        valido = false;
        $("#error").val("el codigo se ha repetido");
      }
      cont++;
    }

    cont = 0;
    while (valido && cont < filas.length) {
      let fila = $(filas).eq(cont);
      let codigo2 = $(fila).find("td").eq(0).text();
      if (parseInt(codigo, 10) != parseInt(codigo2, 10)) {
        if (parseInt(codigo, 10) < parseInt(codigo2, 10) && valido) {
          valido = false;
          $(fila).before(
            "<tr><td>" + codigo + "</td><td>" + nombre + "</td></tr>"
          );
        }
      } else {
        valido = false;
        $("#error").val("el codigo se ha repetido");
      }
      cont++;
    }

    if (valido) {
      $("#tabla>tbody").append(
        "<tr><td>" + codigo + "</td><td>" + nombre + "</td></tr>"
      );
    }
  } 
  else {
    $("#error").val("Se ha introducido mal los datos");
  }
}

function borrar() {
  borrarErrores();
  let codigo = $("#CodigoTabla").val();
  let filas = $("#tabla>tbody>tr");
  let noRepetido = true;
  let cont = 0;
  if(codigo!=""){
    codigo = parseInt($("#CodigoTabla").val(), 10);
    while (noRepetido && cont < filas.length) {
      let celdaCodigo = parseInt($(filas).eq(cont).children("td").eq(0).text());
      if(codigo==celdaCodigo){
          noRepetido=false;
          $(filas).eq(cont).remove();
      }
      cont++;
    }
    if(noRepetido){
      $("#error1").val("No existe codigo en la tabla");
    }
  }
  else {
    $("#error1").val("El campo esta vacio");
  }
 
}

function modificar() {
  borrarErrores();
  let codigoTabla = $("#CodigoTabla2").val();
  let nombreTabla = $("#NombreTabla").val().trim();
  if (codigoTabla != "" && nombreTabla != "") {
    codigoTabla = parseInt(codigoTabla, 10);
    let filas = $("#tabla>tbody>tr");
    let valido = true;
    let cont = 0;
    while (valido && cont < filas.length) {
      let fila = $(filas).eq(cont).children("td");
      let tabCodigo = parseInt($(fila).eq(0).text(), 10);
      let tabNombre = $(fila).eq(1).text();
      if (tabCodigo == codigoTabla) {
        valido=false;
        if (tabNombre != nombreTabla) {
          $(fila).eq(1).text(nombreTabla);
        }
        else{
          $("#error2").val("El nombre del campo esta repetido");
        }
      }
      cont++;
    }
  } 
  else {
    $("#error2").val("Algunos campos estan vacios");
  }
}

function borrarFila() {
  borrarErrores();
  let numFila=parseInt($("#NumeroFila").val(),10);
  if(numFila!="" && numFila!=0){
    let filas = $("#tabla>tbody>tr");
    if(filas.length>=numFila){
      $(filas).eq(numFila-1).remove();
    }
    else {
      $("#error3").val("No existe la linea "+numFila);
    }
  }
  else {
    $("#error3").val("El campo esta vacio o pusiste 0");
  }
}

function borrarTodo() {
  borrarErrores();
  let filas = $("#tabla>tbody>tr");
  for (let i=0; i < filas.length;i++) {
    $(filas).eq(i).remove();
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
    $("#error").val("");
    $("#error1").val("");
    $("#error2").val("");
    $("#error3").val("");
}

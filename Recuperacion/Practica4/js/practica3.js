$(window).on("load",inicio);

function inicio(){
    $("#agregar").on("click",agregar);
    $("#borrar").on("click",borrar);
    $("#modificar").on("click",modificar);
    $("#BorrarFila").on("click",BorrarFila);
    $("#BorrarTodo").on("click",BorrarTodo);
}

function agregar() {
    borrarError();
    //comprobaremos que el código es un número
    let codigo=$("#Codigo").val();
    let nombre=$("#Nombre").val();
    
    if(codigo!="" && nombre!=""){
        let codigoValido=false;
        let nombreValido=false;
        if($.isNumeric(codigo)) {
            codigoValido=true;
        }
       
        //nombre es una cadena de caracteres
        if(!$.isNumeric(nombre)) {
            nombreValido=true;
        }
        if(codigoValido && nombreValido){
            $("#tabla>tbody").prepend("<tr><td>"+codigo+"</td><td>"+nombre+"</td></tr>");
        }
        else{
            $("#error").val("ERROR:codigoNombre y nombreValido no son validos");
        }
        //añadiremos esos valores a una tabla
    }
    else{
        $("#error").val("ERROR:codigo o nombre estan vacios");
    }
}

function borrar() {
    borrarError();
    let codigo=$("#CodigoTabla").val();
    if(codigo!=""){
        let filas=$("#tabla>tbody>tr");
        let valido=true;
        let indice=0;
        while(valido && indice<filas.length){
           let fila=$(filas).eq(indice).children();
           let celda=$(fila).eq(0).text();
            if(codigo==celda){
                $(filas).eq(indice).remove();
            }
            indice++;
        }
    }
    else{
        $("#error1").val("ERROR:codigo esta vacio");
    }
}

function modificar() {
    borrarError();
    let codigo=$("#CodigoTabla").val();
    if(codigo!=""){
        let filas=$("#tabla>tbody>tr");
        let valido=true;
        let indice=0;
        while(valido && indice<filas.length){
           let fila=$(filas).eq(indice).children();
           let celda=$(fila).eq(0).text();
            if(codigo==celda){
                $(filas).eq(indice).remove();
            }
            indice++;
        }
    }
    else{
        $("#error1").val("ERROR:codigo esta vacio");
    }
}

function BorrarFila() {
    borrarError();
    let codigo=$("#CodigoTabla").val();
    if(codigo!=""){
        let filas=$("#tabla>tbody>tr");
        let valido=true;
        let indice=0;
        while(valido && indice<filas.length){
           let fila=$(filas).eq(indice).children();
           let celda=$(fila).eq(0).text();
            if(codigo==celda){
                $(filas).eq(indice).remove();
            }
            indice++;
        }
    }
    else{
        $("#error1").val("ERROR:codigo esta vacio");
    }
}

function BorrarTodo() {
    borrarError();
    let codigo=$("#CodigoTabla").val();
    if(codigo!=""){
        let filas=$("#tabla>tbody>tr");
        let valido=true;
        let indice=0;
        while(valido && indice<filas.length){
           let fila=$(filas).eq(indice).children();
           let celda=$(fila).eq(0).text();
            if(codigo==celda){
                $(filas).eq(indice).remove();
            }
            indice++;
        }
    }
    else{
        $("#error1").val("ERROR:codigo esta vacio");
    }
}

function borrarError() {
    $("#error").val("");
    $("#error1").val("");
    $("#error2").val("");
    $("#error3").val("");
}

//TABLA
//    Número         Nombre
//  código(int)      Nombre(String)
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
    let nombre=$("#Nombre").val().toLowerCase();
    
    if(codigo!="" && nombre!=""){
        let codigoValido=true;
        let nombreValido=true;
        let cont = 0;
    
        //codigo son numeros
        while (codigoValido && cont < codigo.length) {
            if (codigo.charAt(cont) < "0" || codigo.charAt(cont) > "9") {
                codigoValido=false;
            }
            cont++;
        }
       
        cont = 0;
        //nombre es una cadena de caracteres
        while (nombreValido && cont < nombre.length) {
            if (nombre.charAt(cont) < "a" || nombre.charAt(cont) > "z") {
                nombreValido=false;
            }
            cont++;
        }

        if(codigoValido && nombreValido){

            let lineas=$("#tabla>tbody>tr");
            let longitud=lineas.length;
            let validar=true;
            let cont2=0;

            while(validar && cont2<longitud){
                let linea=$(lineas).eq(cont2);
                let celdas=$(linea).children();
                if(codigo!=celdas.eq(0).text()){
                    if(codigo < celdas.eq(0).text()){
                        validar=false;
                        $("#tabla>tbody").append("<tr><td>"+codigo+"</td><td>"+nombre+"</td></tr>");
                    }
                }
                else if(codigo==celdas.eq(0).text()){
                    validar=false;
                }
                cont2++;
            }

            if(validar){
                $("#tabla>tbody").prepend("<tr><td>"+codigo+"</td><td>"+nombre+"</td></tr>");
            }


        }
        else{
            $("#error").val("ERROR:codigo se ha repetido");
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
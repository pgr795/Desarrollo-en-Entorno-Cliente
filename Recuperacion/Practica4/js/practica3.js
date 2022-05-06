$(window).on("load",inicio);

function inicio(){
    $("#agregar").on("click",agregar);
    $("#borrar").on("click",borrar);
    $("#modificar").on("click",modificar);
    $("#BorrarFila").on("click",BorrarFila);
    $("#BorrarTodo").on("click",BorrarTodo);
}
//OK
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
                if(parseInt(codigo)!=parseInt(celdas.eq(0).text())){
                    if(parseInt(codigo) < parseInt(celdas.eq(0).text())){
                        validar=false;
                        $(linea).before("<tr><td>"+codigo+"</td><td>"+nombre+"</td></tr>");
                    }
                }
                else if(parseInt(codigo)==parseInt(celdas.eq(0).text())){
                    validar=false;
                    $("#error").val("ERROR: El codigo "+codigo+" esta repetido en la tabla");
                }
                cont2++;
            }

            if(validar){
                $("#tabla>tbody").append("<tr><td>"+codigo+"</td><td>"+nombre+"</td></tr>");
            }
        }
        else{
            $("#error").val("ERROR:codigo o nombre no son validos");
        }
        //añadiremos esos valores a una tabla
    }
    else{
        $("#error").val("ERROR:codigo o nombre estan vacios");
    }
}
 
//OK
function borrar() {
    borrarError();
    let codigo=$("#CodigoTabla").val();
    if(codigo!=""){
        let filas=$("#tabla>tbody>tr");
        let noExiste=true;
        let indice=0;
        while(noExiste && indice<filas.length){
           let fila=$(filas).eq(indice).children();
           let celda=$(fila).eq(0).text();
            if(codigo==celda){
                noExiste=false;
                $(filas).eq(indice).remove();
            }
            indice++;
        }
        if(noExiste){
            $("#error1").val("ERROR: El codigo "+codigo+" no existe en la tabla");
        }
    }
    else{
        $("#error1").val("ERROR:codigo esta vacio");
    }
}

function modificar() {
    borrarError();
    let codigo=$("#CodigoTabla2").val();
    let nombre=$("#NombreTabla").val().toLowerCase();
    
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
       
        //nombre es una cadena de caracteres
        cont = 0;
        while (nombreValido && cont < nombre.length) {
            if (nombre.charAt(cont) < "a" || nombre.charAt(cont) > "z") {
                nombreValido=false;
            }
            cont++;
        }

        if(codigoValido && nombreValido){
            let lineas=$("#tabla>tbody>tr");
            let longitud=lineas.length;
            let noExiste=true;
            let cont2=0;

            while(noExiste && cont2<longitud){
                let linea=$(lineas).eq(cont2);
                let celdas=$(linea).children();
                if(parseInt(codigo)==parseInt(celdas.eq(0).text())){
                    noExiste=false;
                    $(celdas).eq(1).text(nombre);
                }
                cont2++;
            }

            if(noExiste){
                $("#error2").val("ERROR: El codigo "+codigo+" no existe en la tabla");
            }
        }
        else{
            $("#error2").val("ERROR:codigo o nombre no son validos");
        }
    }
    else{
        $("#error2").val("ERROR:codigo o nombre estan vacios");
    }
}

function BorrarFila() {
    borrarError();
    let numero=$("#NumeroFila").val();
    numero=parseInt(numero);
    let filas=$("#tabla>tbody>tr");
    if(numero!=""){
        if(numero<=filas.length){
            $(filas).eq(numero-1).remove();
        }
        else{
            $("#error3").val("ERROR:No existe esta fila"); 
        }
    }
    else{
        $("#error3").val("ERROR:codigo esta vacio");
    }
}

function BorrarTodo() {
    borrarError();
    let filas=$("#tabla>tbody>tr");
    let longitud=filas.length;
    for (let i=0; i < longitud;i++) {
        $(filas).eq(i).remove();
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
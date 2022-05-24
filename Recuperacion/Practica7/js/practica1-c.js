$(window).on("load",inicio)

function inicio() {
    $("#Buscar").on("click",recogerValores);
}

let conexion;

function recogerValores(){
    let vautor=$("#autor").val();
    $("#resultado").load("php/001.php?"+$.param({autor:vautor}),respuesta);
 }

function respuesta(valor){
   $("#Libro").val(valor);
}

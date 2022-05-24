$(window).on("load",inicio)

function inicio() {
    $("#Buscar").on("click",recogerValores);
}

let conexion;

function recogerValores(){
 let vautor=$("#autor").val();
 let dato=$.get("php/001.php",{autor:vautor},respuesta);
}

function respuesta(valor){
   $("#Libro").val(valor);
}

$(window).on("load",inicio)

function inicio() {
    $("#Buscar").on("click",recogerValores);
}

let conexion;

function recogerValores(){
 let vautor=$("#autor").val();
    let configuracion={
        url:"php/001.php",
        data:{autor:vautor},
        success:respuesta
    }
    let dato=$.ajax(configuracion);
 }

function respuesta(valor){
   $("#Libro").val(valor);
}

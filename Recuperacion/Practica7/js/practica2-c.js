$(window).on("load",inicio)

function inicio() {
    $("#calculo").on("click",recogerValores);
}

let conexion;

function recogerValores(){
    let vCaras=$("#caras").val();
    let vVertices=$("#vertices").val();
    let dato=$.get("php/002.php",{caras:vCaras,vertices:vVertices},respuesta);
}

function respuesta(valor){
   $("#aristas").val(valor);
}

$(window).on("load",inicio)

function inicio() {
    $("#calculo").on("click",recogerValores);
}

let conexion;

function recogerValores(){
    let vCaras=$("#caras").val();
    let vVertices=$("#vertices").val();
    let configuracion={
        url:"php/002.php",
        data:{caras:vCaras,vertices:vVertices},
        success:respuesta
    }
    let dato=$.ajax(configuracion);
}

function respuesta(valor){
    let aris=$(valor).find("aristas").eq(0).text();
    let arist=valor;
   $("#aristas").val(aristas);
}

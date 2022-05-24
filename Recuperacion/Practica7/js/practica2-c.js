$(window).on("load",inicio)

function inicio() {
    $("#Buscar").on("click",recogerValores);
}

let conexion;

function recogerValores(){
    let vCaras=$("#caras").val();
    let vVertices=$("#vertices").val();
    let dato=$.post("php/002.php",{caras:vCaras,vertices:vVertices},respuesta);
}

function respuesta(valor){
    let aristas=$(valor).find("aristas").eq(0).text();

   $("#aristas").val(aristas);
}

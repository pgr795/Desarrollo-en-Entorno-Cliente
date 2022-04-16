$(window).on("load",inicio);

function inicio(){ 
    $("#cantabria").on("click",descargaCantabria);
    $("#cordoba").on("click",descargaCordoba);
    $("#segovia").on("click",descargaSegovia);
    $("#sevilla").on("click",descargaSevilla);

    let configuracion = {sucess:muestra};

    function descargaCantabria() {
        let texto="Cantabria.txt";
        proceso(texto);
    }
    function descargaCordoba() {
        let texto="cordoba.txt";
        proceso(texto);
    }
    function descargaSegovia() {
        let texto="segovia.html";
        proceso(texto);
    }
    function descargaSevilla() {
        let texto="sevilla.html";
        proceso(texto);
    }  
}

function proceso(texto){
    let dato=$.ajax("./"+texto, muestra);
}

function muestra(valor){
    $("#contenido").html(valor);
} 


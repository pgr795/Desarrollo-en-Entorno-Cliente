$(window).on("load",inicio);

function inicio(){ 
    $("#cantabria").on("click",descargaCantabria);
    $("#cordoba").on("click",descargaCordoba);
    $("#segovia").on("click",descargaSegovia);
    $("#sevilla").on("click",descargaSevilla);

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
    $("#contenido").load(texto);
}


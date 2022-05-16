$(window).on("load",inicio);

function inicio(){
    $("#alcazar").on("mouseenter",aplicarParrafo);
    $("#alcazar").on("mouseout",quitarParrafo);
    $("#alcazar").on("mouseenter",parrafo);
    $("#medina").on("mouseout",parrafo);
}

function aplicarParrafo(){
    $("#alcazar").addClass("primero");
}

function quitarParrafo(){
    $("#alcazar").removeClass("primero");
}

function parrafo(){
    $("#medina").toggleClass("primero");
}
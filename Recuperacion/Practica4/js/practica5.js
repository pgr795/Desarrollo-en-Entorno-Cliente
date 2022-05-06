$(window).on("load",inicio);

//añadir una clase a un elemento/saber

// .addClass("nombre-clase")
// $("option").addClass("daw");

// quitar una clase a un elemento/s

// .removeClass("nombre-clase")
// $("option").removeClass("daw");

// añade/quita una clase a un elemento/s

// .toggleClass("nombre-clase")
// $("option").toggleClass("daw");


function inicio(){
    $("#alcazar").on("mouseenter",aplicarParrafo);
    $("#alcazar").on("mouseout",quitarParrafo);
    $("#medina").on("mousedown",parrafo);
    //PREGUNTAR
    // $("#alcazar").mouseenter();
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
$(window).on("load",inicio);

function inicio() {
    $("#boton").on("click",proceso);
} 

function proceso(){
    let vnombre=$("#nombre").val();
    let vapellidos=$("#apellidos").val();
    let vmodulo=$("#modulo").val();
    
    let enviar=$.get("PHP/fichero.php?",{nombre:vnombre,apellidos:vapellidos,modulo:vmodulo},muestra);
}
function muestra(valor){
    $("#nota").val(valor);
}



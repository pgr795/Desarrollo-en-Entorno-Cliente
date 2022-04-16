$(window).on("load",inicio);

function inicio() {
    $("#boton").on("click",proceso);
} 

function proceso(){
    let vnombre=$("#nombre").val();
    let vapellidos=$("#apellidos").val();
    let vmodulo=$("#modulo").val();
    let configuracion={
        method:"get",
        data:{nombre:vnombre,apellidos:vapellidos,modulo:vmodulo},
        success:muestra
    }
    let enviar = $.ajax("PHP/fichero.php",configuracion);
}
function muestra(valor){
    $("#nota").val(valor);
}



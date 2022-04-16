$(window).on("load",inicio);

function inicio() {
    $("#boton").on("click",proceso);
} 

function proceso(){
    let nombre=$("#nombre").val();
    let apellidos=$("#apellidos").val();
    let modulo=$("#modulo").val();
    
    $("#nota").load("PHP/fichero.php?nombre="+nombre+"&apellidos="+apellidos+"&modulo="+modulo);
}

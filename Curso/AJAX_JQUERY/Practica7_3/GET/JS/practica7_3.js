$(window).on("load",inicio);

function inicio() {
    $("#boton").on("click",proceso);
} 

function proceso(){
    let vnombre=$("#nombre").val();
    let vapellidos=$("#apellidos").val();
    let vmodulo=$("#modulo").val();
    let vnotas=$("#notas").val();
   
    $("#valorDevuelto").load("PHP/fichero.php",{nombre:vnombre,apellidos:vapellidos,modulo:vmodulo,
    notas:vnotas},muestra);
}

function muestra(valor){
    $("#nota").val(valor);
}

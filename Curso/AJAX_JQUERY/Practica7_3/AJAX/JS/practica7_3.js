$(window).on("load",inicio);

function inicio() {
    $("#boton").on("click",proceso);
} 

function proceso(){
    let vnombre=$("#nombre").val();
    let vapellidos=$("#apellidos").val();
    let vmodulo=$("#modulo").val();
    let vnotas=$("#notas").val();
    if (vnombre == "" || vapellidos == "" || vmodulo == "" || vnotas == "") {
        alert("Deben rellenarse los campos obligatorios (*)");
    }
	let configuracion = {	method:"post",
							data:{nombre:vnombre,apellidos:vapellidos,modulo:vmodulo,notas:vnotas},
							success:muestra
                        }

    let enviar = $.ajax("PHP/fichero.php",configuracion);
}

function muestra(valor){
    $("#nota").val(valor);
}

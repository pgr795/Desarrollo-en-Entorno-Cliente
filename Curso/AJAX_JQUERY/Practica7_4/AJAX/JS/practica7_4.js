$(window).on("load",inicio);

function inicio() {
  $("#boton").on("click",proceso);
} 

function proceso(){

    var datos =new FormData();
    let nombre=$("#nombre").val();
    let apellidos=$("#apellidos").val();
    let trabajo=$("#trabajo").val();

    if(nombre != "" && apellidos != "" && trabajo !=""){
        datos.append("nombre",nombre);
        datos.append("apellidos",apellidos);
        datos.append("trabajo",trabajo);
    }

    let configura={
		  method:"POST",
		  data:datos,
      success:procesar,
      contentType:false,
      processData:false
	}
  
  $.ajax("PHP/fichero.php", configura);

}

function procesar(resultado){
  $("#sueldo").val(resultado);
}

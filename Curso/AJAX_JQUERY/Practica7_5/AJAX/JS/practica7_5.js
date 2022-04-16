$(window).on("load",inicio);

function inicio() {
    marcas();
    $("#marca").on("change",recogerDatos);
    $("#medidas").on("change",recogerDatos);
   
} 
function marcas(){
  let configuracion ={
    method:"get",
    dataType:"xml",
    success:mostrarSelect
  }
    let datos=$.ajax("PHP/fichero.php",configuracion);
}

function mostrarSelect(datos){
  	let marcas = $(datos).find("marcas");
	let dimensiones = $(datos).find("dimension");

	for (let i = 0; i < marcas.length; i++) {
		$("#marca").append("<option>"+$(marcas).eq(i).text()+"</option>");
	}

	for (let i = 0; i < dimensiones.length; i++) {
		$("#medidas").append("<option>"+$(dimensiones).eq(i).text()+"</option>");
	}
}


function recogerDatos(){
    let marcaSelect=$("#marca").val();
    let medidaSelect=$("#medidas").val();
    let cadenaxml="<lista><marcatv2><marca>"+marcaSelect+"</marca><dimension>"+medidaSelect+"</dimension></marcatv2></lista>";
   
    let estado={
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		dataType:"xml",
		data:cadenaxml,
		success:procesamiento2
	}
    $.ajax("PHP/fichero2.php",estado);
}

function procesamiento2(datos){
	let sueldo = $(datos).find("precio").eq(0).text();
	$("#precio").val(sueldo);
}   

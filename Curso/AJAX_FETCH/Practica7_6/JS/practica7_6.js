if (document.addEventListener)
	window.addEventListener("load",inicio);
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
	let opcion=document.getElementById("marca");
    let opcion2=document.getElementById("electro");

    if (document.addEventListener){
		opcion.addEventListener("change",recogerDatos);//se carga los elementos
        opcion2.addEventListener("change",recogerDatos);//seleccionas el elemento
    }
	else if (document.attachEvent){
        opcion.addEventListener("onchange",recogerDatos);
        opcion.addEventListener("onchange",recogerDatos);
    } 
    marcas();
} 
function marcas(){
    let configuracion={method:"GET"};
	fetch("PHP/fichero.php", configuracion)
		.then(comienzo)
		.catch(errores);
}
function recogerDatos(){
    let marcaSelect=document.getElementById("marca").value;
    let electroSelect=document.getElementById("electro").value;
    
    let datos=new Object();
    datos.marca1=marcaSelect;
    datos.electro=electroSelect;
	
    let datosJSON=JSON.stringify(datos);

    let configura={
		method:"POST",
		headers:{"Content-Type":"application/json"},
		body:datosJSON
	}
    fetch("PHP/fichero2.php", configura)
    .then(comienzo2)
    .catch(errores2);
}
function comienzo(respuesta){
	if (respuesta.ok)
		respuesta.text().then(procesamiento);
}
function comienzo2(respuesta){
	if (respuesta.ok)
		respuesta.text().then(procesamiento2);
}
function procesamiento(dato){
    let datos=JSON.parse(dato);
    let padreMarca=document.getElementById("marca");
    let elementosMarca=document.querySelector("#marca").length;

    if(elementosMarca==0){
        for (let i = 0; i < datos.length; i++) {
                let opciones=document.createElement("option");
                let texto=document.createTextNode(datos[i]);
                opciones.append(texto);
                padreMarca.append(opciones); 
           }
    }
}
function procesamiento2(dato){
    let datos=JSON.parse(dato);   
    document.getElementById("ancho").value=datos.ancho;
    document.getElementById("alto").value=datos.alto;
    document.getElementById("fondo").value=datos.fondo;
}
function errores(){
	alert("error en la conexión:Marcas()");
}
function errores2(){
	alert("error en la conexión:RecogerDatos()");
}

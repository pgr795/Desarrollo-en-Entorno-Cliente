if (document.addEventListener)
	window.addEventListener("load",inicio);
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
	let opcion=document.getElementById("marca");
    let opcion2=document.getElementById("medidas");
  
    if (document.addEventListener){
		opcion.addEventListener("change",recogerDatos);
        opcion2.addEventListener("change",recogerDatos);
    }
	else if (document.attachEvent){
        opcion.addEventListener("onchange",recogerDatos);
        opcion2.addEventListener("onchange",recogerDatos);
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
    let medidaSelect=document.getElementById("medidas").value;
    let cadenaxml="<lista><marcatv2><marca>"+marcaSelect+"</marca><dimension>"+medidaSelect+"</dimension></marcatv2></lista>";
   
    let estado={
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		body:cadenaxml
	}
	fetch("PHP/fichero.php", estado)
		.then(procesamiento2)
		.catch(errores);
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
	let parsar=new DOMParser();
    let datos=parsar.parseFromString(dato,"application/xml");
    let padreMarca=document.getElementById("marca");
    
    let aux2=datos.getElementsByTagName("marcas");
    let elementosMarca=document.querySelectorAll("marcas").length;

    if(elementosMarca==0){
        for (let i = 0; i < aux2.length; i++) {
                let opciones=document.createElement("option");
                let texto=document.createTextNode(aux2.item(i).textContent);
                opciones.append(texto);
                padreMarca.append(opciones); 
           }
    }

    let padreMedida=document.getElementById("medidas");
    let aux3=datos.getElementsByTagName("dimension");
    let elementosMedida=document.querySelectorAll("medidas").length;
    if(elementosMedida==0){
        for (let i = 0; i < aux3.length; i++) {
                let opciones=document.createElement("option");
                let texto=document.createTextNode(aux3.item(i).textContent);
                opciones.append(texto);
                padreMedida.append(opciones); 
           }
    }
}
function procesamiento2(dato){
	let parsar=new DOMParser();
    let datos=parsar.parseFromString(dato,"application/xml");
    let precio=datos.getElementsByTagName("precio").item(0).textContent;
    document.getElementById("precio").value=precio;
}   
function errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").textContent="error en la conexión con el servidor"
}
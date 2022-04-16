if (document.addEventListener)
	window.addEventListener("load",inicio);
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
	let boton=document.getElementById("boton");
    if (document.addEventListener){
		boton.addEventListener("click",proceso);  
    }
	else if (document.attachEvent){
		boton.attachEvent("onclick",proceso);
    } 
} 

function proceso(){
    let nombre=document.getElementById("nombre").value;
    let apellidos=document.getElementById("apellidos").value;
    let modulo=document.getElementById("modulo").value;

    let configuracion={method:"GET"};

    fetch("PHP/fichero.php?nombre="+nombre+"&apellidos="+apellidos
    +"&modulo="+modulo,configuracion)
    .then(comienzo)
    .catch(errores);
}

function comienzo(respuesta){
	if (respuesta.ok)
		respuesta.text().then(procesamiento);
}

function procesamiento(dato){
	document.getElementById("notas").value=dato;	
}

function errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").textContent="error en la conexión con el servidor"
}

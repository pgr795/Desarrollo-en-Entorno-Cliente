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

    var datos =new FormData();
    let nombre=document.getElementById("nombre").value;
    let apellidos=document.getElementById("apellidos").value;
    let trabajo=document.getElementById("trabajo").value;

    if(nombre != "" && apellidos != "" && trabajo !=""){
        datos.append("nombre",nombre);
        datos.append("apellidos",apellidos);
        datos.append("trabajo",trabajo);
    }

    let configura={
		method:"POST",
		body:datos
	}

    fetch("PHP/fichero.php",configura)
    .then(tratar)
    .catch(errores);
}

function tratar(respuesta){
	if (respuesta.ok)
		respuesta.text().then(procesar);
}

function procesar(resultado){
	document.getElementById("sueldo").value=resultado;	
}

function errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").textContent="error en la conexión con el servidor"
}


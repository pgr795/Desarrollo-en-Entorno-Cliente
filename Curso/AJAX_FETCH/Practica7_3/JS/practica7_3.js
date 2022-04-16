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
    let notas=document.getElementById("notas").value;
   
    let estado={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:"nombre="+nombre+"&apellidos="+apellidos+"&modulo="+modulo+"&notas="+notas
    }
    fetch("PHP/fichero.php",estado)
    .then(inicial)
    .catch(errores);

}
function inicial(valor){
    if(valor.ok)
    valor.text().then(procesar);
}

function procesar(dato){
    document.getElementById("nota").value=dato;
}

function errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").textContent="error en la conexión con el servidor"
}

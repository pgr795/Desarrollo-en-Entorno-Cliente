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

let peticion;

function proceso(){
    let nombre=document.getElementById("nombre").value;
    let apellidos=document.getElementById("apellidos").value;
    let modulo=document.getElementById("modulo").value;
    let notas=document.getElementById("notas").value;
   
	// primer paso crear objeto
    if(window.XMLHttpRequest){
        peticion=new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        peticion=new ActiveXObject("Microsoft.XMLHTTP");
    }

    // segundo paso asignar evento readystatechange
	if (document.addEventListener){
        peticion.addEventListener("readystatechange",procesar);
    }	
	else if (document.attachEvent){
		peticion.attachEvent("onreadystatechange",procesar);
    }

    peticion.open("POST","PHP/fichero.php");

    peticion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    peticion.send("nombre="+nombre+"&apellidos="+apellidos+"&modulo="+modulo+"&notas="+notas);

}

function procesar(){
    if (peticion.readyState==4)
        if (peticion.status==200){
           document.getElementById("nota").value=peticion.responseText;
        }
}
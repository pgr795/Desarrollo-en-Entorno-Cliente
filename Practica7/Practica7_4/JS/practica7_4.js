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

    var datos =new FormData();
    let nombre=document.getElementById("nombre").value;
    let apellidos=document.getElementById("apellidos").value;
    let trabajo=document.getElementById("trabajo").value;

    if(nombre != "" && apellidos != "" && trabajo !=""){
        datos.append("nombre",nombre);
        datos.append("apellidos",apellidos);
        datos.append("trabajo",trabajo);
    }

    if(window.XMLHttpRequest){
        peticion=new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        peticion=new ActiveXObject("Microsoft.XMLHTTP");
    }


	if (document.addEventListener){
        peticion.addEventListener("readystatechange",procesar);
    }	
	else if (document.attachEvent){
		peticion.attachEvent("onreadystatechange",procesar);
    }

    peticion.open("POST","PHP/fichero.php");

    peticion.send(datos);

}

function procesar(){
    if (peticion.readyState==4)
        if (peticion.status==200){
            let aux=peticion;
            console.log(aux);
           document.getElementById("sueldo").value=peticion.responseText;
        }
}


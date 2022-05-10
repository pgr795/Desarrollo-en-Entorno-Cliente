if(document.addEventListener)
    window.addEventListener("load",inicio)
else if(document.attachEvent)
    window.attachEvent("onload",inicio);

function inicio() {
    let libro=document.getElementById("autor");
    if(document.addEventListener)
        libro.addEventListener("click",funcion)
    else if (document.attachEvent)
		conexion.attachEvent("onclick",funcion);
}

let conexion;

function funcion(){
    let vautor=document.getElementById("autor").value;

    if(window.XMLHttpRequest)
        conexion=new XMLHttpRequest()
    else if(window.ActiveXObject)
        conexion=new ActiveXObject("Microsoft.XMLHTTP");

    if(document.addEventListener)
        conexion.addEventListener("readystatechange",procesar)
    else if (document.attachEvent)
        conexion.attachEvent("onreadystatechange",procesar);

    conexion.open("GET","php/001.php?autor="+vautor); 

    conexion.send(null);
}

function procesar() {
    if(conexion.readyState==4)
        if(conexion.status==200){
            let aux=conexion.responseText;
            document.getElementById("Libro").value=aux;
        }
}
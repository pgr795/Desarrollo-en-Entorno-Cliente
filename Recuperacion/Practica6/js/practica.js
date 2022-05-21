if(document.addEventListener)
    window.addEventListener("load",inicio)
else if(document.attachEvent)
    window.attachEvent("onload",inicio);

function inicio() {
    let libro=document.getElementById("Buscar");
    if(document.addEventListener)
        libro.addEventListener("click",recogerValores)
    else if (document.attachEvent)
		libro.attachEvent("onclick",recogerValores);
}

let conexion;

function recogerValores(){
    let vautor=document.getElementById("autor").value;
    let configuracion={method:"GET"};
    fetch("php/001.php?autor="+vautor,configuracion)
    .then(correcto)
    .catch(error);
}

function correcto(respuesta){
    if(respuesta.ok)
    respuesta.text().then(procesar);
}

function error(){
    alert("Error en la conexion con el servidor");
    document.getElementById("Libro").value="Error en la conexion con el servidor";
}

function procesar(valor){
    document.getElementById("Libro").value=valor;
}

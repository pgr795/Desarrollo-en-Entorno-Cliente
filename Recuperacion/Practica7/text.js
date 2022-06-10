//Javascript
window.onload = inicio;

function inicio() {
    document.formulario.onsubmit = validar;
}

function validar() {}

//DOM
if (document.addEventListener) {
    window.addEventListener("load", inicio);
} else if (document.attachEvent) {
    window.attachEvent("onload", inicio);
}

function inicio() {
    let boton = document.getElementById("anyadir");
    if (document.addEventListener) {
        boton.addEventListener("load", agregar);
    } else if (document.attachEvent) {
        boton.attachEvent("onload", agregar);
    }
}

function agregar() {}

//JQUERY
$(window).on("load", inicio);

function inicio() {
    $("Selector").on("click", agregar);
}

//AJAX PURO
if (document.addEventListener) {
    window.addEventListener("load", inicio);
} else if (document.attachEvent) {
    window.attachEvent("onload", inicio);
}

function inicio() {
    let boton = document.getElementById("anyadir");
    if (document.addEventListener) {
        boton.addEventListener("click", recogerValores);
    } else if (document.attachEvent) {
        boton.attachEvent("onclick", recogerValores);
    }
}

let conexion;

function recogerValores() {
    if (window.XMLHttpRequest) 
        conexion = new XMLHttpRequest();
    else if (window.ActiveXObject)
        conexion = new ActiveXObject("Microsoft.XMLHTTP");

    if (document.addEventListener)
        conexion.addEventListener("readystatechange", procesar);
    else if (document.attachEvent)
        conexion.attachEvent("onreadystatechange", procesar);

    conexion.open("GET", "php/001.php?autor=" + valor);
    conexion.setRequestHeader("Content-Type","application/json");
    conexion.send(null);
}
function procesar() {
    if(conexion.readyState==4)
        if(conexion.status==200){
            // let respuesta=conexion.responseText;
            // let respuesta=conexion.responseXML;
        }
}

//AJAX FETCH
if (document.addEventListener) {
    window.addEventListener("load", inicio);
} else if (document.attachEvent) {
    window.attachEvent("onload", inicio);
}
function inicio() {
    let boton = document.getElementById("anyadir");
    if (document.addEventListener) {
        boton.addEventListener("load", recogerValores);
    } else if (document.attachEvent) {
        boton.attachEvent("onload", recogerValores);
    }
}
function recogerValores() {
    // let configuracion={method:"GET"};
    // let configuracion={
    //     method:"POST",
    //     body:objetoData
    // } 
    // let configuracion={
    //     method:"POST",
    //     headers:{"Content-Type":"application/x-www-form-urlencoded"},
    //     body:cadenaXML
    // }
    fetch("php/001.php?autor="+vautor,configuracion)
    .then(correcto)
    .catch(error);
}
function correcto(respuesta) {
    if(respuesta.ok)
    respuesta.text().then(procesar);
}
function procesar(valor) {
    document.getElementById("").value=valor;
}
function error() {
    alert("Error en la conexion con el servidor");
    document.getElementById("error").value="Error en la conexion con el servidor";
}

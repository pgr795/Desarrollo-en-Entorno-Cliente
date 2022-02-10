if (document.addEventListener)
	window.addEventListener("load",inicio);
else if (document.attachEvent)
	window.attachEvent("onload",inicio);


function inicio(){
    let cantabria=document.getElementById("cantabria");
    let cordoba=document.getElementById("cordoba");
    let segovia=document.getElementById("segovia");
    let sevilla=document.getElementById("sevilla");
	if (document.addEventListener){
        cantabria.addEventListener("click",descargaCantabria);
        cordoba.addEventListener("click",descargaCordoba);
        segovia.addEventListener("click",descargaSegovia);
        sevilla.addEventListener("click",descargaSevilla);
    }
	else if (document.attachEvent){
		miboton.attachEvent("onclick",proceso);
    }
    function descargaCantabria() {
        let texto="Cantabria.txt";
        proceso(texto);
    }
    function descargaCordoba() {
        let texto="cordoba.txt";
        proceso(texto);
    }
    function descargaSegovia() {
        let texto="segovia.html";
        proceso(texto);
    }
    function descargaSevilla() {
        let texto="sevilla.html";
        proceso(texto);
    }  
}

function proceso(texto){
    fetch(texto)
    .then(inicial)
    .catch(errores);
}

function inicial(response){
	if (response.ok)
		response.text().then(mostrar);
}

function mostrar(dato){
    document.getElementById("contenido").innerHTML=dato;
}

function errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").textContent="error en la conexión con el servidor"
}


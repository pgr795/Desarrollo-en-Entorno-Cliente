if (document.addEventListener)
	window.addEventListener("load",inicio);
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
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
		cantabria.attachEvent("onclick",descargaCantabria);
        cordoba.attachEvent("onclick",descargaCordoba);
        segovia.attachEvent("onclick",descargaSegovia);
        sevilla.attachEvent("onclick",descargaSevilla); 
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

let peticion;

function proceso(texto){
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

    peticion.open("GET","./"+texto);
    peticion.send(null);

}

function procesar(){
    if (peticion.readyState==4)
        if (peticion.status==200){
           document.getElementById("contenido").innerHTML= peticion.responseText;
        }
}
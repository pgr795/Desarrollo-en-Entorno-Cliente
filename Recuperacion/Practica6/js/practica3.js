if(document.addEventListener)
    window.addEventListener("load",inicio)
else if(document.attachEvent)
    window.attachEvent("onload",inicio);

function inicio() {
    let calculo=document.getElementById("calculo");
    if(document.addEventListener)
        calculo.addEventListener("click",recogerValores)
    else if (document.attachEvent)
		calculo.attachEvent("onclick",recogerValores);
}

let conexion;

function recogerValores(){
    let vCaras=document.getElementById("caras").value;
    let vVertices=document.getElementById("vertices").value; 
    if(vCaras!="" && vVertices!=""){
        let carasValido=true;
        let verticesValido=true;
        let cont = 0;
        //caras es numero
        while (carasValido && cont < vCaras.length) {
            if (vCaras.charAt(cont) < "0" || vCaras.charAt(cont) > "9") {
                carasValido=false;
            }
            cont++;
        }
        
        cont=0;
         //vertice es numero
        while (verticesValido && cont < vVertices.length) {
            if (vVertices.charAt(cont) < "0" || vVertices.charAt(cont) > "9") {
                verticesValido=false;
            }
            cont++;
        }

        //Se crea el objeto si todo es valido
        if(carasValido && verticesValido){
            
            let objetoData=new FormData();
            objetoData.append("caras",vCaras);
            objetoData.append("vertices",vVertices);

            let configuracion={
                method:"POST",
                body:objetoData
            }
            fetch("php/003.php",configuracion)
            .then(correcto)
            .catch(error);
        }
        else{
             document.getElementById("error").value="datos mal puestos";
        }
    }
    else{
        document.getElementById("error").value="esta vacio";
    } 
}
function correcto(respuesta){
    if(respuesta.ok)
    respuesta.text().then(procesar);
}
function error(){
    alert("Error en la conexion con el servidor");
    document.getElementById("error").value="Error en la conexion con el servidor";
}
function procesar(valor){
    document.getElementById("aristas").value=valor;
}
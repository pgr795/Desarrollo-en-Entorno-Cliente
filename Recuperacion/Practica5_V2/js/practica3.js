if(document.addEventListener)
    window.addEventListener("load",inicio)
else if(document.attachEvent)
    window.attachEvent("onload",inicio);

function inicio() {
    let calculo=document.getElementById("calculo");
    if(document.addEventListener)
        calculo.addEventListener("click",funcion)
    else if (document.attachEvent)
		calculo.attachEvent("onclick",funcion);
}

let conexion;
function funcion(){
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
        	if (window.XMLHttpRequest)
                conexion=new XMLHttpRequest()
	        else if (window.ActiveXObject)
                conexion=new ActiveXObject("Microsoft.XMLHTTP");
        
            if (document.addEventListener)
                conexion.addEventListener("readystatechange",procesar)
            else if (document.attachEvent)
                conexion.attachEvent("onreadystatechange",procesar);
        
            conexion.open("POST","php/003.php"); 
        
            let objetoData=new FormData();
            objetoData.append("caras",vCaras);
            objetoData.append("vertices",vVertices);
            conexion.send(objetoData);
        }
        else{
             document.getElementById("error").value="datos mal puestos";
        }
    }
    else{
        document.getElementById("error").value="esta vacio";
    } 
}

function procesar() {
    if(conexion.readyState==4)
        if(conexion.status==200){
            document.getElementById("aristas").value=conexion.responseText;
        }
}
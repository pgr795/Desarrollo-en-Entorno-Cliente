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
    let vcaras=document.getElementById("caras").value;
    let vVertices=document.getElementById("vertices").value;
    if(vcaras!="" && vVertices!=""){
        let carasValido=true;
        let verticesValido=true;
        let cont = 0;

        //caras es numero
        while (carasValido && cont < vcaras.length) {
            if (vcaras.charAt(cont) < "0" || vcaras.charAt(cont) > "9") {
                carasValido=false;
            }
            cont++;
        }
        
        cont=0;
         //vertice es numeros
        while (verticesValido && cont < vVertices.length) {
            if (vVertices.charAt(cont) < "0" || vVertices.charAt(cont) > "9") {
                verticesValido=false;
            }
            cont++;
        }
        if(carasValido && verticesValido){
            var aux={
                caras:vcaras,
                vertices:vVertices
            }
        }
        else{
             document.getElementById("error").value="codigo se ha repetido";
        }
    }
    else{
        document.getElementById("error").value="codigo esta vacio";
    }
    

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
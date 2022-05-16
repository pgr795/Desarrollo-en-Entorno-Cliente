if(document.addEventListener)
    window.addEventListener("load",inicio)
else if(document.attachEvent)
    window.attachEvent("onload",inicio);

function inicio() {
    let boton=document.getElementById("Regiones");
    if(document.addEventListener)
        boton.addEventListener("click",funcion)
    else if (document.attachEvent)
        boton.attachEvent("onclick",funcion);
}

let conexion;

function funcion(){
    borrarProvincias();
    if(window.XMLHttpRequest)
        conexion=new XMLHttpRequest()
    else if(window.ActiveXObject)
        conexion=new ActiveXObject("Microsoft.XMLHTTP");

    if(document.addEventListener)
        conexion.addEventListener("readystatechange",procesar)
    else if (document.attachEvent)
        conexion.attachEvent("onreadystatechange",procesar);

    conexion.open("POST","php/004.php"); 

	conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    

    let vpais=document.getElementById("pais").selectedOptions;
    let cadenaXML;
    let cadenaXML1="<continente><paises>";
    let cadenaXML2="";
    let cadenaXML3="</paises></continente>"; 
    
    for (let i = 0; i < vpais.length; i++) {
        let pais=vpais.item(i).value;
        cadenaXML2+="<pais>"+pais+"</pais>";
    }
    cadenaXML=cadenaXML1+cadenaXML2+cadenaXML3;
    conexion.send(cadenaXML);
}

function procesar() {
    if(conexion.readyState==4)
        if(conexion.status==200){
            let respuesta=conexion.responseXML;

            let vRegiones=respuesta.getElementsByTagName("pais");
            let regiones=document.getElementById("region");
            let options=regiones.getElementsByTagName("option");
                
            for (let i = 0; i < vRegiones.length; i++) {
                    // proceso de añadir ordenado.
                    let valorRegion=vRegiones.item(i).textContent;
                    let longitud = options.length;
                    let cont= 0;
                    let valido = true;
                    while (valido && cont < longitud) {
                            if (valorRegion < options.item(cont).textContent) {
                                    valido = false;
                                    let nuevaOptions = document.createElement("option");
                                    let texto = document.createTextNode(valorRegion);
                                    nuevaOptions.appendChild(texto);
                                    regiones.insertBefore(nuevaOptions, options.item(cont));
                            }
                            cont++;
                    }
                    if (valido) {
                            let nuevaOptions = document.createElement("option");
                            let texto=document.createTextNode(valorRegion);
                            nuevaOptions.appendChild(texto);
                            regiones.append(nuevaOptions);
                    }
            }
        }
}

function borrarProvincias() {
    let provincias = document.getElementById("region");
    let longitud = provincias.length
    if (longitud != 0) {
            for (let i = 0; i < longitud; i++) {
                    provincias.item(0).remove();
            }
    }
}
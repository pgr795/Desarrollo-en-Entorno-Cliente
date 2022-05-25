$(window).on("load",inicio)

function inicio() {
    $("#Regiones").on("click",recogerValores);
}

function recogerValores(){
    borrarProvincias();
    let vpais=$("#pais").val();
    let cadenaXML;
    let cadenaXML1="<continente><paises>";
    let cadenaXML2="";
    let cadenaXML3="</paises></continente>"; 
    
    for (let i = 0; i < $(vpais).length; i++) {
        let pais=$(vpais).eq(i).text();
        cadenaXML2+="<pais>"+pais+"</pais>";
    }
    cadenaXML=cadenaXML1+cadenaXML2+cadenaXML3;

    let configuracion={
        url:"php/004.php",
        data:cadenaXML,
        datatype:"xml",
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        success:respuestaCorrecta,
        error:respuestaError,
      
    }
    
    $.ajax(configuracion);
}

function respuestaCorrecta(valor){

            let respuesta=valor;
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

function errores(){
    alert("Error en la conexion con el servidor");
    document.getElementById("error").value="Error en la conexion con el servidor";
}

function procesar(valor){
         
}

function borrarProvincias() {
    let provincias = document.getElementById("region");
    let longitud = provincias.length
    if (longitud != 0) {
        for (let i = provincias.length-1; i >=0; i--){
            provincias.item(0).remove();
        }
    }
}


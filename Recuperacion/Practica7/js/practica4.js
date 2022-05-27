$(window).on("load",inicio)

function inicio() {
    $("#Regiones").on("click",recogerValores);
}

function recogerValores(){
    borrarProvincias();
    let vpais=$("#pais option:selected");
    let cadenaXML;
    let cadenaXML1="<continente><paises>";
    let cadenaXML2="";
    let cadenaXML3="</paises></continente>"; 
    
    for (let i = 0; i < $(vpais).length; i++) {
        let pais=$(vpais).eq(i).val();
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
            let vRegiones=$(respuesta).find("pais");
       
            for (let i = 0; i < vRegiones.length; i++) {
                    // proceso de añadir ordenado.
                    let regiones=$("#region");
                    let options=$(regiones).find("option");
                    let valorRegion=$(vRegiones).eq(i).text();
                    let longitud = $("#region").find("option").length;
                    let cont= 0;
                    let valido = true;
                    while (valido && cont < longitud) {
                        let valorRegion=$(vRegiones).eq(i).text();
                            if (valorRegion < $(options).eq(cont).val()) {
                                    valido = false;
                                    $(options).eq(cont).before("<option>"+valorRegion+"</option>");
                            }
                            cont++;
                    }
                    if (valido) {
                        let nuevaOptions = $("<option>"+valorRegion+"</option>");
                        $(regiones).append(nuevaOptions);
                }
            }
}

function respuestaError(){
    alert("Error en la conexion con el servidor");
    $("#error").val("Error en la conexion con el servidor"); 
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


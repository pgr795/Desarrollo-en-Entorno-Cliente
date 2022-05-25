$(window).on("load",inicio)

function inicio() {
    $("#calculo").on("click",recogerValores);
}

function recogerValores(){
    BorrarCampoError();
    let vCaras=$("#caras").val();
    let vVertices=$("#vertices").val();
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
                url:"php/003.php",
                data:objetoData,
                method:"POST",
                success:respuestaCorrecta,
                error:respuestaError,
                contentType:false,
                processData:false
            }
            $.ajax(configuracion);
        }
        else{
            $("#error").val("Datos mal puestos"); 
        }
    }
    else{
        $("#error").val("Esta vacio"); 
    } 
}
function respuestaCorrecta(valor){
    $("#aristas").val(valor);
}
function respuestaError(){
    alert("Error en la conexion con el servidor");
    $("#error").val("Error en la conexion con el servidor"); 
}

function BorrarCampoError(){
    $("#error").val(""); 
}
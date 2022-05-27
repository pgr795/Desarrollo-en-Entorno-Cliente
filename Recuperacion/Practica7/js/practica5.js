$(window).on("load",inicio)

function inicio() {
    BorrarCampoError();
    $("#calculo").on("click",recogerValores);
}


function recogerValores(){
    let vnumero1=$("#caja1").val();
    let vnumero2=$("#caja2").val();
    let vnumero3=$("#caja3").val();

    if(vnumero1!="" && vnumero2!="" && vnumero3!="" ){
        let numero1Valido=true;
        let numero2Valido=true;
        let numero3Valido=true;
        let cont = 0;
        //numero1 es numero
        numero1Valido=comprobarNumero(numero1Valido,vnumero1);
        numero2Valido=comprobarNumero(numero2Valido,vnumero2);
        numero3Valido=comprobarNumero(numero2Valido,vnumero3);

        //Se crea el objeto si todo es valido
        if(numero1Valido && numero2Valido && numero3Valido){
            vnumero1=parseInt(vnumero1,10);
            vnumero2=parseInt(vnumero2,10); 
            vnumero3=parseInt(vnumero3,10); 
            
            var datos={
                numero1:vnumero1,
                numero2:vnumero2,
                numero3:vnumero3
            }

            let datosJSON=JSON.stringify(datos);

            let configuracion={
                url:"php/005.php",
                data:datosJSON,
                datatype:"json",
                method:"POST",
                headers:{"Content-Type":"application/json"},
                success:respuestaCorrecta,
                error:respuestaError
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
    let respuesta=JSON.parse(valor);
    let x=respuesta.x;
    let y=respuesta.y;
    $("#solucion1").val(x);
    $("#solucion2").val(y);

}
function respuestaError(){
    alert("Error en la conexion con el servidor");
    document.getElementById("error").value="Error en la conexion con el servidor";
}
function BorrarCampoError(){
    document.getElementById("error").value="";
}
function comprobarNumero(numeroValido,numero){
    let cont=0;
    while (numeroValido && cont < numero.length) {
        if (numero.charAt(cont) < "0" || numero.charAt(cont) > "9") {
            numeroValido=false;
        }
        cont++;
    }
    return numeroValido;
}

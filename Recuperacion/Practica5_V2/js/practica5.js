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
function funcion(){
    let vnumero1=document.getElementById("caja1").value;
    let vnumero2=document.getElementById("caja2").value;
    let vnumero3=document.getElementById("caja3").value; 
    let x;
    let y;
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
            vnumero1=parseInt(document.getElementById("caja1").value,10);
            vnumero2=parseInt(document.getElementById("caja2").value,10); 
            vnumero3=parseInt(document.getElementById("caja3").value,10); 
            
            if (window.XMLHttpRequest)
                    conexion=new XMLHttpRequest()
                else if (window.ActiveXObject)
                    conexion=new ActiveXObject("Microsoft.XMLHTTP");
            
                if (document.addEventListener)
                    conexion.addEventListener("readystatechange",procesar)
                else if (document.attachEvent)
                    conexion.attachEvent("onreadystatechange",procesar);
            
                conexion.open("POST","php/005.php"); 
            
                conexion.setRequestHeader("Content-Type","application/json");

                var datos={
                    numero1:vnumero1,
                    numero2:vnumero2,
                    numero3:vnumero3
                 };

                let datosJson=JSON.stringify(datos);

                conexion.send(datosJson);
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
            let respuesta=JSON.parse(conexion.responseText);
            let x=respuesta.x;
            let y=respuesta.y;
            document.getElementById("solucion1").value=x;
            document.getElementById("solucion2").value=y;
        }
}
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
    let numero1=parseInt(document.getElementById("caja1").value,10);
    let numero2=parseInt(document.getElementById("caja2").value,10); 
    let numero3=parseInt(document.getElementById("caja3").value,10); 
    let x;
    let y;
    if(numero1!="" && numero2!="" && numero3!="" ){
        let numero1Valido=true;
        let numero2Valido=true;
        let numero3Valido=true;
        let cont = 0;
        //numero1 es numero
        while (numero1Valido && cont < numero1.length) {
            if (numero1.charAt(cont) < "0" || numero1.charAt(cont) > "9") {
                numero1Valido=false;
            }
            cont++;
        }
        
        cont=0;
         //numero2 es numero
        while (numero2Valido && cont < numero2.length) {
            if (numero2.charAt(cont) < "0" || numero2.charAt(cont) > "9") {
                numero2Valido=false;
            }
            cont++;
        }

        cont=0;
        //numero3 es numero
        while (numero3Valido && cont < numero3.length) {
           if (numero3.charAt(cont) < "0" || numero3.charAt(cont) > "9") {
                numero3Valido=false;
           }
           cont++;
        }

        //Se crea el objeto si todo es valido
        if(numero1Valido && numero2Valido && numero3Valido){
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

                let datos=new Object();
                datos.numero1=numero1;
                datos.numero2=numero2;
                datos.numero3=numero3;

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
            document.getElementById("solucion1").value="";
            document.getElementById("solucion2").value="";
            let respuesta=JSON.parse(conexion.responseText);
            let rCompleja=respuesta.rCompleja;
            let x=respuesta.x;
            let y=respuesta.y;

            if(x!=undefined && y!=undefined){
                document.getElementById("solucion1").value=x;
                document.getElementById("solucion2").value=y;
            }
            else if(x!=undefined){
                document.getElementById("solucion1").value=x;
            }
            else if(rCompleja!=undefined){
                document.getElementById("solucion1").value=rCompleja;
            }
        }
}
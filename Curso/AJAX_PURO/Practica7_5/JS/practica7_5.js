if (document.addEventListener)
	window.addEventListener("load",inicio);
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
	let opcion=document.getElementById("marca");
    let opcion2=document.getElementById("medidas");
  
    if (document.addEventListener){
		opcion.addEventListener("change",recogerDatos);
        opcion2.addEventListener("change",recogerDatos);
    }
	else if (document.attachEvent){
        opcion.addEventListener("onchange",recogerDatos);
        opcion2.addEventListener("onchange",recogerDatos);
    } 
    marcas();
} 

let peticion;

function marcas(){
    if(window.XMLHttpRequest){
        peticion=new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        peticion=new ActiveXObject("Microsoft.XMLHTTP");
    }

	if (document.addEventListener){
        peticion.addEventListener("readystatechange",procesarDatos);
    }	
	else if (document.attachEvent){
		peticion.attachEvent("onreadystatechange",procesarDatos);
    }

    peticion.open("GET","PHP/fichero.php",true);

    peticion.send(null);
}

function procesarDatos(){
    if (peticion.readyState==4)
        if (peticion.status==200){
           // console.log(peticion);
            let padreMarca=document.getElementById("marca");
            let aux=peticion.responseXML;
            let aux2=aux.getElementsByTagName("marcas");
            let elementosMarca=document.querySelectorAll("marca").length;
         
        if(elementosMarca==0){
            for (let i = 0; i < aux2.length; i++) {
                    let opciones=document.createElement("option");
                    let texto=document.createTextNode(aux2.item(i).textContent);
                    opciones.append(texto);
                    padreMarca.append(opciones); 
               }
        }
        let padreMedida=document.getElementById("medidas");
        let aux3=aux.getElementsByTagName("dimension");
        let elementosMedida=document.querySelectorAll("medidas").length;
        if(elementosMedida==0){
            for (let i = 0; i < aux3.length; i++) {
                    let opciones=document.createElement("option");
                    let texto=document.createTextNode(aux3.item(i).textContent);
                    opciones.append(texto);
                    padreMedida.append(opciones); 
               }
        }
    }   
}

function recogerDatos(){
    //Select cuando has seleccionado una opcion no hace falta recorrer(Solamente en check)
    let marcaSelect=document.getElementById("marca").value;
    let medidaSelect=document.getElementById("medidas").value;
    
    // primer paso crear objeto
	if (window.XMLHttpRequest){
        peticion=new XMLHttpRequest()
    }
    else if (window.ActiveXObject){
      peticion=new ActiveXObject("Microsoft.XMLHTTP");
    }
	
	// segundo paso asignar evento readystatechange
    if (document.addEventListener){
		peticion.addEventListener("readystatechange",procesarDatosXML)
    }
	else if (document.attachEvent){
		peticion.attachEvent("onreadystatechange",procesarDatosXML);
    }
    // tercer paso establecer conexi??n con el servidor
    peticion.open("POST","PHP/fichero2.php");

    // cuarto paso establecer la cabecera si es necesaria
    peticion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    //quinto paso realizar la solicitud al servidor
    let cadenaxml="<lista><marcatv2><marca>"+marcaSelect+"</marca><dimension>"+medidaSelect+"</dimension></marcatv2></lista>";

	peticion.send(cadenaxml);	
}

function procesarDatosXML(){
    if (peticion.readyState==4)
        if (peticion.status==200){
            let aux=peticion.responseXML;
            let precio=aux.getElementsByTagName("precio").item(0).textContent;
            document.getElementById("precio").value=precio;
        }
}

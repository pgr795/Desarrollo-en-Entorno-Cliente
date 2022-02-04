if (document.addEventListener)
	window.addEventListener("load",inicio);
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
	let opcion=document.getElementById("marca");
    let opcion2=document.getElementById("electro");

    if (document.addEventListener){
		opcion.addEventListener("change",marcas);//se carga los elementos
        opcion2.addEventListener("change",recogerDatos);//seleccionas el elemento
        //opcion2.addEventListener("click",);//Al seleccionar el elemento sale todo tipo de medida
       // opcion3.addEventListener("click",proceso);  
    }
	else if (document.attachEvent){
        opcion.addEventListener("onchange",marcas);
        opcion2.addEventListener("onchange",recogerDatos);
		//opcion3.attachEvent("onclick",proceso);
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
            let aux=JSON.parse(peticion.responseText);
            let elementosMarca=document.getElementById("marca").length;
          
        if(elementosMarca==0){
            for (let i = 0; i < aux[0].length; i++) {
                    let opciones=document.createElement("option");
                    let texto=document.createTextNode(aux[0][i]);
                    opciones.append(texto);
                    padreMarca.append(opciones); 
               }
        }

        let padreElectro=document.getElementById("electro");
        let elementosElectro=document.getElementById("electro").length;

        if(elementosElectro==0){
            for (let i = 0; i < aux[1].length; i++) {
                    let opciones=document.createElement("option");
                    let texto=document.createTextNode(aux[1][i]);
                    opciones.append(texto);
                    padreElectro.append(opciones); 
               }
        }
    }   
}

function recogerDatos(){
    //Select cuando has seleccionado una opcion no hace falta recorrer(Solamente en check)
    let marcaSelect=document.getElementById("marca").value;;
    let electroSelect=document.getElementById("electro").value;
    
    // primer paso crear objeto
	if (window.XMLHttpRequest){
        peticion=new XMLHttpRequest()
    }
    else if (window.ActiveXObject){
      peticion=new ActiveXObject("Microsoft.XMLHTTP");
    }
	
	// segundo paso asignar evento readystatechange
    if (document.addEventListener){
		peticion.addEventListener("readystatechange",procesarDatosJSON)
    }
	else if (document.attachEvent){
		peticion.attachEvent("onreadystatechange",procesarDatosJSON);
    }
    // tercer paso establecer conexión con el servidor
    peticion.open("POST","php/fichero2.php");

    // cuarto paso establecer la cabecera si es necesaria
	peticion.setRequestHeader("Content-Type","application/json");

    //quinto paso realizar la solicitud al servidor
    let datos=new Object();
    datos.marcas=marcaSelect;
    datos.electro=electroSelect;
	
    let datosJSON=JSON.stringify(datos);

	peticion.send(datosJSON);	
}

function procesarDatosJSON(){
    if (peticion.readyState==4)
        if (peticion.status==200){
            console.log(peticion.responseText);
            let aux=JSON.parse(peticion.responseText);
         
            document.getElementById("precio").value=aux;
        }
}

if(document.addEventListener){
    window.addEventListener("load",inicio)
}
else if (document.attachEvent){
    window.attachEvent("onload",inicio);
}

function inicio(){
    if(document.addEventListener){
        let boton=document.getElementById("boton"); 
        boton.addEventListener("click",pasarProvincias);
    }
    else if(document.attachEvent){
        boton.attachEvent("onclick",pasarProvincias);
    }
}

function pasarProvincias(){
borrarProvincias();
let comunidades=document.getElementById("comunidades");
let comunidad=comunidades.getElementsByTagName("option");
let longitud=comunidad.length;

let provincias=new Array();
let provinciasM=new Array();
let prov;
    for (let i = 0; i < longitud; i++) {
        if(comunidad.item(i).selected){
            let seleccion=comunidad.item(i).textContent;
            
            switch(seleccion){
                case "Andalucia":
                        provincias = ["Almería","Cádiz","Cordoba","Granada","Huelva","Jaén","Málaga","Sevilla"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;


                case "Aragon":
                        provincias = ["Huesca","Teruel","Zaragoza"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;	
                    
                    
                case "Principado de Asturias":
                        provincias = ["Asturias"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;


                case "Illes Balears":
                        provincias = ["Illes Balears"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;


                case "Canarias":
                        provincias = ["Las Palmas","Santa Cruz de Tenerife"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;		


                case "Cantabria":
                        provincias = ["Cantabria"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;	


                case "Castilla y Leon":
                        provincias = ["Avila","Burgos","Leon","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;


                case "Castilla La Mancha":
                        provincias = ["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;	
                    
                    
                case "Cataluna":
                        provincias = ["Barcelona","Girona","Lleida","Tarragona"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;	
                        
                        
                case "Comunitat Valenciana":
                        provincias = ["Alicante","Castellon","Valencia"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;


                case "Extremadura":
                        provincias = ["Badajoz","Caceres"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;
                        
                        
                case "Galicia":
                        provincias = ["A Coruña","Lugo","Ourense","Pontevedra"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;	


                case "Comunidad de Madrid":
                        provincias = ["Madrid"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;


                case "Región de Murcia":
                        provincias = ["Murcia"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;	
                        
                        
                case "Comunidad Foral de Navarra":
                        provincias = ["Navarra"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;	


                case "Pais Vasco":
                        provincias = ["Alava","Bizkaia","Gipuzkoa"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;


                case "La Rioja":
                        provincias = ["La Rioja"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;		


                case "Ciudad Autónoma de Ceuta":
                        provincias = ["Ceuta"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                        break;	
                
                case "Ciudad Autónoma de Melilla":
                        provincias = ["Melilla"];
                        prov=provincias.join();
                        provinciasM.push(prov);
                    break;			
            }
        }
    }
agregarOptionsOrdenados(provinciasM);
}

function agregarOptionsOrdenados(aux){
    let provincias=aux.join(",");
    let todasprovincias=provincias.split(",");
    
    let padre=document.getElementById("provincias");
    let valido=true;
    let cont=0;
    let cont2=0;
    while(cont < todasprovincias.length){
            let provincia=todasprovincias[cont];
            let options=padre.getElementsByTagName("option");
            if(padre.length!=0){
                cont2=0;
                valido=true;
                while(valido && cont2 <options.length){
                    if(provincia > options.item(cont2).textContent){
                        valido=false;
                        let nuevaOptions=document.createElement("option");
                        let texto=document.createTextNode(provincia);
                        nuevaOptions.appendChild(texto);
                        padre.insertBefore(nuevaOptions,options.item(cont2));
                    }
                    cont2++
                }
                if(valido){
                    let nuevaOptions=document.createElement("option");
                    let texto=document.createTextNode(provincia);
                    nuevaOptions.appendChild(texto);
                    padre.append(nuevaOptions);
                }
            }
            else if(padre.length==0 || valido){
                let nuevaOptions=document.createElement("option");
                let texto=document.createTextNode(provincia);
                nuevaOptions.appendChild(texto);
                padre.append(nuevaOptions);
            }   
        cont++;
    }
}

function borrarProvincias(){
    let provincias=document.getElementById("provincias");
    let longitud=provincias.length
    if(longitud!=0){
        for (let i = 0; i < longitud; i++) {
                provincias.item(0).remove();
        }
    }
}
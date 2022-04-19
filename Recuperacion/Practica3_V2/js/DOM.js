if(document.addEventListener)
    window.addEventListener("load",inicio)
else if (document.attachEvent)
    window.attachEvent("onload",inicio);

function inicio(){
let boton=document.getElementById("anyadir");
    if(document.addEventListener)
        boton.addEventListener("click",agregar)
    else if (document.attachEvent)
        boton.attachEvent("onclick",agregar);
}

function agregar(){
    //VALORES DE LA CAJAS
    let vpalabra=document.getElementById("palabra").value.trim();
    let vdefinicion=document.getElementById("definicion").value.trim();
    let valido=true;
 
    //VALORES VACIOS
        if(vpalabra!="" && vdefinicion!=""){
            //LISTA (DL,DT,DD)
            let lista=document.getElementById("lista");
            let todosDT=lista.getElementsByTagName("dt");
            let cont=0;

            while (valido && cont < todosDT.length) {  
                // Comprobar si existe una DT con el mismo valor.
                if(vpalabra!=todosDT.item(cont).textContent){
                    if(vpalabra > todosDT.item(cont).textContent){
                        valido=false;
                        let palabra=document.createElement("dt");   
                        let definicion=document.createElement("dd");  


                        let textoPalabra=document.createTextNode(vpalabra);  
                        let textoDefinicion=document.createTextNode(vdefinicion);


                        palabra.appendChild(textoPalabra);
                        definicion.appendChild(textoDefinicion); 
                        
                        
                        lista.insertBefore(palabra,todosDT.item(cont));
                        palabra.after(definicion); 
                    }
                }
                else if(vpalabra==todosDT.item(cont).textContent){
                    valido=false;
                    if(!valido){
                        let tabla=document.querySelector("#repeticion > tbody");
                        let head=document.querySelector("#repeticion > thead");
                        let lineas=document.querySelector("#repeticion > tbody > tr");  

                        if(lineas!=null){
                            lineas=tabla.getElementsByTagName("tr");
                            let longitud=lineas.length;
                            let validoTabla=true;
                            let cont2=0;
                            while(validoTabla && cont2<longitud){
                                let linea=lineas.item(cont2);
                                let celda=linea.getElementsByTagName("td");
                                let valorCelda=celda.item(0).textContent;
                               
                                if(vpalabra!=valorCelda){
                                   if(vpalabra < celda.item(0).textContent){
                                        validoTabla=false;
                                        let linea=document.createElement("tr");
                                        let celda=document.createElement("td");
                                        let celda2=document.createElement("td");
                                        let vcelda=document.createTextNode(vpalabra);
                                        let vcelda2=document.createTextNode("1");
                        
                                        celda.appendChild(vcelda);
                                        celda2.appendChild(vcelda2);
                                        
                                        linea.appendChild(celda);
                                        linea.appendChild(celda2);
                        
                                        tabla.insertBefore(linea,lineas.item(cont2));
                                   }
                                }
                                else if(vpalabra==valorCelda){
                                    validoTabla=false;
                                    let valor=parseInt(celda.item(1).textContent,10);
                                    celda.item(1).textContent=valor+1;
                                }
                                cont2++;
                            }
                            if(validoTabla){
                                let linea=document.createElement("tr");
                                let celda=document.createElement("td");
                                let celda2=document.createElement("td");
                                let vcelda=document.createTextNode(vpalabra);
                                let vcelda2=document.createTextNode("1");
                    
                                celda.appendChild(vcelda);
                                celda2.appendChild(vcelda2);
                                
                                linea.appendChild(celda);
                                linea.appendChild(celda2);
                    
                                tabla.appendChild(linea);
                            }  
                        } 
                        else{
                            //THEAD
                            let hlinea=document.createElement("tr");
                            let hcelda=document.createElement("td");
                            let hcelda2=document.createElement("td");
                           
                            let hvcelda=document.createTextNode("Palabra");
                            let hvcelda2=document.createTextNode("Incremento");
            
                            hcelda.appendChild(hvcelda);
                            hcelda2.appendChild(hvcelda2);
                            
                            hlinea.appendChild(hcelda);
                            hlinea.appendChild(hcelda2);
            
                            head.appendChild(hlinea);
            
                            //TBODY
                            let linea=document.createElement("tr");
                            let celda=document.createElement("td");
                            let celda2=document.createElement("td");
                            let vcelda=document.createTextNode(vpalabra);
                            let vcelda2=document.createTextNode("1");
            
                            celda.appendChild(vcelda);
                            celda2.appendChild(vcelda2);
                            
                            linea.appendChild(celda);
                            linea.appendChild(celda2);
            
                            tabla.appendChild(linea);
                        }
                  }
                }
                cont++;
            }
        }
        else{
            alert("Valores Vacios");
        }
        if(valido){
            let palabra=document.createElement("dt");   
            let definicion=document.createElement("dd");  

            let textoPalabra=document.createTextNode(vpalabra);  
            let textoDefinicion=document.createTextNode(vdefinicion);

            palabra.appendChild(textoPalabra);
            definicion.appendChild(textoDefinicion); 

            lista.appendChild(palabra);
            lista.appendChild(definicion);
        }   
    }



            while (valido && cont < todosDT.length) {  
              // Comprobar si existe una DT con el mismo valor.
              if(vpalabra!=todosDT.item(cont).textContent){
                  if(vpalabra < todosDT.item(cont).textContent){
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
if (document.addEventListener) {
        window.addEventListener("load", inicio)
}
else if (document.attachEvent) {
        window.attachEvent("onload", inicio);
}

function inicio() {
        if (document.addEventListener) {
                let boton = document.getElementById("boton");
                boton.addEventListener("click", pasarProvincias);
        }
        else if (document.attachEvent) {
                boton.attachEvent("onclick", pasarProvincias);
        }
}

function pasarProvincias() {
        borrarProvincias();
        let Andalucia = new Array("Almería", "Cádiz", "Cordoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla");
        let Aragon = new Array("Huesca", "Teruel", "Zaragoza");
        let Asturias = new Array("Asturias");
        let IllesBalears = new Array("Illes Balears");
        let Canarias = new Array("Las Palmas", "Santa Cruz de Tenerife");
        let Cantabria = new Array("Cantabria");
        let CastillaLeon = new Array("Avila", "Burgos", "Leon", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora");
        let CastillaLaMancha = new Array("Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo");
        let Cataluna = new Array("Barcelona", "Girona", "Lleida", "Tarragona");
        let Valencia = new Array("Alicante", "Castellon", "Valencia");
        let Extremadura = new Array("Badajoz", "Caceres");
        let Galicia = new Array("A Coruña", "Lugo", "Ourense", "Pontevedra");
        let Madrid = new Array("Madrid");
        let Murcia = new Array("Murcia");
        let Navarra = new Array("Navarra");
        let PaisVasco = new Array("Alava", "Bizkaia", "Gipuzkoa");
        let LaRioja = new Array("La Rioja");
        let Ceuta = new Array("Ceuta");
        let Melilla = new Array("Melilla");

        let comunidades = document.getElementById("comunidades");
        let provincias = document.getElementById("provincias");
        let options = provincias.getElementsByTagName("option");


        for (let x = 0; x < comunidades.length; x++) {
                if (comunidades.item(x).selected) {
                        let seleccion = comunidades.item(x).textContent;
                        let provincia = eval(seleccion);
                        for (let i = 0; i < provincia.length; i++) {
                                // proceso de añadir ordenado.
                                let valorProvincia = provincia[i];
                                let longitudOptions = options.length;
                                let cont2 = 0;
                                let valido = true;
                                while (valido && cont2 < longitudOptions) {
                                        if (valorProvincia > options.item(cont2).textContent) {
                                                valido = false;
                                                let nuevaOptions = document.createElement("option");
                                                let texto = document.createTextNode(valorProvincia);
                                                nuevaOptions.appendChild(texto);
                                                provincias.insertBefore(nuevaOptions, options.item(cont2));
                                        }
                                       
                                        cont2++;
                                }
                                if (valido) {
                                        let nuevaOptions = document.createElement("option");
                                        let texto = document.createTextNode(valorProvincia);
                                        nuevaOptions.appendChild(texto);
                                        provincias.append(nuevaOptions);
                                }
                        }
                }
        }
}

// let provincia=eval(valorComunidad);
// if(padre.length!=0){
//         cont=0;
//         valido=true;
//         while(valido && cont < options.length){
//             if(provincia > options.item(cont).textContent){
//                 valido=false;
//                 let nuevaOptions=document.createElement("option");
//                 let texto=document.createTextNode(provincia);
//                 nuevaOptions.appendChild(texto);
//                 padre.insertBefore(nuevaOptions,options.item(cont));
//             }
//             cont++
//         }
//         if(valido){
//             let nuevaOptions=document.createElement("option");
//             let texto=document.createTextNode(provincia);
//             nuevaOptions.appendChild(texto);
//             padre.append(nuevaOptions);
//         }
// }    
// else if(padre.length==0){
//         let nuevaOptions=document.createElement("option");
//         let texto=document.createTextNode(provincia);
//         nuevaOptions.appendChild(texto);
//         padre.append(nuevaOptions);
//     }   
// cont++;
function borrarProvincias() {
        let provincias = document.getElementById("provincias");
        let longitud = provincias.length
        if (longitud != 0) {
                for (let i = 0; i < longitud; i++) {
                        provincias.item(0).remove();
                }
        }
}
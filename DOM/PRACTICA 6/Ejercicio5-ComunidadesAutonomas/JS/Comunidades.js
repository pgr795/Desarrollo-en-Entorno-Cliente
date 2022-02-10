switch(comunidad){
		
    case "Andalucia":
            provincias = ["Almería","Cádiz","Cordoba","Granada","Huelva","Jaén","Málaga","Sevilla"];
            
            for (let i = 0; i < provincias.length; i++){
                let nuevaOptions=document.createElement("option");
                let texto=document.createTextNode(provincicas[i]);
                nuevaOptions.appendChild(texto);
                padre.appendChild(nuevaOptions);
            }
            
            
            break;


    case "Aragon":
            provincias = ["Huesca","Teruel","Zaragoza"];
            break;	
        
        
    case "Asturias":
            provincias = ["Asturias"];
            break;


    case "IslasBaleares":
            provincias = ["IslasBaleares"];
            break;


    case "Canarias":
            provincias = ["Las Palmas","Santa Cruz de Tenerife"];
            break;		


    case "Cantabria":
            provincias = ["Cantabria"];
            break;	


    case "CastillayLeon":
            provincias = ["Avila","Burgos","Leon","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"];
            break;


    case "CastillaLaMancha":
            provincias = ["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"];
            break;	
        
        
    case "Cataluña":
            provincias = ["Barcelona","Girona","Lleida","Tarragona"];
            break;	
            
            
    case "ComunidadValenciana":
            provincias = ["Alicante","Castellon","Valencia"];
            break;


    case "Extremadura":
            provincias = ["Badajoz","Caceres"];
            break;
            
            
    case "Galicia":
            provincias = ["A Coruña","Lugo","Ourense","Pontevedra"];
            break;	


    case "Madrid":
            provincias = ["Madrid"];
            break;


    case "Murcia":
            provincias = ["Murcia"];
            break;	
            
            
    case "Navarra":
            provincias = ["Navarra"];
            break;	


    case "PaisVasco":
            provincias = ["Alava","Bizkaia","Gipuzkoa"];
            break;


    case "LaRioja":
            provincias = ["La Rioja"];
            break;		


    case "Ceuta":
            provincias = ["Ceuta"];
            break;	
    
    case "Melilla":
            provincias = ["Melilla"];
        break;			
    }
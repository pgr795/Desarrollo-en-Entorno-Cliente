$(window).on("load",inicio);

function inicio(){
	$("#anyadirDefinicion").click(anadirDefinicion); //Funciona
	$("#borrarDefinicion").click(borrarDefinicion);
	$("#anyadir").click(anadirLocalidad); //Funciona
	$("#anyadir_coche").click(anadirCoche); //Funciona
	$("#borrarCoche").click(borrarCoche); //Funciona
	$("#comunidades").click(provincias);//Funciona
	$("#aplicarColores").click(colores);//Funciona

}	
		
// --------------------------------------------------------------------------------------------------------
	//AñadirDefinicion
	function anadirDefinicion(){
		let padre=$("#definicion");									
		let vPalabra=$("#palabra").val().trim();					
		let vConcepto=$("#concepto").val().trim();					
		let palabras=$(padre).find("dt");
		let conceptos=$(padre).find("dd");			
		let indice=0;
		let indice2=0;
		let inexistente=true;
	

		if(vPalabra!="" && vConcepto!=""){
	
			while (inexistente && indice < $(palabras).length){
				let palabraRepe=$(palabras).eq(indice);
				let palabraRepetida=palabraRepe.text();
				
				if (vPalabra == palabraRepetida){
					indice2=0;
					while (inexistente && indice2 < $(conceptos).length){
						let conceptoRepe=$(conceptos).eq(indice);
						let conceptoRepetido=conceptoRepe.text();
						
						if(vConcepto==conceptoRepetido && vPalabra == palabraRepetida){
							inexistente=false;
						}
						else if(vConcepto!=conceptoRepetido){
							$(palabraRepe).after("<dd>"+vConcepto+"</dd>").nextUntil("dd");
							inexistente=false;
						}
						indice2+=1;
					}
				}
				indice+=1;
			}
		}
		else{
			inexistente=false;
		}
		if (inexistente){
			padre.append("<dt>"+vPalabra+"</dt>"+"<dd>"+vConcepto+'</dd>');
		}
	}

	function borrarDefinicion(){
		let vPalabra=$("#palabra").val().trim();					
		let vConcepto=$("#concepto").val().trim();					
		let indice=0;
		let indice2=0;
		let inexistente=true;
	
		if(vPalabra!="" && vConcepto!=""){
			let listas=$("#definicion *");	
			while (inexistente && indice < $(listas).length){
				if (vPalabra == $(listas).eq(indice).text()){
					indice2=0;
					let elementos =$(listas).eq(indice).nextUntil("dt");
					$(listas).eq(indice).remove();
						while (inexistente && indice2 < $(elementos).length){
							$(elementos).eq(indice2).remove();
							indice2+=1;
						}
					inexistente=false;
				}
				indice+=1;
			}
		}
		else{
			inexistente=false;
		}	
	}

// --------------------------------------------------------------------------------------------------------
	//LOCALIDADES
	function anadirLocalidad(){
		let padre=$("#local");													//document.getElementById("local");
		let vlocalidad=$("#localidad").val();									//document.getElementById("localidad").value.trim();
		var localidades=$("#local li");											//padre.getElementsByTagName("li");
		let inexistente=true;
		let indice=0;
		
		while (inexistente && indice < $(localidades).length){					//while (inexistente && indice < localidades.length){
			if (vlocalidad == $(localidades).eq(indice).text()){				//if (vlocalidad == localidades.item(indice).textContent){
				inexistente=false;												//inexistente=false;
			}																	//}
			else if (vlocalidad < $(localidades).eq(indice).text()){			//else if (vlocalidad < localidades.item(indice).textContent){
				$(localidades).eq(indice).before("<li>"+vlocalidad+"</li>");				//let nuevoli=document.createElement("li");	
				inexistente=false;												//let textoli=document.createTextNode(vlocalidad);
			}																	//nuevoli.append(textoli);
																				//padre.insertBefore(nuevoli,localidades.item(indice));
				indice+=1;
		}
		if (inexistente){														//let nuevoli=document.createElement("li");
				$(padre).append("<li>"+vlocalidad+"</li>");						//let textoli=document.createTextNode(vlocalidad);
		}																		//nuevoli.append(textoli);
	}																		
// --------------------------------------------------------------------------------------------------------
	//AÑADIR COCHES
	function anadirCoche(){
		let vMarca=$("#marca").val().trim();									//document.getElementById("marca").value.trim();
		let vModelo=$("#modelo").val().trim();									//document.getElementById("modelo").value.trim();
		let vPrecio=$("#precio").val().trim();									//document.getElementById("precio").value.trim();

		if(vMarca!="" && vModelo!="" && vPrecio!=""){				
			let lineas=$("#coches>tbody>tr");									//padre.getElementsByTagName("tr");		
			let inexistente=true;
			let indice=0;
			let marcaActual=vMarca;
			let modeloActual=vModelo;

			while (inexistente && indice < $(lineas).length){
					//let lin=$("#coches>tbody").find("tr");
					let celdas=$(lineas).eq(indice).find("td");
					let marcaLinea=$(celdas).eq(0).text();
					let modeloLinea=$(celdas).eq(1).text();


				if ($(celdas).eq(0).text()==vMarca && $(celdas).eq(1).text()==vModelo && celdas.eq(2).text()!=vPrecio){
					inexistente=false;
					celdas.eq(2).text(vPrecio);
				} 
				else if (celdas.eq(0).text()==vMarca && celdas.eq(1).text()==vModelo && celdas.eq(2).text()==vPrecio){
					inexistente=false;
				}
				else if (marcaActual > marcaLinea){
					inexistente=false;
					$(lineas).eq(indice).before("<tr><td>"+vMarca+"</td><td>"+vModelo+"</td><td>"+vPrecio+"</td></tr>");
				}
				/*/else if (marcaActual < marcaLinea){
					inexistente=false;
					$(lin).eq(indice).after("<tr><td>"+vMarca+"</td><td>"+vModelo+"</td><td>"+vPrecio+"</td></tr>");
				}*/
				else if (marcaActual == marcaLinea) {
						if(modeloActual > modeloLinea){
							inexistente=false;
							$(lineas).eq(indice).before("<tr><td>"+vMarca+"</td><td>"+vModelo+"</td><td>"+vPrecio+"</td></tr>");
						}
						/*else if(modeloActual < modeloLinea){
							inexistente=false;
							$(lin).eq(indice).after("<tr><td>"+vMarca+"</td><td>"+vModelo+"</td><td>"+vPrecio+"</td></tr>");
						}*/
						else if(modeloActual = modeloLinea){
							inexistente=false;
						}
				}			
				
				indice+=1;
			}
	
			if (inexistente){
				$("#coches > tbody").append("<tr><td>"+vMarca+"</td><td>"+vModelo+"</td><td>"+vPrecio+"</td></tr>");
				/*let celda=$("#coches > tbody > tr");
				celda.append("<td>"+vMarca+"</td>");	
				celda.append("<td>"+vModelo+"</td>");
				celda.append("<td>"+vPrecio+"</td>");	*/										
			}
		}	
	}
	//BORRAR COCHES
	function borrarCoche(){
			let vMarca=$("#marca").val().trim();									//document.getElementById("marca").value.trim();
			let vModelo=$("#modelo").val().trim();									//document.getElementById("modelo").value.trim();
			let vPrecio=$("#precio").val().trim();									//document.getElementById("precio").value.trim();
			let inexistente=true;
			let indice=0;

			if(vMarca!="" && vModelo!="" && vPrecio!=""){
				let lineas = $("#coches>tbody>tr");
				let celdas=$(lineas).eq(indice).find("td");
				while (inexistente && indice < lineas.length){
					if ($(celdas).eq(0).text()==vMarca && $(celdas).eq(1).text()==vModelo && $(celdas).eq(2).text()==vPrecio){
						$(lineas).eq(indice).remove();
						inexistente=false;
					}	
					indice++;
				}
			}
	}

// --------------------------------------------------------------------------------------------------------
	//Comunidades
	function provincias(){
		let selectComunidades=$("#comunidades");
		let comunidadSeleccionada = selectComunidades.val();
		let provincias= new Array();
		let padre=$("#provincia");
		borrarOptions(padre);
		
		switch(comunidadSeleccionada){

			case "Andalucia":
					provincias = ["Almería","Cádiz","Cordoba","Granada","Huelva","Jaén","Málaga","Sevilla"];
						for (let i = 0; i < provincias.length; i++){
							padre.append("<option>"+provincias[i]+"</option>");
						}
					incluirMensaje("Buena comida y ambiente");
					break;


			case "Aragon":
					provincias = ["Huesca","Teruel","Zaragoza"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;	
				
				
			case "Asturias":
					provincias = ["Asturias"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena Sidra");
					break;


			case "IslasBaleares":
					provincias = ["Islas Baleares"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Islas Baleares");
					break;


			case "Canarias":
					provincias = ["Las Palmas","Santa Cruz de Tenerife"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;		


			case "Cantabria":
					provincias = ["Cantabria"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;	


			case "CastillayLeon":
					provincias = ["Avila","Burgos","Leon","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;


			case "CastillaLaMancha":
					provincias = ["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;	
				
				
			case "Cataluña":
					provincias = ["Barcelona","Girona","Lleida","Tarragona"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;	
					
					
			case "ComunidadValenciana":
					provincias = ["Alicante","Castellon","Valencia"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;


			case "Extremadura":
					provincias = ["Badajoz","Caceres"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;
					
					
			case "Galicia":
					provincias = ["A Coruña","Lugo","Ourense","Pontevedra"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;	


			case "Madrid":
					provincias = ["Madrid"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;


			case "Murcia":
					provincias = ["Murcia"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;	
					
					
			case "Navarra":
					provincias = ["Navarra"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;	


			case "PaisVasco":
					provincias = ["Alava","Bizkaia","Gipuzkoa"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;


			case "LaRioja":
					provincias = ["La Rioja"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;		


			case "Ceuta":
					provincias = ["Ceuta"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
					break;	
			
			case "Melilla":
					provincias = ["Melilla"];
					for (let i = 0; i < provincias.length; i++){
						padre.append("<option>"+provincias[i]+"</option>");
					}
					incluirMensaje("Buena comida y ambiente");
				break;			
		}
	}
	function borrarOptions() {
		$("#provincia").empty();
	}
	function incluirMensaje(mensaje) {
		$('#mensajeComunidad').html(mensaje);
	}
//---------------------------------------------------------------------------------------------------------
	//APLICAR COLORES
	function colores(){
		let num1 = NumerosAleatorios(0, 255);
		let num2 = NumerosAleatorios(0, 255);
		let num3 = NumerosAleatorios(0, 255);
		let num4 = NumerosAleatorios(0, 255);
		let num5 = NumerosAleatorios(0, 255);
		let num6 = NumerosAleatorios(0, 255);
		
		$("#tablaComunidades tr:even").css("background-color","rgb("+num1+","+num2+","+num3+")");
		$("#tablaComunidades tr:odd").css("background-color","rgb("+num4+","+num5+","+num6+")")
	}
	function NumerosAleatorios(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}
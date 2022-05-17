// Ajax puro y el DOM

// Ajax conexión asincronba con el servidor

// Se deben dar una serie de pasos que vamos a enumerar

// Primer paso
// crear el objeto XMLHttpRequest
	//Declaramos una variable
	let conexion;
	// comprobar que objeto soporta el navegador
	if (window.XMLHttpRequest)
		conexion= new XMLHttpRequest()
	else if (window.ActiveXObject)
		conexion=new  ActiveXObject("Microsoft.XMLHTTP");
	
// Segundo paso
// Asignar un evento (readystatechange) al objeto que nos hemos creado.	
	
	if (document.addEventListener)
		conexion.addEventListener("readystatechange",procesar)
	else if (document.attachEvent)
		conexion.attachEvent("onreadystatechange",procesar);
	
	// otra forma de asignar el evento sin utilizar DOM
	conexion.onreadystatechange=procesar;
	
// Tercer paso 
// establecer la conexión o hilo de comunicación con el servidor	

	conexion.open("GET|POST","url-servidor");
	// Si no se pasa parametros
	conexion.open("GET","miprograma.php");
	// Paso de parámetros con GET
	conexion.open("GET","programa.php?parametros-1="+valor-1+"&parametros-2="+valor-2+"&parametro-3="+valor-3);
	conexion.open("GET","programa.php?nombre="+vnombre+"&apellidos="+vapellidos);
	// Paso de parámetros con POST
	conexion.open("POST","segundo.php");
	
// Cuarto paso
// Establecer las cabeceras, si son necesarias.
	conexion.setRequestHeader("nombre-cabecera","valor");
	// Si el paso de parámetros es con GET
	// NO se establece cabecera
	
	// Si el paso de parámetros es con POST normal
	// o bien se le pasa una cadena XMLDocument
	conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	// Si se le pasa un objeto JSON
	conexion.setRequestHeader("Content-type","application/json");
	
// Quinto paso
// Enviar la petición al servidor
	// Si el paso de parametros es con GET
	// o bien si no se pasan parametros
	conexion.send(null);
	
	// Si el paso de parámetros es con POST normal
	conexion.send("parametro-1="+valor-1+"&parametro-2="+valor-2+"&parametro-3="+valor-3)
	conexion.send("nombre="+vnombre+"&apellidos="+vapellidos);
	
	// si se pasa un objeto FormData
		// crear el objeto
		let objetoFormData= new FormData();
		// asignale campos y valores
		objetoFormData.append("nombre",vnombre)
		objetoFormData.append("apellidos",vapellidos);
		
		conexion.send(objetoFormData);
	
	
	// Si se pasa una cadena XMLDocument
		//crear la cadena xml
	//cadena xml basada en campos
	let cadenaXML="<personal><alumno><nombre>"+vnombre+"</nombre><apellidos>"+vapellidos+
				"</apellidos><dni>"+vdni+"</dni></alumno></personal>";
	// cadena xml basada en atributos
	let cadenaXML="<personal><alumno><nombre apellidos='"+vapellidos+"' dni='"+vdni+"'>"+vnombre+
				"</nombre></alumno></personal>";
				
	conexion.send(cadenaXML);
	
	// Si se pasa un objeto JSON
		// crear un objeto javascript
		let miobjeto={nombre:vnombre, apellidos:vapellidos};
		// pasar el objeto javascript a objeto JSON
		let miJSON=JSON.stringify(miobjeto);
		conexion.send(miJSON);
	
// Sexto paso 
// manejar la respuesta. En la función que hemos asignado
// al evento readystatechange. Si tenemos acceso al objeto XMLHttpRequest

function procesar(){
	// comprobar que el readystate tiene el valor 4
	if (conexion.readyState==4)
		// comprobar que el status es 200
		if (conexion.status==200){
			// Si obtengo una respuesta normal
			// la respueata está en responseText
			conexion.responseText
			// Si la respuesta es una cadena XMLDocument
			// la respuesta está en responseXML
			conexion.responseXML
			// Si la respuesta es un objeto JSON
			// el objeto json está en responseText
			conexion.responseText
			// pasar el objeto JSON a objeto javascript
			let respuesta=JSON.parse(conexion.responseText);
			
				// mostrar/operar con los datos
		}
		
		
			
}	
	

//Si NO tenemos acceso al objeto XMLHttpRequest
function procesar(evento){
	let eventos=evento||window.event;
	// comprobar que el readystate tiene el valor 4
	if (eventos.target.readyState==4)
		// comprobar que el status es 200
		if (eventos.target.status==200){
			// Si obtengo una respuesta normal
			// la respueata está en responseText
			eventos.target.responseText
			// Si la respuesta es una cadena XMLDocument
			// la respuesta está en responseXML
			eventos.target.responseXML
			// Si la respuesta es un objeto JSON
			// el objeto json está en responseText
			eventos.target.responseText
			// pasar el objeto JSON a objeto javascript
			let respuesta=JSON.parse(eventos.target.responseText);
			
			// mostrar/operar con los datos
			
		}
}		
	
	
	
	
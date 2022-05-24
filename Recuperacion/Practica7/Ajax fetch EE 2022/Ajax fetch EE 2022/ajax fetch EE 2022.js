 // Ajax con fetch
 
 fetch(url [, objeto-configuración])
	.then(función-conexión-correcta)
	.catch(función-conexión-errónea)
	
 Objeto de confiuguración
 {
	 method;GET|POST,
	 headers:{cabeceras},
	 // cabceras cuando se envian datos normales con POST o bien
	 // se envía una cadena xml.
	 headers:{'Content-Type':'apllication/x-ww-form-urlencoded'}
	 // cabecera cuando se envian datos en JSON
	 headers:{'Content-Type':'application/json'}
	 // para indicar los parámetros cuando el método es POST
	 body:datos,
	 cache: default|reload|no-cache|no-store|
			force-cache|only-if-cached,
 }
 
 
 function función-conexión-correcta(respuesta){
	 if (respuesta.ok){
		 respuesta.text().then(función-tratamiento)
		 // si recibe un dato en JSON, se puede utilizar lo anterior
		 // o bien lo siguiente.
		 
		 // cuando se recibe un objeto JSON
			// Con el primer formato .text() el valor devuelto de la función de tratamiento
			// va a ser un objeto JSON
			// Con el segundo formaro .json() el valor devuelto de la función de tratamiento
			// va a ser un objeto javascript, ya que el método realizar la transformación de
			// JSON a Javascript de forma automática
		 respuesta.json().then(función-tratamiento)
		 
	 }		
 }
 
 
 function función-conexión-errónea(){
	 //mensaje de error
 }
 
 
 function función-tratamiento(valor-devuelto){
	 tratamiento
	 // Cuando se recibe una cadena xml, hay que preprocesarse
	 let variable=new DOMParser();
	 let xml=variable.parseFromString(valor-devuelto,"application/xml");
	 // a continuaciópnm se tratar normalmente la cadena xml.
	 
	 
	 
	 
 }
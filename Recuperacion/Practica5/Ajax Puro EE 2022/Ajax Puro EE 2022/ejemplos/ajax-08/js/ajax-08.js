if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);
	
function inicio(){
	let miboton=document.getElementById("solicitud");
	if (document.addEventListener)
		miboton.addEventListener("click",proceso)
	else if (document.attachEvent)
		miboton.attachEvent("onclick",proceso);
}
let peticion;
function proceso(){
	
	// primer paso crear objeto
	if (window.XMLHttpRequest)
		peticion=new XMLHttpRequest()
	else if (window.ActiveXObject)
		peticion=new ActiveXObject("Microsoft.XMLHTTP");
	
	// segundo paso asignar evento readystatechange
	if (document.addEventListener)
		peticion.addEventListener("readystatechange",procesar)
	else if (document.attachEvent)
		peticion.attachEvent("onreadystatechange",procesar);
	
	// tercer paso establecer conexión con el servidor
	let vnombre=document.getElementById("nombre").value;
	let vapellidos=document.getElementById("apellidos").value;
		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
	peticion.open("POST","php/ajax-08.php");
		
	
	// cuarto paso establecer la cabecera si es necesaria
		// como se envian datos con FormData no se envía cabecera
	
	//quinto paso realizar la solicitud al servidor
		// si no se pasan parámetros o bien se pasan parámetros mediante
		// get
		
	let misdatos= new FormData();
	misdatos.append("nombr",vnombre);
	misdatos.append("apelli",vapellidos);
	peticion.send(misdatos);	
}


function procesar(){
	if (peticion.readyState==4)
		if (peticion.status==200){
			// tratar datos recibidos
				// dato recibido que no es xml
			document.getElementById("resultado").textContent=peticion.responseText;	
		}
}
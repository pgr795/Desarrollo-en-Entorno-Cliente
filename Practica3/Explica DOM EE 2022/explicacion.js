//El DOM (Document Object Model) Modelo de Objetos del Documento
 
// El DOM es la representación que hace el navegador de las etiquetas de HTML, 
// sus atributos y el orden en que aparecen en el archivo
//
// El DOM proporciona información necesaria a JavaSccript para comunicarse con 
// los elementos de la págian web.
// 
// El DOM de los documentos tiene una estructura lógica, que es muy parecida a un 
// árbol, aunque más bien se parece a un bosque
//
// Elementos del DOM
//    	- document -> nodo raíz
// 		- node -> son los nodos
//		- element -> nodos que hacen referencia a etiquetas de HTML
//		- attribute -> son los atributos de las etiquetas de HTML
//		- attr -> es un objeto que hace referencia a un atributos
//		- nodelist -> colección de nodos.
//		- HTMLCollection -> colección de nodos de tipo element.
//		- NamedNodeMap -> colección de nodos a los que se puede acceder a través del nombre
//		- text -> nodo de tipo texto
//		- comment -> comentario de las páginas.
// 
//		
//	document, node, element, ...
//		propiedades y métodos
//
// Para acceder al Body se utiliza document.body
// Para acceder al Head se utiliza document.head
//
//	Para recuperar o acceder a UN elemento
// 	document.getElementById("identificador")
//		acceder al elemento que tiene en el identificador el valor indicado
let yo=document.getElementById("felix");
// el elemento con identificador felix
//	document.querySelector("selector")
// 		acceder al primer elemento del selector indicado.
let primero=document.querySelector("#angel"); 
// el elemento cuyo id es angel
let segundo=document.querySelector(".daw");
// el primer elemento de la clase daw
let dos=document.querySelector(".daw:nth-of-type(1)");
// el segundo elemento de la clase daw
let tercero=document.querySelector("div");
// el primer div
let cuarto=document.querySelector("#yo>div+ul>li");
// el primer li hijo de una lista no ordenada, que es hermano adyacente
// de un div hijo de un elemento con identificador yo.
// 
// Para recuperar UN CONJUNTO de elementos
//   document.getElementsByTagName("etiqueta-html");
// 	recupera todos elementos cuya etiqueta de html es la indicada.
//		elemento.getElementsByTagName("etiqueta-html")
//	recupera todos los elmentos cuya etiqueta de html es la indicada y que hay
// a partir del elemento indicado.
let elementos_lista=document.getElementsByTagName("li");
// recupera todos los li que hay en el documento html.
let padre=document.getElementById("milista");
let hijos=padre.getElementsByTagName("li");
// todos los li que hay a partir del elemento cuyo identificador es milista.
//
//	document.querySelectorAll("selector");
let varios=document.querySelectorAll("#milista li");
// todos los li que hay dentro del elemento cuyo identificador es milista
//
//	elemento.querySelectorAll("selector")
let  padre2=document.querySelector("#a1");
// el elemento con identificador a1
let hijos2=padre2.querySelectorAll("div li");
// todos los li que hay dentro de un div, que a su vez está dentro de un elemento 
// con identificador a1.
//
let padre3=document.querySelector("div");
// el primer div que hay en el documneto
let hijos3=padre3.querySelectorAll("p li");
// todos los li que hay dentro de un p, que a su vez están dentro del primer div
//
// document.getElementsByClassName("nombre-clase")
// recupera todos los elementos que tienen el atributo clasd con el valor indicado
let variado=document.getElementsByClassName("daw");
// todos los elementos que tienen el atributo class como el valor daw
//
// elemento.getElementsByClassName("nombre-clase");
let variados2=padre3.getElementsByClassName("asir");
// todos los elementos que tienen el atributo class con el valor asir existentes
// dentro del primer div.
//
// document.getElementsByName("nombre")
//	todos los elementos que tienen el atributo name con el nombre indicado.
let variado3=document.getElementsByName("estado");
// todos los elementos que tienen el atributo name con el valor estado.
// 
// para saber el número de elementos que tiene el conjunto tenemos la 
// propiedad length.
// para acceder a un elemento del conjunto .item(posición)
let unoelemento=variado3.item(2);
// accedo al tercer elemento del conjunto variado3.
let numero=variado3.length;
// el número de elementos que hay en el conjunto variado3.
//
// Crear nodos
//	Crear nodos de tipo element
//	document.createElement("etiqueta-html")
let nuevo=document.createElement("li");
// nuevo es un nuevo li.
//
// Crear nodos de tipo texto
//	document.createTextNode("valor|texto");
let valorNuevo=document.createTextNode("Asturias");
// crea un nodo de tipo texto con el valor asturias.
//
// Para incluir nodos en el DOM
//	padre.appendChild(nodo);
// añade el nodo al final del padre
nuevo.appendChild(valorNuevo);
// añade el nodo de tipo texto al li, creado anteriormente.
//
// padre.append(nodo)
// añade el nodo al final del padre
nuevo.append(valorNuevo);
// padre.append("texto");
// añade contenido el texto indicado al padre .
padre3.append("En un lugar de la mancha de cuyo nombre no quiero ...");

// padre.prepend(nodo);
// añade el nodo al padre al principio.
let nuevaLinea=document.createElement("tr");
let tabla=document.querySelector("table#mitabla>tbody");
tabla.prepend(nuevaLinea);
// añade un tr al principio del cuerpo de la tabla con identificador mitabla
// 
// padre.insertBefore(nuevo,anterior);
// añade el nuevo elemento al padre que se coloca dalante del nodo anterior.
let lineas=document.querySelectorAll("table#mitabla>tbody>tr");
tabla.insertBefore(nuevaLinea,lineas.item(3));

// hermano.before(nuevo);
// añade el elemento nuevo delante del hermano
lineas.item(3).before(nuevaLinea);
// añade la nueva línea en la cuarta posición. (delante del hermano que ocupa
// la cuarta posición, le desplaza).
//
// hermano.after(nuevo);
// añade el elemento nuevo detras del hermano
lineas.item(3).after(nuevaLinea);
// añade la nueva línea en la quinta posición. (detras del hermano que ocupa
// la cuarta posición).

// Para borrar un nodo
// Primera posibilidad
// padre.removeChild(nodo-borrar);

let tabla=document.querySelector("table#mitabla>tbody");
let hijos=tabla.querySelectorAll("tr");
tabla.removeChild(hijos.item(2));
// Se borra la tercera línea de datos de la tabla cuyo identificador es mitabla.

// Segunda posibilidad de borrar un nodo
// nodo-borrar.remove();
let tabla=document.querySelector("table#mitabla>tbody");
let hijos=tabla.querySelectorAll("tr");
hijos.item(2).remove();
let nodoBorrar=hijos.item(2);
nodoBorrar.remove();
// Se borra la tercera línea de datos de la tabla cuyo identificador es mitabla.

// Sustituir un nodo por otro. 2 posibilidades
// Primera posibilidad
// padre.replaceChild(nodo-nuevo, nodo-a-sustituir);
let padre=document.getElementById("milista");
let hijos=padre.getElementsByTagName("li");
let nuevo=document.createElement("li");
let textoNuevo=document.createTextNode("Alimoche");
nuevo.append(textoNuevo);

padre.replaceChild(nuevo,hijos.item(0));
// sustuye el primer elemento de la lista con identificador milista
// por el elemento creado.

// Segunda posibilidad
// nodo-a-sustituir.replace(nodo-nuevo);
let padre=document.getElementById("milista");
let hijos=padre.getElementsByTagName("li");
let nuevo=document.createElement("li");
let textoNuevo=document.createTextNode("Alimoche");
nuevo.append(textoNuevo);
hijos.item(0).replace(nuevo);
// sustuye el primer elemento de la lista con identificador milista
// por el elemento creado.

// Para obtener el valor de los elementos o nodos
// value para el contenido de los elementos del formulario.
// textContent para el contenido de los nodos de tipo element
// innerHTML, este casi nunca se va a utilizar.
// solo le utilizaremos cuando queremos modificar el contenido de  un párrafo 
// que conteine etiquetas HTML.


// ATRIBUTOS, asociados a nodos de tipo element
// Me indica si tiene el atributo  indicado, true o false.
element.hasAttribute(nombre-atributo)

// Leer un atributo, devuelve el valor 	que tiene el atributo
element.getAttribute(nombre-atributo)

// Escribir un atributo, 
 element.setAttribute(nombre-atributo,valor);
	
// Padres
// Para obtener el nodo padre de un nodo
 nodo.parentNode
// Para obtener el nodo Element padre de un nodo
 nodo.parentElement

// Hijos
// Nos indica si tiene nodos hijos
nodo.hasChildNodes()
// Para obtener todos los nodos hijos
nodo.childNodes
// el primer nodo hijo
nodo.firstChild
// el último nodo hijo
nodo.lastChild

// todos los hijos
elemento.children
// el primer nodo element hijo
elemento.firstElementChild
// el último nodo element hijo
elmento.lastElementChild
// Número de nodos element hijos
elemento.childElementCount

// hermanos
// Siguiente hermano
nodo.nextSibling
// El hermano anterior
nodo.previousSibling
// Siguiente hermano element
elemento.nextElementSibling
// El anterior hermano element
elemento.previousElementSibling


//Programación de eventos
// Asociar un evento a un elemento
// elemento.addEventListener("evento",nombre-función)
// Por compatibilidad con versiones anteriores que no los soportan
// if (document.addEventListener)
//		elemento.addEventListener("evento",nombre-función)
// else if (document.attachEvent)
//		elemento.attachEvent("onevento",nombre-función)

if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio(){
	// se programan el resto de los eventos.
	let miboton=document.getElementById("boton");
	let segundo=document.getElementById("segundoBoton");
	if (document.addEventListener){
		miboton.addEventListener("click",procesar);
		segundo.addEventListener("click",muestra);
		
	} else if (document.attachEvent){
		miboton.attachEvent("onclick",procesar);
		segundo.attachEvent("onclick",muestra);
	}
}


// cuando no se quiere realizar la acción por defecto en las fuhnciones de los eventos
// Deberemos utilizar
function proecesar(evento){
	let eventos=evento||window.event;
	
	
	// para que no se realiace la opción por defecto.
	eventos.preventDefault();
	
}

// solo digitos sin DOM
function soloDigitos(evento){
	let enviar=true;
	let eventos=evento||window.event;
	let caracter=String.fromCharCode(eventos.charCode);
	if (caracter < "0" || caracter > "9")
		enviar=false;
	return  enviar;
}

// solo digitos con DOM
function soloDigitos2(evento){
	let eventos=evento||window.event;
	let caracter=String.fromCharCode(eventos.charCode);
	if (caracter < "0" || caracter > "9")
		eventos.preventDefault();
}

// Para quitar eventos
// elemento.removeEventListener("nombre-evento", nombre-función)

function muestra(){
	let miboton=document.getElementById("boton");
	if (document.removeEventListener){
		miboton.removeEventListener("click",procesar);	
	} else if (document.datachEvent){
		miboton.datachEvent("onclick",procesar);	
	}
}


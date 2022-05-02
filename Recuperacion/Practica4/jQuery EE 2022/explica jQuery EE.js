// Explicación de jQuery
// Incluir fichero de jQuery en el documento HTML correspondiente. Solo uno de los ficheros.
// Siempre debe ir antes que el fichero javasccript que nosotros creemos.

// CDN de jQuery
<script src="http://code.jquery.com/jquery-3.6.0.js"></script>
<script src="http://code.jquery.com/jquery-3.6.0.min.js"></script>

// Acceso Local
<script src="jquery/jquery-3.6.0.js"></script>
<script src="jquery/jquery-3.6.0.min.js"></script>

// CDN de Microsoft
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.0.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.0.min.js"></script>

// CDN de Google
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

// Acceder a los elementos de nuestro documento HTML, hay que aplicarles métodos

// Hace referencia a todos los elementos 
$("*")

//Hace referencia al selector indicado
$("selector")

// Hace referencia a los elementos con etiqueta HTML
$("etiqueta")
	//Hace referencia a todos los div
$("div")

// Hace referencia al elemento que tiene ese identificador
$("#identificador")
	// Hace referencia al elemento con identificador daw.
$("#daw")

// Hace referencia a la etiqueta indicada que tiene el identificador indicado
$("etiqueta#identificador")
	// Hace refencia al div con identificador daw
$("div#daw")

// Hace refencia a los elementos que tienen una clase
$(".clase")
	// Hace referencia a los elementos de la clase dwec
$(".dwec")

// Hace refencia a los elementos de esa etiqueta y que pertenecen a la clase indicada
$("etiqueta.clase")
	// Hace refencia a los ol de la clase lista.
$("ol.lista")

// Hace referencia a todos los elementos de los selectores indicados
$("selector-1,selector-2,selector-3,...")
	// Hace referencia a todos los div, a todos los elementos de la clase lista y al elemento con identificador daw
$("div, .lista, #daw")

// Hace refencia a los elementos de esa etiqueta que tienen el atributo indicado
$("etiqueta[atributo]")
	// Hace referencia a los ol con identificador
$("ol[id]")

// Hace refencia a los elementos que tienen el atributo indicado
$("[atributo]")
	// Hace referencia a todos los elementos que tienen el atributo class
$("[class]")

// Hace referencia a los elementos de esa etiqueta que tengan el atributo con el valor indicado
$("etiqueta[atributo='valor']")
$('etiqueta[atributo="valor"]')
	//Hace referencia a todas las cajas de texto, input con el atributo type y el valor text
$("input[type='text']")
let selector="input[type='text']";
$(selector)
let tipo="text";
$("input[type='"+tipo+"']")

// Hace referencia a los elementos que tengan el atributo con el valor indicado
$("[atributo='valor']")
$('[atributo="valor"]')



// Hace referencia a los elementos de esa etiqueta que tengan el atributo con un valor distinto del indicado
// hace refencia a los elementos de esa etiqueta que no tienen el atributo indicado
$("etiqueta[atributo!='valor']")

	// Hace referencia a todos los div que tienen el atributo class con un valor distinto de dewc y
	// todos los div que NO tienen el atributo class
$("div[class!='dwec']")

// Hace referencia a los elementos que tengan el atributo con un valor distinto del indicado
// hace refencia a los elementos que no tienen el atributo indicado
$("[atributo!='valor']")

// Hace referencia a los elementos de esa etiqueta y que tienen el atributo indicado y que en el mismo al menos
 uno de sus valores es el indicado
$("etiqueta[atributo|='valor']")
	// Hace referencia a los div que tienen el atributo class y uno de sus valores es dwec.
$("div[class|='dwec']")

// Hace referencia a los elementos que tienen el atributo indicado y que en el mismo al menos
 uno de sus valores es el indicado
$("[atributo|='valor']")

// Hace refencia a los elementos de esa etiqueta que tienen el atributo indicado y que el valor
// del mismo empieza por la cadena indicada.
$("etiqueta[atributo^='cadena']")
	// Hace referencia a los div con el atributo class que empieza por dw.
$("div[class^='dw']")

// Hace refencia a los elementos que tienen el atributo indicado y que el valor
// del mismo empieza por la cadena indicada.
$("[atributo^='cadena']")

// Hace refencia a los elementos de esa etiqueta que tienen el atributo indicado y que el valor
// del mismo termina por la cadena indicada.
$("etiqueta[atributo$='cadena']")
	//Hace referecia a los div con el atributo class que termina con la cadena de.
$("div[class$='de']")

// Hace refencia a los elementos que tienen el atributo indicado y que el valor
// del mismo termina por la cadena indicada.
$("[atributo$='cadena']")

// Hace referencia a los elementos de la etiqueta indicada que tienen el atributo class y que éste contienen
// la cadena indicada
$("etiqueta[atributo*='cadena']")
	// Hace refencia a los div con el atributo class que contiene la cadena por 
$("div[class*='por']")

// Hace referencia a los elementos que tienen el atributo class y que éste contienen
// la cadena indicada
$("[atributo*='cadena']")

// Hace referencia al selector-2 que es un descendiente del selector-1
$("selecto-1 selector-2") 
	// Hace refencia a todos los span que están dentro de un div,
	// los span que son descendientes de un div.
$("div span")

// Hace refencia al selector-2 que es un hijo del selector-1
$("selecto-1 > selector-2") 
	// Hace referencia a los ol que son hijos de los div.
$("div > ol")

// Hace referencia al selector-2 que está detrás del selector-1. 
// Hace referencia al selector-2 que se encuentra en el documento HTML con posterioridad al selector-1
$("selector-1 ~ selector-2")
	// hace referencia al elemento con identificador dwec que está con posterioridad del elemento con identificador daw
$("#daw ~ #dwec")

// Hace referencia al selector-2 que es hermano del selector-1 y que se encuentra inmediantemente a continuación del selector-1.
$("selector-1 + selector-2")
	// Hace referencia al elemento con identificador dwec que está inmediantemente a continuación de elemento 
	// con identificador daw y que son hermanos.
$("#daw + #dwec")

// Hace referencia al selector-2 que es nieto o más del selector-1.
$("selector-1 * selector-2")
	// Hace referencia a los ol que están dentro de un div y que no son hijos, son nietos o más.
$("div * ol")

// Hace refencia al selector-2 que es el primer hijo del selector-1
$("selector-1 selector-2:first-child")
	// Hace referencia al span que es el primer hijo dentro de un div.
$("div span:first-child")

// Hace refencia al selector-2 que es el último hijo del selector-1
$("selector-1 selector-2:last-child")
	// Hace referencia al span que es el último hijo dentro de un div.
$("div span:last-child")

// Hace refencia al selector-2 que debe ser el hijo que ocupa la posición indicada dentro 
// del selector-1
$("selector-1 selector-2:nth-child(posición)")
	// Hace refencia al tercer hijo que es un li de un ol.
$("ol li:nth-child(2)")
	// Hace referencia al ol que sea el cuarto hijo de un div.
$("div ol:nth-child(3)")

// Hace referencia al selector-2 que es el único hijo dentro del selector-1
$("selector-1 selector-2:only-child")
	// hace referencia al elemento de la clase daw que es el único hijo del elemento
	// con identificador lista.
$("#lista .daw:only-child")

// Cuando el selector es un conjunto de elementos, hace referencia al elemento que 
// ocupa la posición indicada.
$("selector:eq(posición)")
	//Hace referencia al quinto li hijo de un ol.
$("ol>li:eq(4)")

// Cuando el selector es un conjunto de elementos, hace referencia al primero
$("selector:first")
	//Hace referencia a la primera lista ol.
$("ol:first")

// Cuando el selector es un conjunto de elementos, hace referencia al último
$("selector:last")
	// Hace refencia al último li
$("li:last")

// Cuando el selector es un conjunto de elementos, hace referencia a todos los elementos situados
// a continuación de la posición indicada.
$("selector:gt(posición)")
	// Hace refencia a los span que ocupan una posición posterior a la cuarta.
$("span:gt(3)")

// Cuando el selector es un conjuto de elementos, hace referecia a todos los elementos
// que hay antes del elementos que ocupa la posición indicada.
$("selector:lt(posición)")
	// Hace refecia a los tres primeros ul.
$("ul:lt(3)")

// Cuando el selector es un conjunto de elementos, hace referecia a los elementos 
// que ocupan posiciones pares.
$("selector:even")
	// Hace referencia a todos los tr pares de una tabla 
$("table tr:even")

// Cuando el selector es un conjunto de elementos, hace referecia a los elementos 
// que ocupan posiciones impares.
$("selector:odd")
	// Hace referencia a todos los tr impares de una tabla 
$("table tr:odd")

// Hace referencia al selector indicado que contiene el texto indicado.
$("selector:contains(texto)")
	// Hace referencia a los div que tengan en su contenido la cadena Quijote.
$("div:contains('Quijote')")

// Hace referencia al selector-1 que contiene el selector-2
$("selector-1:has(selector-2)")
	// Hace referencia a los elementos de la clase daw, que contengan elementos de la clase dwec.
$(".daw:has(.dwec)")

// Hace referencia al selector-1 que NO contiene el selector-2
$("selector-1:not(selector-2)")
	// Hace referencia a los div que no contengan elementos de la clase daw.
$("div:not(.daw)")

// Hace referencia a las cajas de texto.
$(":text")

// Hace refencia a los botones, que sean <input type="button">, button
$(":button")

// Hace referencia a las cabeceras h1, h2, h3, h4, h5, h6
$(":header")

// Hace referencia a imagenes <input type="image">
$(":images")

// Hace referencia a todos los elementos de entrada
$(":input")

// hace referencia a los radiobutton  <input type="radio">
$(":radio")

// hace referecia a los checkbox, o cajas de verificación 
$(":checkbox")

// hace referencia a los elementos seleccionados de radio y checkbox
$(":checked")
	// hace referencia los elementos seleccionados de los <input type="radio">
$("input[type='radio']:checked")
$(":radio:checked")
$("#datos>:radio:checked")

// los optuions seleccionados de un select.
$(":selected")

// El padre de un selector
$("selector:parent")

// Cuando tenemos un conjunto de elementos

// Para saber cuantos elementos hay
.length

	// Cuantos options están seleciconados 
$(":selected").length

// añade al conjunto de elementos, los elementos 
// indicados por el selector. Vamos a tener nuevo conjunto
// de elementos. Ampliar el conjunto de elementos
// para operar con ellos
.add("selector")

	// Los li y los option van a tener de color de los caracteres rojo
$("li").add("option").css("color","red");

// quita del conjunto el/los elementos del selector indicado
.not("selector")

	// de todos los li, quita los li de la lista con identificador milista.
$("li").not("#milista>li")

// De los elementos del conjunto filtra los del selector indicado.
.filter("selector")

	//  De todos los li nos quedamos con los li de las listas ordenadas ol.
$("li").filter("ol>li")

// Acceder al elemento del conjunto que ocupa una posición.
.eq(posición)

	// Accedemos al quinto option.
$("option").eq(4)

// Acceder al primer elemento del conjunto
.first()

//Acceder al último elemento del conjunto
.last()

// Obtener un subconjunto de elementos. Los existente entre las posiciones
// de inicio y final, excluyendo a este último.
.slice(posición-inicio[,posición-final])

// obtener los elementos que ocupan posiciones impares en el conjunto
.odd()

$("li").odd()
$("li:odd")

$("li").add("option").odd()
$("li,option:odd")
$("li:odd,option:odd")

// obtener los elementos que ocupan posiciones pares en el conjunto.
.even()

// descendientes directos, hijos, 
.children(["selector"])

$("div").children("ol")

// Para acceder al descendiente que se corresponde con un selector
.find("selector")
	
	// todos los span descendientes del elemento con identificador mitexto.
$("#mitexto").find("span")

// Hermano siguiente
.next()

$("#mitexto").next()
$("li").eq(indice).next()

// Hermano anterior
.prev()

// Todos los hermanos siguientes
.nextAll()

	// todos los li que hay a partir del cuarto incluido.
$("li").eq(2).nextAll()

// Todos los hermanos anteriores
.prevAll()

$("li").eq(2).prevAll()

// Todos los hermanos del siguientes del selector-1 hasta el selector-2 indicado, excluido éste
$(selector-1).nextUntil(selector-2)

// Todos los hermanos
.siblings()

// El elemento padre
.parent()

// Todos los ascendientes
.parents()


// Obtiene la posición que ocupa el elemento o selector idnicado en un conjunto.
.index("elemento|selector")

$("div").index("#mitexto")

// Desde el elemento actual del conjunto, todos los elementos existentes hasta el 
// el indicado por el selector, excluido este último
.nextUntil("selector")

$("div").eq(1).nextUntil("#mitexto");

// Para operar con elementos

// Modificar un atributo de un elemento
.attr(atributo,valor)

$("#mitexto").attr("disabled","true");

// Modioficar varios atributos de un elemento
.attr({"atributo-1":"valor-1", "atributo-2":"valor2" ...}])
$("#mienlace").attr({"href":"http://www.ifpleonardo.com",
				"title":"I.E.S. Leoanrdo da Vinci"})
$("div").attr({"class":"daw","disabled":"true"});

// Aplicar una propiedad de css
.css({"porpiedad"."valor"})

$("#mitabla tr:odd").css({"background-color":"blue"});

// Aplicar propiedades de css
.css({"propiedad-1":"valor1","propiedad-2":"valor2" ...})
$("#mitabla tr:even").css({"background-color":"red",
							"color":"yellow"});
							
// añadir una clase a un elemento/saber
.addClass("nombre-clase")

$("option").addClass("daw");

// quitar una clase a un elemento/s
.removeClass("nombre-clase")

$("option").removeClass("daw");

// añade/quita una clase a un elemento/s
.toggleClass("nombre-clase")

$("option").toggleClass("daw");

// crear y añadir elemento al final
.append(contenido)

$("#milista").append("<li>"+contenido+"</li>");

// crear y añadir elemento al inicio
.prepend(contenido)

$("#milista").prepend("<li>"+contenido+"</li>");

// crear y añadir elemento delante de otro
.before(contenido)

$("#milista>li").eq(posicion).before("<li>"+contenido+"</li>");

// crear y añadir elemento detras de otro
.after(contenido)

$("#milista>li").eq(posicion).after("<li>"+contenido+"</li>");

// Borrar un elemento
.remove()

$("#milista>li").eq(posicion).remove();

// Obtener el contenido HTML de un elemento
.html()

let texto=$("#milista").html();

// Para poner contenido HTML en un elemento
.html(contenido)
$("#mitexto").html("En un lugar de la <b>mancha</b> de cuyo <span class='daw'> nombre</span>")

// Para obtener el contenido, el texto sin html
.text()
let texto=$("#mitexto").text();

// Para asignar contenido, sin html
.text(contenido)

// Para los elementos de un formulario

// Para obtener el contenido de un elemento de un formulario

.val()

let minombre=$("#nombre").val();

// Para asignar contenido a un elemento de un formulario
.val(contenido);

$("#errNombre").val("Error en el nombre");

// Eventos

// Asignación de eventos. Cuando se produce el evento indicado
// sobre el selector se va a aejecutar la función.
$(selector).on(evento,función)

$(window).on("load",inicio);
function inicio(){
	$("#boton").on("click",procesar);
	$("#lista").on("change",tratar);
}

// cuando a un selector se le producen varios eventos
$(selector).on({"evento-1":función-1,"evento-2":función-2});

$("#nombre").on({"focus":entrar,"blur":salir});

// Desaginar una función a un evento.
$(selector).off("evento",función);

$("#lista").off("change",tratar);
$("#nombre").off();

//Propiedades
//Objeto event
	//target  elemento sobre el que se produce el evento
	//type nos indica el evento que se ha producido
	
	
	
	// Para indicar que no se haga la opción por defecto
	evento.preventDefault();
	
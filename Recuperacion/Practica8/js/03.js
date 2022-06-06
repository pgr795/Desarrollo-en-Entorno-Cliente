$(window).on("load",inicio);

function inicio() {
    $("#aplicar").on("click",aplicar);
    $(".salamanca").on("mouseover",aplicarParrafo);
    $(".salamanca").on("mouseout",aplicarParrafo);
    $("#cambiar").on("click",cambiar);
}

function aplicar() {
    $("#coches tr:odd").css({"background-color":"orange","color":"green"});
    $("#coches tr:even").css({"background-color":"yellow","color":"red"});
}
function aplicarParrafo(){
    $(".salamanca").toggleClass("saltarina");    
}

function cambiar() {
    let Comunidades= new Array("Galicia","Asturias","Cantabria","País Vasco","Navarra",
	"Aragón","Cataluña","Comunidad Valenciana","La Rioja","Castilla-León","Castilla-La Mancha",
	"Extremadura","Murcia","Andalucia","Islas Canarias","Islas Baleares","Madrid","Ceuta","Melilla");
	let evalComunidades= new Array("galicia","asturias","cantabria","vasco","navarra",
	"aragon","catalunia","valenciana","rioja","castillaleon","castillamancha",
	"extremadura","murcia","andalucia","canarias","baleares","madrid","ceuta","melilla");
	let galicia= new Array("A Coruña","Lugo","Ourense","Pontevedra");
	let asturias= new Array("Asturias");
	let cantabria= new Array("Cantabria");
	let vasco= new Array("Álava","Guipúzcoa","Vizcaya");
	let navarra= new Array("Navarra");
	let aragon= new Array("Huesca","Teruel","Zaragoza");
	let catalunia= new Array("Barcelona","Gerona","Lléida","Tarragona");
	let valenciana= new Array("Alicante","Castellón","Valencia");
	let rioja= new Array("La Rioja");
	let castillaleon= new Array("Ávila","Burgos","León","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora");
	let castillamancha= new Array("Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo");
	let extremadura= new Array("Badajoz","Cáceres");
	let murcia= new Array("Murcia");
	let andalucia= new Array("Almería","Cádiz","Córdoba","Granada","Huelva","Jaén","Málaga","Sevilla");
	let canarias= new Array("Las Palmas","Santa Cruz de Tenerife");
	let baleares= new Array("Islas Baleares");
	let madrid= new Array("Madrid");
	let ceuta=new Array("Ceuta");
	let melilla=new Array("Melilla");

    let ol=$("#ol");
    if($(ol)!=null){
        $("#cambiar").after("<ol></ol>");
    }
    let comunidadSelected=$("#comunidades option:selected");
    for (let i = 0; i < comunidadSelected.length; i++) {
        let valCom=$(comunidadSelected).eq(i).val().trim();
        let posicion=Comunidades.indexOf(valCom);
        let comunidad=eval(evalComunidades[posicion]);
        for (let a = 0; a < comunidad.length; a++) {
            let ciudad=$("#ciudades td");
            for (let b = 0; b < ciudad.length; b++) {
                if($(ciudad).eq(b).text().trim()==comunidad[a]){
                    $(ciudad).eq(b).remove();
                    $("ol").append("<li>"+comunidad[a]+"</li>")
                }
            }    
        }
    }
}
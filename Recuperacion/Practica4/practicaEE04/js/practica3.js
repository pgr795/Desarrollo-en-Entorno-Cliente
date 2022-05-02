$(window).on("load",inicio);

function inicio(){
    $("#aplicacoches").on("click",aplicarTabla);
    $("#aplicatabla").on("click",aplicarTabla2);
}

function aplicarTabla(){
        let valor=Math.floor(Math.random() * 255)+1;
        let valor2=Math.floor(Math.random() * 255)+1;
        let valor3=Math.floor(Math.random() * 255)+1;
        $("#tablacoches tr:odd").css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
        valor=Math.floor(Math.random() * 255)+1;
        valor2=Math.floor(Math.random() * 255)+1;
        valor3=Math.floor(Math.random() * 255)+1;
        $("#tablacoches tr:even").css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
}
function aplicarTabla2(){
    let valor=Math.floor(Math.random() * 255)+1;
    let valor2=Math.floor(Math.random() * 255)+1;
    let valor3=Math.floor(Math.random() * 255)+1;
    let filas=$("#cochestabla tr");
    let longitud=filas.length;
    let indice=0;
    while(indice<longitud){
        let columna=$(filas).eq(indice);
        let celdasTH=$(columna).children("th");
        let celdas=$(columna).children("td");
        $(celdasTH).eq(0).css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
        $(celdas).eq(0).css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
        indice++;
    }

    valor=Math.floor(Math.random() * 255)+1;
    valor2=Math.floor(Math.random() * 255)+1;
    valor3=Math.floor(Math.random() * 255)+1;
    indice=0;

    while(indice<longitud){
        let columna=$(filas).eq(indice);
        let celdasTH=$(columna).children("th");
        let celdas=$(columna).children("td");
        $(celdasTH).eq(1).css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
        $(celdas).eq(1).css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
        indice++;
    }

    valor=Math.floor(Math.random() * 255)+1;
    valor2=Math.floor(Math.random() * 255)+1;
    valor3=Math.floor(Math.random() * 255)+1;
    indice=0;

    while(indice<longitud){
        let columna=$(filas).eq(indice);
        let celdasTH=$(columna).children("th");
        let celdas=$(columna).children("td");
        $(celdasTH).eq(2).css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
        $(celdas).eq(2).css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
        indice++;
    }
}

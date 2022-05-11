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
    let valor4=Math.floor(Math.random() * 255)+1;
    let valor5=Math.floor(Math.random() * 255)+1;
    let valor6=Math.floor(Math.random() * 255)+1;
    let filas=$("#cochestabla tr");
    let longitud=filas.length;
    let indice=0;
    let celdasTH=$(filas).eq(0).children("th");
    $(celdasTH).odd.css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
    $(celdasTH).even.css({"background-color":"rgb("+valor4+","+valor5+","+valor6+")"});
    while(indice<longitud){
        let celdas=$(filas).eq(indice).children("td");
        $(celdas).odd.css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
        $(celdas).even.css({"background-color":"rgb("+valor4+","+valor5+","+valor6+")"});
        indice++;
    }
}

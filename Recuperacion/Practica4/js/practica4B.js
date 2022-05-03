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
    $("#cochestabla col:odd").css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
    valor=Math.floor(Math.random() * 255)+1;
    valor2=Math.floor(Math.random() * 255)+1;
    valor3=Math.floor(Math.random() * 255)+1;
    $("#cochestabla col:even").css({"background-color":"rgb("+valor+","+valor2+","+valor3+")"});
}

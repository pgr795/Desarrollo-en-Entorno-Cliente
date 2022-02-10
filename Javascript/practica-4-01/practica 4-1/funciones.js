window.onload= inicio;

function inicio(){
    document.formulario.caja2.onclick=mostrarMedia;
}

function media(){
    var parametros=arguments.length;
    var suma=0
    var media=0;
    for(let i=0; i <arguments.length;i++){
        suma+=arguments[i];
    }
    
    media=suma/parametros;
    
    return media;
    }

    function mostrarMedia(){
        var resultado=media(20,15,10,5);
        document.formulario.caja1.value=resultado;
    }


//document.writeln
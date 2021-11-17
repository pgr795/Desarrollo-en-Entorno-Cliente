window.onload= inicio;

function inicio(){
    document.formulario.caja3.onclick=mostrarMaximo;
}

function maximos(parametro,parametro2,...parametro3){
    var arrayMax=new Array();
    var contador=2;
    var parametros=2+parametro3.length;
    if(parametros>=2){
        arrayMax[0]=parametro;
        arrayMax[1]=parametro2;
        for (let i = 0; i < parametro3.length; i++) {
            arrayMax[contador]=parametro3[i];
            contador++;
        }
        arrayMax.sort(function(a, b){return b - a});
        return arrayMax;
    }
    else {
        arrayMax[0]+=parametro;
        arrayMax[1]+=parametro2;
        arrayMax.sort(function(a, b){return b - a});
        return arrayMax;
    }
}

    function mostrarMaximo(){
        var resultado=maximos(7,15,10,3);
        
        document.formulario.caja1.value=resultado[0];
        document.formulario.caja2.value=resultado[1];
    }


//document.writeln
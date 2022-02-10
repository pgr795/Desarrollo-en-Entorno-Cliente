window.onload= inicio;

function inicio(){
    document.formulario.caja7.onclick=mostrarMinimos;
}

function minimos(primero,segundo, tercero, cuarto=13, quinto=7){
    var arrayMax=new Array(primero,segundo,tercero,cuarto,quinto);
    return arrayMax;
}    

function mostrarMinimos(){
    var resultado=minimos(8,15,10,14,1);
    document.formulario.caja1.value=resultado[0];
    document.formulario.caja2.value=resultado[1];
    document.formulario.caja3.value=resultado[2];
    document.formulario.caja4.value=resultado[3];
    document.formulario.caja5.value=resultado[4];
    resultado.sort(
        function(a, b){
            return a - b
        }
    );
    document.formulario.caja6.value=resultado[0];
}


//document.writeln
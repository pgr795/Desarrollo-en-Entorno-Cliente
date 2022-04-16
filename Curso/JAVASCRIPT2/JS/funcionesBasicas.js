function letras(letra){
    var letra = letra.toUpperCase();
    return (letra >= "A" && letra <="Z");
}

function letras2(letra){
	var letra = letra.toUpperCase();
	var masLetras=("ÚÁÉÍÓÑÜ");
	var especiales=("- ");
    return ((letra >= "A" && letra <="Z") ||  masLetras.includes(letra) || especiales.includes(letra));
}

function letras3(letra){
	var letra = letra.toUpperCase();
	var masLetras=("ÚÁÉÍÓÑÜ");
	var especiales=("ºª.- ");
    return ((letra >= "A" && letra <="Z") ||  masLetras.includes(letra) || especiales.includes(letra));
}

function letras4(letra){
	var letra = letra.toUpperCase();
	var masLetras=("ÚÁÉÍÓÑÜ");
	var especiales=(" ");
    return ((letra >= "A" && letra <="Z") ||  masLetras.includes(letra) || especiales.includes(letra));
}

function letras5(letra){
	var letra = letra.toUpperCase();
	var masLetras=("ÚÁÉÍÓÑÜ");
	var especiales=("- ");
    return ((letra >= "A" && letra <="Z") || (letra >= "0" && letra <="9") || masLetras.includes(letra) || especiales.includes(letra));
}

function letras6(letra){
	var letra = letra.toUpperCase();
	var masLetras=("ÚÁÉÍÓÑÜ");
	var especiales=(".- ");
    return ((letra >= "A" && letra <="Z") || (letra >= "0" && letra <="9") || masLetras.includes(letra) || especiales.includes(letra));
}

function letras7(letra){
	var letra = letra.toUpperCase();
	var masLetras=("ÚÁÉÍÓÑÜ");
	var especiales=(". ");
    return ((letra >= "A" && letra <="Z") || (letra >= "0" && letra <="9") || masLetras.includes(letra) || especiales.includes(letra));
}

function especial(aux){
	var especial = aux.toUpperCase();
	var especiales=("S/N");
    return ((especial >= "0" && especial <="9")  || especiales.includes(especial));
}

function NumerosLetras(aux){
	var letraNumero = aux.toUpperCase();
    return ((letraNumero >= "0" && letraNumero <="9")  || (letraNumero >= "A" && letraNumero <="Z"));
}

function Numeros(aux){
    return ((aux >= "0" && aux <="9"));
}


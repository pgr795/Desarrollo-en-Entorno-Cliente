<?php

$autor=$_REQUEST["autor"];

// $Cervantes="El cerco de Numancia,El trato de Argel,La cueva de Salamanca,El retablo de las maravillas,El viejo celoso,El laberinto de amor,El gallardo español,El rufián dichoso,La guarda cuidadosa,La entretenida,Los dos habladores";

// $Sade="Los 120 días de Sodoma,Justine o los infortunios de la virtud,Juliette o las prosperidades del vicio,Los crímenes del amor,Diálogo Entre un Sacerdote y un Moribundo,La nueva Justine: O las desgracias de la virtud,Los Infortunios Dela Virtud,Historia de Aline y Valcour,La marquesa de Gange,Ensest,Eugenia de Franval";

// $Goethe="Der Erlkönig,Prometeo,El aprendiz de brujo,Fausto,Teoría de los colores,Goethes Werke,Italienische Reise,Welcome and Farewell,Las afinidades electivas,May Song,Gefunden,Der Osterspazierg";

// $Austen="Orgullo y prejuicio,Emma,Sense and Sensibility,Sanditon and The Watsons: Austen's Unfinished Novels,Persuasión,
// Mansfield Park,La abadía de Northanger,The Wit and Wisdom of Jane Austen,Lady Susan,Love and Friendship,Los Watson,Sense and Sensibility";

// $Mary="El último hombre,Mathilda,Cuentos góticos,Valperga,Frankenstein,Lodore";


$Cervantes="Don Quijote de la Mancha";
$Sade="Los 120 días de Sodoma";
$Goethe="Fausto";
$Austen="Orgullo y prejuicio";
$Mary="Frankenstein";

if($autor=="CERVANTES"){
    $respuesta=$Cervantes;
    echo $respuesta;
}
else if($autor=="SADE"){
    $respuesta=$Sade;
    echo $respuesta;
}
else if($autor=="GOETHE"){
    $respuesta=$Goethe;
    echo $respuesta;
}
else if($autor=="AUSTEN"){
    $respuesta=$Austen;
    echo $respuesta;
}
else if($autor=="MARY"){
    $respuesta=$Mary;
    echo $respuesta;
}
?>
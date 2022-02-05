<?php
header('Content-Type:text/xml');
$marcas="<lista><marcatv><marcas>LG</marcas></marcatv><marcatv><marcas>SAMSUNG</marcas></marcatv><marcatv><marcas>SONY</marcas></marcatv><marcatv><marcas>XIAOMI</marcas></marcatv><dimensiones><dimension>40</dimension><dimension>50</dimension><dimension>60</dimension><dimension>65</dimension></dimensiones></lista>";
echo $marcas;
?>
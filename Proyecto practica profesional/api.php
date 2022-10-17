<?php
require 'conexion.php';
//convierte el json a array
$productos=json_decode($_POST['json'],true);
//recorrer el arreglo
foreach ($productos as $producto){
     $codigo=$producto['codigo'];
     $nombre=$producto['nombre'];
     $cantidad=$producto['cantidad'];
     $precio=$producto['precio'];
     $subtotal=$pructo['subtotal'];
     $isv=$pructo['isv'];
     $total=$producto['total'];
     $bonificacion=$producto['bonificacion'];
     $guardar=mysqli_query($con,"INSERT INTO detalle_factura (codigo,nombre, cantidad, precio,subtotal,isv, total) VALUES ('$codigo','$nombre', '$cantidad', '$precio','$subtotal','$isv', '$total','$bonificacion')");
}
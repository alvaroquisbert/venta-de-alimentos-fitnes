<?php
//conectando a la base de datos 
$host="185.201.11.212";
$bd="u868164586_wallas";
$usuario="u868164586_wallas";
$contraseña="B!uwj$]M";
$cnx=new mysqli($host,$usuario,$contraseña,$bd);
$errorCnx=false;
if($cnx->connect_error){
     echo"error";
     $errorCnx=true;
}
else{
     echo"conexion correcta:) alvaro quisbert";
}
if($errorCnx==false){
$tmp="CREATE TABLE usuarioBDAlvaroqisbert (id int(10) NOT NULL AUTO_INCREMENT,
     nombre varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
     apellido varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
     correo varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
     contraseña varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
     fechaCreado datetime DEFAULT NULL,
     fechaEditado datetime DEFAULT NULL,
     fechaEliminado datetime DEFAULT NULL,
     usuarioIdCrea int(11) DEFAULT NULL,
     usuarioIdActualiza int(11) DEFAULT NULL,
     usuarioIdElimina int(11) DEFAULT NULL,
     PRIMARY KEY (id)
   )";
   if($cnx->query($tmp)){
        echo"se creo la tabla ususario";
        ///crea al ususario administardor 
        $tmp="INSERT INTO usuarioBDAlvaroquisbert(nombre, apellido,correo,contraseña,fechaCreado,fechaEditado,fechaEliminado,usuarioIdCrea,usuarioIdActualiza,usuarioIdElimina)
        values ('Admin','istrador','admin@ejemplo.io','123',NOW(),NOW(),bull,null,null,null,null)";


     } else echo"no se creo la tabla.";
}
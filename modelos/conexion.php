<?php
class Cnx{
     private $host="185.201.11.212";
     private $bd="u868164586_wallas";
     private $usuario="u868164586_wallas";
     private $contraseña="B!uwj$]M";
     private $cnx;
     function Cnx(){
          try{
        $this->cnx=new PDO("mysql:host=$this->host;dbname=$this->bd",$this->usuario, $this->contraseña);
     }catch (PDOException $e){
          echo "error en la conexion";
     }
}
function getCnx(){
     return $this->cnx;
}
}

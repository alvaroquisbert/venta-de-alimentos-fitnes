<?php 
include 'conexion.php';

class categoria{
     private $nombre;
     private $fechaCreado;
     private $fechaEditado;
     private $fechaEliminado;
     private $usuarioIdCrea;
     private $usuarioIdActualiza;
     private $usuarioIdElimina;

//constructor
function categoria(){
    
     $this->nombre="";
}

//sets y $gets
//funciones personalisados 
function obtListcategoria(){
     $objCnx=new Cnx();
     $cnx=$objCnx->getCnx();
     $q="SELECT*FROM usuarioBDAlvaroquisbert;";
     $query=$cnx->prepare($q);
     //$cnx->query($q);
     $query->execute();
     return $query->fetchAll();
     
}
function obtcategoria($id){
     $objCnx=new Cnx();
     $cnx=$objCnx->getCnx();
     $q="SELECT*FROM usuarioBDAlvaroquisbert where id=$id;";
     $query=$cnx->prepare($q);
     //$cnx->query($q);
     $query->execute();
     return $query->fetchAll();
}
function savecategoria($id,$usuario){
     $objCnx=new Cnx();
     $cnx=$objCnx->getCnx();
     $q="INSERT INTO usuarioBDAlvaroquisbert(nombre)values(:nombre)";
     $query=$cnx->prepare($q);
     //$cnx->query($q);
     return $query->execute(["nombre"=>$usuario["nombre"]]);
     
}

}


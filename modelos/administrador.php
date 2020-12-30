<?php 
include 'conexion.php';

class administrador{
     private  $idusuario;
     private $fechaCreado;
     private $fechaEditado;
     private $fechaEliminado;
     private $usuarioIdCrea;
     private $usuarioIdActualiza;
     private $usuarioIdElimina;

//constructor
function administrador(){
    
     $this->usuarioid="";

}

//sets y $gets
//funciones personalisados 
function obtListaadministrador() {
     $objCnx = new Cnx();
     $cnx = $objCnx->getCnx();
     $q = "SELECT * FROM `administrador`";
     $query = $cnx->prepare($q);
     $query->execute();
     return $query->fetchAll(PDO::FETCH_ASSOC);
 }
function obtuadministrador($id){
     $objCnx=new Cnx();
     $cnx=$objCnx->getCnx();
     $q="SELECT*FROM usuarioBDAlvaroquisbert where id=$id;";
     $query=$cnx->prepare($q);
     //$cnx->query($q);
     $query->execute();
     return $query->fetchAll();
}
function saveusuario($id,$usuario){
     $objCnx=new Cnx();
     $cnx=$objCnx->getCnx();
     $q="INSERT INTO usuarioBDAlvaroquisbert(idusuario)values(:idusuario)";
     $query=$cnx->prepare($q);
     //$cnx->query($q);
     return $query->execute(["idusuario"=>$usuario["idusuario"]]);
     
}

}

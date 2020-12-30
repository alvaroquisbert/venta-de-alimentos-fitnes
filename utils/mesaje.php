<?php
function resMensaje($codigo=404,$mensaje="metodo no valido"){
 http_response_code($codigoHTTP);
 $data = array("msg"=>"$mensaje");
 $res = json_encode($data);
 echo $res;
}
function resData($codigoHTTP=404,$Data="null"){
     http_response_code(200);
    
   $res = json_encode($data);
     echo $res;   
}
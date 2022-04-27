<?php
    $error="";
    foreach ($_POST as $campo => $valor) {
        if(empty($valor)) $error=$error."El campo:$campo no tiene valor<br>";
    }
    if(strlen($error)>0) header("Location: index.php?error=$error");
    //NO HAY ERROR
    $mysqli = new mysqli("localhost", "root", "", "beert");
    if ($mysqli->connect_errno) {
        $error="Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedido de cervezas</title>
</head>
<body>
    <p><?=$error?></p>
</body>
</html>
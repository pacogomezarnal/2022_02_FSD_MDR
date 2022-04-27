<?php
    if(isset($_GET['error'])) $errorMsg=$_GET['error'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap" rel="stylesheet">     
    <link rel="stylesheet" href="./css/main.css">
<title>BEERT</title>
</head>
<body>
    <div id="cabecera">
        <nav>BEERT</nav>
    </div>
    <div class="contenido">
        <div class="productos">
            <p class="producto">Pack de 12 cervezas Classic Munich. Cerveza que recuerda a las German Munich, amarga, de cuerpo ligero,  de color dorado y con ese toque peculiar que le dan las algas marinas. Ideal para maridar con unas tapas, tablas de jamón y/o quesos, carnes, conservas o para una buena barbacoa.</p>
            <p class="producto">Pack de 12 cervezas Sailor Pilsen. La cerveza Sailor Pilsen tiene un sabor fino y aromático, con espuma persistente ligeramente amarga y fresca. ideal para maridar con pescados, mariscos, verduras, ensaladas o para cualquier ocasión con un aperitivo. Servir bien fría.</p>
        </div>
        <?php
            if(isset($_GET['error'])){
        ?>
                <div class="error">
                    <p><?=$errorMsg?></p>
                 </div>
        <?php
            }
        ?>
        <div class="formulario" >
            <form action="pedido.php" method="POST">
                <div class="elemento">
                    <label for="nombre">Nombre</label>
                    <input id="nombre" name="nombre" type="text" placeholder="Indique el nombre">
                </div>
                <div class="elemento">
                    <label for="direccion">Direccion</label>
                    <input id="direccion" name="direccion" type="text" placeholder="Indique la direccion">
                </div>
                <div class="elemento">
                    <label for="producto">Producto</label>
                    <select name="producto" id="producto">
                        <option value="munich">Classic Munich</option>
                        <option value="pilsen">Sailor Pilsen</option>
                        <option value="cata">CATA</option>
                    </select>
                </div>
                <div class="elemento">
                    <label for="cantidad">Cantidad</label>
                    <input id="cantidad" name="cantidad" type="text" placeholder="Indique la cantidad">
                </div>
                <input type="submit">
            </form>
        </div>
    </div>
</body>
</html>
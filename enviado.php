<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Beer Thread</title>
</head>
<body>
    <header>
        <a href="index.html">
            <img src="imgs/logo.png" alt="">
        </a>
        <nav>
            <a href="index.html">Menu</a>
            <a href="">Datos</a>
            <a href="contacto.html">Contacto</a>
            <a href="clima.html">Clima</a>
        </nav>
    </header>

    <main>
        <div class="carrusel">
            <div class="mensaje">
            
            <?php
                $name = $_POST['nameInput'];
                $mail = $_POST['emailInput'];
                $mensajeInput = $_POST['messageInput'];

                $header = 'From: ' . $mail . " \r\n";
                $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
                $header .= "Mime-Version: 1.0 \r\n";
                $header .= "Content-Type: text/plain";

                $mensaje = "Este mensaje fue enviado por " . $name . ",\r\n";
                $mensaje .= "Su e-mail es: " . $mail . " \r\n";
                $mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
                $mensaje .= "Enviado el " . date('d/m/Y', time());
                $mensaje .= $mensajeInput;

                $to = 'pablograff72@gmail.com.com';
                $affair = 'Mensaje de mi sitio web';

                mail = mail($to, $affair, utf8_decode($mensaje), $header);
                
                header("Location:index.html");

                if ($mail) {
                    echo "<h1>¡Tu mensaje a sido enviado exitosamente!</h1>";
                }


            ?>

                

            </div>
        </div>
    </main>

    <footer>
        <img src="imgs/logo.png" alt="">
        <ul>
            <li>
                <a href="">
                    <img src="imgs/fb.png" alt="">
                </a>
            </li>
            <li>
                <a href="">
                    <img src="imgs/instagram.png" alt="">
                </a>
            </li>
            <li>
                <a href="">
                    <img src="imgs/twitter.png" alt="">
                </a>
            </li>
            <li>
                <a href="">
                    <img src="imgs/whatsapp.png" alt="">
                </a>
            </li>
        </ul>
        <p><span>&copy</span> Copyrigth - Grupo 21</p>
    </footer>
    
    <script src="js/main.js"> </script>

</body>
</html>
<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$name = $_POST["name"];
$phone = $_POST["phone"];
$additional = "";
if (isset($_POST["email"])) {
    $additional = $_POST["email"];
}

if (isset($_POST["comments"])) {
    $additional = $_POST["comments"];
}

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();
    $mail->CharSet = 'utf-8';                                      // Set mailer to use SMTP
    $mail->Host = 'ssl://smtp.yandex.ru';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'admin@pixlprint.by';                 // SMTP username
    $mail->Password = 'tFkwc4ei';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('admin@pixlprint.by', $name);
    $mail->addAddress('kirill.tovpinets@icloud.com', 'Kirill Tovpinets');     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Посетитель сайта pixlprint.by оставил заявку';
    $mail->Body    = "Посетитель с именем $name оставил заявку на сайте pixlprint.by. Связаться с ним можно по телефону $phone. Дополнительная информация:\n $additional";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
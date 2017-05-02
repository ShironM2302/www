<?php
$firstname = $_POST['name'];
$from = $_POST['email'];
$message = $_POST['msg'];

$to = "shironm1993@gmail.com";
$subject = "Hello World";


$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "Mail Sent.";
?>
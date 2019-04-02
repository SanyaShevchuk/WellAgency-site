<?php

$recepient = "shevchuksanya983@gmail.com"//"Aleks.Mikhnyuk@gmail.com";
$sitename = "WellAgency";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$info = trim($_POST["info"]);

$message = "Имя: $name \nТелефон: $phone \n 
Почта: $email \nТекст: $info";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
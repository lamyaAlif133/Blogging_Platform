<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $pass = $_POST["pass"];

  
    $_SESSION['name'] = $name;
    $_SESSION['pass'] = $pass;
    

    header('location: ../VIEW/rich-text-editor.php');
}
?>

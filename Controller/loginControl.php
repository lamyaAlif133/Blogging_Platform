<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $pass = $_POST["pass"];

   // echo $name;
    $_SESSION['name'] = $name;
    $_SESSION['pass'] = $pass;
    
    //echo $_SESSION['name'];

    header('location: ../VIEW/rich-text-editor.php');
}
?>

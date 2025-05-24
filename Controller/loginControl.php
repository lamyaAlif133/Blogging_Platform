<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require('../Model/db.php');
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // The login form uses "name" for email and "pass" for password.
    $email = trim($_POST["name"]);
    $password = trim($_POST["pass"]);
    $_SESSION['name'] = $email;
    //$_SESSION['pass'] = $pass;
    $errors = [];

    // Validate email and password
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }
    if (strlen($password) < 6) {
        $errors[] = "Password must be at least 6 characters.";
    }

    if (count($errors) == 0) {
        $con = getConnection();
        if (!$con) {
            die("Database connection failed: " . mysqli_connect_error());
        }

        $sql = "SELECT * FROM user WHERE email='$email' AND password='$password'";
        $result = mysqli_query($con, $sql);

        if (mysqli_num_rows($result) > 0) {
            $user = mysqli_fetch_assoc($result);
            $_SESSION['user'] = $user;
            header('Location: ../VIEW/rich-text-editor.php');
            exit();
        } else {
            $errors[] = "Invalid email or password.";
        }
    }

    // If there are errors, display them.
    if (count($errors) > 0) {
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
        echo "<p><a href='../VIEW/login.html'>Back to login</a></p>";
    }
} else {
    header('Location: ../VIEW/login.html');
    exit();
}

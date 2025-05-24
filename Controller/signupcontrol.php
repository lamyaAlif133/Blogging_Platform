<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require('../Model/db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Trim and collect inputs
    $name             = trim($_POST['name']);
    $email            = trim($_POST['email']);
    $phone            = trim($_POST['phone']);
    $gender           = trim($_POST['gender']);
    $profession       = trim($_POST['profession']);
    $password         = trim($_POST['password']);
    $confirmPassword  = trim($_POST['confirmPassword']);
    $dob              = trim($_POST['dob']);
    $address          = trim($_POST['address']);

    $errors = [];
    // echo $name;
    // echo $email;
    // // Validation
    if ($name == "") $errors[] = "Name is required.";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Invalid email format.";
    if (!ctype_digit($phone) || strlen($phone) != 11) $errors[] = "Phone must be 11 digits.";
    if ($gender == "") $errors[] = "Gender is required.";
    if ($profession == "") $errors[] = "Profession is required.";
    if (strlen($password) < 6) $errors[] = "Password must be at least 6 characters.";
    if ($password !== $confirmPassword) $errors[] = "Passwords do not match.";
    if ($dob == "") {
        $errors[] = "Date of birth is required.";
    } else {
        $dobDate = new DateTime($dob);
        $today = new DateTime();
        $age = $today->diff($dobDate)->y;
        if ($age < 18) {
            $errors[] = "You must be at least 18 years old.";
        }
    }
    if ($address == "") $errors[] = "Address is required.";

    //Insert if no errors
    //echo count($errors);

    if (count($errors) == 0) {
        $con = getConnection();

        $sql = "INSERT INTO user (name, email, phone, profession, gender, password, dob, address)
                    VALUES ('$name', '$email', '$phone', '$profession', '$gender', '$password', '$dob', '$address')";

        if (mysqli_query($con, $sql)) {
            header('Location: ../VIEW/login.html');
            exit();
        } else {
            echo "Database error: " . mysqli_error($con);
        }
    } else {
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
    }
} else {
    header('Location: ../VIEW/login.html');
    exit();
}

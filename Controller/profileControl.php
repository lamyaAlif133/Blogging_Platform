<?php
session_start();
require('../Model/db.php');

$con = getConnection();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $action = $_POST['action'];

    if ($action === "update") {
        updateProfile($con);
    } elseif ($action === "delete") {
        deleteAccount($con);
    } else {
        echo "Invalid action.";
    }
} else {
    header("Location: ../VIEW/login.html");
    exit();
}

function updateProfile($con)
{
    $id = $_POST['id'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $profession = $_POST['profession'];
    $gender = $_POST['gender'];
    $dob = $_POST['dob'];
    $address = $_POST['address'];

    $sql = "UPDATE user SET 
                name = '$name', 
                phone = '$phone', 
                profession = '$profession', 
                gender = '$gender', 
                dob = '$dob', 
                address = '$address' 
            WHERE id = '$id'";

    if (mysqli_query($con, $sql)) {
        echo "<script>alert('Profile updated successfully'); window.location.href='../VIEW/Authors-profile.php';</script>";
    } else {
        echo "<script>alert('Error updating profile: " . mysqli_error($con) . "'); window.history.back();</script>";
    }
}

function deleteAccount($con) {
    $id = $_POST['id'];

    if (empty($id)) {
        echo "<script>alert('User ID not provided.'); window.history.back();</script>";
        return;
    }

    $sql = "DELETE FROM user WHERE id = '$id'";

    if (mysqli_query($con, $sql)) {
        session_destroy();
        echo "<script>alert('Account deleted successfully'); window.location.href='../VIEW/Signup.html';</script>";
    } else {
        echo "<script>alert('Error deleting account: " . mysqli_error($con) . "'); window.history.back();</script>";
    }
}


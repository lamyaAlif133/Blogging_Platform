<?php
function logout()
{
    session_start();
    session_destroy();
    header('location: ../VIEW/login.html');
}

<?php
// header("Content-type: text/html; charset=utf-8");
header('access-control-allow-origin: *');
$servername = "mysql-server";
$username = "root";
$password = "root";
$database_name = "music_web";

// Create connection
$db = new mysqli($servername, $username, $password, $database_name);
mysqli_set_charset($db, 'UTF8');

// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
?>
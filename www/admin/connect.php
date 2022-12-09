<?php
  header('Access-Control-Allow-Origin: *');
  $servername = "mysql-server";
  $username = "root";
  $password = "root";
  $database_name = "music_web_management";

  $db = new mysqli($servername, $username, $password, $database_name);
      $db->set_charset("utf8");
      if ($db->connect_error) {
          die('Không thể kết nối database: ' . $db->connect_error);
      }
?>
<?php
require 'connect.php';

// $email = $_POST['email'];
// $password = $_POST['pw'];

$email = 'user1@gmail.com';
$password = '123456';

$stmt = $db->prepare("SELECT * FROM `user` WHERE email = ? AND password = ?;");
$stmt->bind_param('ss', $email, $password);
$stmt->execute();

$res = $stmt->get_result();

if ($res->num_rows == 1) {
    $user =  $res->fetch_array();
    // set session
    die(json_encode(
        array(
            'status' => true,
            'data' => $user
        )
    ));
}

die(json_encode(
    array(
        'status' => false,
        'data' => 'Tài khoản hoặc mật khẩu không chính xác'
    )
));
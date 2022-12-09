<?php
require 'connect.php';

// $username = $_POST['user_name'];
// $email = $_POST['email'];
// $password = $_POST['pw'];
// $password = $_POST['pw2'];

$username = 'user12';
$email = 'user12@gmail.com';
$password = '1234566';
$password2 = '1234566';

if ($password != $password2) {
    die(json_encode(
        array(
            'status' => false,
            'data' => 'Mật khẩu xác nhận không trùng khớp'
        )
    ));
}

$stmt = $db->prepare("SELECT * FROM `user` WHERE email = ? OR ten_nguoi_dung = ?;");
$stmt->bind_param('ss', $email, $username);
$stmt->execute();

$res = $stmt->get_result();

if ($res->num_rows != 0) {
    die(json_encode(
        array(
            'status' => false,
            'data' => 'Email hoặc tên người dùng đã được sử dụng'
        )
    ));
}

$stmt = $db->prepare("INSERT INTO `user` (`id`, `ten_nguoi_dung`, `email`, `password`, `avt`) VALUES (NULL, ?, ?, ?, '');");
$stmt->bind_param('sss', $username, $email, $password);

if ($stmt->execute()) {
    // set session
    die(json_encode(
        array(
            'status' => true,
            'data' => 'Tạo tài khoản thành công'
        )
    ));
}

die(json_encode(
    array(
        'status' => false,
        'data' => 'Vui lòng thử lại sau.'
    )
));
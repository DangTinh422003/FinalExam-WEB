<?php

/**
 * Nhận chuỗi
 * POST or GET gì cũng dc
 * liệt kê các bài hát có chứa ký tự đó trong tên
 */

$key = $_REQUEST['key'];
// $key = 'take my';
// không nhận được id bài hát
if (!isset($key) || strlen($key) <= 1) {
    die(json_encode(
        array(
            'status' => false,
            'data' => 'Chuỗi rỗng!'
        )
    ));
}

require 'connect.php';
$sql = "SELECT * FROM music WHERE ten_bai_hat like '%" . $key . "%';"; // SQL with parameters
$res = $db->query($sql);


if (!$res) {
    die(json_encode(
        array(
            'status' => false,
            'data' => 'Lỗi không xác định'
        )
    ));
}

$music = $res->fetch_assoc(); // fetch data
$db->close();

if ($music == null) {
    die(json_encode(
        array(
            'status' => false,
            'data' => 'Không tìm thấy bài nhạc nào'
        )
    ));
}

die(json_encode(
    array(
        'status' => true,
        'data' => $music
    )
));
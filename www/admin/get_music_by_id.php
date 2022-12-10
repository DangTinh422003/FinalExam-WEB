<?php

/**
 * Nhận 1 id bài hát
 * POST or GET gì cũng dc
 * trả về bài hát đó
 */

$id = $_REQUEST['id'];
// không nhận được id bài hát
if (!isset($id)) {
    die(json_encode(
        array(
            'status' => false,
            'data' => 'ID bài hát không hợp lệ'
        )
    ));
}

require 'connect.php';
$sql = "SELECT music.*, tac_gia.ten_tac_gia FROM `music` JOIN `tac_gia` ON music.id_tac_gia = tac_gia.id WHERE music.id = ?;";
$stmt = $db->prepare($sql);
$stmt->bind_param("i", $id);

if (!$stmt->execute()) {
    die(json_encode(
        array(
            'status' => false,
            'data' => 'Lỗi không xác định'
        )
    ));
}

$result = $stmt->get_result(); // get the mysqli result
$music = $result->fetch_assoc(); // fetch data
$db->close();

if ($music == null) {
    die(json_encode(
        array(
            'status' => false,
            'data' => 'Không tìm thấy bài nhạc'
        )
    ));
}

die(json_encode(
    array(
        'status' => true,
        'data' => $music
    )
));
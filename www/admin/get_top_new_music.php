<?php

/**
 * nhận về top n bài hát mới nhất khi gọi
 *
 */

require 'connect.php';
$num_of_music = $_REQUEST['num_of_musics'];
$num_of_music = 10;

$stmt = $db->prepare("SELECT * FROM music ORDER BY ngay_phat_hanh LIMIT ?;");
$stmt->bind_param("i", $num_of_music);
$stmt->execute();
$music = array();

$res = $stmt->get_result();

if ($res->num_rows > 0) {
    while ($r = $res->fetch_assoc()) {
        $music[] = $r;
    }
}

$db->close();

die(json_encode(
    array(
        'status' => true,
        'data' => $music
    )
));
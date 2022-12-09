<?php

/**
 * nhận về tất cả thông tin về nhạc trong database khi gọi
 *
 */

require 'connect.php';
$res = $db->query("SELECT * FROM music;");

$music = array();
if ($db->affected_rows > 0) {
    while ($r = $res->fetch_assoc()) {
        $music[] = $r;
    }
}
// echo " <pre>";
// print_r($music);
// echo " </pre>";
// echo $music[0]['ten_bai_hat'];
// echo 'tiếng việt';
$db->close();

die(json_encode(
    array(
        'status' => true,
        'data' => $music
    )
));
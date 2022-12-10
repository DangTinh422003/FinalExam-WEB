<?php
require 'connect.php';

$res = $db->query("SELECT music.*, tac_gia.ten_tac_gia FROM `music` JOIN `tac_gia` ON music.id_tac_gia = tac_gia.id;");

$music = array();
if ($db->affected_rows > 0) {
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
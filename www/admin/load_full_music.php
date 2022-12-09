<?php
require 'connect.php';
$sql = 'SELECT * FROM music';
$res = $db->query($sql);

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

?>
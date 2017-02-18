<?php
require_once 'db.php';
$postdata = file_get_contents("php://input");

$query = "INSERT INTO middle (middleContent) VALUES('$postdata');";

//echo $query;
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

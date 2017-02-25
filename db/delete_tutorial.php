<?php
require_once 'db.php';
$postdata = file_get_contents("php://input");
$id=$postdata;

$query ="DELETE FROM tutorial  WHERE TutorialID = $id";
//echo $query;
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result->close();


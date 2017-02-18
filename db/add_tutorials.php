<?php
require_once 'db.php';
$postdata = file_get_contents("php://input");

$el = json_decode($postdata, true);
$tutorialName=$el['tutorialName'];
$tutorialUrl=$el['tutorialUrl'];
$tutorialZip=$el['tutorialZip'];
print_r($el);
$query = "INSERT INTO tutorial (tutorialName, tutorialUrl, tutorialZip)"
  . " VALUES('$tutorialName', '$tutorialUrl', '$tutorialZip');";
//
echo $query;
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);




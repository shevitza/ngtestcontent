<?php
require_once 'db.php';
$postdata = file_get_contents("php://input");

$el = json_decode($postdata, true);
$tutorialName=$el['tutorialName'];
$tutorialUrl=$el['tutorialUrl'];
$tutorialZip=$el['tutorialZip'];
$TutorialID=$el['TutorialID'];
print_r($el);
$query = "UPDATE tutorial  SET tutorialName='$tutorialName', tutorialUrl='$tutorialUrl', tutorialZip='$tutorialZip' "
  . " WHERE TutorialID=$TutorialID;";
//
echo $query;
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

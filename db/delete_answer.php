<?php
require_once 'db.php';
$postdata = file_get_contents("php://input");

$el = json_decode($postdata, true);
$tutorialID = $el['tutorialID'];
$leftID = $el['leftID'];
$middleID = $el['middleID'];
$rightID = $el['rightID'];


$query = "DELETE FROM answers WHERE
       TutorialID = $tutorialID AND LeftID = $leftID "
  . "AND MiddleID = $middleID AND RightID = $rightID; "
  . "DELETE FROM `left` WHERE LeftID = $leftID; "
  . "DELETE FROM `right` WHERE RightID =$rightID; ";

echo $query;
//$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result = mysqli_multi_query($mysqli, $query) or die($mysqli->error . __LINE__);



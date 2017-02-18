<?php
require_once 'db.php';
$postdata = file_get_contents("php://input");
$el=  json_decode($postdata, true);

//$t = $_POST['tutorialID'];
//$leftContent = $_POST['leftContent'];
//$m = $_POST['middleRadios'];
//$rightContent = $_POST['rightContent'];

$t=$el['t'];
$leftContent = $el['leftContent'];
$m = $el['m'];
$rightContent = $el['rightContent'];

$query="INSERT INTO  `left` (leftContent) VALUES('$leftContent'); ";
$query .= " INSERT INTO `right` (rightContent) VALUES('$rightContent'); ";
$query .= " INSERT INTO answers (TutorialID, LeftID, MiddleID, RightID)"
    . " VALUES ($t, (SELECT MAX(leftID) FROM `left`),$m, (SELECT MAX(rightID) FROM `right`)); ";
echo $query;
$result = mysqli_multi_query($mysqli, $query) or die($mysqli->error . __LINE__);

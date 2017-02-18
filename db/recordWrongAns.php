<?php
require_once 'db.php';
$postdata = file_get_contents("php://input");
print_r($postdata);
$el=  json_decode($postdata, true);
print_r($el);
$l=$el['l'];
$m=$el['m'];
$r=$el['r'];
$id=$el['id'];
$query="INSERT INTO wronganswers (LeftID, MiddleID,"
  . " RightID, TutorialID) VALUES ($l, $m, $r, $id); ";
echo $query;
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);



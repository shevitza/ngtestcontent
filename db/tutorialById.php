<?php
require_once 'db.php'; 
$id=$_GET['id'];
$query="SELECT 	TutorialID, 
	tutorialName, 
  tutorialUrl
	tutorialZip	 
	FROM tutorial
WHERE TutorialID=$id";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$arr[] = $row;	
	}
}
echo $json_response = json_encode($arr, JSON_UNESCAPED_UNICODE);
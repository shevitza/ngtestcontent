<?php
require_once 'db.php';
$id = $_GET['id'];
$query = "SELECT `left`.leftContent, `middle`.middleContent, `right`.rightContent, answers.*
FROM answers
	INNER JOIN `left`
		ON `left`.LeftID=answers.LeftID
	INNER JOIN `middle`
		ON `middle`.MiddleID=answers.MiddleID
	INNER JOIN `right`
		ON `right`.RightID=answers.RightID
		WHERE answers.TutorialID=$id";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

$arr = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $arr[] = $row;
  }
}
echo $json_response = json_encode($arr, JSON_UNESCAPED_UNICODE);
$result->close();

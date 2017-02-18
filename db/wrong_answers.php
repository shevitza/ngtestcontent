<?php
require_once 'db.php';
$id = $_GET['id'];
$query = "SELECT `left`.leftContent, `middle`.middleContent, `right`.rightContent, wronganswers.*
FROM wronganswers
	INNER JOIN `left`
		ON `left`.LeftID=wronganswers.LeftID
	INNER JOIN `middle`
		ON `middle`.MiddleID=wronganswers.MiddleID
	INNER JOIN `right`
		ON `right`.RightID=wronganswers.RightID
		WHERE wronganswers.TutorialID=$id";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

$arr = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $arr[] = $row;
  }
}
echo $json_response = json_encode($arr, JSON_UNESCAPED_UNICODE);

<?php
require_once 'db.php';
$query = "SELECT middle.MiddleID AS MiddleID, middle.middleContent AS middleContent, answers.MiddleID AS used
FROM answers RIGHT JOIN middle ON answers.MiddleID = middle.MiddleID GROUP BY middle.MiddleID ORDER BY middleContent;";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

$arr = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $arr[] = $row;
  }
}
echo $json_response = json_encode($arr, JSON_UNESCAPED_UNICODE);
//SELECT middle.MiddleID AS MiddleID, middle.middleContent AS middleContent, answers.MiddleID AS used
//FROM answers RIGHT JOIN middle ON answers.MiddleID = middle.MiddleID GROUP BY middle.MiddleID;
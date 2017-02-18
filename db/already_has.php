<?php
require_once 'db.php';
$email = $_GET['email'];
$query="SELECT COUNT(email) as alreadyhas  FROM users WHERE email='$email';";
echo $query;
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

$arr = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $arr[] = $row;
  }
}
print_r($arr);
echo $json_response = json_encode($arr, JSON_UNESCAPED_UNICODE);
<?php

require_once 'db.php';
$postdata = file_get_contents("php://input");
$el = json_decode($postdata, true);
$email = $el['email'];
$password = $el['password'];

$query = "SELECT COUNT(email) as c  FROM users WHERE email='$email' AND pass='$password' AND role=2;";
//TODO change role=1 for production
//echo $query;
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

$arr = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $arr[] = $row;
  }
}

$response = array();
$response['status'] = 'error';

if ($arr[0]['c']==1) { 
  $response['status'] = 'success';
}


echo $json_response = json_encode($response, JSON_UNESCAPED_UNICODE);


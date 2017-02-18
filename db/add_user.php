<?php

require_once 'db.php';
$postdata = file_get_contents("php://input");
$el = json_decode($postdata, true);
$email = $el['email'];
$password = $el['password'];
$query = "SELECT COUNT(email) AS alreadyhas FROM users WHERE email='$email';";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$arr = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $arr[] = $row;
  }
}

if ($arr[0]['alreadyhas'] != 0) {
  $arr[0]['success_registration'] = false;
}
else {
  $query = "INSERT INTO users  (email, pass) VALUES ('$email','$password'); ";
  $result = $mysqli->query($query) or die($mysqli->error . __LINE__);  
  $arr[0]['successregistration']=true;
}


echo $json_response = json_encode($arr, JSON_UNESCAPED_UNICODE);
//$result = mysqli_multi_query($mysqli, $query) or die($mysqli->error . __LINE__);
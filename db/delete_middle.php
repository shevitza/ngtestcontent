<?php
require_once 'db.php';
$id = $_GET['id'];
$query="DELETE FROM middle WHERE MiddleID=$id;";

echo $query;
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result->close();


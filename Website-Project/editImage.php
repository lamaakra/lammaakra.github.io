<?php
session_start();
$image="";
if (isset($_GET['image'])) {
    $image = $_GET['image'];
}
mysql_connect ("localhost", "root1", "");
mysql_select_db("FinalProjectRegistration");
// connect to the database
$user = $_SESSION['Username'];
mysql_query("UPDATE users SET Image = '$image' WHERE UserName = '$user'");
$_SESSION['Image']=$image;
?>
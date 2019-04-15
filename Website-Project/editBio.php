 <?php 
	session_start();
	$bio="";
	if (isset($_GET['biography'])) {
		$bio = $_GET['biography'];
	}
	mysql_connect ("localhost", "root", "");
	mysql_select_db("registration");
	// connect to the database
	$user = $_SESSION['Username'];
	mysql_query("UPDATE users SET Bio = '$bio' WHERE UserName = '$user'");
	$_SESSION['Bio']=$bio;
 ?>
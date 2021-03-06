<?php

// initializing variables
$username = "";
$email    = "";
$errors = array();

$server = "localhost";
$usernameServer="root1";
$passwordServer="";
// connect to the database
$db = new mysqli("localhost", $usernameServer, $passwordServer, "FinalProjectRegistration");

//mysqli_connect('localhost', 'root', 'Molo221998', 'registration');
 if ($db) {
  
 } else {
   echo "Connection Failed";
 }
// REGISTER USER
if (isset($_POST['reg_user'])) {
  // receive all input values from the form
  $username = mysqli_real_escape_string($db, $_POST['username']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
  $password_2 = mysqli_real_escape_string($db, $_POST['password_2']);

  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  if (empty($username)) { array_push($errors, "Username is required"); }
  if (empty($email)) { array_push($errors, "Email is required"); }
  if (empty($password_1)) { array_push($errors, "Password is required"); }
  if ($password_1 != $password_2) {
	array_push($errors, "The two passwords do not match");
  }

  // first check the database to make sure
  // a user does not already exist with the same username and/or email
  $user_check_query = "SELECT * FROM users WHERE username='".$username."' OR email='".$email."'";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);

  if ($user) { // if user exists
    if ($user['UserName'] == $username) {
      array_push($errors, "Username already exists");
    }

    if ($user['Email'] == $email) {
      array_push($errors, "email already exists");
    }
  }

  // Finally, register user if there are no errors in the form
  if (count($errors) == 0) {
  	$password = md5($password_1);//encrypt the password before saving in the database

  	$query = "INSERT INTO users (Username, Email, Password, Bio)
  			  VALUES('".$username."', '".$email."', '".$password."', 'About Me...')";
  	mysqli_query($db, $query);
	session_start();
  	$_SESSION['Username'] = $username;
    $_SESSION['Email'] = $email;
    $_SESSION['Bio'] = "About me...";
  	header('location: Foodies.html');
  }
}



if (isset($_POST['login_user'])) {
  $username = mysqli_real_escape_string($db, $_POST['username']);
  $password = mysqli_real_escape_string($db, $_POST['password']);

  if (empty($username)) {
  	array_push($errors, "Username is required");
  }
  if (empty($password)) {
  	array_push($errors, "Password is required");
  }

  if (count($errors) == 0) {
  	$password = md5($password);
  	$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
  	$results = mysqli_query($db, $query);
  	if (mysqli_num_rows($results) == 1) {
	  session_start();
  	  $_SESSION['Username'] = $username;
	  $query = "SELECT * FROM users WHERE username='$username'";
	  $results = mysqli_query($db, $query);
	  $getFields = mysqli_fetch_assoc(mysqli_query($db, $query));
  	  $_SESSION['Email'] = $getFields['Email'];//mysqli_fetch_field($result);
  	  $_SESSION['Bio'] = $getFields['Bio'];
  	  header('location: Foodies.html');
  	}else {
  		array_push($errors, "Wrong username/password combination");
  	}
  }
}

?>

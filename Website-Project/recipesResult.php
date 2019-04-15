<?php include ('checkbox_value.php') ;?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Recipe Result</title>
<link rel='stylesheet' type='text/css' href='CSS/Foodies.css'/>
<script src="JS/recipeSearch.js" type="text/javascript"></script>
</head>
<body>
<h1 id="title">Foodies</h1>
	<nav>
<div id="nav">
<ul>
  <li><a class="active" href="Foodies.html">Home</a></li>
  <li class="dropdown">
    <a href="#" class="dropbtn">Browse Recipes</a>
    <div class="dropdown-content">
      <a href="#">Our Recommedation</a>
      <a href="international.php">International Cuisines</a>
    </div>
  </li>
  <li><a href="searchRecipes.html">Recipes Search</a></li>
  <li style="float:right"><a href="userProfile.php">Profile</a></li>
  <li style="float:right"><a href="register.php">Register/Login</a>
</ul>
</div>
</nav>
 
<h1> Recipe Search </h1>

<div id="result">
	<p>Results</p>
	
</div>
<div id="results">

</div>

</body>
</html>
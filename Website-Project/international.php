<?php include ('checkbox_value.php') ;?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>International Cuisines</title>
<link rel='stylesheet' type='text/css' href='CSS/Foodies.css' />
<script src="JS/international_cuisines.js" type="text/javascript"></script>

</head>
<body>
	<h1 id="title">Foodies</h1>
	<nav>
		<div id="nav">
			<ul>
				<li><a class="active" href="Foodies.html">Home</a></li>
				<li class="dropdown"><a href="#" class="dropbtn">Browse Recipes</a>
					<div class="dropdown-content">
						<a href="#">Our Recommedation</a> <a href="international.php">International
							Cuisines</a>
					</div></li>
				<li><a href="searchRecipes.html">Recipes Search</a></li>
				<li style="float: right"><a href="userProfile.php">Profile</a></li>
				<li style="float: right"><a href="register.php">Register/Login</a>
			
			</ul>
		</div>
	</nav>
	<h1>International Cuisines</h1>
	<div class="recipes">
		<div id="lebanese">
			<H1>Lebanese Cuisine</H1>
			<h2 id="recipeTitle"></h2>
			<h3>Directions:</h3>
			<ol id="directions"></ol>
			<h3>Ingredients:</h3>
			<ol id="ingredients" class="ingredients"></ol>
			<img id="picture" src="" class="pic" alt="Manakesh"></img>
		</div>
	</div>

	<div class="recipes">
		<div id="mexican">
			<H1>Mexican Cuisine</H1>
			<h2 id="recipeTitle2"></h2>
			<h3>Directions:</h3>
			<ol id="directions2"></ol>
			<h3>Ingredients:</h3>
			<ol id="ingredients2" class="ingredients"></ol>
			<img id="picture2" class="pic" src="" alt="Taco"></img>
		</div>
	</div>
	<div class="recipes">
		<div id="american">
			<H1>American Cuisine</H1>
			<h2 id="recipeTitle3"></h2>
			<h3>Directions:</h3>
			<ol id="directions3"></ol>
			<h3>Ingredients:</h3>
			<ol id="ingredients3" class="ingredients"></ol>
			<img id="picture3" class="pic" src="" alt="PopCorn"></img>
		</div>
	</div>
<div class="recipes">
		<div id="italian">
			<H1>Italian Cuisine</H1>
			<h2 id="recipeTitleI"></h2>
			<h3>Directions:</h3>
			<ol id="directionsI"></ol>
			<h3>Ingredients:</h3>
			<ol id="ingredientsI" class="ingredients"></ol>
			<img id="pictureI" class="pic" src="" alt="Pizza"></img>
		</div>
</div>
<div class="recipes">
		<div id="french">
			<H1>French Cuisine</H1>
			<h2 id="recipeTitleF"></h2>
			<h3>Directions:</h3>
			<ol id="directionsF"></ol>
			<h3>Ingredients:</h3>
			<ol id="ingredientsF" class="ingredients"></ol>
			<img id="pictureF" class="pic" src="" alt="Parfaits"></img>
		</div>
</div>
<div class="recipes">
		<div id="italian-americal">
			<H1>Italian American Cuisine</H1>
			<h2 id="recipeTitleIA"></h2>
			<h3>Directions:</h3>
			<ol id="directionsIA"></ol>
			<h3>Ingredients:</h3>
			<ol id="ingredientsIA" class="ingredients"></ol>
			<img id="pictureIA" class="pic" src="" alt="Caesar"></img>
		</div>
</div>
</body>
</html>
 <?php
session_start();
if (isset($_SESSION['Username'])) {} else {
    header("Location: login.php");
}

?>

<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>Profile</title>
<link rel='stylesheet' type='text/css' href='CSS/userProfile.css' />
<script src="JS/userProfile.js" type="text/javascript"></script>
</head>
<body>
	<h1 id="title">Foodies</h1>
	<nav>
		<div id="nav">
			<ul>
				<li><a href="Foodies.html">Home</a></li>
				<li class="dropdown"><a href="#" class="dropbtn">Browse Recipes</a>
					<div class="dropdown-content">
						<a href="#">Top Rated Recipes</a> <a href="international.php">International
							Cuisines</a>
					</div></li>
				<li><a href="searchRecipes.html">Recipes Search</a></li>
				<li style="float: right"><a class="active" href="userProfile.php">Profile</a></li>
				<li style="float: right"><a href="Register.php">Register/Login</a>
			
			</ul>
		</div>
	</nav>

	<div id="container">
		<div id="navs">
			<button class="btn1">Favorites</button>
			<button class="btn1">Reviews</button>
			<a href="logout.php"><button class="btn1">Sign Out</button></a>
		</div>
		<div id="profile">
			<img src="images/+<?php echo $_SESSION['Image'];?>" alt="profile_pic" class="profile_pic"  id="image"/> 
			<input type="file" id="finput" class="btn1" accept="image/*" onchange="previewFile()" />
			<div class="popup">
				<button id="edit" class="btn1">Edit Bio</button>
				<span class="popuptext" id="myPopup"> <label for="biography"
					class="ui-hidden-accessible">Edit</label> <textarea id="biotext"
						rows="10" cols="15" name="biography" form="bioform"
						maxlength="120"><?php echo $_SESSION['Bio']; ?></textarea>
					<button id="saveEdit" class="btn1">Save</button>
				</span>
			</div>
			<p id="username">Username: <?php echo $_SESSION['Username'];?> </p>
			<p id="bio">Bio: <?php echo $_SESSION['Bio']; ?></p>
			<p id="email">Email: <?php echo $_SESSION['Email'];?> </p>
		</div>

		<div id="pref">
			<h3>History</h3>
			<p>Lemon Cake</p>
			<p>Fettuccine</p>
			<p>Smoked Salmon</p>
			<p>Lemonade</p>
			<p>Chocolate Cake</p>
		</div>

		<div id="fav">
			<h3>Last Favorited</h3>

			<p>Ceaser Salad</p>


		</div>

		<div id="review">
			<h3>Latest Review</h3>
			<p>
				<em>Ceaser Salad : I really liked this recipe. It's really easy to
					make, doesn't require a lot of ingredients, healthy and affordable.
					My kids love it and I make sure to make them some to take to school
					the next day. Thank You Foodies for this incredible recipe!!</em>
			
			
			<p>
		
		</div>

	</div>

</body>
</html>
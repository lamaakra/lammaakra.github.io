/**
 * 
 */
window.onload = function() {
	var data_file = "Recipes.json";
		var http_request = new XMLHttpRequest();
	try{
		// Opera 8.0+, Firefox, Chrome, Safari
		http_request = new XMLHttpRequest();
	}catch (e){
		// Internet Explorer Browsers
		try{
			http_request = new ActiveXObject("Msxml2.XMLHTTP");

		}catch (e) {

			try{
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}

		}
	}

	http_request.onreadystatechange = function(){

		if (http_request.readyState == 4  ){
			// Javascript function JSON.parse to parse JSON data
			var jsonObj = JSON.parse(http_request.responseText);

			
			for(var i = 0 ; i < jsonObj.recipes.length;i++){
				alert(jsonObj.recipes.length);
				alert(jsonObj.recipes[i].nationality);
				

				
				//document.getElementById("results").innerHTML = jsonObj.directions[i];
			}
		}
	}

	http_request.open("GET", data_file, true);
	http_request.send();
}

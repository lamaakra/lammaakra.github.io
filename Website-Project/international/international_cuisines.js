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
				
				if(getCuisines(jsonObj.recipes[i].nationality,"Lebanese",jsonObj.recipes.length))
				{
					var title = jsonObj.recipes[i].title;
					document.getElementById("recipeTitle").innerHTML=title;
					
					
					var directionsPoint = jsonObj.recipes[i].directions.length;
					var div = document.getElementById("lebanese");
					for(var j = 0 ; j < directionsPoint;j++)
					{	
						var list=document.getElementById("directions");
						var description = jsonObj.recipes[i].directions[j];
						var li=document.createElement("li");
						var myItemValue=document.createTextNode(description);
						li.appendChild(myItemValue);
						list.appendChild(li);
						list.appendChild(document.createElement("br"));}
						
					
					for(var k = 0 ; k <jsonObj.recipes[i].ingredients.length ;k++)
					{
						var ingredient_list=document.getElementById("ingredients");
						var ingred= jsonObj.recipes[i].ingredients[k];
						var ul = document.createElement("li");
						var ing=document.createTextNode(ingred);
						ul.appendChild(ing);
						ingredient_list.appendChild(ul)
						ingredient_list.appendChild(document.createElement("br"));
						
					}
					var image = document.getElementById("picture");
					image.src="images/"+jsonObj.recipes[i].image;	
					image.style.height='300px';
					image.style.weight='3000px';
					
				}

				else if(getCuisines(jsonObj.recipes[i].nationality,"Mexican",jsonObj.recipes.length))
				{
					var title = jsonObj.recipes[i].title;
					document.getElementById("recipeTitle2").innerHTML=title;
					var directionsPoint2 = jsonObj.recipes[i].directions.length;
					var div2 = document.getElementById("mexican");
					for(var j = 0 ; j < directionsPoint2;j++)
					{	
						var list2=document.getElementById("directions2");
						var description2 = jsonObj.recipes[i].directions[j];
						var li2=document.createElement("li");
						var myItemValue2=document.createTextNode(description2);
						li2.appendChild(myItemValue2);
						list2.appendChild(li2);
						list2.appendChild(document.createElement("br"));}
						
					
					for(var k = 0 ; k <jsonObj.recipes[i].ingredients.length ;k++)
					{
						var ingredient_list2=document.getElementById("ingredients2");
						var ingred2= jsonObj.recipes[i].ingredients[k];
						var ul2 = document.createElement("li");
						var ing2=document.createTextNode(ingred2);
						ul2.appendChild(ing2);
						ingredient_list2.appendChild(ul2)
						ingredient_list2.appendChild(document.createElement("br"));
						
					}
					var image2 = document.getElementById("picture2");
					image2.src="images/"+jsonObj.recipes[i].image;	
					image2.style.height='300px';
					image2.style.weight='3000px';
					
				}
				else if(getCuisines(jsonObj.recipes[i].nationality,"American",jsonObj.recipes.length))
				{
					var title3 = jsonObj.recipes[i].title;
					document.getElementById("recipeTitle3").innerHTML=title3;
					var directionsPoint3 = jsonObj.recipes[i].directions.length;
					var div3 = document.getElementById("american");
					for(var j = 0 ; j < directionsPoint3;j++)
					{	
						var list3=document.getElementById("directions3");
						var description3 = jsonObj.recipes[i].directions[j];
						var li3=document.createElement("li");
						var myItemValue3=document.createTextNode(description3);
						li3.appendChild(myItemValue3);
						list3.appendChild(li3);
						list3.appendChild(document.createElement("br"));}
						
					
					for(var k = 0 ; k <jsonObj.recipes[i].ingredients.length ;k++)
					{
						var ingredient_list3=document.getElementById("ingredients3");
						var ingred3= jsonObj.recipes[i].ingredients[k];
						var ul3 = document.createElement("li");
						var ing3=document.createTextNode(ingred3);
						ul3.appendChild(ing3);
						ingredient_list3.appendChild(ul3)
						ingredient_list3.appendChild(document.createElement("br"));
						
					}
					var image3 = document.getElementById("picture3");
					image3.src="images/"+jsonObj.recipes[i].image;	
					image3.style.height='300px';
					image3.style.weight='3000px';
					
				}
				else if(getCuisines(jsonObj.recipes[i].nationality,"French",jsonObj.recipes.length))
				{
					var titleFrench = jsonObj.recipes[i].title;
					document.getElementById("recipeTitleF").innerHTML=titleFrench;
					var directionsPointF = jsonObj.recipes[i].directions.length;
					var div2 = document.getElementById("french");
					for(var j = 0 ; j < directionsPointF;j++)
					{	
						var listF=document.getElementById("directionsF");
						var descriptionF = jsonObj.recipes[i].directions[j];
						var liF=document.createElement("li");
						var myItemValueF=document.createTextNode(descriptionF);
						liF.appendChild(myItemValueF);
						listF.appendChild(liF);
						listF.appendChild(document.createElement("br"));}
						
					
					for(var k = 0 ; k <jsonObj.recipes[i].ingredients.length ;k++)
					{
						var ingredient_listF=document.getElementById("ingredientsF");
						var ingredF= jsonObj.recipes[i].ingredients[k];
						var ulF = document.createElement("li");
						var ingF=document.createTextNode(ingredF);
						ulF.appendChild(ingF);
						ingredient_listF.appendChild(ulF)
						ingredient_listF.appendChild(document.createElement("br"));
						
					}
					var imageF = document.getElementById("pictureF");
					imageF.src="images/"+jsonObj.recipes[i].image;	
					imageF.style.height='300px';
					imageF.style.weight='3000px';
					
				}
				else if(getCuisines(jsonObj.recipes[i].nationality,"Italian",jsonObj.recipes.length))
				{
					var titleItalian = jsonObj.recipes[i].title;
					document.getElementById("recipeTitleI").innerHTML=titleItalian;
					var directionsPointI = jsonObj.recipes[i].directions.length;
					var div2 = document.getElementById("italian");
					for(var j = 0 ; j < directionsPointI;j++)
					{	
						var listI=document.getElementById("directionsI");
						var descriptionI = jsonObj.recipes[i].directions[j];
						var liI=document.createElement("li");
						var myItemValueI=document.createTextNode(descriptionI);
						liI.appendChild(myItemValueI);
						listI.appendChild(liI);
						listI.appendChild(document.createElement("br"));}
						
					
					for(var k = 0 ; k <jsonObj.recipes[i].ingredients.length ;k++)
					{
						var ingredient_listI=document.getElementById("ingredientsI");
						var ingredI= jsonObj.recipes[i].ingredients[k];
						var ulI = document.createElement("li");
						var ingI=document.createTextNode(ingredI);
						ulI.appendChild(ingI);
						ingredient_listI.appendChild(ulI)
						ingredient_listI.appendChild(document.createElement("br"));
						
					}
					var imageI = document.getElementById("pictureI");
					imageI.src="images/"+jsonObj.recipes[i].image;	
					imageI.style.height='300px';
					imageI.style.weight='3000px';
					
				}
				else if(getCuisines(jsonObj.recipes[i].nationality,"Italian-American",jsonObj.recipes.length))
				{
					var titleItalianA = jsonObj.recipes[i].title;
					document.getElementById("recipeTitleI").innerHTML=titleItalianA;
					var directionsPointIA = jsonObj.recipes[i].directions.length;
					var div2 = document.getElementById("italian-american");
					for(var j = 0 ; j < directionsPointIA;j++)
					{	
						var listIA=document.getElementById("directionsIA");
						var descriptionIA = jsonObj.recipes[i].directions[j];
						var liIA=document.createElement("li");
						var myItemValueIA=document.createTextNode(descriptionIA);
						liIA.appendChild(myItemValueIA);
						listIA.appendChild(liIA);
						listIA.appendChild(document.createElement("br"));}
						
					
					for(var k = 0 ; k <jsonObj.recipes[i].ingredients.length ;k++)
					{
						var ingredient_listIA=document.getElementById("ingredientsIA");
						var ingredIA= jsonObj.recipes[i].ingredients[k];
						var ulIA = document.createElement("li");
						var ingIA=document.createTextNode(ingredIA);
						ulIA.appendChild(ingIA);
						ingredient_listIA.appendChild(ulIA)
						ingredient_listIA.appendChild(document.createElement("br"));
						
					}
					var imageIA = document.getElementById("pictureIA");
					imageIA.src="images/"+jsonObj.recipes[i].image;	
					imageIA.style.height='300px';
					imageIA.style.weight='3000px';
					
				}
				
				
			}
			}
		}

	http_request.open("GET", data_file, true);
	http_request.send();
}

function getCuisines(nationality,cuisine, leng )
{
	for(var i = 0 ; i < leng ; i++)
	{
		if(nationality.trim() == cuisine.trim())
		{
			return true;
		}
		return false;
	}
}

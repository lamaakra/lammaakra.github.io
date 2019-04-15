 function $(id){  return document.getElementById(id);}
 window.onload = function(){
	 $("edit").setAttribute("onclick", "edit();");
	 $("saveEdit").setAttribute("onclick", "SaveEdit();");
	 document.getElementById("finput").onload=previewFile();
	 
 };
 function previewFile(){
     var preview = document.querySelector('img'); //selects the query named img
     var file    = document.querySelector('input[type=file]').files[0]; //sames as here
     var reader  = new FileReader();

     reader.onloadend = function () {
         preview.src = reader.result;
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
        				imageSrc = this.responseText;
        			}
        		};
        		alert(preview.src);
        		xhttp.open("GET","editImage.php?image="+preview.src, true);
        		xhttp.send();
     }

     if (file) {
         reader.readAsDataURL(file); //reads the data as a URL
     } 
   
	 
	
}
 

 function edit(){
	 var popup = $("myPopup");
    popup.classList.toggle("show");
 }
 function SaveEdit(){
	 var popup = $("myPopup");
	 popup.classList.toggle("show");
	 
	 var text = $("biotext").value;
	 //alert(text);
	 var xhttp = new XMLHttpRequest();
	 var newBio ="";
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
			newBio = this.responseText;
		}
	};
	xhttp.open("GET","editBio.php?biography="+text, true);
	xhttp.send();
	//alert(newBio);
	//$("bio").innerHTML= "    hakj" ;
 }
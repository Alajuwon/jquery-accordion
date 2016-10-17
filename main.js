


	
 var dropDown = function(event){

 // made a varialble for each box and set them all to false(closed).	

 				var toggleBox1 = false;
 				var toggleBox2 = false;
 				var toggleBox3 = false;

 	console.log("function works");

// "if" statement saying if box-1 is clicked, toggle open(true) 
	
	if (event.target.id === "acd"){
		if (toggleBox1 !== true) {
			$("#box-1").toggleClass("open");
			toggleBox1 = true;
		}
		if (toggleBox2 !== false) {
			$("#box-2").toggleClass("open");
			toggleBox1 = false;
		}
		if (toggleBox3 !== false) {
			$("#box-3").toggleClass("open");
			toggleBox1 = false;
		}
	};
		
// "if" statement saying if box-2 is clicked, toggle open(true) 
	
	
	if (event.target.id === "acd2"){
		if (toggleBox1 !== false) {
			$("#box-1").toggleClass("open");
			toggleBox1 = false;
		}
		if (toggleBox2 !== true) {
			$("#box-2").toggleClass("open");
			toggleBox1 = true;
		}
		if (toggleBox3 !== false) {
			$("#box-3").toggleClass("open");
			toggleBox1 = false;
		}

	};
	
// "if" statement saying if box-3 is clicked, toggle open(true) 
	


	if(event.target.id === "acd3"){

		if (toggleBox1 != false) {
			$("#box-1").toggleClass("open");
			toggleBox1 = false;
		}
		if (toggleBox2 != false) {
			$("#box-2").toggleClass("open");
			toggleBox1 = false;
		}
		
		if (toggleBox3 != true) {
			$("#box-3").toggleClass("open");
			toggleBox1 = true;
		}

	};
}


	$(".tab").click(dropDown);

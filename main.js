
var dropDown = function(event){
	if ("acd" === event.target.id){

		$("#box-1").height(150);
		$("#box-2").height(0);
		$("#box-3").height(0);
	}

	

	if ("acd2" === event.target.id){

		$("#box-1").height(0);
		$("#box-2").height(120);
		$("#box-3").height(0);
	}
	

	if("acd3"=== event.target.id){

		$("#box1").height(0);
		$("#box-2").height(0);
		$("#box-3").height(60);
	}

}





















$(".tab").click(dropDown);
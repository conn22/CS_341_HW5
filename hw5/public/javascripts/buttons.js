//Author: James Conn


//helper function for retrieving data from a database and counting
//the amount of each type of cheesecake ordered in that month
	//NOTE: currently does not work properly
function getData(data, status){
	var countPlain = 0;
	var countChocula = 0;
	var countCherry = 0;
	data.forEach(function countNums(value) {
		if(value.topping == 'plain'){
			countPlain = countPlain + 1;
		}else if(value.topping == 'chocolate'){
			countChocula = countChocula + 1;
		}else{
			countCherry = countCherry + 1;
		}
	});
	var values = [countPlain, countChocula, countCherry];
	console.log(countPlain);
	console.log(countChocula);
	console.log(countCherry);
	return values;
}

//main script for webpage
$(document).ready(function(){
  		//function for registering an order: creates a post to be entered to the database
	$("#order").click(function(){
		var vegan = false;
			//<!--The following code inspired by: https://stackoverflow.com/a/9196996-->
		var lines = $("#instrs").val().split('\n');
		for(var i = 0; i < lines.length; i++){
			if(lines[i].indexOf("vegan") > -1)
				vegan = true;
		}
		if(vegan){
			alert("Warning: Cheesecake by nature contains dairy");
		}else{
				//<!--Code concept coming from:-->
				//<!--https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php-->
			var n = $("#n option:selected").text();
			var type = $("input[name='flavor']:checked").val();
			var instrs = $("#instrs").val();

    			$.post("/neworders", {quantity: n, topping: type, notes: instrs}, getData);

			$("#options").text("Thank you! Your order has been placed:");
			$("#notes").text("You have ordered " + n + " " + type + " cheesecakes");
			$("#order").hide();
			$("#fauxTable").hide();
			$("#instrs").hide();
		}
	});

		//function for changing the month and each type of cheesecake ordered in a specific month
	$(".month").click(function(event){
		var url = "/orders";
		var month = $("#drop-opts a:selected").attr("val");
		$.post(url, {month: month}, getData);
		var monthText = $(this).attr("val");
		$("#dropbtn").html(monthText);
	});
});


//Author: James Conn

function getData(data, status){
	console.log(status);
}

$(document).ready(function(){
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
    			$("#options").text("Thank you! Your order has been placed:");
			$("#notes").text("You have ordered " + n + " " + type + " cheesecakes");
			$("#order").hide();
			$("#fauxTable").hide();
			$("#instrs").hide();
		}
	});

	$(".month").click(function(event){
		var url = "/orders";
		var month = $("#drop-opts a:selected").text();
//		debugger;
		$.post(url, {month: month}, getData);
		var month = $(this).attr("val");
		$("#dropbtn").html(month);
	});
});


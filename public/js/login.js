'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

	//listener function for the content buttons in the home page.
	$("button").click(onClickEvent);
	

}

//the listener contentButton listener function itself.

function onClickEvent(e){

	console.log("Project Clicked");

	e.preventDefault();

	//write JSON first
	//1. receive input
	/*
	var name = $( "#fname").text();
	//var dataArray[] = {name};

	var text = {"name":name};	

	var jsonInput = JSON.parse(text);

	var array = {names : "[]"};

	var jsonArray = JSON.parse(text);

	jsonArray.push({
		


	})

	console.log();
	
	$.post("../data.json",{name:"[]"};

    	function(data, status){
        	alert("Data: " + data + "\nStatus: " + status);
    	});
	*/
	$(location).attr("href", "/index");

}
$(document).ready(function() {
	console.log('mgsite js is working');

	//Navigation

//FOR NAVIGATION INTERACTION
//Nav-button - Toggle Active on click
	$("li.nav").click(function(){
		$(this).toggleClass("active");
		$(this).siblings().removeClass("active");
	});

//	hide other sections - show selected section

	$("#nav-home").click(function() {
		$("#content").children().addClass("hide");
		$("#home").removeClass("hide");
	});

	$("#nav-about").click(function() {
		$("#content").children().addClass("hide");
		$("#about").removeClass("hide");
	});

	$("#nav-portfolio").click(function() {
		$("#content").children().addClass("hide");
		$("#portfolio").removeClass("hide");
	});

	$("#nav-contact").click(function() {
		$("#content").children().addClass("hide");
		$("#contact").removeClass("hide");
	});

	console.log('All your js belong to us!');

}); //end ready




/*
CONTACT FORM
Form that emails me when filled out
	- Name
		checks to see if empty
	- email
		checks for valid email
	- phone
		checks for valid phone number 7 or 10 digit
	- comments
		checks for comments
	- submit button
		if empty or invalid returns error
*/
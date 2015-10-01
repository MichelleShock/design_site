/*
//Photo Gallery - modified version of https://github.com/michaelsoriano/bootstrap-photo-gallery/blob/master/photo-gallery.js


*/



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


//PORTFOLIO

//MODAL
		$('li img').on('click',function(){
			var src = $(this).attr('src');
			var img = '<img src="' + src + '" class="img-responsive"/>';
			var index = $(this).parent('li').index();
			var html = '';
                html += img;
                html += '<div style="height:25px;clear:both;display:block;">';
                html += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
                html += '<a class="controls previous" href="' + (index) + '">wprev</a>';
                html += '</div>';

			$('#myModal').modal();
			$('#myModal').on('shown.bs.modal', function(){
				$('#myModal .modal-body').html(img);
			});
			$('#myModal').on('hidden.bs.modal', function(){
            	$('#myModal .modal-body').html('');
			});
		});






//CONTACT FORM 


/*		    // everything looks good!
			$("#contact").addClass("hide");
			$("#sent").removeClass("hide");		  
*/


	console.log('All your js belong to us!');

}); //end ready





$(document).on('click', 'a.controls', function(){
	var index = $(this).attr('href');
	var src = $('ul.row li:nth-child('+ index +') img').attr('src');
	$('.modal-body img').attr('src', src);

	var newPrevIndex = parseInt(index) - 1; 
	var newNextIndex = parseInt(newPrevIndex) + 2; 
	
	if($(this).hasClass('previous')){               
		$(this).attr('href', newPrevIndex); 
		$('a.next').attr('href', newNextIndex);
	}else{
		$(this).attr('href', newNextIndex); 
		$('a.previous').attr('href', newPrevIndex);
	}
	
	var total = $('ul.row li').length + 1; 
	//hide next button
	if(total === newNextIndex){
		$('a.next').hide();
	}else{
		$('a.next').show()
	}            
	//hide previous button
	if(newPrevIndex === 0){
		$('a.previous').hide();
	}else{
		$('a.previous').show()
	}

	return false;
});


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
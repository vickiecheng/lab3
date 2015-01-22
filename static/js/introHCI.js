'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("ya clicked the button")
		$(".jumbotron p").addClass("active");
		
		$("a.thumbnail").click(projectClick);
		$('#submitBtn').click(submitClick);
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	function projectClick(e) {
		console.log("Project clicked");
		// prevent the page from reloading 
		e.preventDefault();
		// In an event handler, $(this) refers to 
   	 	// the object that triggered the event 
   		//$(this).css("background-color", "#7fff00");
   		// In an event listener, $(this) is the leement that fired the event
   		var projectTitle = $(this).find("prevent").text();
    	var jumbotronHeader = $(".jumbotron h1");
    	jumbotronHeader.text(projectTitle);

    	//var containingProject = $(this).closest(".project");
    	//containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");

		var containingProject = $(this).closest(".project"); 
    	var description = $(containingProject).find(".project-description");
    	if (description.length == 0) { 
       		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    	} else if (description.is(":visible")){ 
       		description.hide();//html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    	} else {
    		description.show();
    	}
	}

	function submitClick(e) {
		var modDiv = $('#project').val();

		$(modDiv).animate({
			width: $('#width').val()
		})

		var modDesc = $('#description').val();
		$(modDiv + " .project-description").text(modDesc);
	}
}
// JavaScript Document

var salesdetailsleft = $('.sales__detailsleft');
/* the var means youre making a box, sales details left is what the box is called. .sales__detailsleft is inside the box (what youre getting the class that you put on the html)*/

var salesleft = $('.salesleft'); 

var buttonClickHandler = function () {
	
	var currentState = salesdetailsleft.attr('data-state');
	
	if (currentState == 'active'){ 
		salesdetailsleft.attr('data-state', 'inactive')
	} else {
		salesdetailsleft.attr('data-state', 'active')
	}	
};

salesleft.on('click', buttonClickHandler);


var salesdetailsright = $('.sales__detailsright');
/* the var means youre making a box, sales details left is what the box is called. .sales__detailsleft is inside the box (what youre getting the class that you put on the html)*/

var salesright = $('.salesright'); 

var buttonClickHandler = function () {
	
	var currentState = salesdetailsright.attr('data-state');
	
	if (currentState == 'active'){ 
		salesdetailsright.attr('data-state', 'inactive')
	} else {
		salesdetailsright.attr('data-state', 'active')
	}	
};

salesright.on('click', buttonClickHandler);

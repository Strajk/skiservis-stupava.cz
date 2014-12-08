$(document).ready(function() {

    $('#testcentrumList li').click(function(ev) {

	var btn = $(this);
	var ref = btn.attr('ref');
	var display = $('#testcentrumDisplay');
	var currImg = display.children('img.active');
	var nextImg = display.children('img[ref="' + ref + '"]');
	var currMore = display.children('a.active');
	var nextMore = display.children('a[ref="' + ref + '"]');

	if (btn.hasClass('active')) {

	} else {
	    currImg.hide();
	    currMore.hide();
	    nextImg.show();
	    nextMore.show();

	    $('#testcentrumList li.active').removeClass('active');
	    btn.addClass('active');

	    nextImg.addClass('active');
	    nextMore.addClass('active');
	}

    });

});

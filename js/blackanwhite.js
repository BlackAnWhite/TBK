/**
 * blackanwhite.js
 * author:BlackAnWhite;
 * 2017-12-07
 */

$(function() {
	var clientWidth = document.documentElement.clientWidth;
	var fontSize = parseFloat(document.documentElement.style.fontSize);
	$('.setWH').each(function() {
		if($(this).data('width')) {
			$(this).css({
				width: $(this).data('width') * fontSize
			});
		}
		if($(this).data('height')) {
			$(this).css({
				height: $(this).data('height') * fontSize
			});
		}
		if($(this).data('lineHeight')) {
			$(this).css({
				lineHeight: $(this).data('lineHeight') * fontSize
			});
		}
	});
});

$(function() {
	$('.autoimg').each(function(index, item) {
		$(this).css("background-image", 'url(' + $(this).data('src') + ')');
	});
});
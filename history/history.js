$(document).ready(function() {
	var $block = $('.history_ajax'), $li = $block.find('li');

	var _html = '';
	$li.each(function() {
		var $this = $(this), $img = $this.find('img')
		_html += '<img src="' + $img.attr('src').replace(/(\.[^\.]+)$/, '_big$1') + '" />';
	});

	var $link = $block.append(_html).children('img').css({
		position : 'absolute',
		opacity : 0
	}).eq(0).animate({
		opacity : 1,
		zIndex : 10
	}).end();

	$li.click(function() {

		$link.eq($(this).index()).stop().animate({
			opacity : 1,
			zIndex : 10
		}).siblings('img').stop().animate({
			opacity : 0,
			zIndex : 0
		});

		return false;
	});

	$block.find('img').focus(function() {
		this.blur();
	});
});

$(document).ready(function() {
	var $block = $('#artist'), $banner_imge = $block.find('.masterPhoto'), showIndex = 0, // 預設要先顯示那一張
	fadeInSpeed = 3000, fadeOutSpeed = 1000, defaultZ = 10, isHover = false, timer, speed = 3000;
	$banner_imge.css({
		opacity : 0,
		zIndex : defaultZ - 1
	}).eq(showIndex).css({
		opacity : 1,
		zIndex : defaultZ
	});

	var str = '';
	for (var i = 0; i < $banner_imge.length; i++) {
		str += '<a href="#">' + (i + 1) + '</a>';
	}
	var $controlA = $('#artist').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');
	$controlA.click(function() {

		showIndex = $(this).text() * 1 - 1;
		$banner_imge.eq(showIndex).stop().delay(1000).animate({
			opacity : 1,
		}, fadeInSpeed, function() {
			if (!isHover) {

				timer = setTimeout(autoClick, speed);
			}
		}).css('zIndex', defaultZ).siblings('img').stop().animate({

			opacity : 0,
		}, fadeOutSpeed).queue(function(next) {
			$(this).css({
				'zIndex' : 'defaultZ - 1 ',
			});
			next();
		});
		return false;
	})
	function autoClick() {
		if (isHover)
			return;
		showIndex = (showIndex + 1) % $controlA.length;
		$controlA.eq(showIndex).click();
	}

	timer = setTimeout(autoClick, speed);

});

$(document).ready(function() {
	var $block = $('#banner'), $banner_imge = $block.find('.banner_imge'), showIndex = 0, // 預設要先顯示那一張
	fadeInSpeed = 7000, // 淡入的速度
	fadeOutSpeed = 4000, // 淡出的速度
	defaultZ = 10, // 預設的 z-index
	isHover = false, timer, speed = 100;
	// 計時器及輪播切換的速度

	// 先把其它圖片的變成透明
	$banner_imge.css({
		opacity : 0,
		zIndex : defaultZ - 1
	}).eq(showIndex).css({
		opacity : 0,
		zIndex : defaultZ
	});

	// 組出右下的按鈕
	var str = '';
	for (var i = 0; i < $banner_imge.length; i++) {
		str += '<a href="#">' + (i + 1) + '</a>';
	}
	var $controlA = $('#banner').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');

	// 當按鈕被點選時
	// 若要變成滑鼠滑入來切換時, 可以把 click 換成 mouseover
	$controlA.click(function() {
		// 取得目前點擊的號碼
		showIndex = $(this).text() * 1 - 1;

		// 顯示相對應的區域並把其它區域變成透明
		$banner_imge.eq(showIndex).stop().delay(1000).animate({
			width : "90%",
			height : "90%",
			opacity : 1,
		}, fadeInSpeed, function() {
			if (!isHover) {
				// 啟動計時器
				timer = setTimeout(autoClick, speed);
			}
		}).css('zIndex', defaultZ).siblings('img').stop().animate({
	
			opacity : 0,
		}, fadeOutSpeed).queue(function(next){
                    $(this).css({'zIndex' : 'defaultZ - 1 ',"width" : "520px",
			"height" : "480px"});
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

	// 啟動計時器
	timer = setTimeout(autoClick, speed);

});

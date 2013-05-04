$(document).ready(function() {

	// 取得 shiWen_1 及其子孫元素 li
	var $block = $('.history_1'), $li = $block.find('li');

	// 從 li 中取出超連結及大圖片來產生新的內容
	var _html = '';
	$li.each(function() {
		var $this = $(this), 
		    $img = $this.find('img')
		

		_html += '<img src="' + $img.attr('src').replace(/(\.[^\.]+)$/, '_big$1') + '" />';
	});

	// 把產生的新內容加到 $block 中
	// 並先隱藏除了第一個以外的元素
	var $link = $block.append(_html).children('img').css({
		position : 'absolute',
		opacity : 0
	}).eq(0).animate({
		opacity : 1,
		zIndex : 10
	}).end();

	// 當 $li 點擊時
	$li.click(function() {
		// 顯示相對索引的 $link 並把其它的設為透明
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

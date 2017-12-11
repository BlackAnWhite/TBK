/**
 * blackanwhite.js
 * author:BlackAnWhite;
 * 2017-12-07
 */
//屏幕适配
function getFontSize(_client) {
    var doc = document,
        win = window;
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            //如果屏幕大于750（750是根据我效果图设置的，具体数值参考效果图），就设置clientWidth=750，防止font-size会超过100px
            if (clientWidth > _client) {
                clientWidth = _client
            }
            //设置根元素font-size大小
            docEl.style.fontSize = 100 * (clientWidth / _client) + 'px';
        };
    //屏幕大小改变，或者横竖屏切换时，触发函数
    win.addEventListener(resizeEvt, recalc, false);
    //文档加载完成时，触发函数
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
getFontSize(750);

//解决2k屏幕的宽高不适配rem问题
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

//图片自适应
$(function() {
	$('.autoimg').each(function(index, item) {
		$(this).css("background-image", 'url(' + $(this).data('src') + ')');
	});
});
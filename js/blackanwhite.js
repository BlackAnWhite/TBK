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
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			//如果屏幕大于750（750是根据我效果图设置的，具体数值参考效果图），就设置clientWidth=750，防止font-size会超过100px
			if(clientWidth > _client) {
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

//解决垃圾QQ浏览器2k屏幕下的宽高不适配rem问题
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
//进度条君
$(function() {
	$('.pmgressBarBox').each(function() {
		var nowNum = parseFloat($(this).find('.nowNum').text()),
			allNum = parseFloat($(this).find('.allNum').text()),
			ratio = nowNum / allNum * 100 + '%';
		$(this).find('.now').css({
			width: ratio
		})
	});
});
//倒计时
$(function() {
	var date = $('#run').data('time'); //获取时间字符串
	if(date) {
		lastTime();
	}

	function lastTime() {
		date = new Date(Date.parse(date.replace(/-/g, "/"))); //转换成 Thu May 08 2014 00:22:11 GMT+0800 (中国标准时间)
		date = date.getTime(); //转换成时间戳	
		var now = date - new Date().getTime(); //获取当前时间差

		var oBox = $('#run').find('span'); //获取倒计时容器

		var last = setInterval(function() {
			var times = [];
			var hour = Math.floor(now / 1000 / 60 / 60),
				min = Math.floor(now / 60000 - hour * 60),
				sec = Math.floor(now / 1000 - hour * 60 * 60 - min * 60);
			//			console.log(hour,sec,min);
			times.push(hour >= 10 ? hour : '0' + hour);
			times.push(min >= 10 ? min : '0' + min);
			times.push(sec >= 10 ? sec : '0' + sec);
			oBox.each(function(index) {
				$(this).html(times[index]);
			});
			now -= 1000;
			if(now <= 0) {
				now = 0;
				clearInterval(last);
			};
		}, 1000);
	}

});

//点击查看图文详情
$(function() {
	$('.picInfoTit').click(function() {
		$('.picInfoBox').slideToggle();
	});
});
//一键复制到剪贴板
$(function() {
	//	var str = $("#copy_msg_one").html();
	//	$("#copy_msg_one").val(str);
	copyUrl($("#copy_url_one"));

	function copyUrl(dom) {
		dom.click(function() {
			var url = $("#copy_msg_one") //根据实际情况更改,需要复制内容的载体
			url.select();
			document.execCommand("Copy");
			//			alert("已复制至剪切板");
			$('.alertBox , .blackBg').hide();
			showSucc();
		})
	};
	$('.botBtn').click(function() {
		$('.blackBg , .alertBox').show();
	});
	$('.blackBg').click(function() {
		$('.alertBox , .blackBg').hide();
	});

	function showSucc() {
		$('.succBox').show(500, 'linear', function() {
			setTimeout(function() {
				$('.succBox').hide(500);
			}, 1000)
		});
	};
})


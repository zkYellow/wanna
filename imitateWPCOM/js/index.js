//文字输入删除效果
//定时器
var addtimer;
var removeTimer
var index=0;
var str='国内顶尖WordPress主题开发团队倾情打造';
function addText(){
	clearInterval(addtimer)
	addtimer=setInterval(function(){
		if (index==str.length) {
			$('.textChange').text(str.substr(0,index)+"|");
			index--;
		}else{
			$('.textChange').text(str.substr(0,index+1)+"|");
			index++;
			}
		},150)
	}
addText();

//yourlogo变化
var num=0;
var logoTimer=setInterval(function(){
	
	num++;
	var finalNum=-35*num;

	if(finalNum<-875){
		clearInterval(logoTimer);
	}else{
			console.log(finalNum)
		$('.yourLogo').css('background-position','0'+finalNum+'px');
	}
},60)

//新闻动态Tab栏
$('.newsTabSingle').click(function(e){
	e.preventDefault();
	$(this).addClass('active').siblings().removeClass('active');
	$(this).children().tab('show');
})

//轮播图
$('.caseWrap').hover(function(){
	$('.btnLeftRight').css('opacity',1);
	$('.btnLeft').css('left',0);
	$('.btnRight').css('right',0);
},function(){
	$('.btnLeftRight').css('opacity',0);
	$('.btnLeft').css('left','-36px');
	$('.btnRight').css('right','-36px');
})


/*--------------回到顶部  ------------------*/
	$(window).scroll(function(){
		var themeHeight=$('.newTheme').offset().top;
		if ($(window).scrollTop()>=themeHeight) {
			$('.backToTop').fadeIn();
		}else{
			$('.backToTop').fadeOut();
		}
	})
	$('.backToTop').click(function(){
		$(window).scrollTop(0);
	})
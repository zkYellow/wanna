/*-------------------逛商品-------------------*/

//点击喜欢
$('.likesThis span').hover(function(){
	var myIndex=$(this).parent().parent().parent().parent().index();
	$('.goodsItem').eq(myIndex).find('.changeTop').css('top','-49px');
},function(){
	var myIndex=$(this).parent().parent().parent().parent().index();
	$('.goodsItem').eq(myIndex).find('.changeTop').css('top','-24px');
})
$('.likesThis span').click(function(){
	var myIndex=$(this).parent().parent().parent().parent().index();
	var count =parseInt($('.goodsItem').eq(myIndex).find('.countNum').html());
	$('.goodsItem').eq(myIndex).find('.changeTop').css('top','-49px');
	$('.goodsItem').eq(myIndex).find('.changeTop').css('top','-24px');
	$('.goodsItem').eq(myIndex).find('.countNum').html(count+1 );
})

//切换最新推荐最热
$('.sepLine a').click(function(){
	$(this).addClass('currentBg').siblings().removeClass('currentBg');
})

//加载进度
$(window).scroll(function(){
	var scrollHeight=$(window).scrollTop();
	if (scrollHeight>=1000) {
		$('.loadingTips').show().stop();
	}
})


/*-------------------设计师-------------------*/
//设计师内容导航
$('.designerNav li').click(function(){
	$(this).addClass('currentNav').siblings().removeClass('currentNav');
	$(this).children('img').css('display','inline');
	$(this).siblings().children('img').css('display','none');
})

$('.newHot a').click(function(){
	$(this).addClass('currentNewHot').siblings().removeClass('currentNewHot');
})


/*-------------------小站-------------------*/
//当前选中
$('.siteThings li').click(function(){
	$('.firstSite').addClass('otherSite');
	$(this).children('a').addClass('currentSite');
	$(this).siblings().children('a').removeClass('currentSite');
})



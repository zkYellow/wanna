//点击显示左侧导航栏
$('.menuToggle').click(function(){
	$('body').toggleClass('leftNavShow');
})

//鼠标滚动距离等于头部高度
$(window).scroll(function(){
	var scrollHeight=$(window).scrollTop();
//	var pageTopHeight=$('.pageTop').offset().top;
	if (scrollHeight>=45) {
		$('.header').css({'height':"60px",
		"box-shadow":"0 1px 3px rgba(0,0,0,0.1)",
		"transition":"all 0.3s ease-out 0s"});
	}else{
		$('.header').css({'height':"64px",
		"box-shadow":"none",
		"transition":"all 0.1s ease-out 0s"});
	}
})



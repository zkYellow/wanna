/*--------------侧边栏隐藏  ------------------*/
$('.exitDownl').click(function(){
	$('.side').hide();
})

/*--------------回到顶部  ------------------*/
$(window).scroll(function(){
	var navHeight=$('nav').offset().top;
	if ($(window).scrollTop()>=navHeight) {
		$('.backToTop').show();
	}else{
		$('.backToTop').hide();
	}
})

$('.backToTop').click(function(){
	$(window).scrollTop(0);
})

//随机设计师名言
var sayArr=['“设计不是一种技能，而是捕捉事物本质的感觉能力和洞察能力。”',
			'“平和简约，至臻至善”',
			'“如果你的东西和大家都一样，那干嘛还设计它？”',
			'“决定设计哪个产品跟决定如何度过人生一样，最关键是看你的见解。”',
			'“作设计，要能从汤匙设计到城市。”',
			'“在设计界谈理想一直是我的理想。”',
			'“形式服从功能，并不等于所有的东西都要看上去完全一样。”',
			'“设计师不只是一个很会设计的人，而是抱着设计概念来过生活的人、活下去的人。”'];
var authorArr=['原研哉','Jonathan Ive','Philippe Starck','米谷久美','马西莫•维格涅','田中一光',
				'TONFISK','原研哉'];

var sayNum=Math.floor(Math.random()*8);
var currentSay=sayArr[sayNum];
var currentAutor=authorArr[sayNum];

$('.saying .words').html(currentSay);
$('.author em').html(currentAutor);

/*--------------搜索框  ------------------*/
$('.searchInput').focus(function(){
	$(this).attr('value','');
	$(this).css('color','#000000')
})
$('.searchInput').blur(function(){
	$(this).attr('value','搜索你感兴趣的品牌');
	$(this).css('color','#eaeaea')
})
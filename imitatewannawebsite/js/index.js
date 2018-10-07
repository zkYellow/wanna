/*--------------首页------------------*/

/*--------------轮播------------------*/
var timer;		//定时器
var num=0;

function timeGo(){
	clearInterval(timer);
	timer=setInterval(function(){
		num++;
		if(num==5){
			$('#box li').eq(0).addClass('current').siblings().removeClass('current');
		}
		if (num>5) {
			num=0;
			$('#box').css('left',-770*num+'px');
			num=1;
		}
		$('#box').animate({'left':-770*num+'px'},500);
		$('#box li').eq(num).addClass('current').siblings().removeClass('current');
		
		//滚动线条
		if (num==5) {
			$('#line li').eq(0).addClass('current').siblings().removeClass('current');
		}
		$('#line li').eq(num).addClass('current').siblings().removeClass('current');
	},3000)
}
timeGo();

//鼠标滑入,定时器停止
$('.imgSwitch').mouseenter(function(){
	clearInterval(timer);
})

//鼠标滑出，定时器开始
$('.imgSwitch').mouseleave(function(){
	timeGo();
})
	
//往左
$('.left').click(function(){
	num--;
	if (num<0) {
		num=5;
		$('#box').css('left',-770*num+'px');
		num=4;
	}
	$('#box').animate({'left':-770*num+'px'});
	$('#box li').eq(num).addClass('current').siblings().removeClass('current');
	$('#line li').eq(num).addClass('current').siblings().removeClass('current');
})
//往右
$('.right').click(function(){
	num++;
	if (num==5) {
		$('#line li').eq(0).addClass('current').siblings().removeClass('current');
	}
	if (num>5) {
		num=0;
		$('#box').css('left',-770*num+'px');
		num=1;
	}
	$('#box').animate({'left':-770*num+'px'},);
	$('#line li').eq(num).addClass('current').siblings().removeClass('current');
})


/*--------------精选商品Tab栏  ------------------*/
$('.shareCategory').mousemove(function(){
	var index=$(this).index()/2;
	//黑色圆圈
	$(this).children('div').addClass('currentCircle');
	$(this).siblings('.shareCategory').children('div').removeClass('currentCircle');
	//黑色圈内的字体颜色
	$(this).children('div').children('a').addClass('currentFontColor');
	$(this).siblings('.shareCategory').children('div').children('a').removeClass('currentFontColor');
	//实心小圆圈
	$('.shareBottom i').eq(index).addClass('currentFill').siblings().removeClass('currentFill');
	//Tab栏切换
	$('.shareContent ul').children('li').eq(index).addClass('currentCate');
	$('.shareContent ul').children('li').eq(index).siblings().removeClass('currentCate');
})

/*--------------搜索框  ------------------*/
$('.searchInput').focus(function(){
	$(this).attr('value','');
	$(this).css('color','#000000')
})
$('.searchInput').blur(function(){
	$(this).attr('value','搜索你感兴趣的品牌');
	$(this).css('color','#eaeaea')
})

/*--------------大家喜欢轮播  ------------------*/
var perNum=0;
var picNum=0;
var timerDelay;
var timerAuto;
var listLeft;
function autoPaly(){
	clearInterval(timerAuto);
	timerAuto=setInterval(function(){
		picNum++;
		//	显示右侧小头像
		listLeft=$('.peopleLikeList').position().left;
		if (listLeft<=-1020&&listLeft>=-1700) {
			$('.nextLike').css('display','none');
			$('.linkToLike').css({'width':'140px'});
			$('.peopleLikeList').animate({'left':-340*picNum+'px'});
			$('.peopleLikeSmall-last span').addClass('noImg');
			$('.peopleLikeSmall-last span img').css('display','none');
		}
		if (listLeft>-1020){
			//	显示左按钮
			$('.preLike').css('display','inline');
			//	显示左侧小头像
			$('.peopleLikeSmall-first span').removeClass('noImg');
			$('.peopleLikeSmall-first span img').css('display','inline');
			$('.peopleLikeSmall-first span img').attr('src',"img/person"+picNum+".jpg");
			var noPer=picNum+4;
			$('.peopleLikeList').animate({'left':-340*picNum+'px'});
			$('.peopleLikeSmall-last span img').attr('src',"img/person"+noPer+".jpg");
			$('.peopleLikeSmall-last span').removeClass('noImg');
			$('.peopleLikeSmall-last span img').css('display','inline');
		}
	},4000)
}
autoPaly();

//往左
$('.preLike').click(function(){
	$('.nextLike').css('display','inline');
	$('.linkToLike').css({'width':'0'});
	perNum--;
//	显示左侧小头像
	if (perNum==0) {
		$('.peopleLikeList').animate({'left':-1020*perNum+'px'});
		$(this).css('display','none');
		$('.peopleLikeSmall-first span').addClass('noImg');
		$('.peopleLikeSmall-first span img').css('display','none');
	}else{
		$('.peopleLikeList').animate({'left':-1020*perNum+'px'});
		$('.peopleLikeSmall-first span').removeClass('noImg');
		$('.peopleLikeSmall-first span img').css('display','inline');
		$('.peopleLikeSmall-first span img').attr('src',"img/person"+3*perNum+".jpg");
		}
	
//	显示右侧小头像
	var noPer=4+3*perNum;//下一个小头像
	$('.peopleLikeSmall-last span').removeClass('noImg');
	$('.peopleLikeSmall-last span img').css('display','inline');
	$('.peopleLikeSmall-last span img').attr('src',"img/person"+noPer+".jpg");
})
	
//往右
$('.nextLike').click(function(){
	clearInterval(timerAuto);
	clearTimeout(timerDelay);
	//防止鼠标点击过快
	$('.nextLike').css('pointer-events','none');
	timerDelay=setTimeout(function(){
		$('.nextLike').css('pointer-events','auto');
	},500);
//	显示左按钮
	$('.preLike').css('display','inline');
	perNum++ ;
//	显示左侧小头像
	$('.peopleLikeSmall-first span').removeClass('noImg');
	$('.peopleLikeSmall-first span img').css('display','inline');
	$('.peopleLikeSmall-first span img').attr('src',"img/person"+3*perNum+".jpg");
//	显示右侧小头像
listLeft=$('.peopleLikeList').position().left;
if (listLeft<=-1020) {
	$(this).css('display','none');
	$('.linkToLike').css({'width':'140px'});
	$('.peopleLikeList').animate({'left':-1020*perNum+'px'});
	$('.peopleLikeSmall-last span').addClass('noImg');
	$('.peopleLikeSmall-last span img').css('display','none');
}else{
	var noPer=4+3*perNum;
	$('.peopleLikeList').animate({'left':-1020*perNum+'px'});
	$('.peopleLikeSmall-last span img').attr('src',"img/person"+noPer+".jpg");
	$('.peopleLikeSmall-last span').removeClass('noImg');
	$('.peopleLikeSmall-last span img').css('display','inline');
}
})

/*--------------日期  ------------------*/
var now = new Date();
var year=now.getFullYear();
var month=now.getMonth()+1;
var day=now.getDate();
if (month<10) {
	month='0'+month;
}
if (day<10) {
	day='0'+day;
}
//month>10?month:('0'+month);
//day>10?day:'0'+day;
$('.date span').html(year+"&nbsp;/&nbsp;"+month+"&nbsp;/&nbsp;"+day);

/*--------------好物推荐  ------------------*/
var recNum=0;
$('.recommendLeft').click(function(){
	recNum--;
	if (recNum<0) {
		recNum=2;
		$('.recommendContent ul').animate({'left':-980*recNum+'px'});
	}
	$('.recommendContent ul').animate({'left':-980*recNum+'px'});
})

$('.recommendRight').click(function(){
	recNum++;
	if (recNum>2) {
		recNum=0;
		$('.recommendContent ul').animate({'left':-980*recNum+'px'});
	}
		$('.recommendContent ul').animate({'left':-980*recNum+'px'});
})

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

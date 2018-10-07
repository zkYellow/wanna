/*--------------登录------------------*/

/*--------------登录验证------------------*/
$('.btnLogin').click(function(){
	var logAccount=$('.loginAccount').val();
	var logPass=$('.loginPass').val();
	if (logAccount=="") {
		$('.logErrorAccount').show();
	} else{
		if (logPass=="") {
			$('.logErrorPass').show();
			
	} else{
		$('.logErrorPass').hide();
		if (logAccount=="123"&& logPass=='123') {
			console.log("登录成功！")
	} else{
			$('.loginError').show();
		}
	}
		$('.logErrorAccount').hide();
	}
})

/*--------------注册------------------*/

/*--------------注册验证------------------*/
$('.btnRegister').click(function(){
	var regAccount=$('.registerAccount').val();
	var regPass=$('.registerPass').val();
	var phoneValid=/^[1][3,4,5,7,8][0-9]{9}$/;
	if (regAccount==""|| !phoneValid.test(regAccount)) {
		$('.errorAccountTip').show();
	} else{
		if (regPass=="") {
			$('.errorPasstTip').show();
		} else{
			$('.errorPasstTip').hide();
		}
		$('.errorAccountTip').hide();
	}
})
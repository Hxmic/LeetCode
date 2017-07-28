//倒计时的实现
var countDown = 10;
function Timing(obj) {
	if(countDown == 0){
		obj.removeAttribute('disabled');
		obj.value = '免费获取验证码';
		countDown = 10;
	}else{
		obj.setAttribute('disabled',true);
		obj.value = '重新发送' + countDown;
		countDown--;
		setTimeout(function(){//如果写在else之外会一直陷入死循环
			Timing(obj);
		},1000)
	}

}
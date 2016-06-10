window.onload = function(){
//	function AUTO(){
//		var wid = document.documentElement.clientWidth;
//		var rule = wid/640;
////		console.log(rule)
//		document.body.style.zoom = rule;
//		window.onresize = function(){
//			var wid = document.documentElement.clientWidth;
//			var rule = wid/640;
////			console.log(rule)
//			document.body.style.zoom = rule;
//		}
//	}AUTO();
	
	function Page1(){
		var ZYp1 = document.getElementById('ZY_photo');
		var ZYt = document.getElementById('ZY_title');
		var ZYd = document.getElementById('ZY_down');
		////////////// ↓↓↓特效
		var ZYdTime=null,s=98,speed=1;
		ZYdTime = setInterval(shake,36);
		function shake(){
			s+=speed;
			if(s>=110){speed = -speed};
			if(s<=98){speed = -speed};
			ZYd.style.marginTop = s+"px";
		}
		////////////// ↓↓↓加背景
		ajax("http://180.76.185.227/lj/zepto/zeptoPhp1.php",function(Images){
			var Img = JSON.parse(Images);
			console.log(Img)
			console.log(ZYp1)
			ZYp1.style.backgroundImage = 'url('+Img.msg1.photo+')';
		},function(){
			
		})
		
		ajax("http://180.76.185.227/lj/zepto/zeptoPhp1.php",function(Images){
			var Img = JSON.parse(Images);
			ZYt.style.backgroundImage = 'url('+Img.msg1.title+')';
		})
		
		ajax("http://180.76.185.227/lj/zepto/zeptoPhp1.php",function(Images){
			var Img = JSON.parse(Images);
			ZYd.style.backgroundImage = 'url('+Img.msg.icon+')';
		})
		////////////// ↓↓↓封装ajax
		function ajax(url,fn1,fn2){
			if(window.XMLHttpRequest){
				var ajax = new XMLHttpRequest();
			}else{
				var ajax = new ActiveXObject('Microsoft.XMLHTTP');
			}
			ajax.open('GET',url,true);
			ajax.send(null);
			ajax.onreadystatechange = function(){
				if(ajax.readyState==4){
					if(ajax.status==200){
						fn1(ajax.responseText);
					}else{
						fn2()
					}
				}
			}
		}
	}Page1();
};
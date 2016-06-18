function ajax(url,fn1,fn2){
	// 第一步 创建ajax对象 else内是IE的创建方式
	if(window.XMLHttpRequest){
		var ajax = new XMLHttpRequest();
	}else{
		var ajax = new ActiveXObject("Microsoft.XMLHTTP");	
	}
	console.log(ajax.readyState);
	//第二步 创建一个请求链接
	ajax.open("GET",url,true);	
	//第三步 发送请求
	console.log(ajax.readyState)
	ajax.send(null);
	//第四步 请求完成 接到服务器反馈
	ajax.onreadystatechange = function(){
		if(ajax.readyState==4){
			if(ajax.status==200){
				fn1(ajax.responseText);
			}else{
				fn2();
			}
		}
	}		
}
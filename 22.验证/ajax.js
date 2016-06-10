function ajax(url,fn1,fn2){
	if (window.XMLHttpRequest) {
		var ajax = new XMLHttpRequest;
	}else{
		var ajax = new ActiveXObject("Microsoft.XMLHTTP")
	};

	ajax.open("get",json.json,true);
	ajax.send();
}
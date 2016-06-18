addEventListener('message',function(e){
	// console.log(e.data)
	//e.data   hellow worker

	// var ee = e.data.split(' ');
	// var eee = ee[0]+" 222";
	// postMessage(eee);
	console.log(e.data)
	var str = e.data.replace('Worker','222');
	console.log(str)
	postMessage(str);
},false)
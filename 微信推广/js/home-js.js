window.onload = function(){
	function AUTO(){
		var wid = document.documentElement.clientWidth;
		var rule = wid/414;
//		console.log(rule)
		document.body.style.zoom = rule;
		window.onresize = function(){
			var wid = document.documentElement.clientWidth;
			var rule = wid/414;
//			console.log(rule)
			document.body.style.zoom = rule;
		}
	}AUTO();
	
	
	var tId = null;		//	←←←这个是清计时器的（千万不要写下面函数里，写里面就清不掉）
	var time = null;
	function dazi(){
		var con = document.querySelector('.p2container');
		var s = '博看文思致力于提供为客户提供培训/IT咨询、解决方案以及外包服务，在金融、高科技、旅游交通、零售与分销等领域积累了丰富的行业经验、客户涵盖众多财富500强企业及大中型中国企业。';
		var length = s.length;
		var x="";
		var index = 0;		
		con.innerHTML = "";
		clearInterval(tId);
		clearTimeout(time);
		time = setTimeout(start,1)
		function start(){
			clearInterval(tId);
			tId=setInterval(function(){
				x += s.charAt(index);
			    con.innerHTML= x;
			    if(index++ === length){
			    	clearInterval(tId);
			    	index = 0;
			    	x="";
			    }
			},100);
		}
	}	
	
	function p2Anima(p){
		var p2 = document.querySelectorAll('.box');		
		if (p==1) {
			for(var i=0; i<p2.length; i++){
				p2[i].style.webkitAnimation = 'zhuan 2s ease';
			}
		} else{
			for(var i=0; i<p2.length; i++){
				p2[i].style.webkitAnimation = '';
			}
		}	
	}
	
	function p5Anima(p){
		var p5 = document.querySelector('.p5-anima');
		if (p==4) {
			p5.style.webkitAnimation = 'fanzhuan 1s ease';
		} else{
			p5.style.webkitAnimation = '';
		}		
	}
	
	function p6Anima(p){
		var p6 = document.querySelector('.p6-anima');
		if (p==5) {
			p6.style.webkitAnimation = 'fanzhuan 1s ease';
		} else{
			p6.style.webkitAnimation = '';
		}
	}
	
	function p8Anima(p){
		var p8 = document.querySelectorAll('.p8img');
		var length = p8.length;
		var i = length;
		var time=null;
		if (p==7) {
			time = setInterval(move,300);
			function move(){
				i--;				
				if(i==0){clearInterval(time)}
				p8[i].style.webkitAnimation = 'fapai'+i+' 0.4s ease';
			}
		} else{
			for (var i=0; i<p8.length; i++) {
				p8[i].style.webkitAnimation = '';				
			}
		}
	}
	
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    direction: 'vertical',
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画		    
	  	}, 
	    onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			
			var timer = null;
			clearTimeout(timer);
			timer = setTimeout(dazi,1);
			
			p2Anima(swiper.activeIndex);
			p5Anima(swiper.activeIndex);
			p6Anima(swiper.activeIndex);
			p8Anima(swiper.activeIndex);
		}

	});
}
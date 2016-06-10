$(function(){
	//	↓↓↓自适应屏幕
//	window.onresize = function(){
//		var wid = document.documentElement.clientWidth;
//		var x = wid/1920; 
//		document.body.style.zoom = x;
//	}
	//	↓↓↓获取行内样式
	var go = document.getElementById("GO");
	go.onfocus = function(){
		if(go.style.color!='rgb(51, 51, 51)'){
			this.value = "";
			this.style.color = '#333';
		}
	}
	go.onblur = function(){
		if(go.value==""){
			go.style.color = "";  //  ←←←和下面这行效果一样
			//go.removeAttribute('style');	//	←←←清除单个选择器的所有"非"行内样式
			go.value = "你好，请问你听过彩虹小马吗?";
		}
	}
	
	//	↓↓↓上面第二个菜单里按标签的hover效果
	$('.h_num li').each(function(){
		$('.h_num li').hover(
			function(){
				$(this).find('i').css({'right':'0'})
			},
			function(){
				$(this).find('i').css({'right':'-100px'})
			}
		);
	})
	
	// 二维码事件
	$('.app_link').hover(function(){
		$('.client .box').css('display','block');
	},function(){
		$('.client .box').css('display','none');
	})
	$('.client .box').hover(function(){
		$('.client .box').css('display','block');
	},function(){
		$('.client .box').css('display','none');
	})
	
	
	//大图滚动
	var rollInner = document.getElementById('rollInner');
	var roll = document.getElementById('roll');
	var P = document.getElementById('P');
	var Ps = P.getElementsByTagName('span');
	var main=null,slide=null;
	var speed=10;
	var i=0;
	
	var maxW = rollInner.offsetWidth-roll.offsetWidth;
	main = setInterval(auto,4000);
	function auto(num){
		if(num!=undefined){
			i=num;
			color(i);
			console.log(i)			
		}else{
			i++;color(i)//页码颜色
			clearInterval(slide);
			slide = setInterval(move,6);		
		};
		
	}
	// ↓↓↓大图滚动
	function move(){
		roll.scrollLeft += speed; 
		if(roll.scrollLeft==maxW){
			roll.scrollLeft = 0;
		}
		if (roll.scrollLeft%roll.clientWidth==0) {
			clearInterval(slide);
		}			
	}
	// ↓↓↓页码页码跟随
	function color(num){

		for (var j = 0; j < Ps.length; j++) {
			Ps[j].setAttribute('class','hover');
		};		
		if(i==Ps.length){
			i = 0;
		}
		Ps[i].setAttribute('class','yeMa');
	}
	
	// ↓↓↓下面是鼠标放在页码上可以切换图
	function YeMa(){
		for (var i = 0; i < Ps.length; i++) {
			Ps[i].onclick = function(){
				for (var i = 0; i < Ps.length; i++) {
					Ps[i].setAttribute('class','hover');
					if(this==Ps[i]){
						console.log(i)
						this.setAttribute('class','yeMa');
						auto(i)
						roll.scrollLeft = roll.clientWidth*i
						color(i);
					}
				}
			}
		};
	}YeMa();
	
	// ↓↓↓头部陈列 中图切换
	function List(){
		var list = document.getElementById('p_r');
        var imgs = list.getElementsByTagName('li');
        for (var i=0; i<imgs.length; i++) {
            imgs[i].style.backgroundImage = 'url(img/list'+(i+1)+'.jpg)';
        }
        var photos=[[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]];
        var title=['昨天','三日','周一'];
        var s=0;
        $('#p_r .prev').click(function(){
            if(s==0){
                s=2;
                var x = photos[s];
            }else if(s==2){
                s=1
                var x = photos[s];
            }else if(s==1){
                s=0;
                var x = photos[s];
            }
            $(this).html(title[s]);
            $(imgs).each(function(i){
                imgs[i].style.backgroundImage = 'url(img/list'+(x[i])+'.jpg)';
            })
        })
        $('#p_r .next').click(function(){
            if(s==0){
                s=1;
                var x = photos[s];
            }else if(s==1){
                s=2
                var x = photos[s];
            }else if(s==2){
                s=0;
                var x = photos[s];
            }
            $(this).html(title[s]);
            $(imgs).each(function(i){
                imgs[i].style.backgroundImage = 'url(img/list'+(x[i])+'.jpg)';
            })
        })
	}List();


    //////////	↓↓↓scroll事件	//////////
    $(window).scroll(function(){
        // ↓↓↓显示隐藏电梯
        var winT = $(window).scrollTop();
        var winH = $(window).height()/2;
        var F1 = $('.content').eq(0).offset().top - $('.tit-box').height()-winH;
        if (winT>=F1) {
            $('.border').eq(0).show();
        } else{
            $('.border').eq(0).hide();
        }

        // ↓↓↓电梯按钮跟随楼层点亮
        $('.lift_ > li').each(function(i){
            var FF = $('.content').eq(i).offset().top - $('.tit-box').height()-winH;
            if (winT>FF) {
                $('.lift_ > li').css({
                    'backgroundColor':'',
                    'color':''
                })
                $(this).css({
                    'backgroundColor':'#00A1DC',
                    'color':'#fff'
                })
            }
        })
    })

    //////////	↓↓↓乘坐电梯	//////////
    // ↓↓↓你想到几楼
    var clk = $('.lift_ > li');
    $(clk).click(function(){
        var F = $(clk).index(this);
        if (F==0) {
            var F_ = $('.content').eq(F).offset().top - $('.tit-box').height();
            $('html, body').animate({
                scrollTop: F_
            },'slow')
        } else{
            var F_ = $('.content').eq(F).offset().top;
            $('html, body').animate({
                scrollTop: F_
            },'slow')
        }

        // ↓↓↓电梯按钮点击后/前颜色转换
        $(clk).css({
            'backgroundColor':'',
            'color':''
        })
        $(this).css({
            'backgroundColor':'#00A1DC',
            'color':'#fff'
        })
    })

    // ↓↓↓回到顶部
    $('.top').click(function(){
        $('html, body').animate({
            scrollTop: "0"
        },'slow')
    })

    // ↓↓↓周一至周日tab切换
    function TAB(){
        $('.b-tab li').each(function(i){
            $('.b-tab li').eq(i).click(function(){
                $('.b-tab li').each(function(i){
                    // ↓↓↓还原结构内容
                    var _name = $(this).attr("name");
                    $(this).html('<span>'+_name+'</span>')
                    $(this).attr('class','week w'+i)
                })
                // ↓↓↓挑选更换内容结构
                if(i!=0){
                    var x = '周'+$(this).attr('name');
                }else{
                    var x = $(this).attr('name');
                }
                $(this).attr('class','select-week')
                $(this).html('<span class="ico'+(i)+'"></span><span class="title">'+x+'</span><span class="horn"></span>');
            })
        })
    }TAB();





























});






















$(function(){
	
	$('.btn_l').each(function(){	
		$(this).hover(function(){
			var speed = 2;
			var x=-234,y=-70,timeX=null,timeY=null;		
			var _this = this;
			$(this).find('div').css({display:'block'})
			clearInterval(timeX);
			clearInterval(timeY);
			
			timeX = setInterval(moveX,1)				
			function moveX(){
				x+=speed;
				if(x>=-2){
					clearInterval(timeX);
					x=-2;
				}
				$(_this).find('div').eq(2).css({
					left: x+'px',
				})
				$(_this).find('div').eq(3).css({
					right: x+'px',
				})
			}
			timeY = setInterval(moveY,12)
			function moveY(){
				y+=speed;
				if(y>=-2){
					clearInterval(timeY);
					y=-2;
				}
				$(_this).find('div').eq(0).css({
					top: y+'px',
				})
				$(_this).find('div').eq(1).css({
					bottom: y+'px',
				})
			}		
		},function(){console.log(2)
			var speed = 2;
			var _this = this;
			var x=-2,y=-2,timeX_=null,timeY_=null;
			clearInterval(timeX_);
			clearInterval(timeY_);
			
			timeX_ = setInterval(moveX_,1)				
			function moveX_(){
				x-=speed;
				if(x<=-234){
					clearInterval(timeX_);
					$(_this).find('div').css({display:'none'})
						x=-234;
				}
				$(_this).find('div').eq(2).css({
					left: x+'px',						
				})
				
				$(this).find('div').eq(3).css({
					right: x+'px',
				})
			}
			timeY_ = setInterval(moveY_,12)
			function moveY_(){
				y-=speed;
				if(y<=-70){
					clearInterval(timeY_);
						y=-70;
				}
				console.log(y)
				$(_this).find('div').eq(0).css({
					top: y+'px',
				})
				$(_this).find('div').eq(1).css({
					bottom: y+'px',
				})
			}		
		})
	})
	
	
})

$(function(){
    console.log($('.page1-1'))
    document.addEventListener('touchmove',function(event){
        var ev = event||window.event;
        ev.preventDefault();
    },false)

    var p=0;
    var p_p=0;
    var p_add=1;
    var p_p_add=1;
    var up= 1,down= 2,left= 3,right= 4;
    $(document).swipeUp(function(){
        if(p_add)
        p = p_add;
        p_p = p_p_add;
        if(p!=5){
            p_add++;
            p_p_add=1;
            pageMove(up);
        }
        console.log(p,p_p)
    })
    $(document).swipeDown(function(){
        p = p_add;
        p_p = p_p_add;
        if(p!=1){
            p_add--;
            p_p_add=1;
            pageMove(down);
        }
        console.log(p,p_p)
    })
    $(document).swipeLeft(function(){
        p = p_add;
        p_p = p_p_add;
        if(p_p!=2&&p>1&&p<5){
            p_p_add++;
            pageMove(left);
        }
        //console.log(p,p_p)
    })
    $(document).swipeRight(function(){
        p = p_add;
        p_p = p_p_add;
        if(p_p!=1&&p>1&&p<5){
            p_p_add--;
            pageMove(right);
        }
        //console.log(p,p_p)
    })

    function pageMove(x){
        var first = '.page'+p+'-'+p_p;
        var next = '.page'+p_add+'-'+p_p_add;
        console.log(first,next)
        if(x==up){
            outClass = "pt-page-moveToTop";
            inClass = "pt-page-moveFromBottom";
        }
        if(x==down){
            outClass = "pt-page-moveToBottom";
            inClass = "pt-page-moveFromTop";
        }
        if(x==left){
            outClass = "pt-page-moveToLeft";
            inClass = "pt-page-moveFromRight";
        }
        if(x==right){
            outClass = "pt-page-moveToRight";
            inClass = "pt-page-moveFromLeft";
        }
        $(first).addClass(outClass);
        $(next).removeClass('hide');
        $(next).addClass(inClass);
        setTimeout(function(){
            $(first).removeClass(outClass);
            $(first).addClass('hide');
            $(next).removeClass(inClass);
        },600)
    }
    function Page1(){
        var p1_photo = document.getElementById('p1_photo');
        var p1_title = document.getElementById('p1_title');
        var down = document.getElementById('down');

        ////////////// ↓↓↓ajax请求数据给元素加背景
        ajax("http://180.76.185.227/lj/zepto/zeptoPhp1.php",function(Images){
            var Img = JSON.parse(Images);
            console.log(Img)
            // ↓↓↓第二页
            p1_photo.style.backgroundImage = 'url('+Img.msg1.photo+')';
            p1_title.style.backgroundImage = 'url('+Img.msg1.title+')';
            down.style.backgroundImage = 'url('+Img.msg.icon+')';
            // ↓↓↓第二页
            $('#page2-1 .title').css({'background-image':'url('+Img.msg2.title+')'});
            $('#page2-1 .human-bg').css({'background-image':'url('+Img.msg2.photo+')'});
            $('#page2-1 .human').css({'background-image':'url('+Img.msg2.people+')'});


        },function(){
            alert('网络出错');
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








    //zoom
    function AUTO(){
        var wid = document.documentElement.clientWidth;
        var rule = wid/320;
        //		console.log(rule)
        document.body.style.zoom = rule;
        window.onresize = function(){
            var wid = document.documentElement.clientWidth;
            var rule = wid/320;
            //			console.log(rule)
            document.body.style.zoom = rule;
        }
    }AUTO();
})
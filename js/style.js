$(function(){
	$(document).on("click","#alertInfo .close",dialog.closeDiv);
	s=window.innerHeight/500;
	ss=250*(1-s);
	
	$('.swiper-container').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');
	
	
	function audioAutoPlay(id){
	    var audio = document.getElementById(id);
	    audio.play();
	    document.addEventListener("WeixinJSBridgeReady", function () {
	            audio.play();
	    }, false);
	}
	audioAutoPlay('audio');
    //音乐
    var playing=true;
	$("#music_icon").bind("click",function(){
		if(playing){
			$(this).find(".icon-audio-off").removeClass("hide");
			$(this).find(".icon-audio-on").addClass("hide");
			document.getElementById("audio").pause();
			playing=false;
		}else{
			$(this).find(".icon-audio-off").addClass("hide");
			$(this).find(".icon-audio-on").removeClass("hide");
			document.getElementById("audio").play();
			playing=true;
		}
	});
	
	//关闭
	$(document).on("click","#alertInfo .close,.close,#maskLayer",dialog.closeDiv);
	
	//视频播放
	/*  vu：乐视云视频的视频ID
		uu：乐视云视频的客户ID 
	*/
	$(document).on("click",".vBtn",function(){
		$("#music_icon").find(".icon-audio-off").removeClass("hide");
		$("#music_icon").find(".icon-audio-on").addClass("hide");
		document.getElementById("audio").pause();
		
		var url=$(this).attr("data-url");	
		var vuId=getQueryString(url).vu;
		var _ww = $("body").width(),
		video_w = 640,
		video_h = 360,
		player = new CloudVodPlayer();
		if(_ww<640){
			video_w = _ww;
			video_h = _ww*360/640
		}
		dialog.showInfo("<div id='vInfo' class='vInfo' style='height:"+video_h+"px'></div>");
		$("#maskLayer").addClass("close");
		player.init({"uu":"661c07e19e","vu":vuId,"auto_play":1,"pu":"5dd4aa0351","width":video_w,"height":video_h,"lang":"zh_CN"},"vInfo");
		
	})

	
	function getQueryString(url){
		var qs = url;
		var args = {};
		var items = qs.split("&");
		var ite = null;
		var name = null;
		var value = null;
		for (var i = 0; i < items.length; i++) {
			//ite=items[i].split("=");
			var firstEqual = items[i].indexOf("=")
			name = items[i].substring(0, firstEqual);
			value = items[i].substring(firstEqual + 1);
			args[name] = value;
		}
		return args;
	}
	

	
	// 图片预加载
	(function lodinImg(){
	 var images = new Array()
	    function preload() {
	            for (i = 0; i < preload.arguments.length; i++) 
	            {
	                images[i] = new Image()
	 			    images[i].src = preload.arguments[i]   
					//console.log(images[i].src);
	             }
	    }
	    preload("musrc/m1.mp3","font/FZZYJT.ttf","font/ll.ttf","font/zy.ttf","images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/6zn.png","images/b.png","images/bc.png","images/n.png","images/nc.png","images/wz1.png","images/wz2.png","images/wz3.png","images/ch.png","images/dl_btn.png","images/loading.png","images/loadingtit.png","images/loginbg.png","images/tit1.png","images/tit2.png","images/tit3.png","images/tit4.png","images/xz.png","images/p3/p3-1.png","images/p3/p3-2.png","images/p3/p3-3.png","images/p3/p3-4.png","images/p3/p3-5.png","images/p4/p4-1.png","images/p4/p4-2.png","images/p4/p4-3.png","images/p4/p4-4.png","images/p4/p4-5.png","images/p5/p5-1.png","images/p5/p5-2.png","images/p5/p5-3.png","images/p5/p5-4.png","images/p5/p5-5.png","images/p6/p6-1.png","images/p6/p6-2.png","images/p6/p6-3.png","images/p6/p6-4.png","images/p6/p6-5.png")	
	})();
	
	
	$(".logoin").on('click',function(){
		dialog.alertLog('');
	});
	
	$(".tit7_btn").on('click',function(){
		$(".fx").show();
	})
	
})










/*
 $(function(){
	showDiv(".log_pop");
	showDiv(".confirmation_box_two");
	showDiv(".tishi_pop");
}); 

 //模拟加载慢的效果
var callbacks = [];
imgLoader(["images/1.jpg", "images/2.jpg", "images/3.jpg",   "images/4.jpg",   "images/5.jpg",   "images/aotoplaybtn.png",   "images/close.png",   "images/gmtit.png",   "images/gmtit2.png",   "images/gmtit3.png",   "images/gmtit4.png",   "images/gmtit5.png",   "images/img1.png",   "images/img2.png",   "images/img3.png",   "images/img4.png",   "images/img5.png",   "images/img6.png",   "images/next.png",   "images/page2videoImg.png",   "images/tit1.png",   "images/tit2.png",   "images/tit3.png",   "images/tit4.png",   "images/tit5.png",   "images/tit6.png",   "images/tit7.png",   "images/tit8.png",   "images/tit9.png",   "images/tit10.png",   "images/tit11.png",   "images/video2.png",   "images/videobtn2.png"	    ], function (percentage) {
    callbacks.push((function(percent, i){
        return function(){
            setTimeout(function(){
                var percentT = percent * 100;
                $('#loader__info').html('Loading ' + (parseInt(percentT)) + '%');
                $('#loader__progress')[0].style.width = percentT + '%';
                if (percent == 1) {
                    setTimeout(function(){
                        $('#loader').remove();
                       //分屏
						var swiper = new Swiper('.swiper-container', {
							//pagination: '.swiper-pagination',
					        pagination: null,
					        direction: 'vertical',
					        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
							    swiperAnimateCache(swiper); //隐藏动画元素 
							    swiperAnimate(swiper); //初始化完成开始动画
							  }, 
							  onSlideChangeEnd: function(swiper){ 
							    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
							  } 
					    });
                    }, 10);
                }
                callbacks[i + 1] && callbacks[i + 1]();
            },10);
        }
    })(percentage, callbacks.length));

    if(percentage == 1) {
        callbacks[0]();
    }
});
//=================================================
//* 以上代码为模拟网速慢的情况，特意对进度处理的回调做了延迟
//* 真实环境，应该使用下面注释的代码
//=================================================
imgLoader(["images/1.jpg", "images/2.jpg", "images/3.jpg",   "images/4.jpg",   "images/5.jpg",   "images/aotoplaybtn.png",   "images/close.png",   "images/gmtit.png",   "images/gmtit2.png",   "images/gmtit3.png",   "images/gmtit4.png",   "images/gmtit5.png",   "images/img1.png",   "images/img2.png",   "images/img3.png",   "images/img4.png",   "images/img5.png",   "images/img6.png",   "images/next.png",   "images/page2videoImg.png",   "images/tit1.png",   "images/tit2.png",   "images/tit3.png",   "images/tit4.png",   "images/tit5.png",   "images/tit6.png",   "images/tit7.png",   "images/tit8.png",   "images/tit9.png",   "images/tit10.png",   "images/tit11.png",   "images/video2.png",   "images/videobtn2.png"	    ], function (percentage) {
    var percentT = percentage * 100;
    $('#loader__info').html('Loading ' + (parseInt(percentT)) + '%');
    $('#loader__progress')[0].style.width = percentT + '%';
    if (percentage == 1) {
        $('#loader').remove();
        //分屏
		var swiper = new Swiper('.swiper-container', {
			//pagination: '.swiper-pagination',
	        pagination: null,
	        direction: 'vertical',
	        onInit: function(swiper){ 
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画
			  }, 
			  onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			  } 
	    });
    }
});
*/
var vids=document.getElementById("vids");
var sskd=$(".controls").width();
function getBase64EncodedVideoUrlFromURL() {
	const urlParams = new URLSearchParams(window.location.search);
	const base64EncodedVideoUrl = urlParams.get('video');
	return base64EncodedVideoUrl;
}
function decodeVideoUrlFromBase64(base64EncodedUrl) {
	const decodedVideoUrl = atob(base64EncodedUrl);
	return decodedVideoUrl;
}
document.addEventListener('DOMContentLoaded', function() {
	const videoPlayer = document.getElementById('vids');
	const base64EncodedVideoUrl = getBase64EncodedVideoUrlFromURL();
	if (base64EncodedVideoUrl) {
		const decodedVideoUrl = decodeVideoUrlFromBase64(base64EncodedVideoUrl);
		videoPlayer.src = decodedVideoUrl;
	}
});
$(".one_tb").click(function(){
	$(this).addClass("on").siblings(".one_tb").removeClass("on");
	var hName=$(this).find("h3").html();
	var vid_src=$(this).attr("vid_src");
	$(".title_top").html(hName);
	vids.src=vid_src+xzdz;
	vids.play();
	})
$("#pass").click(function(){
	$(this).css({display:"none"});
	$("#ztbf").attr("class","iconfont icon-zanting")
	vids.play();
	});
$("#ztbf").click(function(){	
	if(vids.paused){
		vids.play()
		$("#ztbf").attr("class","iconfont icon-zanting")
		}else{
			vids.pause()
			$("#ztbf").attr("class","iconfont icon-zanting2")
			}
})
vids.onplay=function(){
	$("#pass").css({display:"none"});
	$("#ztbf").attr("class","iconfont icon-zanting");
	}
vids.onpause=function(){
	$("#pass").css({display:"block"});
	$("#ztbf").attr("class","iconfont icon-zanting2");
	$("#pBar").on('mouseup',function(){
			$(this).off('mousemove')
			})
	}
function numFormat(time){
    time = parseInt(time);
    var h = addZero(Math.floor(time/3600));
    var  m = addZero(Math.floor((time%3600)/60));
    var s = addZero(Math.floor(time%60));
    return h+":"+m+":"+s;
}
function addZero(num){
    if(num<10){
        return "0"+num;
    }else{
        return ''+num;
    }
}
vids.oncanplay=function(){
var aTime=numFormat(vids.duration);
$("#aTime").html(aTime);
vids.ontimeupdate=function(){
	sskd=$(".controls").width()
	var hc=(vids.buffered.end(0)/vids.duration)*sskd;
	$("#buff").css({width:hc+'px'})
	var nTime=numFormat(vids.currentTime);
	$("#nTime").html(nTime);
	var nLengh=(vids.currentTime/vids.duration)*(sskd-20);
	$("#pBar_move").css({width:nLengh+'px'});
	}
$("#pBar").mousedown(function(e){
	var cLk=e.clientX;
	var pJl=$("#pBar").offset().left;
	var mLengh=cLk-pJl;
	if(mLengh>=(sskd-20)){
		mLengh=(sskd-20)
		}
	$("#pBar_move").css({width:mLengh+'px'});
	var cTime1=mLengh/(sskd-20)*vids.duration;
	vids.currentTime=cTime1;
	var cTime2=numFormat(cTime1);
	$("#nTime").html(cTime2);
	vids.play();
	$(document).on('mousemove',function(e){
		vids.pause();
		var newLeft=e.clientX-pJl;
		if(newLeft<=0){
            newLeft=0;
        }
		if(newLeft>=(sskd-20)){
			newLeft=(sskd-20)
			}
		var cTime3=newLeft/(sskd-20)*vids.duration;
		var cTime4=numFormat(cTime3);
		$("#pBar_move").css({width:newLeft+'px'});
		vids.currentTime=cTime3;
		$("#nTime").html(cTime4);
		})
		$("body").on('mouseup',function(){
			$(document).off('mousemove');
			vids.play();
			})
	})
}
function ktui(){
	vids.currentTime-=10;
}
function kjin(){
	vids.currentTime+=10;
}
$(document).keydown(function (event) {
	if (event.keyCode===37){
		vids.currentTime-=10;
	}
	if (event.keyCode===39){
		vids.currentTime+=10;
	}
	if (event.keyCode===32){
		if(vids.paused){
		vids.play()
		$("#ztbf").attr("class","iconfont icon-zanting")
		}else{
			vids.pause()
			$("#ztbf").attr("class","iconfont icon-zanting2")
			}
	}
	if (event.keyCode===27){
		$(".video_ls").removeClass("on");
		$(".controls").css({width:"764px"})
	}
})
$(".video_ls").dblclick(function(){
	$(".video_ls").addClass("on");
	var oBox=$("body").width()-66;
	$(".controls").css({width:oBox+'px'})
});
$("#qp").click(function(){
	if($(".video_ls").hasClass("on")){
		$(".video_ls").removeClass("on");
		$(".controls").css({width:"764px"})
		}else{
			$(".video_ls").addClass("on");
			var oBox=$("body").width()-66;
			$(".controls").css({width:oBox+'px'})
			}
})
$("#like").click(function(){
	if($(this).hasClass("on")){
		$(this).removeClass("on")
		}else{
			$(this).addClass("on")
			}
	})
$("#zan").click(function(){
	if($(this).hasClass("on")){
		$(this).removeClass("on")
		}else{
			$(this).addClass("on")
			}
	})
vBtn.onmousedown = function(ev){
    var ev=ev||window.event;
    var xs=ev.clientX - this.offsetLeft;
    document.onmousemove = function(ev){
        var newLefts=ev.clientX-xs;
        if(newLefts<=0){
            newLefts=0;
        }else if(newLefts>=vBar.offsetWidth-vBtn.offsetWidth){
            newLefts=vBar.offsetWidth-vBtn.offsetWidth;
        }
        vBtn.style.left=newLefts+"px";
        vBar_in.style.width =(newLefts+8)+"px";
        var prop=newLefts/(vBar.offsetWidth-vBtn.offsetWidth);
        vids.volume =prop;
        //静音改变音量图标
        if(!vids.volume){
            icon.style.backgroundImage="url(images/iconb.png)"
        }else{
            icon.style.backgroundImage="url(images/icona.png)"
        }
    }
	document.onmouseup = function(){
	document.onmousemove = null;
	document.onmouseup = null;
    }
}
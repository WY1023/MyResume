 /* 
* @Author: Stephen Wang
* @Date:   2016-09-11 15:00:47
* @Last Modified time: 2016-11-18 20:25:59
*/
var wid = document.documentElement.clientWidth;
var hei = document.documentElement.clientHeight;
window.onresize = function () {
var wid = document.documentElement.clientWidth;
var hei = document.documentElement.clientHeight;
}
$(document).ready(function(){
     $('#fullpage').fullpage({
                anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
                menu: '#myMenu',
                verticalCentered: false,
                navigation: true,
                css3:false,
                navigationTooltips: ['1', '2', '3', '4', '5',' 6'],
                 autoScrolling: true,
                 easing: 'easeOutBounce',
                 scrollingSpeed: 1500,
                 fitToSectionDelay:1000,
                 afterLoad:function(link,index){
                        switch(index){
                            case 1:
                             move('.lefttop').rotate(180).duration('2').end();
                             move('.rightbottom').rotate(-1).duration('2').end();
                            break;
                            case 2:
                                progress(95, $('.bar1'));
                                progress(90, $('.bar2'));
                                progress(90, $('.bar3'));
                                progress(85, $('.bar4'));
                                progress(80, $('.bar5'));
                                progress(95, $('.bar6'));
                                progress(75, $('.bar7'));
                                progress(85, $('.bar8'));
                                $('#section2>h1').css('z-index','10');
                                move('#section2>h1').to(0,100).duration('4s').end();
                            break;
                            case 3: 
                                $('#section3>h1').css('z-index','10');
                                move('#section3>h1').to(0,100).duration('4s').end();
                            break;
                            case 4:
                                $('.social').css('z-index','1');
                                $('.callme>p').css('z-index','1');
                                $('.social').addClass('animated fadeInLeft');
                                $('.callme>p').addClass('animated fadeInRight');
                                $('#section4>h1').css('z-index','10');
                                move('#section4>h1').to(0,100).duration('4s').end();
                            break;
                            case 5:
                            break;
                            case 6:
                            break;
                        }
                 },
                 onLeave:function(index){
                        switch(index){
                            case 1:
                            break;
                        }
                 },
                })
     $('.social a').on("mouseover",function(){
     $(this).addClass('animated bounce');});
     $('.social a').on("mouseout",function(){
     $(this).removeClass('animated bounce');});
});
function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 4000).html(percent + "%"+"&nbsp;");
};
       myFocus.set({
            id:'boxID1',//焦点图盒子ID
            pattern:'mF_luluJQ',//风格应用的名称
            time:3,//切换时间间隔(秒)
            trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
            width:(wid/1.5),//设置图片区域宽度(像素)
            height:(hei/1.7),//设置图片区域高度(像素)
            txtHeight:'default'//文字层高度设置(像素),'default'为默认高度，0为隐藏
         });
        myFocus.set({
            id:'boxID2',//焦点图盒子ID
            pattern:'mF_luluJQ',//风格应用的名称
            time:3,//切换时间间隔(秒)
            trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
            width:(wid/1.5),//设置图片区域宽度(像素)
            height:(hei/1.7),//设置图片区域高度(像素)
            txtHeight:'default'//文字层高度设置(像素),'default'为默认高度，0为隐藏
         });
$("#wx").bind("click",function(){ openNew();$('.popCon>img').attr("src","images/Wechat.png");});
function openNew(){
    //获取页面的高度和宽度
    var sWidth=document.body.scrollWidth;
    var sHeight=document.body.scrollHeight;
    //获取页面的可视区域高度和宽度
    var wHeight=document.documentElement.clientHeight;
    var oMask=document.createElement("div");
        oMask.id="mask";
        oMask.style.height=sHeight+"px";
        oMask.style.width=sWidth+"px";
        document.body.appendChild(oMask);
    var oPop=document.createElement("div");
        oPop.id="pop";
        oPop.innerHTML="<div class='popCon'><img><div id='close'>点击关闭</div></div>";
        document.body.appendChild(oPop);
    //获弹出框的宽和高
    var dHeight=oPop.offsetHeight;
    var dWidth=oPop.offsetWidth;
        //设置弹出框的left和top
        oPop.style.left=(sWidth-dWidth)/2+"px";
        oPop.style.top=(wHeight-dHeight)/2+"px";
    //点击关闭按钮
    var oClose=document.getElementById("close");
        //点击弹出框以外的区域也可以关闭弹出框
        oClose.onclick=oMask.onclick=function(){
                    document.body.removeChild(oPop);
                    document.body.removeChild(oMask);
                    };}
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
                                progress(80, $('.bar1'));
                                progress(85, $('.bar2'));
                                progress(80, $('.bar3'));
                                progress(75, $('.bar4'));
                                progress(70, $('.bar5'));
                                progress(90, $('.bar6'));
                                progress(70, $('.bar7'));
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

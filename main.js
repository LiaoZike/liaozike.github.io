
//手機板選單
var button = document.querySelector('.aboutme');
var ckbox = document.querySelector('.menu_control')
function popup2(e) {
    ckbox.checked=false;
};

button.addEventListener('click', popup2);
//導覽列變色 header/hder
window.onscroll = function() {myFunction()};
var hder = document.getElementById("hder"); 
var sticky = hder.offsetHeight - 50;
var scrollState=0; //
var deviceHeight=window.innerHeight;
var sect2boxTHR=-1; var RGBCHKStateTHR=-1;
$(document).ready(function(){
    RGBCHKStateTHR=setInterval(function() {changRGB();},300);
})
function myFunction() {
    deviceHeight=window.innerHeight;
    var nowvYset=window.scrollY; /*螢幕頂端位置*/
    var nowvYBottomset=nowvYset+deviceHeight /*螢幕底端位置*/
    var sect1Yset=document.querySelector('.section1').offsetHeight; /*section1的底端位置(高度)*/
    var sect2Yset=document.querySelector('.section2').offsetTop+document.querySelector('.section2').offsetHeight; /*section2的底端位置(高度)*/
    if (nowvYset >= sticky+5) {
        hder.style['background-color']='rgb('+stackR+','+stackG+','+stackB+')';
    } else {
        hder.style['background-color']='transparent';
    }
    if (window.scrollY >= 10) {//print
        $('.GoTop').css("opacity","100%");
        $('.GoTop').css("right","15px");
    } else {//hide
        $('.GoTop').css("opacity","0%");
        $('.GoTop').css("right","-100px");
    }
    
    //console.log(nowvYBottomset,sect2Yset)
    if(nowvYBottomset<=sect1Yset){ //[1]完全沒碰到sction2區塊 -關於我
        if(scrollState!=1){ //解決重複效能低問題
            scrollState=1;
            console.log("區塊1");
            $('.sect2_content').css('position','absolute');
            $('.sect2_content').css('bottom','initial');
            $('.sect2_content').css('top','0px');
            $('.sect2_sentence').css('transform','scale(0)');
            $('.sect2_title p:nth-child(1)').css('left','-100%')
            $('.sect2_title p:nth-child(2)').css('right','-100%')
            $('.sect1_img').css('-webkit-filter','brightness(1)');
            if(RGBCHKStateTHR==-1){ //需載入Hello World邊框RGB
                RGBCHKStateTHR=setInterval(function() {changRGB();},300);
            }
            if(sect2boxTHR!=-1){ //清除關閉關於我介紹邊框閃爍
                clearInterval(sect2boxTHR); 
                sect2boxTHR=-1;
            }
        }
    }else if(nowvYBottomset>sect1Yset && nowvYset<=sect1Yset-53){
        if(scrollState!=2){
            scrollState=2;
            /* console.log("區塊1 --> 區塊2"); */
            if(RGBCHKStateTHR==-1){
                RGBCHKStateTHR=setInterval(function() {changRGB();},300);
            }
            if(sect2boxTHR==-1){ //需載入Hello World邊框RGB
                sect2boxTHR=setInterval(function() {changeSect2_box();},300);
            }
            $('.sect2_content').css('position','absolute');
            $('.sect2_content').css('bottom','initial');
            $('.sect2_content').css('top','0px');
            $('.sect2_sentence').css('transform','scale(0)');
            $('.sect1_img').css('-webkit-filter','brightness(0.2)');
        }
        var temp=Math.round (-100+Math.min(1,(nowvYBottomset-sect1Yset+53)/deviceHeight)*100,2);
        tempOK=(temp/-100*0.8+0.2);
        $('.sect1_img').css('-webkit-filter','brightness('+tempOK+')');
        $('.sect2_title p:nth-child(1)').css('left',temp+"%")
        $('.sect2_title p:nth-child(2)').css('right',temp+"%")
    }else if(nowvYset>=sect1Yset-53 && nowvYBottomset<=sect2Yset){ //[3] 區塊2
        if(scrollState!=3){ //解決重複效能低問題
            scrollState=3;
            $('.sect2_content').css('position','fixed');
            $('.sect2_content').css('bottom','initial');
            $('.sect2_content').css('top','53px');
            $('.sect2_title p:nth-child(1)').css('left','0%');
            $('.sect2_title p:nth-child(2)').css('right','0%');
            $('.sect1_img').css('-webkit-filter','brightness(0.2)');
            if(RGBCHKStateTHR!=-1){ //清除關閉載入Hello World邊框RGB
                clearInterval(RGBCHKStateTHR);
                RGBCHKStateTHR=-1;
            }
            if(sect2boxTHR==-1){ //需載入Hello World邊框RGB
                sect2boxTHR=setInterval(function() {changeSect2_box();},300);
            }
        }
        $('.sect2_sentence').css('transform','scale('+Math.min(1,(nowvYset+53-sect1Yset)/((sect2Yset-sect1Yset)/2))+')');
    }else if(nowvYBottomset>sect2Yset){ //[4]
        if(scrollState!=4){ //解決重複效能低問題
            scrollState=4;
            /* console.log("區塊3"); */
            $('.sect2_content').css('position','absolute');
            $('.sect2_content').css('bottom','0px');
            $('.sect2_content').css('top','initial');
            $('.sect1_img').css('-webkit-filter','brightness(0.2)');
            if(RGBCHKStateTHR!=-1){ //清除關閉載入Hello World邊框RGB
                clearInterval(RGBCHKStateTHR);
                RGBCHKStateTHR=-1;
            }
            if(sect2boxTHR==-1){ //需載入Hello World邊框RGB
                sect2boxTHR=setInterval(function() {changeSect2_box();},300);
            }
        }
    }else{
        if(scrollState!=5){
            scrollState=5;
            if(RGBCHKStateTHR!=-1){ //清除關閉載入Hello World邊框RGB
                clearInterval(RGBCHKStateTHR);
                RGBCHKStateTHR=-1;
            }
            if(sect2boxTHR!=-1){ //需載入Hello World邊框RGB
                clearInterval(sect2boxTHR);
                sect2boxTHR=-1;
            }
        }

    }
    /*if(nowXBTset >= sect1Yset && nowYset<=sect2Yset){
        console.log(nowYset/sect2Yset*50-50+20+'%')
        $('.sect2_title').css('left',nowYset/sect2Yset*50-50+'%')
    }*/
}

//Welcome歡迎RGB
var R=255,G=0,B=0,RGBState=1,RGBStep=5;
function changRGB(){
    if(RGBState==1){ //R->G
        if(R-RGBStep<0||G+RGBStep>255){
            R=0;
            G=255;
            RGBState=2;
        }else{
            R-=RGBStep;
            G+=RGBStep;
        }
    }else if(RGBState==2){ //G->B
        if(G-RGBStep<0||B+RGBStep>255){
            G=0;
            B=255;
            RGBState=3;
        }else{
            G-=RGBStep;
            B+=RGBStep;
        }
    }else if(RGBState==3){ //B->R
        if(B-RGBStep<0||R+RGBStep>255){
            B=0;
            R=255;
            RGBState=1;
        }else{
            B-=RGBStep;
            R+=RGBStep;
        }
    }
    $('.Welcome img').css('box-shadow','0 0 10px rgb('+R+','+G+','+B+')'+',0 0 10px rgb('+R+','+G+','+B+')'+',0 0 20px rgb('+R+','+G+','+B+')'+',0 0 55px rgb('+R+','+G+','+B+')');
}
var sect2boxNEO=10;
var sect2boxNEOState=1;
function changeSect2_box(){
    if(sect2boxNEOState){
        if(sect2boxNEO+2>40){
            sect2boxNEOState=0;
        }else{
            sect2boxNEO+=2;
        }
    }else{
        if(sect2boxNEO-2<10){
            sect2boxNEOState=1;
        }else{
            sect2boxNEO-=2;
        }
    }
    $('.sect2_sentence').css('box-shadow', '0 0 '+sect2boxNEO+'px rgb(250, 233, 186)');
}
//Touch me事件
/*
$('.Welcome_btn').click(function(){
    var a=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var c=Math.floor(Math.random()*256);
    $('.section1').css('background-color','rgb('+a+','+b+','+c+')');
    alert("嗨！(´・ω・`)");
});
*/
//隨機顏色系統
stackR=255,stackG=255,stackB=255;
$(document).ready(function(){
    $('.Welcome_btn_div').click(function(){
        stackR=Math.floor(Math.random()*256);
        stackG=Math.floor(Math.random()*256);
        stackB=Math.floor(Math.random()*256);
        $('.myimg').css('background-color','rgba('+stackR+','+stackG+','+stackB+',1)');
        if (window.scrollY >= sticky) {
            hder.style['background-color']='rgb('+stackR+','+stackG+','+stackB+')';
        }
    })
    $('.Welcome_btn_div').click(function(){
        $(this).blur(); //移除焦點
    })
});

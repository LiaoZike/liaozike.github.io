
//手機板選單
var button = document.querySelector('.aboutme');
var ckbox = document.querySelector('.menu_control')
function popup2(e) {
    ckbox.checked=false;
};
button.addEventListener('click', popup2);
RGBCHKState=setInterval(function() {changRGB();},8);
//導覽列變色 header/hder
window.onscroll = function() {myFunction()};
var hder = document.getElementById("hder"); 
var sticky = hder.offsetHeight - 50;
var scrollState=0; //
function myFunction() {
    var nowvYset=window.scrollY; /*螢幕頂端位置*/
    var nowvYBottomset=nowvYset+window.innerHeight /*螢幕底端位置*/
    var sect1Yset=document.querySelector('.section1').offsetHeight; /*section1的底端位置(高度)*/
    var sect2Yset=document.querySelector('.section2').offsetTop+document.querySelector('.section2').offsetHeight; /*section2的底端位置(高度)*/
    if (nowvYset >= sticky+5) {
        hder.style['background-color']='rgb('+stackR+','+stackG+','+stackB+')';
    } else {
        hder.style['background-color']='rgb('+180+','+180+','+180+')';
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
        if(RGBCHKState==-1){
            RGBCHKState=setInterval(function() {
                changRGB();
            },8);
        }
        if(scrollState!=1){ //解決重複效能低問題
            /* console.log("區塊1"); */
            $('.sect2_content').css('position','absolute');
            $('.sect2_content').css('bottom','initial');
            $('.sect2_content').css('top','0px');
            scrollState=1;
        }
    }else if(nowvYBottomset>sect1Yset && nowvYset<=sect1Yset-53){
        if(RGBCHKState==-1){
            RGBCHKState=setInterval(function() {
                changRGB();
            },8);
        }
        /* onsole.log("區塊1 --> 區塊2"); */
        $('.sect2_content').css('position','absolute');
        $('.sect2_content').css('bottom','initial');
        $('.sect2_content').css('top','0px');
        var temp=-100+Math.min(1,(nowvYBottomset-sect1Yset+53)/(document.querySelector('.section2').offsetHeight/2))*100;
        //console.log(temp+"%")
        $('.sect2_title p:nth-child(1)').css('left',temp+"%")
        $('.sect2_title p:nth-child(2)').css('right',temp+"%")
        scrollState=0;
    }else if(nowvYset>=sect1Yset-53 && nowvYBottomset<=sect2Yset){ //[3] 區塊2
        clearInterval(RGBCHKState);
        RGBCHKState=-1;
        if(scrollState!=3){ //解決重複效能低問題
            console.log("黏上去");
            /* console.log("在區塊2!"); */
            $('.sect2_content').css('position','fixed');
            $('.sect2_content').css('bottom','initial');
            $('.sect2_content').css('top','53px');
            $('.sect2_title p:nth-child(1)').css('left','0%');
            $('.sect2_title p:nth-child(2)').css('right','0%');
            scrollState=3;
        }
    }else if(nowvYBottomset>sect2Yset){ //[4]
        clearInterval(RGBCHKState);
        RGBCHKState=-1;
        if(scrollState!=4){ //解決重複效能低問題
            /* console.log("區塊3"); */
            $('.sect2_content').css('position','absolute');
            $('.sect2_content').css('bottom','0px');
            $('.sect2_content').css('top','initial');
            scrollState=4;
        }
    }else{
        clearInterval(RGBCHKState);
        RGBCHKState=-1;
        scrollState=0;

    }
    /*if(nowXBTset >= sect1Yset && nowYset<=sect2Yset){
        console.log(nowYset/sect2Yset*50-50+20+'%')
        $('.sect2_title').css('left',nowYset/sect2Yset*50-50+'%')
    }*/
}


//Welcome歡迎RGB
var R=255,G=0,B=0;
function changRGB (){
    if(R==255 && G!=255 && B==0){
        ++G;
    }else if(R!=0 && G==255 && B==0){
        --R;
    }else if(R==0 && G==255 && B!=255){
        ++B;
    }else if(R==0 && G!=0 && B==255){
        --G;
    }else if(R!=255 && G==0 && B==255){
        ++R;
    }else if(R==255 && G==0 && B!=0){
        --B;
    }
    $(document).ready(function(){
        /*
        box-shadow: 0 0 5px #ffe100,
    0 0 25px #ffe100,
    0 0 50px #ffe100,
    0 0 100px #ffe100;

        */
        $('.Welcome img').css('box-shadow','0 0 5px rgb('+R+','+G+','+B+')'+',0 0 10px rgb('+R+','+G+','+B+')'+',0 0 20px rgb('+R+','+G+','+B+')'+',0 0 55px rgb('+R+','+G+','+B+')');
    });
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
        $('.section1').css('background-color','rgba('+stackR+','+stackG+','+stackB+',10%)');
        if (window.pageYOffset >= sticky) {
            hder.style['background-color']='rgb('+stackR+','+stackG+','+stackB+')';
        }
        //------------------------------

        
    })
});

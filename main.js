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
function myFunction() {
    if (window.pageYOffset >= sticky) {
        hder.style['background-color']='rgb('+stackR+','+stackG+','+stackB+')';
    } else {
        hder.style['background-color']='rgb('+180+','+180+','+180+')';
    }
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
setInterval(function() {
    changRGB();
},8)    

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
        $('.section1').css('background-color','rgb('+stackR+','+stackG+','+stackB+')');
        if (window.pageYOffset >= sticky) {
            hder.style['background-color']='rgb('+stackR+','+stackG+','+stackB+')';
        }
        
    })
});
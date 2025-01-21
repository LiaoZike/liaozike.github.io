
var R=255,G=0,B=0;
var getmode=1;
var slideVal=6; //滑桿值
var chkState=true; //開關 預設:開
var RGBid=0;
var arrtime={},arrstate={};//一個存秒數 一個存狀態
function changeRGB () { //負責加數值 之後呼叫changColor改變元素顏色
    if(chkState==1){
        if(R==255 && G!=255 && B==0){
            G++;
        }else if(R!=0 && G==255 && B==0){
            R--;
        }else if(R==0 && G==255 && B!=255){
            B++;
        }else if(R==0 && G!=0 && B==255){
            G--;
        }else if(R!=255 && G==0 && B==255){
            R++;
        }else if(R==255 && G==0 && B!=0){
            B--;
        }
        changColor();
    }
}
function changColor(){
    $(document).ready(function(){
        $('.keyboard >div >div').css('box-shadow' ,'0px 0px 8px 8px rgb('+R+','+G+','+B+')');
        $('.keyboard >div >div').css('color' ,'rgb('+R+','+G+','+B+')');
    });
}
function keyboardmode(){ //若有任何改變相關就會呼叫相對應的事
    $(document).ready(function(){
        $('.keyboard').focus();
        var color=$("#modecolor").val();
        clearInterval(RGBid);
        $(".keyboard >div >div").css('animation','none');
        if(chkState==true){ /* */
            if(getmode==1){ //固定顏色
                setTimeout(function(){
                    $(".keyboard >div >div").css('box-shadow','0px 0px 8px 8px'+color);
                    $(".keyboard >div >div").css('color',color);
                },200);
            }else if(getmode==2){ //呼吸燈
                $(".keyboard >div >div").css('box-shadow','0px 0px 8px 8px'+color);
                $(".keyboard >div >div").css('color',color);
                $(".keyboard >div >div").css('animation','hoxi '+slideVal+'s infinite');
            }else if(getmode==3){ //RGB循環
                $(".keyboard >div >div").css('animation','none');
                var temp=slideVal+1;
                RGBid = setInterval(function() {
                    changeRGB();
                },temp);
            }else if(getmode==4){ //RGB呼吸
                var temp=slideVal+8;
                $(".keyboard >div >div").css('animation','RGBhoxi '+temp +'s  infinite');
            }

        }else{
            clearInterval(RGBid);
            setTimeout(function(){
                $(".keyboard >div >div").css('animation','none');
                $(".keyboard >div >div").css('box-shadow','0px 0px 8px 8px rgb(0, 0, 0)');
                $(".keyboard >div >div").css('color','rgb(98, 98, 98)');
            },200);

        }
    });
}
$(document).ready(function(){

    $('#modeselect').change(function(){ //選擇模式改變
        getmode=this.value;
        keyboardmode();
    });
    $("#modecolor").change(function(){ //選擇顏色改變
        keyboardmode();
    });
    $('.turnBlock').click(function(){ //開關改變
        var v=$("#RGB_control").is(":checked");
        $("#RGB_control").attr("checked",!v);
        chkState=!v;
        keyboardmode();
    });
    $('.clearbtn').click(function(){
        $('.keyboard >div >div').css('background-color','rgb(60, 60, 60)');
        $('.keyboardlog tbody').html('<tr><th scope="row">-</th><td>-</td><td>-</td></tr>');
    });
    $(document).keydown(function(event){
        thekey=event.keyCode;
        thecode=event.code;
        if (thekey==12) thekey=144;
        // if (![37, 38, 39, 40, 33, 34].includes(thekey))
        if(arrstate[thecode]!=1){ //防止重複覆蓋
            arrtime[thecode]=new Date().getTime(); //將第一次按下的秒數存進去
            arrstate[thecode]=1;//呼應防止重複
            if(thecode=="ShiftLeft" || thecode=="ShiftRight"|| thecode=="NumpadEnter" || thecode=="ControlRight"
                || thecode=="ControlLeft" || thecode=="AltRight" || thecode=="AltLeft" || thecode=="MetaLeft"
                || thecode=="ContextMenu"){ //額外處理案件
                $('#'+thecode).css('background-color','rgb(179, 117, 0)');
            }else{
                $('#key'+event.keyCode).css('background-color','rgb(179, 117, 0)');
            }
            clearcode=thecode.replace('Key', '');
            $(".keyboardlog").prepend('<tr><th scope="row">'+clearcode+'</th><td>按下</td><td>-</td></tr>');

        }
        event.preventDefault();
    })
    $(document).keyup(function(event){
        thekey=event.keyCode; //記錄案件英文碼
        thecode=event.code;
        temp=(new Date().getTime()-arrtime[thecode])/1000; //記錄目前-上次記錄時間
        arrstate[thecode]=0; //按下狀態為0
        if(thecode=="ShiftLeft" || thecode=="ShiftRight"|| thecode=="NumpadEnter" || thecode=="ControlRight"
            || thecode=="ControlLeft" || thecode=="AltRight" || thecode=="AltLeft" || thecode=="MetaLeft"
            || thecode=="ContextMenu"){
            $('#'+thecode).css('background-color','#f8b654');
        }else{
            $('#key'+event.keyCode).css('background-color','#f8b654');
        }
        clearcode=thecode.replace('Key', '');
        $(".keyboardlog").prepend('<tr class="log_tr_bck"><th scope="row">'+clearcode+'</th> <td>放開</td> <td>'+temp+'秒</td> </tr>');

    })

    $('#slider').slider({ //滑桿數值 以及滑動時所做的函式：呼叫改變鍵盤色
        min: 0,
        max: 10,
        step: 1,
        value: 5,
        slide: function(e, ui) {
            slideVal=Math.round(ui.value)+1;
            keyboardmode();
        },
    });
    $(document).ready(function(){
        var year=new Date().getFullYear();
        $('.fixtime').html("Copyright © 2022-"+year+" 廖子科 All rights reserved.")
    })
});

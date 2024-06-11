var clickval="";
var loglist=[];
var blocklist =["green","red","yellow","blue"]
var gamestart =false;
var lvl = 0;
var seqlog=[];


if (!gamestart){
    $(document).keypress(function(){
        $("h1").text("Level: "+lvl);
        gamestart =true;
        
        gamestart1();
    })

    $("#start1").click(function(){
        $("h1").text("Level: "+lvl);
        gamestart =true;
        
        gamestart1();
    })
}


function gamestart1(){
    lvl++;
    $("h1").text("Level: "+lvl);
    loglist=[];
    // console.log("gamestart loglis: "+loglist+ "level: "+ lvl);

    setTimeout(function(){
        randomkeygen();
    },1000);

    
}


$(".btn").on("click", function(){
    clickval =$(this).attr("id");
    playsound(clickval);
    press(clickval);  // press(this);
    loglist.push(clickval);
    console.log("loglist "+loglist); //may remove

    checkbutton();

});


function checkbutton(){

    if(loglist[loglist.length-1]==seqlog[loglist.length-1]){
        if(loglist.length==seqlog.length){
            // lvl++;
            // $("h1").text("Level"+lvl);
            // loglist=[];
            setTimeout(function(){
                gamestart1();
            },1000);
            
        }
    } else {
        gameover();
    }
}

function gameover(){
    lvl=0;
    loglist=[];
    seqlog=[];
    gamestart =false;
    $("h1").text("Press key again to restart");
    gamover_anim();
}

function gamover_anim(){
    var key1= "wrong";
    playsound(key1);

    $(document).addClass("game-over");
    setTimeout(function(){
        $(document).removeClass("game-over");
    },100)
    
    
}




function playsound(key){
    var audio =new Audio("./sounds/"+ key + ".mp3");
    audio.play();

}

function animate1(key){
    $("#"+key).fadeOut();
    setTimeout(function(){
        $("#"+key).fadeIn();
        playsound(key);
    },50);
}


function press(button){
    $("#"+button).addClass("pressed");  //or $(button) if button is this
    setTimeout(function(){
        $("#"+button).removeClass("pressed")
    },100);
}

function randomkeygen(){
    var val = Math.floor(Math.random()*4);
    var chose =blocklist[val];
    animate1(chose);
    seqlog.push(chose);
    console.log("patter: "+seqlog);   //may remove

}






// $(".btn").on("click",function (){
//     console.log($(this).attr("id"));
//     clickval =$(this).attr("id");
//     // var button =this;
//     playsound(clickval);
//     press(clickval);  // press(this);

//     setTimeout(function(){
//         randomkeygen();
//     },2000);
    
// })
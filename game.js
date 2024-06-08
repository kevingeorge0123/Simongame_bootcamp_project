// alert("hello");

var col =["green","red","yellow","blue"]

var seqlog =[];

function nextSequence(){
    var numb = Math.floor((Math.random()*4));
    console.log(col[numb]);
    seqlog.push(col[numb]);
    btnhighlight(col[numb]);
    playsound(col[numb]);
}

var loglist =[];


$(".btn").on("click", function(){
    var clickval = $(this).attr("id");
    console.log(clickval);
    loglist.push(clickval);

    playsound(clickval);
    var btn1= this;
    animate1(btn1);

    $(this).fadeOut();
    setTimeout(function(){
        $(".btn").fadeIn();
    },50);
    
    // return clickval;
    // alert(this);
    // console.log(clickval);
});







function check(){
    var stat = seqlog[seqlog.length-1]==loglist[loglist.length-1]
    return stat
    }




// function play(){
//     alert("play game");
//     var play1= true;

//     while(play1){
//         nextSequence();
//         // while (true){
//         //     btnclick()
//         // }
//         if (loglist.length==seqlog.length){

//             var stat = check()
//             console.log(stat);
//             if (stat){
//                 console.log("win");
//             }else{
//                 console.log("end game");
//                 break;
//             }
            
//         } else {
//             console.log("end game");
//             break;
//         } 
        
//     }


// }

function play(){
    alert("Ready");
    var lvl =0;
    seqlog =[];
    $(document).keypress(function(){
        $("h1").text("Level "+ lvl);
        play1(lvl); 
    })

}

function play1(lvl){
    nextSequence();
    var loglist1 =[];

    $(".btn").on("click", function(){
        var clickval = $(this).attr("id");
        console.log(clickval);
        loglist1.push(clickval);
    
        playsound(clickval);
        var btn1= this;
        animate1(btn1);
    
        $(this).fadeOut();
        setTimeout(function(){
            $(".btn").fadeIn();
        },50);
        
        for (var i=0; i< loglist1.length ; i++){
            var check = (loglist1[i]==seqlog[i]);
            if(!check){
                gameover();

            } 

        };
        console.log("win next level");
        //lvl++ ;
        $("h1").text("Level "+ lvl++);
        play1(lvl);



        // return clickval;
        // alert(this);
        // console.log(clickval);
    });

    function gameover(){
        $(document).addClass("game-over");
        setTimeout(function(){
            $(document).removeClass("game-over");
        },2000);
        console.log("failed");
        seqlog =[];
        $("h1").text("Press A Key to Start");
        play();


    }


}


function playsound(key){

    switch (key) {
        case "green":
          var green = new Audio("./sounds/green.mp3");
          green.play();
          break;
    
        case "red":
          var red = new Audio("sounds/red.mp3");
          red.play();
          break;
    
        case "blue":
          var blue = new Audio('sounds/blue.mp3');
          blue.play();
          break;
    
        case "yellow":
          var yellow = new Audio('sounds/yellow.mp3');
          yellow.play();
          break;
    
    
        default: console.log(key);
    
      }

}



function btnhighlight(key){
    $("#"+key).fadeOut();
    setTimeout(function(){
        $(".btn").fadeIn();
    },50);

}

function animate1(key){
    $(key).addClass("pressed");
    setTimeout(function(){
        $(key).removeClass("pressed");
    },500);

}




// function btnclick(){

//     var loglist1 =[];

  
//     $(".btn").on("click", function(){
//         //saving click id to loglist1
//         var clickval = $(this).attr("id");
//         console.log(clickval);
//         loglist1.push(clickval);
        
//         //playmusic
//         playsound(clickval);
    
//         //animate
//         $(this).fadeOut();
//         setTimeout(function(){
//             $(".btn").fadeIn();
//         },50);
        
//         // return clickval;
//         // alert(this);
//         // console.log(clickval);

//         if (JSON.stringify(loglist1) == JSON.stringify(seqlog)){

//                console.log("win");
//                break;
//             }else{
//                 console.log("end game");
//                 break;
//             }
            
      



//     });



// }





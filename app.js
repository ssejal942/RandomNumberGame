// game function
var count1=0;
var count2=0;
function game()
{
    var player1= 100;
    var player2= 100;
    var random1, random2;
    var num;
    while(player1>0 || player2>0)
    {
       random1= Math.floor(Math.random() * 6);
       player2=player2-random1;
       random2= Math.floor(Math.random() * 6);
       player1=player1-random2;
    }
    if (player1>player2)
    {
        num=1;
        return num;
    }
    else 
    {
        num=2;
        return num;
    }
}
// game 1 starts
$("#btn1").click(function(){
    var x = document.getElementById("second");
    var res; 
    res=game();
    if (res==1)
    {
        count1=count1+1;
        $(".game1_player1").html(count1);
        $(".game1_player2").html(count2);
    }
    else 
    {
        count2=count2+1;
        $(".game1_player1").html(count1);
        $(".game1_player2").html(count2);
    }
    x.style.display='block';
});

// game 2 starts
$("#btn2").click(function(){
    var y = document.getElementById("third");
    game(y);
    var res; 
    res=game();
    if (res==1)
    {
        count1=count1+1;
        $(".game2_player1").html(count1);
        $(".game2_player2").html(count2);
    }
    else 
    {
        count2=count2+1;
        $(".game2_player1").html(count1);
        $(".game2_player2").html(count2);
    }
    y.style.display='block';
});

// game 3 starts
$("#btn3").click(function(){
    var z = document.getElementById("fourth");
    var res; 
    res=game();
    if (res==1)
    {
        count1=count1+1;
        $(".game3_player1").html(count1);
        $(".game3_player2").html(count2);
    }
    else 
    {
        count2=count2+1;
        $(".game3_player1").html(count1);
        $(".game3_player2").html(count2);
    }
    z.style.display='block';
});

// game 4 starts
$("#btn4").click(function(){
    var p = document.getElementById("fifth");
    var res; 
    res=game();
    if (res==1)
    {
        count1=count1+1;
        $(".game4_player1").html(count1);
        $(".game4_player2").html(count2);
    }
    else 
    {
        count2=count2+1;
        $(".game4_player1").html(count1);
        $(".game4_player2").html(count2);
    }
    p.style.display='block';
});

// game 5 starts
$("#btn5").click(function(){
    var q = document.getElementById("final");
    var res; 
    res=game();
    if (res==1)
    {
        count1=count1+1;
        $(".game5_player1").html(count1);
        $(".game5_player2").html(count2);
    }
    else 
    {
        count2=count2+1;
        $(".game5_player1").html(count1);
        $(".game5_player2").html(count2);
    }
    q.style.display='block';
    if(count1>count2)
    {
          $("#result").html("<p>Player 1 won the match!</p>");
    }
    else
    {
          $("#result").html("<p>Player 2 won the match!</p>");
    }
});


var score = 0;


function click(){
score=score+1;

if(score=100){
    document.getElementById("win").innerHTML="You Won";


}
}


document.getElementById("score").innerHTML= score;


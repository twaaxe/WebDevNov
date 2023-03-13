//Select item

const dice1Text = document.getElementById("dice1");
const dice2Text = document.getElementById("dice2");
const countText = document.getElementById("result");
let count=0;
const winSound=document.getElementById("sound");
const winnerGif = document.getElementById("winnerGif");

//generate andom numbers
function DiceRoll(){

    dice1Random = Math.round(Math.random()*5+1);
    dice2Random = Math.round(Math.random()*5+1);
    dice1.innerText = `Dice1 ${dice1Random}`;
    dice2.innerText = `Dice2 ${dice2Random}`;
    if ( dice1Random == dice2Random){
        // alert("You win");
        count++;
        countText.innerText="";
        countText.innerText="You win! \n " + count;
        winnerGif.src = "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2015_23/617511/tdy_wayansgif_150605.gif";
        // setTimeout(()=>{
        //     winnerGif.src="";
        // },2000);
         winSound.play();
        
    }else{
        winnerGif.src = "";
    }
}


function ClickHandeler(){
    
    DiceRoll();
}





















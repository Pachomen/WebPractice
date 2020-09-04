


var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var diceNumber1 = "images/dice"+ randomNumber1 + ".png";

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var diceNumber2 = "images/dice"+ randomNumber2 + ".png";


document.querySelector(".img1").setAttribute("src", diceNumber1);

document.querySelector(".img2").setAttribute("src", diceNumber2);

showResult();

function showResult(){
    var Text = "Refresh Me";
    if(diceNumber1 === diceNumber2){
        Text = "Draw";
    }
    else if(diceNumber1 > diceNumber2){
        Text = "Player 1 Won!";
    }
    else{
        Text = "Player 2 Won!";
    }
    
    document.querySelector("h1").textContent = Text;
}
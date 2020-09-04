
var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColour;

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

// Game Begin
$(document).keypress(function(event){
    console.log(event.key);
    $("h1").text("Level "+ level);
    nextSequence();
});

//Player psuh button
$(".btn").click(function (event) {
    var userChosenColour = $(this).attr("id");
    animatedPress(userChosenColour);
    //$(this).fadeOut(100).fadeIn(100);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    soundEffect(userChosenColour);
    checkAnswer(userClickedPattern.length);
});

//Sequence creating
function nextSequence(){
    level ++;
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut().fadeIn();   
    soundEffect(randomChosenColour);
    $("h1").text("Level "+ level);
}
//Check Answer
function checkAnswer(index) {
    index = index - 1;
    if (gamePattern[index] != userClickedPattern[index]) {
        soundEffect("wrong");
        gameOver();
        console.log("Game Over");
    }
    else if(gamePattern.length == userClickedPattern.length){
        setTimeout(nextSequence(), 1000);
    }
}

//Game Over 
function gameOver(){
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 500);
    startOver();
}

//Start Over
function startOver(){
    gamePattern = [];
    level = 0;
    $("h1").text("Level "+ level);
    userClickedPattern = [];
    nextSequence();
}

//Sound Effect
function soundEffect(soundColor){
    
    var audio = new Audio("sounds/" + soundColor + ".mp3");
    audio.play();
}

//Animation Button
function animatedPress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}
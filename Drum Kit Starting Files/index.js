
//Detecting Button Press
for (var i= 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
        var buttonInnerHTML = this.innerHTML;
    
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting Key Press
document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
});

// Function Make the sound 
function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currrentKey){
    var activeButton = document.querySelector("." + currrentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function(){
        activeButton.classList.toggle("pressed");
    },100);
    
}

//Objects

// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.moveSuitcase = function(){
//         alert("May I take your suitcase?");
//         pickUpSuitcase();
//         move();
//     }
// }

// var houseKeeper1 = new HouseKeeper (12, "Mary", ["Door", "Kitchen", "Bathroom"]);

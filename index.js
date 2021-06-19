// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    // We can use anonymous function like this.
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("i got Clicked.")

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}


// Detecting keyboard press.
document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) 
{
    switch (key) 
    {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log();
            break;
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // This is setTimeout fun that after 0.1 sec i.e 100 miliseconds, the shadow get disappear. so that it's look like an animation.
    // and setTimeout function takes two arguments one is the function that will be executed and another is the number of milliseconds to wait before executing the code..
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


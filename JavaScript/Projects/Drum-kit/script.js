// alert("hello");

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick() {
    var buttonInnerHtml = this.innerHTML;
    switch (buttonInnerHtml) {
        case "W":
            crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "A":
            kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "S":
            snare = new Audio("sounds/snare.mp3");
            snare.play();

        case "D":
            tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

        case "J":
            tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

        case "K":
            tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();

        case "L":
            tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

        default:
            console.log(this.innerHTML);
            break;
    }
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            snare = new Audio("sounds/snare.mp3");
            snare.play();

        case "d":
            tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

        case "j":
            tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

        case "k":
            tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();

        case "l":
            tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

        default:
            console.log(this.innerHTML);
            break;
    }
}
// Add click event listeners to all drum kit buttons to trigger sound playback and button animation
for(var index = 0; index<document.querySelectorAll(".drum").length; index++){
    document.querySelectorAll(".drum")[index].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);

        playSound(buttonInnerHTML);

        
        // Add the scale class to the button
        this.classList.add('scale');
      
      // Remove the scale class after the transition ends
        setTimeout(() => {
            this.classList.remove('scale');
        }, 300);

    })
}

// manipulating the keyboard keys to each drum kit instrument
const buttonIDs = ['w','a','s','d','j','k','l'];

document.addEventListener("keydown",function(event){
    playSound(event.key);

    var key = event.key.toLowerCase();
    var index = buttonIDs.indexOf(key);
    
    
    if (index < buttonIDs.length) {
        const button = document.getElementById(buttonIDs[index]);
        button.classList.add('scale');
    }
});

document.addEventListener("keyup",function(event){

    var key = event.key.toLowerCase();
    var index = buttonIDs.indexOf(key);
    
    
    if (index < buttonIDs.length) {
        const button = document.getElementById(buttonIDs[index]);
        button.classList.remove('scale');
    }
})

// function to play sound 
function playSound(key){

    switch (key) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }

}

















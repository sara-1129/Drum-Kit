
let target = document.querySelectorAll(".drum");

//detecting button presses
for(let i = 0; i < target.length; i++ ){
target[i].addEventListener("click",function () {
    
      let check = this.innerHTML;
      playSound(check);
      buttonAnimation(check);
});
}

//detecting keyboard presses
document.addEventListener('keydown',
      function (event) {
            check = event.key;
            playSound(check);
            buttonAnimation(check);
            
      }
);

//Playsound function
function playSound (check) {
      let sound;
       switch(check) {
        case 'w':   
              sound = new Audio('./sounds/tom-1.mp3');
              break;
        case 'a':   
              sound = new Audio('./sounds/tom-2.mp3');
              break;
        case 's':   
              sound = new Audio('./sounds/tom-3.mp3'); 
              break;
        case 'd':   
              sound = new Audio('./sounds/tom-4.mp3'); 
              break;
        case 'j':   
              sound = new Audio('./sounds/crash.mp3');
              break;
        case 'k':   
              sound = new Audio('./sounds/kick-bass.mp3'); 
              break;
        case 'l':   
              sound = new Audio('./sounds/snare.mp3');
              break;
        default:
              console.log(check);
    }
     sound.play();
}

//Adding animations
function buttonAnimation (currentKey) {
     let activeButton = document.querySelector("." + currentKey);
     activeButton.classList.add("pressed");

    setTimeout( function() {
      activeButton.classList.remove("pressed")
    },100);

     
}
// Iteration 1: Declare variables required for this game

const body = document.getElementById("game-body");
let seconds = document.getElementById('timer').innerHTML;
let zombie_id=1;
// Iteration 1.2: Add shotgun sound
let shotgun_sound = new Audio("assets/shotgun.wav");

body.onclick = ()=>{
    shotgun_sound.pause();
    shotgun_sound.currentTime =0;
    shotgun_sound.play();
}
// Iteration 1.3: Add background sound

const bgm = new Audio("assets/bgm.mp3");
bgm.play()
bgm.loop=true;
// Iteration 1.4: Add lives

let lives =4;
// Iteration 2: Write a function to make a zombie
function makezomb(){
    body.innerHTML += `<img src='assets/zombie-${getrandomint(1, 6)}.png' class='zombie-image' id='zombie${zombie_id}' />`;
    let currzomb = document.querySelector(`#zombie${zombie_id}`);
    console.log(currzomb);
    currzomb.style.transform = `translateX(${getrandomint(20, 80)}vw)`;
    currzomb.onclick = () =>{
        destroy(currzomb);

    }
    // zombie_id++
}
makezomb();
// Iteration 3: Write a function to check if the player missed a zombie

function check_zombie(zombie){
    console.log(zombie.getBoundingClientRect());
if(zombie.getBoundingClientRect().top <= 0){
    lives--
    destroy(zombie);
    if(lives == 0){
        console.log("hh")
        location.href = "game-over.html"
    }
}
}
// Iteration 4: Write a function to destroy a zombie when it is shot or missed

function destroy(zombie){
    zombie.style.display= "none";
    zombie_id++;
    makezomb();
}
// Iteration 5: Creating timer
var timer = setInterval(() =>{
    seconds--
    ;
    document.getElementById('timer').innerHTML=seconds;
    if(seconds==0){
        location.href = "zombie-shoot-boilerplate\win.html";
    }
    let curzomb = document.querySelector(`#zombie${zombie_id}`)
    check_zombie(curzomb)

},1000)

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer
function getrandomint(min, max){
return min + Math.ceil(Math.random()*(max-min))  
}
getrandomint(30,40)
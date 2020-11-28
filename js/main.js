var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;

function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        }, 500)
    }
}

var collisionDectect = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>0 && characterTop>=390){
        block.style.animation = "none";
        alert("Game Over. Score: "+Math.floor(score/100));
        score = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        score++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);
    }
}, 10);
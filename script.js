var hit;
var score=0;


function makeBubble() {
    var cluster = "";
    for (var i = 0; i < 147; i++) {
        var rn = Math.floor(Math.random() * 10);
        cluster += `<div id="bubble">${rn}</div>`
    }
    document.querySelector("#pbottom").innerHTML = cluster;
}

function Timer() {
    var timer = document.querySelector(".Timer").textContent;

    var interval = setInterval(function(){
        if (timer > 0) {
            timer--;
            document.querySelector(".Timer").textContent = timer;
        }
        else {
                clearInterval(interval);
                document.querySelector("#pbottom").innerHTML= `<h2 >Game Over</h2>`;
        }
    },1000)

}
function Score(){
    score+=10;
    document.querySelector(".score1").textContent = score;
}

function newHit(){
hit=Math.floor(Math.random()*10);
document.querySelector(".hit").textContent =hit;
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
var numClicked =Number(dets.target.textContent);
if(numClicked === hit){
    Score();
    makeBubble();
    newHit();
}
})

newHit();
makeBubble();
Timer();

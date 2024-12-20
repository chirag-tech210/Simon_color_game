let gamesq = []
let usersq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started")
        started = true;
        levelup()
    }
});

function flashbtn(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}
function levelup() {
    usersq=[];
    level++;
    h2.innerText = `level${level}`

    let rndmindx = Math.floor(Math.random() * 3);
    let rndmcolor = btns[rndmindx];
    let rndmbtn = document.querySelector(`.${rndmcolor}`);
    /*console.log(rndmindx)
    console.log(rndmcolor)
    console.log(rndmbtn)*/
    gamesq.push(rndmcolor);
    console.log(gamesq)
    flashbtn(rndmbtn);
};
let body = document.querySelector("body")
function checkans(indx){
    if(usersq[indx] === gamesq[indx]){
        if(usersq.length==gamesq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`game over ! Your score was <b>${level}</b> <br>press any key to start`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150)
        reset();
    }
}
function btnpress() {
    console.log(this)
    let btn = this;
    flashbtn(btn);
    let usecolor=btn.getAttribute("id");
    console.log(usecolor);
    usersq.push(usecolor);
    checkans(usersq.length-1);
};
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
};
function reset(){
    started = false;
    gamesq=[];
    usersq=[];
    level = 0;
}

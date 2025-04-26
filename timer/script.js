let timer = document.getElementById("timer");
let startbuton = document.getElementById("start");
let stopbuton = document.getElementById("stop");
let resetbuton = document.getElementById("reset");



let starttime = 0;
let elepedtime = 0;
let timerinterval;

function starttimer(){
    starttime = Date.now()-elepedtime
timerinterval = setInterval(() => {
    elepedtime = Date.now()-starttime;
    timer.textContent = formateTime(elepedtime)
}, 10); 
startbuton.disabled = true;   
stopbuton.disabled = false;   
}

function formateTime(elepedtime){
const milisecond = Math.floor((elepedtime%1000)/10);
const second = Math.floor((elepedtime%(1000*60))/1000);
const minutes = Math.floor((elepedtime%(1000*60*60))/(1000*60));
const hours= Math.floor((elepedtime)/(1000*60*60));
return((hours ? (hours > 9 ? hours : "0" + hours) : "00") +
":" +
(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
":" +
(second ? (second > 9 ? second : "0" + second) : "00") +
"." +
(milisecond > 9 ? milisecond : "0" + milisecond))
}
function stoptimer(){
    clearInterval(timerinterval);
    startbuton.disabled = false;
    stopbuton.disabled = true;
}

function resettimer(){
    clearInterval(timerinterval);
    elepedtime  =0;
    timer.textContent = "00:00:00";
    startbuton.disabled = false;
    stopbuton.disabled = true;
}

startbuton.addEventListener("click",()=>{
    starttimer();
})

stopbuton.addEventListener("click",()=>{
    stoptimer();
})

resetbuton.addEventListener("click",()=>{
    resettimer();                              
})
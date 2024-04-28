let  hour = document.getElementById("hour")
let min =document.getElementById("min")
let sec =document.getElementById("sec")
let msec =document.getElementById("msec")
let startbtn=document.querySelector('.start')
startbtn.disabled=false;
let stopbtn=document.querySelector('.stop')
let resetbtn=document.querySelector('.reset')
let audio=document.getElementById('clockSound')
//timers
let hourTimer=0;
let mintimer=0;
let secTimer=0;
let msecTimer=0;
//startFunc
const startFunc=function(){
    msecTimer++;
    msec.textContent=msecTimer<10?"0"+ msecTimer :msecTimer;
    if(msecTimer===100){
    msecTimer=0;
    secTimer++;
    sec.textContent=secTimer<10?"0"+secTimer+":":secTimer+":";
}
    else if(secTimer===60){
        secTimer=0;
        mintimer++;
        min.textContent=mintimer+":";
    }
    else if(mintimer===60){
        mintimer=0;
        hourTimer++;
        hour.textContent=hourTimer;
    }
}
//settingInterval
let startInterval=null;
//Triggerinng Start Event
startbtn.addEventListener('click', function(){
    if ( startInterval===null){
        audio.play();
        startInterval=setInterval(startFunc,10)
          startbtn.disabled=true;
    }


})
//Triggerinng Stop Event
stopbtn.addEventListener('click', function(){
    clearInterval(startInterval);
    startInterval=null;
    startbtn.disabled=false;
    audio.pause()
})
//reset
resetbtn.addEventListener('click', function(){
    clearInterval(startInterval);
    startInterval=null;
    audio.pause()
    hour.textContent="00:";
    min.textContent="00:";
    sec.textContent="00:";
    msec.textContent="00";
 hourTimer=0;
 mintimer=0;
 secTimer=0;
 msecTimer=0;
 startbtn.disabled=false;

})


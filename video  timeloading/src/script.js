// get all elements

let vid = document.getElementById('vd');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let vol = document.getElementById('vol');
let volRange = document.getElementById('volRange');
let vidRange = document.getElementById('vidRange');
let full = document.getElementById('full');
let slowdown = document.getElementById('slowdown');
let speedup = document.getElementById('speedup');
let container = document.getElementById('container');
let timer = document.getElementById('timer');
let normal = document.getElementById('normal');
let timerValue = 0 ;


// to play the video

play.addEventListener('click',function(){
    vid.play() ;
})

// to pause the video

pause.addEventListener('click',function(){
    vid.pause();
})

// to mute and unmute the video

vol.addEventListener('click',function(){
    if(vid.volume){
        vid.volume = 0;
    }else{
        vid.volume = 1 ;
    }
})

volRange.addEventListener('change',function(){
    vid.volume = volRange.value ;
})

// control video range 

vid.addEventListener( 'timeupdate' ,function(){
    vidRange.value =  vid.currentTime;
    timerValue = vidRange.value;
    timer.innerText = `${timerValue}/1:50`;
    if(timerValue == 60){

            let i = timerValue - 59;
            timer.innerText = `1:${i}/1:50`;
    }
})

vidRange.addEventListener('change',()=>{
    vid.currentTime = vidRange.value;
})

full.addEventListener('click' , ()=>{
    vid.requestFullscreen();
})

speedup.addEventListener('click',()=>{
    vid.playbackRate += .25 ; 
})


slowdown.addEventListener('click',()=>{
    vid.playbackRate -= 0.25 ;
})
normal.addEventListener('click',()=>{
    vid.playbackRate = 1 ;
})











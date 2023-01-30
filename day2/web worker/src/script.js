let btns = document.querySelectorAll('button');
let ball = document.getElementById('ball');
let worker = new Worker("./src/worker.js");


btns[0].addEventListener('click',()=>{
    worker.postMessage("");
})

worker.onmessage = function(message){
    console.log(message);
    alert(message.data);
  };

btns[1].addEventListener('click',()=>{
    document.body.style.backgroundColor = "red";
})

btns[2].addEventListener('click',()=>{
    ball.style.transform = 'translateX(200px)'
    setTimeout(function(){
        ball.style.transform = 'translateY(200px)'
    },2000)
    
})

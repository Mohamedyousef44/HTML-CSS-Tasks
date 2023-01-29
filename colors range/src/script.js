let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let para = document.getElementById("change");

let v1 , v2 , v3 ;
v1 = v1 = v3 = 0;

red.addEventListener('change',function(){
    v1 = red.value * 25.5;
    para.style.color = `rgb(${v1}, ${v2}, ${v3})`;
})

green.addEventListener('change',function(){
    v2 = green.value * 25.5;
    para.style.color = `rgb(${v1}, ${v2}, ${v3})`;
})

blue.addEventListener('change',function(){
    v3 = blue.value * 25.5;
    para.style.color = `rgb(${v1}, ${v2}, ${v3})`;
})

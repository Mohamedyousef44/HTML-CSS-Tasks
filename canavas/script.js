let can = document.getElementById('can') ;
let ctx = can.getContext("2d");
let x , y ;
x = y = 0 ;
let animation = null ;


ctx.beginPath();
ctx.moveTo(x,y);

function lineMoving() {
clearInterval(animation);
animation = setInterval(moving, 20);
function moving() {
    if (x === 400 && y === 400)  {
        clearInterval(animation);
        alert("animation end");
    } else {
        x++; 
        y++;
        ctx.lineTo(x,y);
        ctx.strokeStyle = "red";
        ctx.stroke(); 
    }
}
}













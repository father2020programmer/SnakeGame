function draw(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    drawSnake();
    y += my;
    
}

setInterval(draw, 10);
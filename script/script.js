function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawTail();
    moveSnake();
    drawEnemy();
    
}

document.addEventListener('keydown', keydownHandler, false);

setInterval(draw, 10);
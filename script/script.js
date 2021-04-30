function draw(){
    startGame();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();    
    drawTail();
    moveSnake();
    drawEnemy();
    wallCollision();
    
}

document.addEventListener('keydown', keydownHandler, false);
document.addEventListener('click', startHandler);
document.addEventListener('click', winnerHandler);
document.addEventListener('click', loserHandler);

let interval = setInterval(draw, 20);
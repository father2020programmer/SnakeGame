function drawSnake(){
    ctx.beginPath();
    ctx.rect(x, y, 15, 30);
    ctx.fillStyle = '#22c900';
    ctx.fill();
    ctx.closePath();
}
function drawSnake(){
    ctx.beginPath();
    ctx.rect(snakeX, snakeY, 20, 20);
    ctx.fillStyle = '#22c900';
    ctx.fill();
    ctx.closePath();
}

function keydownHandler(e){
    switch(e.key){
        case 'ArrowLeft':
            leftpress = true;
            rightpress = false;
            uppress = false;
            downpress = false;
            break;
        case 'ArrowRight':
            leftpress = false;
            rightpress = true;
            uppress = false;
            downpress = false;
            break;
        case 'ArrowUp':
            leftpress = false;
            rightpress = false;
            uppress = true;
            downpress = false;
            break;
        case 'ArrowDown':
            leftpress = false;
            rightpress = false;
            uppress = false;
            downpress = true;
            break;
    }
}

function moveSnake(){
    if(leftpress){
        snakeX -= move;
        tailx = snakeX - tailWidth - tailPadding;
    } else if(rightpress){
        snakeX += move;
        tailx = snakeX + tailWidth + tailPadding;
    } else if(uppress){
        snakeY -= move;
        taily = snakeY - tailHeight - tailPadding;
    } else if(downpress){
        snakeY += move;
        taily = snakeY + tailHeight + tailPadding;

    }
}

// for(let i=0; i<tailLength; i++){
//     tail[i] = {x: 0, y: 0};
// }

function drawTail(){
    for(let i=0; i<tailLength; i++){
        let tailx = (i*(tailWidth-tailPadding)) - snakeX;
        let taily = snakeY;
        //tail[i].x = tailx;
        //tail[i].y = taily;
        ctx.beginPath();
        ctx.rect(tailx, taily, 20, 20);
        ctx.fillStyle = '#22c900';
        ctx.fill();
        ctx.closePath();
    }
}

function drawEnemy(){
    if(newEnemy){
        enemyX = (Math.random() * 1200) + 100;
        enemyY = (Math.random() * 500) + 100;        
        newEnemy = false;
    }

    ctx.beginPath();
    ctx.arc(enemyX, enemyY, ememyRadius, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}
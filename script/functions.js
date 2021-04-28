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
    } else if(rightpress){
        snakeX += move;
    } else if(uppress){
        snakeY -= move;
    } else if(downpress){
        snakeY += move;
    }
}

for(let i=0; i<tailLength; i++){
    tail[i] = {x: 1, y: 1};
} 

function drawTail(){    

    for(let d=0; d<tail.length; d++){            
        let tailx = tailMoveX(d) || snakeX - 5;
        let taily = tailMoveY(d) || snakeY; 
        tail[d].x = tailx;
        tail[d].y = taily;       
        ctx.beginPath();
        ctx.arc(tailx, taily, tailRadius, 0, Math.PI*2);
        ctx.fillStyle = '#22c900';
        ctx.fill();
        ctx.closePath();
        }

            
} 

function tailMoveX(d){
    if(leftpress){
        return (snakeX - 5) + ((d * tailPadding) + (d * tailRadius));
    } else if(rightpress){
        return (snakeX - 5) - ((d * tailPadding) + (d * tailRadius));
    } 
}

function tailMoveY(d){
    if(uppress){
        return snakeY + ((d * tailPadding) + (d * tailRadius));
    } else if(downpress){
        return snakeY - ((d * tailPadding) + (d * tailRadius));
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

const startBtn = document.getElementById('startBtn');
const canvas = document.getElementById('game-canvas');
const startScreen = document.getElementById('startScreen');
const winnerScreen = document.getElementById('winnerScreen');
const loserScreen = document.getElementById('loserSceen');
const ctx = canvas.getContext('2d');
const move = 2;
const tailPadding = 20;
const tailRadius = 7;
const ememyRadius = 10;


let snakeX = canvas.width / 2;
let snakeY = canvas.height / 2;
let leftpress = false;
let rightpress = false;
let uppress = false;
let downpress = false;
let score = 0;
let tailLength = 4 + score;
let tail = [];
let newEnemy = true;
let enemyX = 0;
let enemyY = 0;
let restartGame = false;

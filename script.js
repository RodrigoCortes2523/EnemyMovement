/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 800;
const numberOfEnemies = 10;
const enemiesArray = [];
// const enemyImage = new Image();
// enemyImage.src = 'enemy1.png';
let gameFrame = 0;


class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy1.png';

        // this.speed = Math.random()* 4-2; // movement speed, comment out if you want wiggle
        this.spriteHeight = 155;
        this.spriteWidth = 293;
        this.width = this.spriteWidth /2;
        this.height = this.spriteHeight /2;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }

    update(){

        // to move
        // this.x+= this.speed;
        // this.y+= this.speed;

        // to wiggle
        this.x+= Math.random() * 15 - 7.5;
        this.y+= Math.random() * 10 - 5;

        //animate sprites
        if (gameFrame % this.flapSpeed === 0){    
             this.frame > 4 ? this.frame = 0 : this.frame++;}
    }

    draw(){
        ctx.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,
             this.x, this.y,this.width,this.height);
    }
}
for (let i = 0; i < numberOfEnemies; i++){
enemiesArray.push(new Enemy());
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame ++;
    requestAnimationFrame(animate);
}
animate();
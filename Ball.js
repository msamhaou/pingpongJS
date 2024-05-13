class Ball {
    constructor(game){
      this.game = game;
      this.fontFile = this.fontFile;
      this.canvas = game.canvas;
      this.col = 0;
      this.rad = 15;
      this.init(-1);
    }
    draw(ctx){
      ctx.beginPath();
      ctx.arc(this.collisionX, this.collisionY, this.rad , 0,  Math.PI * 2, 1);
      ctx.fillStyle = `rgb(255,255,255,0.5)`;
      ctx.strokeStyle = "white";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
    iscollide(){
      if (this.collisionX - this.rad >= this.game.player.posX && this.collisionX - this.rad - this.speed <= this.game.player.posX + this.game.player.width &&
          this.collisionY >= this.game.player.posY && this.collisionY <= this.game.player.posY + this.game.player.height){
            this.angle = ((this.collisionY - this.game.player.posY - this.game.player.height/2) * 45) / (this.game.player.height / 2);
            this.angle = this.angle * Math.PI/180;
            this.dirX = this.speed * Math.cos(this.angle);
            this.dirY = this.speed * Math.sin(this.angle);
            this.speed = 10
      }

      if (this.collisionX + this.rad >= this.game.enemy.posX && this.collisionX + this.rad + this.speed <= this.game.enemy.posX + this.game.enemy.width &&
        this.collisionY >= this.game.enemy.posY && this.collisionY <= this.game.enemy.posY + this.game.enemy.height){
          this.angle = ((this.collisionY - this.game.enemy.posY - this.game.enemy.height/2) * 45) / (this.game.enemy.height / 2);
          this.speed = 10
          this.angle = this.angle * Math.PI/180;
          this.dirX = -this.speed * Math.cos(this.angle);
          this.dirY = -this.speed * Math.sin(this.angle);
      }

      // if (this.collisionX - this.rad <= this.game.enemy.posX && this.collisionX - this.rad - this.speed >= this.game.enemy.posX + this.game.enemy.width &&
      //   this.collisionY <= this.game.enemy.posY && this.collisionY >= this.game.enemy.posY + this.game.enemy.height){
      //     this.angle = ((this.collisionY - this.game.enemy.posY - this.game.enemy.height/2) * 45) / (this.game.enemy.height / 2);
      //     this.angle = this.angle * Math.PI/180;
      //     this.dirX = this.speed * Math.cos(this.angle);
      //     this.dirY = this.speed * Math.sin(this.angle);
      // }
    }
    update(){
      if ((this.collisionY + this.rad >= this.canvas.height || this.collisionY - this.rad <= 0)){
          this.dirY *= -1;
        }
      else if ((this.collisionX + this.rad >= this.canvas.width || this.collisionX - this.rad <= 0)){
        this.dirX *= -1;
      }
      this.collisionX += this.dirX;
      this.collisionY += this.dirY;
    }
    init(yes){
      this.collisionY = this.canvas.height / 2;
      this.collisionX = this.canvas.width/2;
      this.angle = Math.random() % 2;
      this.speed = 5;
      this.dirX = yes * this.speed * Math.cos(this.angle);
      this.dirY = yes * this.speed * Math.sin(this.angle);
    }
}
    
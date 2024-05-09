class Ball {
    constructor(game){
      this.game = game;
      this.canvas = game.canvas;
      this.col = 0;
      this.rad = 15;
      this.collisionY = game.player.posY + game.player.height / 2;
      this.collisionX = game.player.posX + game.player.width + this.rad + 1;
      this.angle = Math.random() % 2;
      this.speed = 10;
      this.dirX = this.speed * Math.cos(this.angle);
      this.dirY = this.speed * Math.sin(this.angle);
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
      }
    }
    update(){
      if ((this.collisionY + this.rad + this.dirY >= this.canvas.height || this.collisionY - this.rad  +this.dirY <= 0)){
          this.dirY *= -1;
        }
      else if ((this.collisionX + this.rad + this.dirX >= this.canvas.width || this.collisionX - this.rad + this.dirX <= 0)){
        this.dirX *= -1;
      }
      this.collisionX += this.dirX;
      this.collisionY += this.dirY;
    }
}
    
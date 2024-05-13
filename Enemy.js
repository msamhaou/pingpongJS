class Enemy
{
    constructor(game)
    {
      this.game = game;
      this.canvas = game.canvas;
      this.width =  30; 
      this.height = 100;
      this.rad = 10;
      this.posX= this.canvas.width - 20 - this.width;
      this.posY = this.canvas.height/2 - this.height / 2;
      this.speed = 5;
    }
    draw(ctx)
    {
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.moveTo(this.posX,this.posY + this.rad);
      ctx.arcTo(this.posX, this.posY + this.height,
               this.posX + this.width, this.posY + this.height, this.rad);
      
      ctx.arcTo(this.posX + this.width, this.posY + this.height,
               this.posX + this.width, this.posY, this.rad);
      
      ctx.arcTo(this.posX + this.width, this.posY,
               this.posX , this.posY, this.rad);
      
       ctx.arcTo(this.posX, this.posY,
               this.posX , this.posY + this.height, this.rad);
      ctx.fillStyle = "red"
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }

    predict(){

    }
  
    update(ball)
    {
    
      if (this.posY - ball.collisionY + this.height/2 < 0 && this.posY + this.height <= this.canvas.height)
      {
        this.posY += this.speed;
      }
      if (this.posY - ball.collisionY + this.height/2 > 0 && this.posY >= 0){
        this.posY -= this.speed;
      }
    }
}
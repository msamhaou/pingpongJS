class Player
{
    constructor(game)
    {
      this.game = game;
      this.canvas = game.canvas
      this.width = 30; 
      this.height = 100;
      this.rad = 10;
      this.posX=20;
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
      ctx.fillStyle = "green"
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
  
    update()
    {
      if (this.posY > 0 && this.game.keyUp)
      {
        this.posY -= this.speed;
      }
      if (this.posY < this.game.height - this.height && this.game.keyDown){
        this.posY += this.speed;
      }
    }
}
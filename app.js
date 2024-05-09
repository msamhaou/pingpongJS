window.addEventListener('load', function(){
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext("2d")
  canvas.width = 560;
  canvas.height = 400;

  class Enemy
  {
      constructor(game)
      {
        this.game = game;
        this.width =  30; 
        this.height = 100;
        this.rad = 10;
        this.posX= canvas.width - 20 - this.width;
        this.posY = canvas.height/2 - this.height / 2;
        this.speed = 5;
      }
      draw()
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
  
  class Game{
    constructor(canvas){
      this.width = canvas.width;
      this.height = canvas.height;
      this.canvas= canvas;
      this.player = new Player(this);
      this.enemy = new Enemy(this);
      this.ball = new Ball(this);
      this.keyUp = 0;
      this.keyDown = 0;
      this.speed = 5;
      this.mouseX = 0;
      this.mouseY = 0;
      window.addEventListener('keydown', (e) => {
        if (e.key === "ArrowUp")
        {
          this.keyDown = 0;
          this.keyUp = 1;
        }
        else if (e.key === 'ArrowDown'){
          this.keyDown = 1;
          this.keyUp = 0;
        }
      });
      window.addEventListener('keyup', (e) => {
         if (e.key === "ArrowUp")
        {
          this.keyDown = 0;
          this.keyUp = 0;
        }
        else if (e.key === 'ArrowDown'){
          this.keyDown = 0;
          this.keyUp = 0;
        }
      });
      
      canvas.addEventListener('mousemove', (e) => {
        this.mouseX = e.offsetX;
        this.mouseY = e.offsetY;
      });
    }
    render(){
      this.enemy.draw();
      this.player.update();
      this.player.draw(ctx);
      this.ball.update();
      this.ball.iscollide();
      this.ball.draw(ctx);
    }
    
  }
  
  let game = new Game(canvas);
  
  function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    game.render();
  window.requestAnimationFrame(animate);
  }
    
  animate();
  });
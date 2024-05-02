window.addEventListener('load', function(){
  

  const canvas = document.getElementById('game');
  const ctx = canvas.getContext("2d")
  
  canvas.width = 560;
  canvas.height = 400;
  
  class Ball {
    constructor(game){
      this.game = game;
      this.col = 0;
      this.rad = 15;
      this.collisionY = game.player.posY + game.player.height / 2;
      this.collisionX = game.player.posX + game.player.width + this.rad + 1;
    }
    draw(){
      ctx.beginPath();
      ctx.arc(this.collisionX, this.collisionY, this.rad , 0,  Math.PI * 2, 1);
      ctx.fillStyle = `rgb(255,255,255,0.5)`;
      ctx.strokeStyle = "white";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
    iscollide(){
      if (this.collisionX - this.rad > this.game.player.posX && this.collisionX - this.rad <= this.game.player.posX + this.game.player.width &&
          this.collisionY >= this.game.player.posY && this.collisionY <= this.game.player.posY + this.game.player.height){
        console.log("collide");
      }
    }
    // update(){
    //   if (this.collisionY + this.rad >= canvas.height || this.col == 1)
    //     {
    //       this.col = 1;
    //       this.collisionY = this.collisionY + Math.sin( 7 *Math.PI / 4);
    //       this.collisionX += Math.cos(Math.PI / 4);
    //     }
    //   else if (this.col == 0){
    //     this.collisionX += Math.cos( (Math.PI / 4));
    //     this.collisionY += Math.sin((Math.PI / 4));
    //   }
    //   console.log(this.collisionY)
    // }
  }
    
  class Player
  {
      constructor(game)
      {
        this.game = game;
        this.width = 30; 
        this.height = 100;
        this.rad = 10;
        this.posX=20;
        this.posY = canvas.height/2 - this.height / 2;
        // this.speed = 
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
        ctx.fillStyle = "green"
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }
    
      update()
      {
        if (this.posY > 0 && this.game.keyUp)
        {
          this.posY -= this.game.speed;
        }
        if (this.posY < this.game.height - this.height && this.game.keyDown){
          this.posY += this.game.speed;
        }
      }
  }
  
  class Game{
    constructor(canvas){
      this.width = canvas.width;
      this.height = canvas.height;
      this.canvas= canvas;
      this.player = new Player(this);
      this.ball = new Ball(this);
      this.keyUp = 0;
      this.keyDown = 0;
      this.speed = 2;
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
      this.player.update();
      this.player.draw();
      // this.ball.update();
      this.ball.draw();
      this.ball.iscollide();
      // this condition calculate the Angle to redirect the Ball depend On where the ball collide with the Player
      if (this.mouseX > this.player.posX && this.mouseX <= this.player.posX + this.player.width &&
          this.mouseY >= this.player.posY && this.mouseY <= this.player.posY + this.player.height){
              console.log(this.mouseY - this.player.posY - this.player.height/2, ((this.mouseY - this.player.posY - this.player.height/2) * 45) / (this.player.height / 2));
      }
      
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
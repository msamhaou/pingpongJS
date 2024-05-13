window.addEventListener('load', function(){
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext("2d")
  canvas.width = 560;
  canvas.height = 400;

  async function loadFonts() {
    let font = new FontFace(
      "Jersey 20",
      "url(https://fonts.gstatic.com/s/jersey20/v2/ZgNRjP1ON6jeW4D12z3sq0XrHYqHuA.woff2)"
    );
    // wait for font to be loaded
    await font.load();
    // add font to document
    document.fonts.add(font);
    // enable font with CSS class
    document.body.classList.add("fonts-loaded");
    ctx.font = "50px 'Jersey 20'"
  }

  
  class Game{
    constructor(canvas){
      this.width = canvas.width;
      this.height = canvas.height;
      this.canvas= canvas;
      this.player = new Player(this);
      this.enemy = new Enemy(this);
      this.ball = new Ball(this);
      this.scoreBoard = new ScoreBoard(this);
      this.keyUp = 0;
      this.keyDown = 0;
      this.speed = 5;
      this.mouseX = 0;
      this.mouseY = 0;
      loadFonts();

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
      this.ball.iscollide();
      this.player.draw(ctx);
      this.ball.update();
      this.ball.draw(ctx);
      this.enemy.update(this.ball);
      this.enemy.draw(ctx);
      this.scoreBoard.update();
      this.scoreBoard.draw(ctx);
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
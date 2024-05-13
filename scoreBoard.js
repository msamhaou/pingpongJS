class ScoreBoard{
    constructor(game){
        this.game = game;
        this.ball = game.ball;
        this.first_score = 0;
        this.second_score = 0;
    }
    update(){
        if (this.ball.collisionX - this.ball.rad < this.game.player.posX )
        {
            this.first_score++;
            this.ball.init(-1)
        }
        else if (this.ball.collisionX > this.game.enemy.posX + this.game.enemy.width/2)
        {
            this.second_score++;
            this.ball.init(1)
        }
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'black'
        ctx.fillText(this.first_score +"-" + this.second_score, this.game.canvas.width / 2 - 50/2, 50)
        ctx.closePath();
    }
}
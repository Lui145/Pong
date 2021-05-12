let bg;
let ball;
let players = [];
let soundLoop;
let soundHit;
let soundPoint;
let point = true;
let pts;
let gameFont;

function preload(){
  soundFormats('wav');
  soundLoop = 0;
  sountHit = 0;
  sountPoint = 0;
  gameFont = 0;
}

function setup() {
  bg = loadImage("src/assets/sprites/board.png");

  soundLoop.loop();

  ball = new Ball(BallFactory.coords(
      board.width/2 - ballD.width/2,
      board.height/2 - ballD.height/2
    ));

  players.push(
    new Paddle(
      PaddleFactory.coords(
        0, 
        board.height/2 - paddle.height/2
      ),
      PaddleFactory.controllSettings(87,83),
      playersId.player1
    ),
    new Paddle(
      PaddleFactory.coords(
        board.width-paddle.width, 
        board.height/2 - paddle.height/2
      ),
      PaddleFactory.controllSettings(38,40),
      playersId.player2
    )
  );

  pts = new Points(PointsFactory.coords(board.width/2, 50), gameFont);

  createCanvas(board.width, board.height);
}

function draw() {
  background(bg); 
  ball.draw();
  players.forEach((player) => player.draw());
  hit();
  pts.draw();
}

function hit(){
  players.forEach((player) => {
    if (ball.y  + ball.height/2 > player.y && ball.y + ball.height/2 < player.y + player.height ){
      if((Math.sign(ball.speedX) == -1 && ball.x <= player.x + player.width && ball.x > player.x) || 
         (Math.sign(ball.speedX) == 1 && ball.x + ball.width >= player.x && ball.x < player.x)){
        ball.speedX *= -1;

        let posBall = ball.y + ball.height/2;
        let posPaddle =  player.y + player.height/2;
        let dirX = Math.sign(ball.speedX);
        let dirY = Math.sign(ball.speedY);

        if(posBall > posPaddle - 16 && posBall > posPaddle + 16 ){
          ball.speedX = 10;
          ball.speedY = 10;
        }else if(posBall > posPaddle - 32 && posBall > posPaddle + 32 ){
          ball.speedX = 12;
          ball.speedY = 12;
        }else if(posBall > posPaddle - 48 && posBall > posPaddle + 48 ){
          ball.speedX = 14;
          ball.speedY = 14;
        }else{
          ball.speedX = 16;
          ball.speedY = 16;
        }

        ball.speedX *= dirX;
        ball.speedY *= dirY;

        sountHit.play();

      }
    }
  });
}

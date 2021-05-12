class Ball {
    constructor(coords){
        this.x = coords.x;
        this.y = coords.y;

        this.width = ballD.width;
        this.height = ballD.height;

        this.img = loadImage("src/assets/sprites/ball.png");

        this.speedX = 10 * this.direccionRandom();
        this.speedY = 10 * this.direccionRandom();
    }

    move(){
        if (this.x < 0 || this.x >= board.width - this.width){
            
            if(point){
                sountPoint.play();
                point = false;
                
                if(Math.sign(this.speedX) == -1){
                    pts.playerPointPlusPlus("2");
                } else {
                    pts.playerPointPlusPlus("1");
                }
                
                this.sleep(1000);

                this.reset();
            }
        } 

        if (this.y < 0 || this.y >= board.height - this.height){
            this.speedY *= -1;
        } 

        this.x += this.speedX;
        this.y += this.speedY;
    }
    
    reset(){
        this.x = board.width/2 - ballD.width/2;
        this.y = board.height/2 - ballD.height/2;
        this.speedX = 10 * this.direccionRandom();
        this.speedY = 10 * this.direccionRandom();
        point = true;
    }

    draw(){
        image(this.img, this.x, this.y, this.width ,this.height);
        this.move();
    }

    direccionRandom(){
        let num = Math.round(Math.random());

        if(num == 0){
            return -1;
        }else{
            return 1;
        }
    }

    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
}

const BallFactory = {
    coords: (x, y) => {
        return{
            x,
            y,
        }
    }
}

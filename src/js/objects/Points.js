class Points{
    constructor(coords, font){
        this.x = coords.x;
        this.y = coords.y;
        this.font = font;

        this.p1 = 0;
        this.p2 = 0;
    }

    draw(){
        fill("fff");
        textSize(35);
        textAlign(CENTER);
        textFont(this.font);
        text(`${this.p1} - ${this.p2}`, this.x, this.y);
    }

    playerPointPlusPlus(player){
        if(player == 1){
            this.p1++;
        } else {
            this.p2++;
        }
    }


}

const PointsFactory = {
    coords: (x,y) =>    ({
        x,
        y,
    })
};
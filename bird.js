class Bird{
    constructor(x,y){
        var boxop={
            restitution:0.8,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,50,50,boxop);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("black");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}
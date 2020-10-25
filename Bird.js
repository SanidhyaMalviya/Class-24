class Bird{
    constructor(x,y){
        var options ={
            density:1.5,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX
        pos.y = mouseY
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        stroke("white")
        strokeWeight(3)
        rect(0, 0, 50, 50);
        pop();
    }
}
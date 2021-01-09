class ground_class
{
    constructor(x, y, w, h)
    {
        this.body=Bodies.rectangle(x, y, w, h, {isStatic:true});
        this.x=650;
        this.y=360;
        this.w=1400;
        this.h=10;
        World.add(world, this.body);
    }
    display()
    {
        push();
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    }
}
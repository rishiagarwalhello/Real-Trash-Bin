class bin_sides_class
{
    constructor(x, y, width, height)
    {
        this.body=Bodies.rectangle(x, y, width, height, {isStatic:true});
        this.x=0;
        this.y=0;
        this.width=20;
        this.height=350;
        World.add(world, this.body);
    }
    display()
    {
        push();
        rectMode(CENTER);
        noFill();
        strokeWeight(0);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}
class paper_class
{
    constructor(x, y, r)
    {
        var paper_properties=
        {
            'restitution':0.5,
            'friction':0,
            'density':1.2
        }
        this.body=Bodies.circle(x, y, r, paper_properties);
        this.x=175;
        this.y=35;
        this.r=100;
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    }
    display()
    {
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y);
        pop();
    }
}
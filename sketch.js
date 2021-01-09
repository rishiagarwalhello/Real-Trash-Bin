var ground; //Ground
var paper; //Paper
var bin, bin_left, bin_right, bin_bottom, bin_img; //Bin

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bin_img=loadImage("bin.png");
}
function setup()
{
	createCanvas(1300, 400);

	engine = Engine.create();
	world = engine.world;

	ground=new ground_class(650, 360, 1300, 10); //Ground Body
	
	paper=new paper_class(175, 345, 10); //Paper Body

	bin_left=new bin_sides_class(900, 290, 20, 130); //Left Bin Body
	bin_right=new bin_sides_class(1050, 290, 20, 130); //Right Bin Body
	bin_bottom=new bin_bottom_class(975, 345, 350, 20); //Bottom Bin Body

	bin=createSprite(975, 240);
	bin.addImage(bin_img);

	Engine.run(engine);
}
function draw()
{
    background("grey");
  
	Engine.update(engine);

	ground.display();

	paper.display();

	bin_left.display();
	bin_right.display();
	bin_bottom.display();

	if(keyDown("up")||keyDown("space"))
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x:12.5, y:-35});
	}

	drawSprites();
}
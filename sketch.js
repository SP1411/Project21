
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1925, 950);


	engine = Engine.create();
	world = engine.world;

	var ball_options=
	{
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(300,100,20,ball_options);
	World.add(world,ball);
	
    ground = new Ground(width/2,900,width,20);
	leftSide = new Ground(1300,830,20,120);
	rightSide = new Ground(1600,830,20,120);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  ellipse(ball.position.x, ball.position.y, 20);

  ground.show();
  leftSide.show();
  rightSide.show();
  
  drawSprites();
 
}

function keyPressed() {

  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
  }

}





// World,Engine, Bodies
//Matter.World, Matter.Engine, Matter.Bodies
/*Engine is used to create the
physics engine.
● World is used to create the
physical world and add objects
to it.
● Bodies are used to create the
physical objects which inhabit
the world.*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground, ball;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  var ball_options = {
    restitution : 1.0
  }
  ground = Bodies.rectangle(300,600,50,50,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200,100,5,ball_options);
  World.add(world,ball);

  console.log(ground);
  console.log(ground.type);

  console.log(ball);
  console.log(ball.type);
  
}

function draw() {
  background(0,0,0); 

  Engine.update(engine);
  rectMode(CENTER) 
  rect(300,300,50,50)
  rect(ground.position.x, ground.position.y, 600,20);
  ellipseMode(RADIUS);
  circle(100,400,50);
  circle(ball.position.x,ball.position.y,10,10);
  
}
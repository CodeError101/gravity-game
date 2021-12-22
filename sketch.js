const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var btn1
var btn2

var hoop;
var hoop2;
var trigger;

console.log(outerWidth)
console.log(outerHeight)

function setup() {
  createCanvas(1536,824);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,700,3000,20);
  right = new Ground(1500,200,20,1000);
  left = new Ground(10,200,20,1000);
  top_wall = new Ground(200,10,3000,20);
  hoop = new Boundary(1100,650,20,10);
  hoop2 = new Boundary(990,650,20,10);
  trigger = new Boundary(1045,690,70,10)

  var ball_options={restitution: 0.05}
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)

  btn1 = createImg("push.png")
  btn1.position(30,30)
  btn1.size(100,100)
  btn1.mouseClicked(hForce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(0);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  hoop.display();
  hoop2.display()
  trigger.display();

  
  ellipse(ball.position.x, ball.position.y,20)
  
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0})
}

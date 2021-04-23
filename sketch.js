//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground;
var ball;

function setup() {
  createCanvas(800,400);   

  myEngine = Engine.create();
  myWorld =  myEngine.world;

  var ground_options = {
      
    isStatic: true
}

  ground = Bodies.rectangle(400, 390, 800,20,ground_options);
  World.add(myWorld, ground);
 console.log(ground.position.y);


  var ball_options = {
      
   restitution: 1
 }
  ball = Bodies.circle(200,200,30,ball_options);
  World.add(myWorld, ball)
      

}

function draw() {
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER);

  rect(ground.position.x, ground.position.y, 800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,30, 30);
   

}

/*
how we can use physics Engine

3 objects of Matter.js

1. Engine : this object is used to create a physics engine.
2. World : this object is used to create a physics world.
3. Bodies : this object is used to create the physical objects.


*/
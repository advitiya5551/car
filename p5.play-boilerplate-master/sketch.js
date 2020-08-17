var car,wall
var speed,weight

function setup() {
  createCanvas(800,400);
  car = createSprite(0, 200, 40, 10);
  wall = createSprite(800,200,50,300);

car.shapeColor= "white"
wall.shapeColor= "grey"
}

function draw() {
  background(0,0,0);

  car.velocityX=speed;
  car.collide(wall);

  speed=random(55,90);
  weight=random(400,1500);


  
  drawSprites();
}
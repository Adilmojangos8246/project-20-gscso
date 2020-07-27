var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  //for creating variablaes
  car = createSprite(50, 200, 50, 50)
  wall = createSprite(800, 200, 60, height/2)
 
  speed = random(59,90)
  weight = random(400,1500)

  //for giving velocity
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  var def = 0.5  * speed * speed / 22500  

  if(wall.x-car.x < (car.width +wall.width )/2){
    car.velocityX = 0;
    if (def > 180){
       car . shapeColor = color(250,0,0);
    }
    if (def < 180 && def >100){
      car.shapeColor = color = (230,230,0)
    }
    if (def<100){
      car.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
}
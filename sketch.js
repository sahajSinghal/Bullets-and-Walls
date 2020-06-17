var bullet, speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,20,20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5 * (weight * speed * speed)/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    else{
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall){
  var bulletRightEdge = bullet.x + bullet.width;
  var wallLeftEdge = wall.x + wall.width;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}
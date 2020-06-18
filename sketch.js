//creating global variables
var bullet, speed, weight;
var wall, thickness;

function setup() {

  //creating the canvas
  createCanvas(1600,400);

  //assigning values to thickness, speed and weight
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  //creating sprite for bullet, giving it color, and assigning it speed
  bullet = createSprite(50,200,20,20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  //creating the wall sprite and changing it's color
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {

  //giving background black color
  background(0);  

  //giving argument inside custom function
  if(hasCollided(bullet,wall)){

    //making the bullet stop
    bullet.velocityX = 0;

    //calculating danage according to the formula provided
    var damage = 0.5 * (weight * speed * speed)/(thickness * thickness * thickness);

    //if damage is severe, changing color to red
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    //if not then, changing color to green
    else{
      wall.shapeColor = color(0,255,0);
    }
  }

  //making created sprites visible
  drawSprites();
}

//custom function hasCollided
function hasCollided(bullet,wall){

  //creating right edge of bullet and left edge of bullet
  var bulletRightEdge = bullet.x + bullet.width;
  var wallLeftEdge = wall.x + wall.width;

  //if collision has occured then return true, else return false
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  
  else{
    return false;
  }
}
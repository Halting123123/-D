var wall,thickness;
var bullet,speed,weight;




function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  bullet=createSprite(100,200,50,50)
  wall=createSprite(1200,200,thickness,height/2)
 
  speed=random(223,321)
  weight=random(22,83);

  
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
   wall.shapeColor=("green")
  bullet.velocityX=speed;
   bulletWeight=weight;
}
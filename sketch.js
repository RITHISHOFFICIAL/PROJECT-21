var thickness,wall;
var speed,weight,bullet;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);

  bullet =createSprite(40,200,30,10);
  wall=createSprite(1200,200,thickness,height/2);

  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  
 

  if (wall.x-bullet.x<wall.width/2+bullet.width/2){
  damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  
      if (damage<10){
          bullet.shapeColor="green";
          bullet.velocityX=0;
        } 

      if (damage>=10){
            bullet.shapeColor="red";
            bullet.velocityX=0;
        }

    
  drawSprites();

 }
}
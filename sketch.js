var backGroundImage;
var balloon,balloon_up
function preload(){
  backGroundImage = loadImage("1.png");
  balloon_up = loadAnimation("2.png","3.png","4.png")
}

function setup() {
  createCanvas(1000,500);
  balloon = createSprite(100, 350,150, 50);
  balloon.addAnimation("up",balloon_up)
  balloon.scale=0.5;

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y+10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y-10;
  }
}

function draw() {
  background(backGroundImage);  
  
  drawSprites();
}
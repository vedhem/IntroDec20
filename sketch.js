var cartoon;
function setup() {
  createCanvas(400,400);
  cartoon = createSprite(200, 200, 3, 3);
  cartoon.addImage(cartoonImage);
}

function preload () {
  cartoonImage = loadImage("cartoon.jpg");
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyIsDown(UP_ARROW)) {
    cartoon.position.y = cartoon.position.y - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    cartoon.position.y = cartoon.position.y +5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    cartoon.position.x = cartoon.position.x - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    cartoon.position.x = cartoon.position.x + 5;
  }
}



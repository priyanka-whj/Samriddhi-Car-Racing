var car1, car1Img;
var track, trackImg;

function preload()
{
  car1Img = loadImage("images/car1.png");
  trackImg = loadImage("images/track.jpg");
}

function setup() 
{
 
  createCanvas(displayWidth, displayHeight);

  track = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  track.addImage(trackImg);
  track.velocityY = 10;

  car1 = createSprite(displayWidth/2, displayHeight - 200, 45, 45);
  car1.addImage(car1Img);
  car1.scale = 0.7;
 
}

function draw()
{
  if(track.y > displayHeight)
  {
    track.y = displayHeight/2;
  }

  if(keyDown(LEFT_ARROW))
  {
    car1.x = car1.x - 10;
  }
  if(keyDown(RIGHT_ARROW))
  {
    car1.x = car1.x + 10;
  }
  drawSprites();
}




var ship_moving;
var ship;
var seaImage;
var edges;
var bullet;
var bads = createSprite(randomNum(200, 400), randomNum(0, 400), 20, 20)

function preload(){
ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 180, 400, 20)
  sea.addImage(seaImage)
  sea.velocityX = -5
  sea.x = sea.width/2

  ship = createSprite(100, 250, 100, 100);
  ship.addAnimation("moving", ship_moving)
  edges = createEdgeSprites()

  ship.scale = 0.25
  

  


  
}

function draw(){
  if(keyDown("space")){
    bullet = createSprite(ship.x + 150, ship.y, 50, 10 )
    bullet.shapeColor = "red"
    bullet.velocityX = 5
  }

  if(keyDown("enter")){
    bullet = createSprite(ship.x + 150, ship.y, 50, 30 )
    bullet.shapeColor = "red"
    bullet.velocityX = 2
  }

  

  if(keyDown("right")){
    ship.x = ship.x + 5
  }

  if(keyDown("left")){
    ship.x = ship.x - 5
  }

  if(keyDown("up")){
    ship.y = ship.y -  5
  }

  if(keyDown("down")){
    ship.y = ship.y + 5
  }

  ship.collide(edges)

  drawSprites();
} 
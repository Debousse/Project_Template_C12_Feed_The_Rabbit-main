var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  drawSprites();
  createApples();
  createLeafs();
}

function createApples(){
  if (frameCount % 80 === 0) {
    var apple = createSprite(400,0,40,40);
    apple.velocityY = 6;
    apple.addImage(appleImg);
    apple.scale = 0.08
    apple.lifetime = 70
    var rand = Math.round(random(1,8))
    switch(rand){
      case 1: apple.x = 50;
              break;
      case 2: apple.x = 100;
              break;
      case 3: apple.x = 150;
              break;
      case 4: apple.x = 200;
              break;
      case 5: apple.x = 250;
              break;
      case 6: apple.x = 300;
              break;
      case 7: apple.x = 350;
              break;
      case 8: apple.x = 400;
              break;
      default: break;
  }
}
}

function createLeafs(){
  if (frameCount % 80 === 0) {
    var leaf = createSprite(400,0,40,40);
    leaf.velocityY = 6;
    leaf.addImage(leafImg);
    leaf.scale = 0.08
    leaf.lifetime = 70
    var rand = Math.round(random(1,8))
    switch(rand){
      case 1: leaf.x = 50;
              break;
      case 2: leaf.x = 100;
              break;
      case 3: leaf.x = 150;
              break;
      case 4: leaf.x = 200;
              break;
      case 5: leaf.x = 250;
              break;
      case 6: leaf.x = 300;
              break;
      case 7: leaf.x = 350;
              break;
      case 8: leaf.x = 400;
              break;
      default: break;
  }
}
}
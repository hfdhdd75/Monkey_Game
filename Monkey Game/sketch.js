
var monkey, monkey_running
var bananaImage, obstaclesImage
var bananaGroup, obstaclesGroup
var score
var survivalTime = 0
 
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  
  monkey = createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400, 350, 900, 10)
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  
  bananaGroup = new Group()
  obstaclesGroup = new Group()
  
  
}


function draw() {
  
    background("white")
   survivalTime = survivalTime + Math.round(getFrameRate()/62);
      text("Survival Time: " +survivalTime, 450,50);
    

 if(keyDown("space")&& monkey.y >= 301) {
        monkey.velocityY = -13;
    }
      monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground)  
  
    if (ground.x > 0){
      ground.x = ground.width/2;
    }
  
  spawnBanana()
  spawnObstacles()
  
  drawSprites()
  
}

function spawnBanana() {
  if (frameCount % 140 === 0) {
  var banana = createSprite(600,50,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
  
    
    bananaGroup.add(banana);
  }
}


function spawnObstacles() {
  if (frameCount % 300 === 0) {
  var obstacles = createSprite(600,50,40,10);
    obstacles.y = (50, 320)
    obstacles.addImage(obstaclesImage);
    obstacles.scale = 0.15;
    obstacles.velocityX = -3;
    
    obstacles.lifetime = 200;
    
  
    
    obstaclesGroup.add(obstacles);
  }
}




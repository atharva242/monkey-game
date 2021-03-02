
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var fruitGroup;
var obsctacleGroup;
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey =  createSprite(100,320,101,10);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(100,350,10000,5);
  ground.velocityX = -3;

  
  fruitGroup = createGroup();
  obsctacleGroup = createGroup();
}


function draw() {
  background("lavender");
  
  stroke("red")
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival Time: "+ survivalTime,100,50)
  monkey.collide(ground);

  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -15;
     
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
drawSprites();
  fruit();
  spawnObstacles();
}
function fruit(){
 if(World.frameCount%80===0){
    banana = createSprite(400,200,10,10);
banana.addImage(bananaImage);
   banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -8;
    banana.setLifetime = 50;
    fruitGroup.add(banana);
 }
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,320,10,40);
   obstacle.scale = 0.5;
   obstacle.velocityX = -6 ;
   obstacle.addImage(obstacleImage);       
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   obsctacleGroup.add(obstacle);
 }
}






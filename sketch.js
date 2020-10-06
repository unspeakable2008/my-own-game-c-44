var playerImg;
var player2Img;
function preload(){
playerImg = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png")
player2Img = loadAnimation("player2/sprite_0.png","player2/sprite_1.png","player2/sprite_2.png","player2/sprite_3.png","player2/sprite_4.png")
background1Img = loadImage("boxing ring background.png")
crowdImg = loadImage("crowd.png")
player1Img1 = loadImage("img1/sprite_0.png")
player2Img1 = loadImage("img2/sprite_0.png")
player1Img2 = loadAnimation("img1part2/sprite_0.png","img1part2/sprite_1.png")
player2Img2 = loadAnimation("img2part2/sprite_0.png","img2part2/sprite_1.png")
health100img = loadImage("100health/sprite_0.png");
health80img = loadImage("80health/sprite_0.png");
health60img = loadImage("60health/sprite_0.png");
health50img = loadImage("50health/sprite_0.png");
health40img = loadImage("40health/sprite_0.png");
health20img = loadImage("20health/sprite_0.png");
health0img = loadImage("0health/sprite_0.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  crowd = createSprite(displayWidth/2,displayHeight/2,200,500);
  crowd.addImage(crowdImg);
  crowd.scale = 3
  background1 = createSprite(displayWidth/2,displayHeight/2+150,800,400);
background1.addImage(background1Img);
  player1 = createSprite(500, 470, 50, 50);
player1.addAnimation("player1",player1Img1);
player1.addAnimation("player",playerImg);
player1.scale = 2;
player2 = createSprite(800,470,50,50);
player2.addAnimation("player2",player2Img1);
player2.addAnimation("player",player2Img);
player2.scale = 3;
player2.mirrorX(player2.mirrorX()*-1)
health = createSprite(displayWidth-150,150)
health.addImage(health100img)
health2 = createSprite(displayWidth-1200,150)
health2.addImage(health100img)  
}

function draw() {
  frameRate(20);
  background(255,255,255);  
  drawSprites();

if(keyWentDown("space")){
player1.x = 700
  player1.changeAnimation("player",playerImg);  
}

if (keyWentUp("space")){
  player1.x = 500
  player1.changeAnimation("player1",player1Img1);
}

if(keyWentDown("f")){
 player2.x = 600
  player2.changeAnimation("player",player2Img);
}

if(keyWentUp("f")){
  player2.x = 800
  player2.changeAnimation("player2",player2Img1);
}

}


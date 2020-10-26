var input , gameState
var button
var start,startimage
var road, roadimge
var player,player2
var invisibleground
var time
var racerimage1,racerimage2
var obstaclegrp;
var a=0;
var End1,End1image;
var level2,level2image;

function preload(){
startimage= loadImage("start.png");
roadimage= loadImage("track.jpg");
racerimage1 = loadImage("racer1.png")
racerimage2 = loadImage("moto.png")
racerimage3=loadImage("racer_fell.png")
obstacleimage=loadImage("obstacle1.png")
obstacleimage2=loadImage("obstacle2.png");
End1image = loadImage("End.png");
level2image = loadImage("level2.png")
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-100);
 input=createInput()
 gameState = "start"
start  = createSprite(700,400,1,1);
road = createSprite(displayWidth/2,displayHeight/2,1,1)
player = createSprite(100,650,1,1)
player.setCollider("rectangle",0,0,120,100);
player.debug = true
//player.debug=true;
player2 = createSprite(100,650,1,1)
//player2.debug=true;
invisibleground= createSprite(displayWidth/2,displayHeight-100,displayWidth,10)
invisibleground.visible=false;

obstaclegrp=new Group();
End1 = createSprite(displayWidth/2,displayHeight/2,1,1)
level2=createSprite(700,700,1,1)
}


function draw() {
  background(100);  
if  (gameState === "start"){
  input.position(300,400);
  start.addImage(startimage)
  start.scale = 0.5;
 if (mousePressedOver(start)){
   gameState = "PLAY"
 }
 drawSprites();
}
if(gameState === "PLAY"){
  console.log(player.y)
  player.addImage("player",racerimage1)
  player.scale = 2
  input.hide()
  start.destroy()
  background("black")
  road.addImage(roadimage);
  road.scale = 1.5
 
  if(keyDown(UP_ARROW)&& player.y>550){
    player.velocityY = -7
  player.velocityX = 0
  road.velocityX = -20;


  }

  if(frameCount===1200){
    End1.addImage(End1image);
  console.log(frameCount)
    if (player.isTouching(End1)){
      gameState = "End";
    }
  }

  if(keyDown(UP_ARROW)){
    player.addImage("player",racerimage2)
    player.scale=1.5
  }
 
  if(road.x<0){
    road.x= road.width/2;
  }
 // console.log(player.y)
  player.velocityY=player.velocityY+0.2
    player.collide(invisibleground)

   if (keyWentDown(RIGHT_ARROW)){
    player.velocityY = 0
    player.velocityX = 8
   } 
   if (keyWentUp(RIGHT_ARROW)){
    player.velocityY =0 ;
    player.velocityX =0;
  }
  drawSprites();
time=Math.round(frameCount/20)
text("Time"+time,1000,50)

if(player.x>displayWidth-100){
  player.x=500
}
obstacles();
if(obstaclegrp.isTouching(player)){
  gameState = "End1"
 console.log(a)
  player.velocityX=0;
  player.velocityY=0;
  road.velocityX=0;
  obstaclegrp.setVelocityXEach(0)

}

}
if(gameState==="End"){
  road.visible="false"
  background("blue")
  textSize (45)
fill("red")
drawSprites()
text("congratulations, you won",displayWidth/2,displayHeight/2)
End1.destroy()
level2.addImage(level2image)
if(mousePressedOver(level2)){
  gameState="level2"
}
}
if(gameState==="level2"){
level2.destroy()
player.addImage("player",racerimage1)
player.scale = 2
input.hide()
start.destroy()
background("black")
road.addImage(roadimage);
road.scale = 1.5

if(keyDown(UP_ARROW)&& player.y>550){
  player.velocityY = -7
player.velocityX = 0
road.velocityX = -40;


}

if(frameCount===2500){
  End1.addImage(End1image);
console.log(frameCount)
  if (player.isTouching(End1)){
    gameState = "End";
  }
}

if(keyDown(UP_ARROW)){
  player.addImage("player",racerimage2)
  player.scale=1.5
}

if(road.x<0){
  road.x= road.width/2;
}
// console.log(player.y)
player.velocityY=player.velocityY+0.2
  player.collide(invisibleground)

 if (keyWentDown(RIGHT_ARROW)){
  player.velocityY = 0
  player.velocityX = 8
 } 
 if (keyWentUp(RIGHT_ARROW)){
  player.velocityY =0 ;
  player.velocityX =0;
}
drawSprites();
time=Math.round(frameCount/20)
text("Time"+time,1000,50)

if(player.x>displayWidth-100){
player.x=500
}
obstacles2();
if(obstaclegrp.isTouching(player)){
gameState = "End1"
console.log(a)
player.velocityX=0;
player.velocityY=0;
road.velocityX=0;
obstaclegrp.setVelocityXEach(0)

}
}

if(gameState==="End1"){
  
  player.visible=false;
  player2.x=player.x;
  player2.y=player.y;
player2.addImage(racerimage3)
player2.scale = 1.5
player2.setCollider("rectangle",0,0,100,100)
player2.debug = true
drawSprites();
text("Time"+time,1000,50)
}
  

}
function obstacles(){
  if(frameCount%200===0){
  var obstacle=createSprite(1200,600,80,80)
  //obstacle.debug=true;
  obstacle.scale=0.5;
  obstacle.setCollider("rectangle",0,0,200,100);
 obstacle.debug = true
  var rand=Math.round(random(1,2));
  switch(rand)
{
  case 1: obstacle.addImage(obstacleimage);
  break;
  case 2 : obstacle.addImage(obstacleimage2);
  break;
  default:break;
}  
  
  obstaclegrp.add(obstacle)
   
  obstaclegrp.setVelocityXEach(-20)
}
}
function obstacles2(){
  if(frameCount%100===0){
  var obstacle2=createSprite(1200,600,80,80)
  //obstacle.debug=true;
  obstacle2.scale=0.5;
  obstacle2.setCollider("rectangle",0,0,200,100);
 obstacle2.debug = true
  var rand=Math.round(random(1,2));
  switch(rand)
{
  case 1: obstacle2.addImage(obstacleimage);
  break;
  case 2 : obstacle2.addImage(obstacleimage2);
  break;
  default:break;
}  
  
  obstaclegrp.add(obstacle2)
   
  obstaclegrp.setVelocityXEach(-40)
}
}
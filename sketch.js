var ground

var groundImage

var invisibleGround

var trex ,trex_running;
function preload(){
  
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

  groundImage=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 
ground=createSprite(200,180,1305,20)

ground.velocityX=-5

invisibleGround=createSprite(200,180,1305,10)

invisibleGround.visible=false

//ground=addImage("ground",groundImage)

trex=createSprite(50,180,20,50)

trex.addAnimation("runTrex",trex_running)

trex.scale=0.5

}

function draw(){
  background("white")
  
  drawSprites()

trex.collide(ground)

if(ground.x<0){
  ground.x=width/2
}



if(keyDown("space")&&trex.y>=140){
  
  trex.velocityY=-10

}

trex.velocityY=trex.velocityY+0.8

trex.collide(invisibleGround)
}

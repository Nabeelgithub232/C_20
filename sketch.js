var fixedRect,movingRect

function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(600,400,80,50)
movingRect = createSprite(700,500,50,80)

movingRect.shapeColor = "green"
fixedRect.shapeColor = "green"

}

function draw() {
  background(255,255,255);  
movingRect.x = mouseX
movingRect.y = mouseY 
 
if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
&& fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
&& movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
&& fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
) {
  movingRect.shapeColor = "black"
  fixedRect.shapeColor = "black"
}

else{
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"  
}



drawSprites();



}
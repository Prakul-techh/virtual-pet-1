//Create variables here
var dog,dogImages,dogImages2;
var food,feedstock;
var database;

function preload()
{
dogImages=loadImage("images/dogImg.png");
dogImages2=loadImage("images/dogImg1.png");
}

function setup() {
 
  database=firebase.database();
  createCanvas(800, 700);
  dog=createSprite(400,400,50,50)
  dog.addImage(dogImages);
  dog.scale=0.15;
  feedStock=database.ref('Food');
  feedStock.on("value",readStock);
  textSize(20);

  
}


function draw() {  
background('green');
if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(dogImages2);
}
  drawSprites();
  //add styles here
  text("Note:Press UP_ARROWKey to feed Dog Milk",200,200);
  fill('black');
  stroke('black');
  text("food remaining: "+food,200,250)

}
function readStock(data){
  food=data.val();
}

function writeStock(x){
  if(x<=0)
  {x=0}
  else
  {x=x-1;}
  database.ref('/').update({Food:x})

}




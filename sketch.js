//Create variables here

var dog,happyDog, database, foodS, foodStock;

var Dog,happyDog;

function preload()
{
  //load images here
  Dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
   dog = createSprite(250,250,10,10);
  dog.addImage(Dog);
  dog.scale = 0.5;

  foodStock = database.ref('food');
  foodStock.on("value",function(data){
      foodS = data.val();
  });
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

  textSize(20);
  fill("white");
  stroke("green");
  text("Note Press UP_ARROW to feed the drago milk");

}

// function readStock(data){
//   foodS = data.val();
// }

function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    food:x
  })
}




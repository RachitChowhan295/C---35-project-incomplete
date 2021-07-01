var database;
var happydog,dog;
var foods,foodstock;

function preload(){
    dogimj = loadImage("Dog (1).png");
    happydogimj = loadImage("happydog.png");
}


function setup(){
createCanvas(500,500);

database = firebase.database();

writeStock(21)

dog = createSprite(250,250,20,20);
dog.addImage("dogimj",dogimj);
dog.scale = 0.1;

foodstock = database.ref('Food');
foodstock.on("value",readStock)

}


function draw(){

    background(46,139,87);

    if(keyWentDown(UP_ARROW)){
       // database.ref('Food').set({
      //      Food : foodstock - 1
      //foods = foods - 1;
      writeStock(foods);
     //   })
     dog.addImage(happydogimj);
    }

    //print = database.ref('Food');
   // print.on("value",readStock)
    //console.log(print);

    drawSprites();

   
   
    fill ("red");
    //Stroke(5);

    text(foods,245,50,textSize(20));

}

function readStock (data){
    foods = data.val();
}

function writeStock(x){

    if (x<=0){
        x = 0;
    }else{
        x = x - 1;
    }

    database.ref('/').update({
        'Food' : x
    })
}
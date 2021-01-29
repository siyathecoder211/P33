const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var north, east, south, west;
var row1, row2, row3, row4;
var cornerL1, cornerL2, cornerR1, cornerR2;
var dividers, ground;

var particles = [];
var clicked = 0;
var turns = 0;

var num = 25;
var test;
var score = 0;

var gameState = 0;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);



  for (var a = 48; a < 480; a = a + 48) {
    row1 = new Plinko(a,100,20);
  }

  for (var b = 24; b < 480; b = b + 48) {
    row2 = new Plinko(b,200,20);
  }

  for (var c = 48; c < 480; c = c + 48) {
    row3 = new Plinko(c,300,20);
  }

  for (var d = 24; d < 480; d = d + 48) {
    row4 = new Plinko(d,400,20);
  }

  for (var i = 12; i < 480; i = i + 76) {
    dividers = new Dividers(i,700,8,400)
  }



  ground = new Side(240,785,480,8)

  north = new Side(240,0,480,num);
  east = new Side(480,400,num,800);
  south = new Side(240,800,480,num);
  west = new Side(0,400,num,800);

  cornerL1 = new Side (18,200,10,20);
  cornerL2 = new Side (18,400,10,20);
  cornerR1 = new Side (462,200,10,20);
  cornerR2 = new Side (462,400,10,20);

  //test = new Side (462,400,10,20);
}




function draw() {
  Engine.update(engine);

  background("black");  


  for (var a = 48; a < 480; a = a + 48) {
    row1.display("white",a,100,20);
  }

  for (var b = 24; b < 480; b = b + 48) {
    row2.display("white",b,200,20);
  }

  for (var c = 48; c < 480; c = c + 48) {
    row3.display("white",c,300,20);
  }

  for (var d = 24; d < 480; d = d + 48) {
    row4.display("white",d,400,20);
  }


  dividers.display("white");
  ground.display("white");

  //test.display("blue");

  cornerL1.display("none");
  cornerL2.display("none");
  cornerR1.display("none");
  cornerR2.display("none");

  north.display("darkred");
  east.display("darkred");
  south.display("darkred");
  west.display("darkred");

/*
  if (frameCount % 60 === 0){

    particles.push(new Ball(random(130, 350), 10 ,20));
  }
  */

  if (gameState === 0) {

    if (clicked === 1) {
      
      particles.push(new Ball(mouseX, 10 ,20));
      clicked = 2;
      turns++;
    }

    for (var j = 0; j < particles.length; j++) {

      particles[j].display();
    }

  } else if (gameState === 1) {

    textAlign(CENTER);
    fill("white");
    textFont("Helvetica");
    textSize(70);

    text("GAME OVER",240,375)
  }

  textAlign(CENTER);
  fill("white");
  textFont("Helvetica");
  textSize(30);

  text(300,50,550);
  text(200,127,550);
  text(100,202,550);
  text(100,277,550);
  text(200,355,550);
  text(300,430,550);

  textAlign(LEFT);
  text("Score: " + score,25,50);

  console.log(turns); 

  drawSprites();
}

function mouseClicked () {
  
  if (clicked === 0) {
    clicked = 1;
  }
}

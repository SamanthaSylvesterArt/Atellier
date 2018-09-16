// sketch_5.js
//ball bounce
var x = '100';
var y = '210';
var bounceX = float(x);
var bounceY = float(y);

var ballWidth = 5;
var xAdd = 1;
var yAdd = 1;

var plusX = int(xAdd);
var plusY = int(yAdd);
var ballDia = int(ballWidth); //dia = diameter\

//this feels like a lot of steps just to get an int or a float value

function setup(){
  createCanvas(800,600);
}
function draw(){
  background(0);
  bounceX = bounceX + plusX;
  bounceY = bounceY + plusY;

  fill(random(255),random(255),random(255));
  noStroke();
  ellipse(bounceX, bounceY, ballDia, ballDia);

  if(bounceX < ballDia || bounceX > width-ballDia/2){
    plusX*=-1
  }

  if(bounceY<290){
    bounceY=1;
  }

  if(bounceY>310){
    bounceY=-1;
  }
}

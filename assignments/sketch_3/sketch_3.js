// sketch 3
//moving objects without mousex and mousey
//example given:
var img;
function preload() {
  img = loadImage('data/img.jpg');
}

function setup(){
  createCanvas(500, 500);
  image(img, 0, 0);
}

function draw() {
  background(200);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  rect(0, 0, 20, 20);
}

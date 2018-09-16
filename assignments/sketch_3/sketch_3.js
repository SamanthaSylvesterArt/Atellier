// sketch 3
//moving objects without mousex and mousey
//example given:

var img;
function preload() {
  img = loadImage('data/img.jpg');
}

function setup(){
  //createCanvas(500, 500
    image(img, 0, 0);
}
function draw() {
  background(200);
  // rectMode(CENTER);
  // //bezierMode(CENTER);//trying to get the bezier curves to rotate
  // translate(width / 2, height / 2);
  // translate(p5.Vector.fromAngle(millis() / 1000, 40));
  // rect(0,0 20,20);
  // //bezier(100, 200, 50,random(height), random(width), random(height));
}

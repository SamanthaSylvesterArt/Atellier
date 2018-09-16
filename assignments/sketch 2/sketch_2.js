// sketch_2.js


function setup(){
  smooth();
  createCanvas(800, 600);
  frameRate(12);
}
function draw(){
  //indepent x and y
  background(0);
  stroke(random(255),random(255),random(255));
  //stroke(255);
  noFill();
  beginShape();
  vertex(0,0);
  ellipse(0,0,5,5);
  bezier(random(), random(255), random(255),
  random(255), random(255), random(255),
  100, 0, 0, 0, 100, 0);
  endShape();

}

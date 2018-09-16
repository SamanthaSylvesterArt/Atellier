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
  //cant get curve to start at o,o it starts at a few pixels besdie 0,0???
  ellipse(0,0,5,5);
  bezier(random(width), random(height), random(width),
  random(height), random(width), random(height),
  100, 0, 0, 0, 100, 0);
  endShape();

}

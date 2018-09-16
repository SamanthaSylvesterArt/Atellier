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
  noFill();
  beginShape();
  vertex(0,0);
  bezier(random(255), 250, 0, 100, 100, 0, 100, 0, 0, 0, 100, 0);

}

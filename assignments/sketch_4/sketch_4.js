// sketch_4.js
//fade an img to black
//resources:
//https://p5js.org/reference/#/p5/float
//https://p5js.org/reference/#/p5/loadImage
//https://p5js.org/reference/#/p5/tint


var transparency = '255'; //trying to figure out floats?
var fade = float(transparency);
function setup(){
  createCanvas(600,600);
  img = loadImage("https://images.unsplash.com/photo-1520279421670-a534a73ed108?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=faf2061bf149df54e0aaee93b0adeeca&auto=format&fit=crop&w=1650&q=80");
}
function draw(){
  background(0);
  if(transparency > 0) {
    transparency -= 0.25
  }
  tint(255, transparency);
  image(img,0,0);
}

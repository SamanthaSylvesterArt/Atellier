// sketch_4.js
var transparency = '255';

function setup(){
  createCanvas(600,600);
  img = loadImage("https://images.unsplash.com/photo-1520279421670-a534a73ed108?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=faf2061bf149df54e0aaee93b0adeeca&auto=format&fit=crop&w=1650&q=80");
}
function draw(){
  background(0);
  if(transparancy > 0) {
    transparency -= 0.25
  }
  tint(255, transparency);
  image(img,0,0);
}

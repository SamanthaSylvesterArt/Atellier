// sketch_1.js
// Samantha sylvester, 3165592
// goal: to create cool looking texts and fonts

import p5.font; //import font class??

function setup(){
    createCanvas(720,480);
    loadFont('data/Adventure.otf', drawText);
    //font has to be in same folder.... took me awhile to figure that out
}

function draw(){
    background(255);
    // textSize(32);
    // text('word', 10, 30);
    // fill(0, 102, 153);
    // text('word', 10, 60);
    // fill(0, 102, 153, 51);
    // text('word', 10, 90);
}

function drawText(font) {
  fill('#ED225D');
  textFont(font, 36);
  text('p5*js', 10, 50);
}

// sketch_1.js
// Samantha sylvester, 3165592
// goal: to create cool looking texts and fonts

//import p5.font; //import font class??

var font, //why the comma?

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('data/Adventure.otf');
  //font has to be in same folder.... took me awhile to figure that out
  //found in the example given here: https://p5js.org/examples/typography-words.html
}

function setup(){
    createCanvas(720,480);
    loadFont('data/Adventure.otf', drawText);
    // Set text style
    textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);
}

function draw(){
    background(255);
    // textSize(32);
    // text('word', 10, 30);
    // fill(0, 102, 153);
    // text('word', 10, 60);
    // fill(0, 102, 153, 51);
    // text('word', 10, 90);

    // Align the text in the center
    // and run drawWords() in the middle of the canvas
    textAlign(CENTER);
    drawWords( width * .5 );
}

// function drawText(font) {
//   fill('#ED225D');
//   textFont(font, 36);
//   text('p5*js', 10, 50);
// }

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  text("Scott Pilgrim vs The World", x, 80);

  // fill(65);
  // text("ni", x, 150);
  //
  // fill(190);
  // text("san", x, 220);
  //
  // fill(255);
  // text("shi", x, 290);
}

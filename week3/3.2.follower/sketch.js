let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;

let debug = true;
let followerImage;

function preload() {
  followerImage = loadImage("download.png");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  if (mouseX > x) {
    xspeed = speedfactor;
  } else {
    xspeed = -speedfactor;
  }

  if (mouseY > y) {
    yspeed = speedfactor;
  } else {
    yspeed = -speedfactor;
  }

  x += xspeed;
  y += yspeed;

  let imgSize = 50;
  imageMode(CENTER);
  image(followerImage, x, y, imgSize, imgSize);

  if (debug) {
    text("width: " + width, 30, 30);
    text("height: " + height, 30, 45);
    text("mouseX: " + mouseX, 30, 60);
    text("mouseY: " + mouseY, 30, 75);
  }
}
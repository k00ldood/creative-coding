let img;
function preload(){
   img = loadImage('https://k00ldood.github.io/creative-coding/week2/pixels/22203-diplopia.jpg');
}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  image(img, 0, 0); 
}
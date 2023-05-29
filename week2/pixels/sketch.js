let img;
let sampleX = 10;
let sampleY = 10;
function preload(){
   img = loadImage('https://k00ldood.github.io/creative-coding/week2/pixels/22203-diplopia.jpg');
}
function setup() {
  createCanvas(800, 800);
  img.LoadPixels();
}

function draw() {
  background(220);
  noStroke();
  translate(100,100);

  //image(img, 0, 0);

  for(let x = 0; x <= img.width; x +=
    sampleX){
    for(let y = 0; y <= img.height;y +=
      sampleY){
      var index = (x + y * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      fill(r,g,b);
      rect(x,y,sampleX,sampleY);
    }
  }
}
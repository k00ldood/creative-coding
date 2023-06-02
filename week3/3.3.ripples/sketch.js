let ripplers = [];

class Rippler {
  constructor(x, y) {
    this.x = x,
    this.y = y,
    this.diameter = 1
    this.color = color(random(1, 90), random(1, 90), random(150, 255));
    this.opacity = 255
  }

  draw() {
    if (this.diameter > 300) return true

    this.diameter += 1.5
    this.opacity -= 1.25
    this.color.setAlpha(this.opacity)
    noStroke()
    fill(this.color)
    circle(this.x, this.y, this.diameter)
  }
}

function setup(){
  canvas = createCanvas(800,800);
}

function draw(){
  background(220);

  let keep = []
  for (let i = 0; i < ripplers.length; i++){
    let shouldDel = ripplers[i].draw();
    if (!shouldDel) keep.push(ripplers[i]);
  }
  ripplers = keep
}

function mousePressed() {
  ripplers.push(new Rippler(mouseX, mouseY))
}
let x = 0;
let y = 0;
let xspeed = 1;
let yspeed = 1;
let circleColor = 0; //this will be the initial color of the circle

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Checking for collision with left and right edges
  if (x < 0 || x > width) {
    xspeed *= -1; // Reverse the x direction
    changeCircleColor(); //changing the color of the circle
  }
  
  // Checking for collision with top and bottom edges
  if (y < 0 || y > height) {
    yspeed *= -1; // Reverse the y direction
    changeCircleColor(); //changing the color of the circle
  }

  x += xspeed; // Iterate x
  y += yspeed; // Iterate y

  fill(circleColor);
  
  // Draw a circle
  circle(x, y, 50);
}

function changeCircleColor(){
  //Generating a random color whenever it hits the wall
  circleColor = color(random(255), random(255), random (255));
}
let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  // Update the position of the object based on the mouse pointer
  x += (mouseX - x) / 10;
  y += (mouseY - y) / 10;

  // Drawing the object
  // Replace the ellipse() function with an image
  let imgSize = 50; 
  imageMode(CENTER);
  image(caillou.jpg, x, y, imgSize, imgSize); 

  // Calculate the distance between the object and the mouse pointer
  let distance = dist(x, y, mouseX, mouseY);

  // Check if the distance is small enough to register as a catch
  let catchDistance = 50; // Adjust the catch distance as needed
  if (distance < catchDistance) {
    // Reset the position of the object after a successful catch
    x = random(width);
    y = random(height);
  }
}
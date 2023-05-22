function setup() {
  createCanvas(400, 400);
}
  //outline of the face
function draw() {
  background(220);
  stroke("black");
  strokeWeight(5);
  
  //overall face
  fill("yellow");
  ellipse(200,200,250,250);
  
  //eyebrows
  fill("black");
  ellipse(145,155,60,0);
  ellipse(255,155,60,0);

  //both eyes left then right
  fill("black");
  ellipse(150,175,40,40);
  ellipse(250,175,40,40);
  
  //inner eye
  fill("white");
  ellipse(150,175,25,25);
  ellipse(250,175,25,25);
  
  //mouth
  fill("black");
  ellipse(200,260,50,50);
}
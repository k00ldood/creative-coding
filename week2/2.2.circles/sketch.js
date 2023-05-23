function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);

//pushing the grid out of the top left corner
translate(150,160)

for (let x = 0; x < 8; x += 1){
   for (let y = 0; y < 8; y+= 1){
    push();
      
      //move the drawing plan to
      //add a new circle
      translate(x * 100,y * 100);

      //line thickness
      strokeWeight( random(4,40) );

      //line color
      stroke(random(0,255),184,255);

      //fill color
      fill(0,random(0,255),160);

      //draw the circle
      ellipse(0,0,random(75,130));

      pop();  
    }
  }
}
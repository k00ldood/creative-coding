function setup() {
  createCanvas(1100, 1100);
  noLoop();

//The quilt that I chose is called "Square in a Square". Down below is the link:         https://www.internationalquiltmuseum.org/quilt/19970070181

}

function pattern(){
     //drawing horizontal lines
      line(25,35,60,35);
      line(25,45,60,45);
      line(25,55,60,55);
      line(25,65,60,65);
}
function pattern2(){
  //drawing slanted vertical lines
    strokeWeight(2);
      line(25,35,35,70);
      line(35,35,45,70);
      line(45,35,55,70);
      line(55,35,65,70);
}
function pattern3(){
  //drawing the smaller white squares in the rectangles
      rect (30,50,1,1);
      rect (55,60,1,1);
      rect (58,70,1,1);
}
function draw() {
  
  background(220);
  fill(240,248,255);
  rect(50,30,950,1000);
  

  //pushing the grid out of the top left corner
  translate(60,30)

  for (let x = 0; x < 18; x += 1){
    for (let y = 0; y < 19; y+= 1){
      push();
      
      //move the drawing plan to
      //add a new rectangle
      translate(x * 50,y * 50);

      //line thickness
      strokeWeight(4);
     
      //line color
      if (y % 2 === 0 && x % 2 === 0){
         stroke(255,255,255);
      }
        else if(y % 2 === 0 && x % 2 !== 0){
          stroke(0,0,128);
          
        }else if(y % 2 !== 0 && x % 2 === 0){
          stroke(0,0,128);
          }else if(y % 2 !== 0 && x % 2 !== 0){
            stroke(255,255,255);
        }
          
      //fill color
      fill(0,random(51,102),153);         

      //draw the rectangle
      rect(20,30,45,45);

      var p = random([pattern,pattern2,pattern3]);
      p()
  

      pop();  
    }
  }
}
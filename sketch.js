let angle = 0;

function setup() {
  createCanvas(600, 600);
  background(176,42,42);
  angleMode(DEGREES);
  rectMode(CENTER);
}



let dia=5


function draw() {
  
  background(176,42,42);
   fill(209,199,199);
  noStroke();
  circle(width/2, height/2, dia);
  dia= dia+2



translate(300,300);
  rotate(angle);
  
    angle= angle+1
  noStroke();
  fill(176,42,42)
  rect(0,0,150,100,45,60,70,50);
  
noFill();
  stroke(166, 48, 48);
  strokeWeight(5);
  rotate(angle);
   circle(0,100,20);
 
  noFill();
  stroke(166, 48, 48);
  strokeWeight(4)
  rotate(angle);
  circle(0,120,20);
  
    rotate(angle);
  noFill();
  stroke(166, 48, 48)
  strokeWeight(3);
  circle(0,140,20);
  
   
    rotate(angle);
  noFill();
  stroke(166, 48, 48)
  strokeWeight(5);
  circle(0,160,20);
  
    rotate(angle);
  noFill();
  stroke(166, 48, 48)
  strokeWeight(6);
  circle(0,180,20);
}
  

 
    
    
  
  
  
  
  
  
 



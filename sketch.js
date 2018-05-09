
resize

function preload(){
bg = loadImage("assets/hat.png");
}


function setup() {
  createCanvas(800,800);

}

function draw() {
  background(0,150,255);
  // Bottom Snowman 
  /* Head */ 
  fill(255,255,255); 
  noStroke(); 
  ellipse(width / 2, 150, 50, 50);
 /* Tummy */ 
 fill(255,255,255); 
 noStroke(); 
 ellipse(width / 2, 205, 75, 75);
 /* Butt */ 
 fill(255, 255, 255); 
 noStroke(); 
 ellipse(width / 2, 275, 100, 100);
/* Eyes */ fill(0, 0, 0); noStroke(); ellipse((width / 2) - 12.5 , 150 - 7.5, 10, 10); ellipse(410, 143, 10, 10);
 image (bg,mouseX,mouseY);
}
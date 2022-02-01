let wall;
let floor;
let diningtable;
let kitchen;

function preload() {
  wall = loadImage("whitewall.jpg");
  floor = loadImage("woodfloor.jpg");
  kitchen = loadImage('kitchen.png');
  diningtable = loadImage("table.png");
  
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(217, 255, 251);
  
  orbitControl();
  noStroke();
  
//floor
  push();
  translate(-30, 90, 300);
  texture(floor);
  rotateX(-1.6);
  plane(600,400);
  pop();

  //wall1
  push();
  translate(-30, -100, 100);
  texture(wall);
  plane(600,400);
  pop();
  
//wall2
  push();
  translate(265, -100, 300);
  texture(wall);
  rotateY(-1.58);
  plane(400);
  pop();

  //wall3
  push();
  translate(-330, -100, 300);
  texture(wall);
  rotateY(-1.58);
  plane(400);
  pop();
  
    //diningtable
  push();
  translate(140, 45,200);
  texture(diningtable);
    rotateY(-1.08);

  plane(300);
  pop();
  
    //kitchen
  push();
  translate(-90,-70,250);
  texture(kitchen);
  plane(300);
  pop();
}

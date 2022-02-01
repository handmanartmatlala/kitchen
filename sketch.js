let wall;
let floor;

function preload() {
  wall = loadImage("whitewall.jpg");
  floor = loadImage("woodtexture.jpg");
  cake = loadImage('cake.gif');
  table = loadImage("table.png");
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
  
    //table
  push();
  translate(-30, 45,300);
  texture(table);
  plane(100);
  pop();
  
    //cake
  push();
  translate(-30,-20,350);
  texture(cake);
  plane(100);
  pop();
}

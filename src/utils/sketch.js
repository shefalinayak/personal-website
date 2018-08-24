var s = 20; // sidelength

function draw_i(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s*5,y);
  vertex(x+s*5,y+s);
	vertex(x,y+s);
	endShape(CLOSE);
}

function draw_f(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s,y);
  vertex(x+s,y+s);
  vertex(x+s*3,y+s);
  vertex(x+s*3,y);
  vertex(x+s*2,y);
  vertex(x+s*2,y-s*2);
  vertex(x+s,y-s*2);
  vertex(x+s,y-s);
  vertex(x,y-s);
	endShape(CLOSE);
}

function draw_l(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s,y);
  vertex(x+s,y-s*3);
  vertex(x+s*2,y-s*3);
  vertex(x+s*2,y-s*4);
  vertex(x,y-s*4);
	endShape(CLOSE);
}

function draw_p(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s*2,y);
  vertex(x+s*2,y-s*2);
  vertex(x+s,y-s*2);
  vertex(x+s,y-s*3);
  vertex(x,y-s*3);
	endShape(CLOSE);
}

function draw_s(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s*2,y);
  vertex(x+s*2,y+s);
  vertex(x+s*4,y+s);
  vertex(x+s*4,y);
  vertex(x+s*3,y);
  vertex(x+s*3,y-s);
  vertex(x,y-s);
	endShape(CLOSE);
}

function draw_t(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s*3,y);
  vertex(x+s*3,y-s);
  vertex(x+s*2,y-s);
  vertex(x+s*2,y-s*3);
  vertex(x+s,y-s*3);
  vertex(x+s,y-s);
  vertex(x,y-s);
	endShape(CLOSE);
}

function draw_u(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s,y);
  vertex(x+s,y-s);
  vertex(x+s*2,y-s);
  vertex(x+s*2,y);
  vertex(x+s*3,y);
  vertex(x+s*3,y-s*2);
  vertex(x,y-s*2);
	endShape(CLOSE);
}

function draw_v(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s,y);
  vertex(x+s,y-s*2);
  vertex(x+s*3,y-s*2);
  vertex(x+s*3,y-s*3);
  vertex(x,y-s*3);
	endShape(CLOSE);
}

function draw_w(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s,y);
  vertex(x+s,y-s);
  vertex(x+s*2,y-s);
  vertex(x+s*2,y-s*2);
  vertex(x+s*3,y-s*2);
  vertex(x+s*3,y);
  vertex(x+s*2,y);
  vertex(x+s*2,y+s);
  vertex(x,y+s);
	endShape(CLOSE);
}

function draw_x(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s,y);
  vertex(x+s,y-s);
  vertex(x+s*2,y-s);
  vertex(x+s*2,y-s*2);
  vertex(x+s,y-s*2);
  vertex(x+s,y-s*3);
  vertex(x,y-s*3);
  vertex(x,y-s*2);
  vertex(x-s,y-s*2);
  vertex(x-s,y-s);
  vertex(x,y-s);
	endShape(CLOSE);
}

function draw_y(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s,y);
  vertex(x+s,y-s*4);
  vertex(x,y-s*4);
  vertex(x,y-s*2);
  vertex(x-s,y-s*2);
  vertex(x-s,y-s);
  vertex(x,y-s);
	endShape(CLOSE);
}

function draw_z(x,y) {
	beginShape();
	vertex(x,y);
  vertex(x+s*2,y);
  vertex(x+s*2,y-s*2);
  vertex(x+s*3,y-s*2);
  vertex(x+s*3,y-s*3);
  vertex(x+s,y-s*3);
  vertex(x+s,y-s);
  vertex(x,y-s);
	endShape(CLOSE);
}

function draw_rand(x,y) {
  var r = random(12);
  if (r < 1) draw_i(x,y);
  else if (r < 2) draw_f(x,y);
  else if (r < 3) draw_l(x,y);
  else if (r < 4) draw_p(x,y);
  else if (r < 5) draw_s(x,y);
  else if (r < 6) draw_t(x,y);
  else if (r < 7) draw_u(x,y);
  else if (r < 8) draw_v(x,y);
  else if (r < 9) draw_w(x,y);
  else if (r < 10) draw_x(x,y);
  else if (r < 11) draw_y(x,y);
  else draw_z(x,y);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  noStroke();
  frameRate(2);
}

// function mousePressed() {
//   // Check if mouse is inside the circle
//   var r = random(200);
//   var g = 200 + random(55);
//   var b = random(150);
//   fill(r,g,b,127);
//   draw_rand(mouseX,mouseY);
// }

// function doubleClicked() {
//   background(250);
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  var x = floor(random(windowWidth / s)) * s;
  var y = floor(random(windowHeight / s)) * s;
  var r = random(200);
  var g = 200 + random(55);
  var b = random(150);
  fill(r,g,b,127);
  draw_rand(x,y);
}

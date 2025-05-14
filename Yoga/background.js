let particles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  clear();
  background(255, 0);
  angleMode(DEGREES);
  noStroke();
  for (let i = 0; i < 300; i++) {
    particles.push(new Particle());
  }
}


function draw() {
  drawMetallicBackground();


  translate(width / 2, height / 2);
  colorMode(HSB);
  for (let p of particles) {
    p.update();
    p.display();
  }
}


function drawMetallicBackground() {
  colorMode(RGB);
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(230, 230, 230), color(170, 170, 170), inter); // shiny silver gradient
    stroke(c);
    line(0, y, width, y);
  }
}


class Particle {
  constructor() {
    this.reset();
  }


  reset() {
    this.angle = random(360);
    this.radius = random(50, 250);
    this.speed = random(0.2, 1);
    this.size = random(3, 9);
    this.hue = map(this.radius, 50, 250, 200, 330);
  }


  update() {
    this.angle += this.speed;
    if (this.angle > 360) {
      this.reset();
    }
  }


  display() {
    let x = this.radius * cos(this.angle);
    let y = this.radius * sin(this.angle);
    fill(this.hue, 100, 100);
    ellipse(x, y, this.size);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




class Piece {
  //constructor
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    //this.vy=vy;
    this.color = color;
    this.grabbed = false;

  }

  display() {
    push();
    fill(this.color.r, this.color.g, this.color.b);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }


}
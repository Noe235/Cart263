class Bubble{
//constructor
constructor(){
this.x =random(width);
this.y = height;
this.size =100;
this.vx =0;
this.vy=-2;
this.color ={
  r:random(0,255),
  g:random(0,255),
  b:random(0,255),
  };
}

//display
display(){
push();
fill(this.color.r,this.color.g,this.color.b);
noStroke();
ellipse (this.x, this.y,this.size);
pop();

}

//movement bubble
movement(){
//moving the buble
this.x += this.vx;
this.y += this.vy;
}


}

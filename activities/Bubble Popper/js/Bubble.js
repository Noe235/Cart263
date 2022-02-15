class Bubble{
//constructor
constructor(x,y,size,vx,vy,color){
this.x =x;
this.y = y;
this.size =size;
this.vx =vx;
this.vy=vy;
this.color =color;
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
 loop(){
   if (this.y<0) {
     this.x = random(width);
     this.y = height;
 }
}
}

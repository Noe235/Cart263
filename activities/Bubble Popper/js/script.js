/**
Blubble Popper
Noemie-San

Pop bubble with your hand
*/

"use strict";
//Things to add
//score => easy
//sfx => easy
//menu screen + loading screen =>medium-easy ish
//more bubble => oop => prob harder


//user webcam
let video = undefined;

//hand pose model
let handpose  undefined;

//Bubble
let bubble= undefined;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(640,480);

//acess user webcam
video = createCapture(VIDEO);
video.hide();
handpose = ml5.handpose(video,{
  fliphorizontal:true
},
function(){
  console.log('model works');
});

//listen for prediction
handpose.on('predict',function(results){
  console.log(results);
  predictions= results;
});

bubble ={
  x:random(width),
  y:height,
  siz:100,
  vx:0,
  vy:-2,
};

}
/**
Description of draw()
*/
function draw() {
background(0);
if(prediciton.length > 0){
let hand = predictions [0];
let index = hand.annotation.indexFinger;
let tip = index[3];
let base = index[0];
let tipX = tip[0];
let tipY = tip[1];
let baseX= base[0];
let baseY = base[1];

//pin body
push();
noFill();
stroke(255,255,255);
strokeWeight(2);
line(baseX, baseY, tipX, tipY);
pop();


//pin head
push();
noStroke();
fill(255,0,0);
ellipse(baseX,baseY,20);
pop();

//check bubble poppin
let d = dist(tipX,tipY,bubble.x,bubble.y);
if (d< bubble.size/2){
  bubble.x = random(width);
  bubble.y = height;
}
}

//moving the buble
bubble.x += bubble.vx;
bubble.y += bubble.vy;

if (bubble.y<0) {
  bubble.x = random(width);
  bubble.y = height;
}

push();
fill(0,0,255 );
noStroke();
ellipse (bubble.x, bubble.y,bubble.size);
pop();


}

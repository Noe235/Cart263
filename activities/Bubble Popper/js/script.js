/**
Blubble Popper
Noemie-San

Pop bubble with your hand
*/

"use strict";
//Things to add
//score => easy
//sfx => easy
//menu screen + loading screen =>medium-easy ish depends maybe with oop again
//more bubble => oop => prob harder


//user webcam
let video = undefined;

//hand pose model
let handpose =undefined;
let predictions=[];

//Bubble
let bubbles= [];
let nbbubble = 5


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
  flipHorizontal:true
},
function(){
  console.log('model works');
});

//listen for prediction
handpose.on('predict',function(results){
  predictions = results;
});

for (let i = 0; i <nbbubble ; i++){
  let x =random(width);
  let y = random(height);
  let size =100;
  let vx =0;
  let vy=random(-2,-1);
  let color ={
    r:random(0,255),
    g:random(0,255),
    b:random(0,255),
}
let bulle = new Bubble (x,y,size,vx,vy,color);
bubbles.push(bulle);
}


}
/**
Description of draw()
*/
function draw() {
background(0);
if (predictions.length > 0){
let hand = predictions [0];
let index = hand.annotations.indexFinger;
let tip = index[3];
let base = index[0];
let tipX = tip[0];
let tipY = tip[1];
let baseX= base[0];
let baseY = base[1];
 displayPin(baseX, baseY, tipX, tipY);


//check bubble poppin
// let d = dist(tipX,tipY,bubble.x,bubble.y);
// if (d< bubble.size/2){
//   bubble.x = random(width);
//   bubble.y = height;
// }

//modified version check every bubble
for (let i = 0; i <bubbles.length; i++){
let bubble = bubbles[i];
let d = dist(tipX,tipY,bubble.x,bubble.y);
if (d< bubble.size/2){
bubbles.splice(i,1);
}
}

}
if (bubbles.length <nbbubble){

  let x =random(width);
  let y = random(0,height);
  let size =100;
  let vx =0;
  let vy=-2;
  let color ={
    r:random(0,255),
    g:random(0,255),
    b:random(0,255),
  }
let bulle = new Bubble (x,y,size,vx,vy,color);
bubbles.push(bulle);
}


//moving the buble
for (let i = 0; i <bubbles.length; i++){
  let bubble = bubbles[i];
bubble.movement();
bubble.display();
bubble.loop();
}

}

function displayPin(baseX, baseY, tipX, tipY){
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
}

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
let bubble= undefined; // => s[];
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
  fliphorizontal:true
},
function(){
  console.log('model works');
});

//listen for prediction
handpose.on('predict',function(results){
  predictions = results;
});

//can remove +oop
bubble ={
  x:random(width),
  y:height,
  size:100,
  vx:0,
  vy:-2,
};

//adding when oop ready
//let bubble = new Bubble();

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
let d = dist(tipX,tipY,bubble.x,bubble.y);
if (d< bubble.size/2){
  bubble.x = random(width);
  bubble.y = height;
}
//modified version check every bubble
// for (let i = 0; i <bubbles.lenght; i++){
//let bubble = bubbles[i];
// let d = dist(tipX,tipY,bubble.x,bubble.y);
// if (d< bubble.size/2){
// bubbles.splice();
//}
//
//
}

//making so that there is always 5 bubble on screen
// for (let i = 0; i <nbbubble ; i++){
//   let x =random(width);
//   let y = height;
//   let size =100;
//   let vx =0;
//   let vy=-2;
//   let color ={
//     r:random(0,255);
//     g:random(0,255);
//     b:random(0,255);
// }
// let bubble = new bubble (x,y,size,vx,vy,color);
// bubble.push(bubble);


//moving the buble + in oop
bubble.x += bubble.vx;
bubble.y += bubble.vy;
// => bubble.movement()

//will in theory be deleted since new bubble will be made
if (bubble.y<0) {
  bubble.x = random(width);
  bubble.y = height;
}

//add to oop
push();
fill(0,0,255);
noStroke();
ellipse(bubble.x,bubble.y,bubble.size);
pop();
//=> bubble.display()

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

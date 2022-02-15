/**
A night at the movie
Noemie

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let gamestate = 'menu' //menu,gamejob,gamereal,gameover,


let pieces = [];
let nbpieces = 5; //undefined;



/**
Description of preload
*/
function preload() {


}


/**
Description of setup
*/
function setup() {
  for (let i = 0; i < nbpieces; i++) {
    let x = random(width);
    let y = random(height);
    let size = 50;
    let colorchoice = ['255,0,0', '0,255,0', '0,0,255']
    let color = random(colorchoice);
    let work = new Piece(x, y, size, color);
    pieces.push(work);
  }
}


/**
Description of draw()
*/
function draw() {
  createCanvas(800, 800);
  background(0);





  if (gamestate === 'menu') {

    //display tittle
    push();
    textSize(70);
    fill(255, 255, 255);
    textAlign(CENTER);
    textStyle(BOLD);
    text('Job simulator', width / 2, height / 4)
    pop();

    //display buttons
    push();
    fill(142, 134, 0);

    //play button
    rect(width / 3, height / 5 * 2, width / 3, height / 8, 10)
    //button
    rect(width / 3, height / 5 * 3, width / 3, height / 8, 10)
    //button
    rect(width / 3, height / 5 * 4, width / 3, height / 8, 10)
    pop();

    // display text button
    push();
    fill(255, 255, 255);
    textSize(30);
    textAlign(CENTER);
    //play button
    text('Start', width / 2 - 5, height / 5 * 2 + 60)
    //button
    text('options', width / 2, height / 5 * 3 + 60) //might be score board
    //button
    text('special mode', width / 2, height / 5 * 4 + 60) //will be hidden
    pop();
  }


  for (let i = 0; i < pieces.length; i++) {
    piece.display();


  }
}

function mousePressed() {
  if (gamestate === 'menu') {
    //start button
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 2 && mouseY < height / 5 * 2 + height / 8) {
      console.log('start')
    }
    //option button
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 3 && mouseY < height / 5 * 3 + height / 8) {
      console.log('option')
    }
    //special mode
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 4 && mouseY < height / 5 * 4 + height / 8) {
      console.log('special')
    }
  }
}
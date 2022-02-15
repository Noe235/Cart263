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
let colorchoice = [{
    r: 255,
    g: 0,
    b: 0,
  },
  {
    r: 0,
    g: 255,
    b: 0,
  },
  {
    r: 0,
    g: 0,
    b: 255,
  }
];

//store the user information
const PROFILE_USER_ANIGHTATTHEMOVIE = 'userProfile';
let userProfile = {
  name: 'undefined',
  age: 'undefined',
  dream: 'undefined',

}
let bankeddata = false;


/**
Description of preload
*/
function preload() {


}


/**
Description of setup
*/
function setup() {
  //prepping the work
  for (let i = 0; i < nbpieces; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = 50;
    let color = random(colorchoice);
    let work = new Piece(x, y, size, color);
    pieces.push(work);
  }



}

function setupUserProfile(data) {
  userProfile.name = data.name;

  userProfile.age = data.age;

  userProfile.dream = data.dream;


}

/**
Description of draw()
*/
function draw() {
  createCanvas(800, 800);
  background(0);

  //checking if there's user information
  let data = JSON.parse(localStorage.getItem(PROFILE_USER_ANIGHTATTHEMOVIE))
  if (data) {
    setupUserProfile(data);
    bankeddata = true;
  }





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

    if (bankeddata === true) {
      push();
      textSize(22);
      fill(255, 255, 255);
      textAlign(CENTER);
      textStyle(BOLD);
      text(`Welcome back ${userProfile.name}`, width / 2, height / 4 + 50)
      pop();

      push()
      //data detection
      textSize(13);
      fill(255, 255, 255);
      text('Data detected', 10, height - 25);
      textSize(11);
      text('Press C to delete it', 10, height - 15);
      pop();
    }
  }


  if (gamestate === 'gamejob') {
    if (bankeddata === false) {
      generateUserProfile();
    }
    for (let i = 0; i < pieces.length; i++) {
      pieces[i].display();

      let d = dist(mouseX, mouseY, pieces[i].x, pieces[i].y)
      if (d < pieces[i].size / 2 && mouseIsPressed === true) {
        pieces[i].x = mouseX;
        pieces[i].y = mouseY;
      }


    }
  }

  if (gamestate === 'option') {

  }
}

function mousePressed() {
  if (gamestate === 'menu') {
    //start button
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 2 && mouseY < height / 5 * 2 + height / 8) {
      gamestate = 'gamejob'
    }
    //option button
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 3 && mouseY < height / 5 * 3 + height / 8) {
      gamestate = 'option'
    }
    //special mode
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 4 && mouseY < height / 5 * 4 + height / 8) {
      console.log('special')
    }
  }

  if (gamestate === 'gamejob') {
    for (let i = 0; i < pieces.length; i++) {

    }
  }

  if (gamestate === 'option') {

  }
}

function keyPressed() {
  if (keyIsPressed === true) {
    if (keyCode === 67) {
      localStorage.removeItem(`userProfile`);
      bankeddata = false
    }
  }
}

function generateUserProfile() {
  // Ask for the user's name
  userProfile.name = prompt(`What is your name?`);
  // Ask for the user's age
  userProfile.age = prompt(`How old are you?`);
  // Ask for the user's dream
  userProfile.dream = prompt(`What is your dream?`);

  // Save the resulting profile to local storage
  localStorage.setItem(PROFILE_USER_ANIGHTATTHEMOVIE, JSON.stringify(userProfile));
  bankeddata = true;
}
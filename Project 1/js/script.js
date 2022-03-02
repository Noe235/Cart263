/**
A night at the movie
Noemie

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//last stuff to add userProfile.specialmode = true -> make a toggle
//
//
//


let gamestate = 'menu' //menu,gamejob,gamereal,gameover,

let score = 0;
let time = 60;


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
  specialmode: false,

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
  createCanvas(800, 800);
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
    text('Job simulator', width / 2, height / 4);
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

  if (gamestate === 'gamemenuspecial') {

    //display tittle
    push();
    textSize(70);
    fill(255, 255, 255);
    textAlign(CENTER);
    textStyle(BOLD);
    text('Job simulator', width / 2, height / 5 - 10);
    textSize(50);
    text(`Revue Mode`, width / 2, height / 4);
    pop();

    //display buttons
    push();
    fill(142, 134, 0);

    //play button
    rect(width / 3, height / 5 * 2, width / 3, height / 8, 10)
    //button
    rect(width / 3, height / 5 * 3, width / 3, height / 8, 10)

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
    // if (bankeddata === false) {
    //   generateUserProfile();
    // }
    for (let i = 0; i < pieces.length; i++) {
      pieces[i].display();

      let d = dist(mouseX, mouseY, pieces[i].x, pieces[i].y)
      if (d < pieces[i].size / 2 && mouseIsPressed === true && pieces[i].grabbed === true) {
        pieces[i].grabbed = false;
      } else
      if (d < pieces[i].size / 2 && mouseIsPressed === true) {

        pieces[i].grabbed = true;
      }


    }


    drawBaskets();
    checkBaskets();
    timer();

    //UI
    push();
    textSize(25);
    fill(255, 255, 255);
    text(`Score ${score}`, 20, 50);
    pop();

    push();
    textSize(25);
    fill(255, 255, 255);
    text(`Time ${time}`, width - 150, 50);
    pop();



  }
  if (gamestate === 'gamereal') {
    for (let i = 0; i < pieces.length; i++) {
      pieces[i].display();

      let d = dist(mouseX, mouseY, pieces[i].x, pieces[i].y)
      if (d < pieces[i].size / 2 && mouseIsPressed === true && pieces[i].grabbed === true) {
        pieces[i].grabbed = false;
      } else
      if (d < pieces[i].size / 2 && mouseIsPressed === true) {

        pieces[i].grabbed = true;
      }


    }


    drawBaskets();
    checkBaskets();
    timer();

    //UI
    push();
    textSize(25);
    fill(255, 255, 255);
    text(`Score ${score}`, 20, 50);
    pop();

    push();
    textSize(25);
    fill(255, 255, 255);
    text(`Time ${time}`, width - 150, 50);
    pop();
  }
  if (gamestate === 'option') {

  }


  if (gamestate === 'gameover') {
    //display score
    push();
    textSize(70);
    fill(255, 255, 255);
    textAlign(CENTER);
    textStyle(BOLD);
    text('Good Job', width / 2, height / 4);
    textSize(50);
    text(`Score ${score}`, width / 2, height / 3);
    pop();

    //display buttons
    push();
    fill(142, 134, 0);

    //play button
    rect(width / 3, height / 5 * 2, width / 3, height / 8, 10)
    //button
    rect(width / 3, height / 5 * 3, width / 3, height / 8, 10)

    pop();

    // display text button
    push();
    fill(255, 255, 255);
    textSize(30);
    textAlign(CENTER);
    //play button
    text('Play Again', width / 2 - 5, height / 5 * 2 + 60)
    //button
    text('Main Menu', width / 2, height / 5 * 3 + 60) //might be score board

    pop();
  }

  if (gamestate === 'gameoverspecial') {
    //display score
    push();
    textSize(40);
    fill(255, 255, 255);
    textAlign(CENTER);
    textStyle(BOLD);
    text('You have unlocked a special game mode', width / 2, height / 4);
    textSize(45);
    text(`Would you like to try it?`, width / 2, height / 3);
    pop();




    push();
    fill(142, 134, 0);

    //play button
    rect(width / 3, height / 5 * 2, width / 3, height / 8, 10)
    //button
    rect(width / 3, height / 5 * 3, width / 3, height / 8, 10)

    pop();

    // display text button
    push();
    fill(255, 255, 255);
    textSize(30);
    textAlign(CENTER);
    //play button
    text('Yes', width / 2 - 5, height / 5 * 2 + 60)
    //button
    text('No', width / 2, height / 5 * 3 + 60) //might be score board

    pop();
  }
}

function timer() {
  if (time != 0) {
    time -= 1
  }
  if (time === 0) {
    if (userProfile.specialmode === false) {
      let chance = random(0, 1);
      if (chance < 0.5) {
        gamestate = 'gameoverspecial';

      }
    } else {

      gamestate = 'gameover';
    }
  }

}

function makeNewPieces() {
  if (pieces.length < nbpieces) {
    let x = random(0, width);
    let y = random(0, height);
    let size = 50;
    let color = random(colorchoice);
    let work = new Piece(x, y, size, color);
    pieces.push(work);
  }
}

function drawBaskets() {
  //red square
  push();
  fill(255, 0, 0, 50);
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(width / 7, height / 2, 150, 150);
  pop();

  //blue square
  push();
  fill(0, 0, 255, 50);
  stroke(0, 0, 255);
  strokeWeight(4);
  rect(width * 2 / 5, height / 6, 150, 150);
  pop();

  //green square
  push();
  fill(0, 255, 0, 50);
  stroke(0, 255, 0);
  strokeWeight(4);
  rect(width * 2 / 3, height / 2, 150, 150);
  pop();
}

function checkBaskets() {
  for (let i = 0; i < pieces.length; i++) {
    let temp = pieces[i];
    let d = dist(width / 7 + 75, height / 2 + 75, temp.x, temp.y)
    //check red basket
    if (d < 75 && mouseIsPressed === true && pieces[i].color.r === 255) {
      score++

      pieces.splice(i, 1);

    }


    //check blue basket
    d = dist(width * 2 / 5 + 75, height / 6 + 75, temp.x, temp.y)
    if (d < 75 && mouseIsPressed === true && pieces[i].color.b === 255) {
      score++

      pieces.splice(i, 1);

    }

    //check green basket
    d = dist(width * 2 / 3 + 75, height / 2 + 75, temp.x, temp.y)
    if (d < 75 && mouseIsPressed === true && pieces[i].color.g === 255) {
      score++

      pieces.splice(i, 1);

    }
    makeNewPieces();
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

  if (gamestate === 'gamejob') {}

  if (gamestate === 'gamemenuspecial') {
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 2 && mouseY < height / 5 * 2 + height / 8) {
      gamestate = 'gamereal'
      score = 0
      time = 600
      for (let i = 0; i < nbpieces; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let size = 50;
        let color = random(colorchoice);
        let work = new Piece(x, y, size, color);
        pieces.push(work);
      }
    }
    //option button
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 3 && mouseY < height / 5 * 3 + height / 8) {
      gamestate = 'option'
    }
  }
  if (gamestate === 'option') {

  }

  //
  if (gamestate === 'gameoverspecial') {
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 2 && mouseY < height / 5 * 2 + height / 8) {
      gamestate = 'gamemenuspecial'
      userProfile.specialmode = true
    }
    //option button
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 3 && mouseY < height / 5 * 3 + height / 8) {
      gamestate = 'menu'
    }
  }
  if (gamestate === 'gameover') {
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 2 && mouseY < height / 5 * 2 + height / 8) {

      if (userProfile.specialmode === false) {
        gamestate = 'gamejob'
        time = 60
      } else if (userProfile.specialmode === true) {
        gamestate = 'gamereal'
        time = 600
      }

      score = 0

      for (let i = 0; i < nbpieces; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let size = 50;
        let color = random(colorchoice);
        let work = new Piece(x, y, size, color);
        pieces.push(work);
      }

    }
    //main menu button
    if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
      mouseY > height / 5 * 3 && mouseY < height / 5 * 3 + height / 8) {
      if (userProfile.specialmode === false) {
        gamestate = 'menu'
        time = 60
      } else if (userProfile.specialmode === true) {
        gamestate = 'gamemenuspecial'
        time = 600
      }
      score = 0
    }
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
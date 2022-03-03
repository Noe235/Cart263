/**
A night at the movie
Noemie

click  the ball and put them in the right box
*/

"use strict";

//
//


let gamestate = 'menu'; //menu,gamejob,gamereal,gameover,
let best = false
let gameoverlay = false;

let score = 0;
let time = 6000;
let counter = 0;
let badQuotes = [
  //pen;sword;katana
  `A hazy landscape, a perishing dream,you are blinded`, `With your excuses all you do is parrot time`, `your dream is just a piece of trash`, `what have you been looking at all those years?`, `your struggle was foolish,blazing, that's the best you'll ever do`, `go subsist on nothing but the haze of your pipe dream`, `aren't you tired of not being able to reach your dream?`, `Isn't it time to give up after # years?`, `what have you been doing these past # years?`, `"%" what a waste of a space`, `Stop,trying desperatly won't change anything`, `"%"a plausable dream, yet unreachable for you`,

];

let goodQuotes = [
  `don't let you resolve falter`,
  `don't let anybody get in your way`,
  `if you keep going you will get your dream`,
  `keep aiming for you dream`,
  `don't give up, it's not the end`,
  `falling is part of the process, get up @`,
  `You can't stop yet you have to keep going`,
  `# years old, is never too late to dream`,
  `You can do it @`,
  `your journey doesn't end until you give up`,
  `you are the lead of you life`,
  `Step over your limits and more`,
  `it's not the end @, keep going`,
  `your will is stonger than you think`,



];
let curquote = 'undefined';
let curheight = 0;
let cursquare = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
};

let goal = 60; //normal game
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
  encouragemode: false,
}
let bankeddata = false;


/**
Description of preload
*/
function preload() {


}


/**
make the balls
*/
function setup() {
  createCanvas(900, 900);
  //prepping the work
  nbpieces = random(1, 10)
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

  userProfile.specialmode = data.specialmode;

  userProfile.encouragemode = data.encouragemode;



}

/**

*/
function draw() {
  if (gameoverlay === false) {
    background(0);

    //checking if there's user information
    let data = JSON.parse(localStorage.getItem(PROFILE_USER_ANIGHTATTHEMOVIE))
    if (data) {
      setupUserProfile(data);
      bankeddata = true;
      //replace personal parts
      badQuotes = badQuotes.map(function (x) {
        return x.replace(/@/g, `${userProfile.name}`)
      });
      badQuotes = badQuotes.map(function (x) {
        return x.replace(/#/g, `${userProfile.age}`)
      });
      badQuotes = badQuotes.map(function (x) {
        return x.replace(/%/g, `${userProfile.dream}`)
      });
      //replace goodpart
      goodQuotes = goodQuotes.map(function (x) {
        return x.replace(/@/g, `${userProfile.name}`)
      });
      goodQuotes = goodQuotes.map(function (x) {
        return x.replace(/#/g, `${userProfile.age}`)
      });
      goodQuotes = goodQuotes.map(function (x) {
        return x.replace(/%/g, `${userProfile.dream}`)
      });

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
      fill(135, 10, 207);

      //play button
      rect(width / 3, height / 5 * 2, width / 3, height / 8, 10)
      if (best === true) {
        //button
        rect(width / 3, height / 5 * 4, width / 3, height / 8, 10)
      }
      pop();

      // display text button
      push();
      fill(255, 255, 255);
      textSize(30);
      textAlign(CENTER);
      //play button
      text('Start', width / 2 - 5, height / 5 * 2 + 60)
      //button
      if (best === true) {
        text('special mode', width / 2, height / 5 * 4 + 60) //will be hidden
      }
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
      fill(135, 10, 207);

      //play button
      rect(width / 3, height / 5 * 2, width / 3, height / 8, 10)


      pop();

      // display text button
      push();
      fill(255, 255, 255);
      textSize(30);
      textAlign(CENTER);
      //play button
      text('Start', width / 2 - 5, height / 5 * 2 + 60)

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

    //normal gamemode
    if (gamestate === 'gamejob') {
      if (bankeddata === false) {
        generateUserProfile();
      }
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
      text(`Time ${round(time/60)}`, width - 150, 50);
      pop();

      if (userProfile.encouragemode === true) {
        counting();
        //interferences
        if (counter > 300) {
          let change = random(0, 1);

          if (change < 0.5) {
            //take a random quote
            curquote = random(goodQuotes);
            curheight = random(50, height - 50)
            //place the square randomly

            cursquare.x = random(width);
            cursquare.y = random(height);

            //turn on the "pause "
            gameoverlay = true


          }

          counter = 0
        }

      }

    }

    //bad vide part version
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
      text(`Time ${round(time/60)}`, width - 150, 50);
      pop();



      counting();

      //interferences
      if (counter > 300) {
        let change = random(0, 1);
        if (change < 0.5) {
          //take a random quote
          curquote = random(badQuotes);
          curheight = random(50, height - 50)
          //place the square randomly

          cursquare.x = random(width);
          cursquare.y = random(height);

          //turn on the "pause "
          gameoverlay = true


        }

        counter = 0
      }
    }

    //ideal gamemode with encourgement
    if (gamestate === 'gamebest') {
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
      text(`Time ${round(time/60)}`, width - 150, 50);
      pop();



      counting();
      //interferences
      if (counter > 300) {
        let change = random(0, 1);

        if (change < 0.5) {
          //take a random quote
          curquote = random(goodQuotes);
          curheight = random(50, height - 50)
          //place the square randomly

          cursquare.x = random(width);
          cursquare.y = random(height);

          //turn on the "pause "
          gameoverlay = true


        }

        counter = 0
      }





    }

    //normal gameover
    if (gamestate === 'gameover') {


      //display score
      push();
      textSize(70);
      fill(255, 255, 255);
      textAlign(CENTER);
      textStyle(BOLD);
      if (userProfile.encouragemode === true || score > goal) {
        text('Good Job', width / 2, height / 4);
      } else if (score < goal && userProfile.encouragemode === false) {
        text('Try better', width / 2, height / 4);
      }
      textSize(50);
      text(`Score ${score}`, width / 2, height / 3);
      pop();

      //display buttons
      push();
      fill(135, 10, 207);

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

    //
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
      fill(135, 10, 207);

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
      text('No', width / 2, height / 5 * 3 + 60)

      pop();
    }


    if (gamestate === 'gameovergood') {
      //display score
      push();
      textSize(70);
      fill(255, 255, 255);
      textAlign(CENTER);
      textStyle(BOLD);
      text('Congratz', width / 2, height / 4);
      textSize(50);
      text(`Score ${score}`, width / 2, height / 3);
      pop();

      //display buttons
      push();
      fill(135, 10, 207);

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
      text('Play Best Mode', width / 2 - 5, height / 5 * 2 + 60)
      //button
      text('Main Menu', width / 2, height / 5 * 3 + 60)

      pop();
    }
  }

  //overlay / interferences
  if (gameoverlay === true) {
    if (userProfile.specialmode === true) {

      push();
      strokeWeight(4);
      fill(149, 202, 237);
      textSize(35);
      textAlign(CENTER);
      text(`${curquote}`, width / 2, curheight);
      pop();

      push();
      fill(123, 20, 153);
      strokeWeight(0);
      rect(cursquare.x, cursquare.y, cursquare.width, cursquare.height);
      pop();

      //no
      push();
      fill(149, 202, 237);
      textSize(30);
      textAlign(CENTER);
      text(`NO`, cursquare.x + cursquare.width / 2, cursquare.y + cursquare.height * 2 / 3);
      pop();



    }
    if (userProfile.encouragemode === true) {
      push();
      strokeWeight(4);
      fill(149, 202, 237);
      textSize(35);
      textAlign(CENTER);
      text(`${curquote}`, width / 2, curheight);
      pop();

      push();
      fill(123, 20, 153);
      strokeWeight(0);
      rect(cursquare.x, cursquare.y, cursquare.width, cursquare.height);
      pop();

      //no
      push();
      fill(149, 202, 237);
      textSize(25);
      textAlign(CENTER);
      text(`YES`, cursquare.x + cursquare.width / 2, cursquare.y + cursquare.height * 2 / 3);
      pop();
    }



  }
}

function counting() {
  counter += 1;
}

function timer() {
  if (time != 0) {
    time -= 1;

  }
  if (time === 0) {
    if (userProfile.encouragemode === true) {
      gamestate = 'gameover';
    }
    if (userProfile.specialmode === true && userProfile.encouragemode === false) {
      if (score > goal * 2) {
        gamestate = 'gameovergood'
      } else if (score < goal * 2) {
        gamestate = 'gameover';
      }


    }

    if (score > goal && userProfile.specialmode === false && userProfile.encouragemode === false) {
      let chance = random(0, 1);
      if (chance < 0.5) {
        gamestate = 'gameoverspecial';

      } else {

        gamestate = 'gameover';

      }
    } else if (score < goal) {

      gamestate = 'gameover';
    }
  }
}

function makeNewPieces() {
  let addnumber = random(0, 2)
  for (let i = 0; i < addnumber; i++) {
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
      makeNewPieces();
    }


    //check blue basket
    d = dist(width * 2 / 5 + 75, height / 6 + 75, temp.x, temp.y)
    if (d < 75 && mouseIsPressed === true && pieces[i].color.b === 255) {
      score++

      pieces.splice(i, 1);
      makeNewPieces();
    }

    //check green basket
    d = dist(width * 2 / 3 + 75, height / 2 + 75, temp.x, temp.y)
    if (d < 75 && mouseIsPressed === true && pieces[i].color.g === 255) {
      score++

      pieces.splice(i, 1);
      makeNewPieces();
    }

  }



}

function mousePressed() {
  if (gameoverlay === false) {
    if (gamestate === 'menu') {
      //start button
      if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
        mouseY > height / 5 * 2 && mouseY < height / 5 * 2 + height / 8) {
        gamestate = 'gamejob'
      }
      //special mode
      if (best === true) {
        if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
          mouseY > height / 5 * 4 && mouseY < height / 5 * 4 + height / 8) {
          userProfile.encouragemode = true
          gamestate = 'gamebest';

        }
      }
    }

    if (gamestate === 'gamejob') {}

    if (gamestate === 'gamemenuspecial') {
      if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
        mouseY > height / 5 * 2 && mouseY < height / 5 * 2 + height / 8) {
        gamestate = 'gamereal'
        score = 0
        time = 6000
        for (let i = 0; i < nbpieces; i++) {
          let x = random(0, width);
          let y = random(0, height);
          let size = 50;
          let color = random(colorchoice);
          let work = new Piece(x, y, size, color);
          pieces.push(work);
        }
      }
    }

    //
    if (gamestate === 'gameoverspecial') {
      if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
        mouseY > height / 5 * 2 && mouseY < height / 5 * 2 + height / 8) {
        gamestate = 'gamemenuspecial'
        userProfile.specialmode = true

        localStorage.setItem(PROFILE_USER_ANIGHTATTHEMOVIE, JSON.stringify(userProfile));

      }
      //menu button
      if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
        mouseY > height / 5 * 3 && mouseY < height / 5 * 3 + height / 8) {
        gamestate = 'menu'
        score = 0
        time = 6000
        for (let i = 0; i < nbpieces; i++) {
          let x = random(0, width);
          let y = random(0, height);
          let size = 50;
          let color = random(colorchoice);
          let work = new Piece(x, y, size, color);
          pieces.push(work);
        }
      }
    }
    if (gamestate === 'gameover') {
      if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
        mouseY > height / 5 * 2 && mouseY < height / 5 * 2 + height / 8) {

        if (userProfile.specialmode === false) {
          gamestate = 'gamejob'
          time = 6000
        } else if (userProfile.specialmode === true) {
          gamestate = 'gamereal'
          time = 6000
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
          time = 6000
        } else if (userProfile.specialmode === true) {
          gamestate = 'gamemenuspecial'
          time = 6000
        }
        score = 0
      }
    }


    if (gamestate === 'gameovergood') {
      if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
        mouseY > height / 5 * 2 && mouseY < height / 5 * 2 + height / 8) {
        userProfile.specialmode = false;
        userProfile.encouragemode = true;
        localStorage.setItem(PROFILE_USER_ANIGHTATTHEMOVIE, JSON.stringify(userProfile));

        score = 0
        time = 6000
        for (let i = 0; i < nbpieces; i++) {
          let x = random(0, width);
          let y = random(0, height);
          let size = 50;
          let color = random(colorchoice);
          let work = new Piece(x, y, size, color);
          pieces.push(work);
        }

        gamestate = 'gamebest'
      }
      if (mouseX > width / 3 && mouseX < width / 3 + width / 3 &&
        mouseY > height / 5 * 3 && mouseY < height / 5 * 3 + height / 8) {
        userProfile.specialmode = false;
        userProfile.encouragemode = true;
        localStorage.setItem(PROFILE_USER_ANIGHTATTHEMOVIE, JSON.stringify(userProfile));

        gamestate = 'Menu'

        score = 0
        time = 6000
        for (let i = 0; i < nbpieces; i++) {
          let x = random(0, width);
          let y = random(0, height);
          let size = 50;
          let color = random(colorchoice);
          let work = new Piece(x, y, size, color);
          pieces.push(work);
        }

      }

    }



  }


  if (gameoverlay === true) {
    if (userProfile.specialmode === true) {
      if (mouseX > cursquare.x && mouseX < cursquare.x + cursquare.width &&
        mouseY > cursquare.y && mouseY < cursquare.y + cursquare.height) {
        gameoverlay = false


      } else {
        time -= 60
        gameoverlay = false

      }
    }

    if (userProfile.encouragemode === true) {
      if (mouseX > cursquare.x && mouseX < cursquare.x + cursquare.width &&
        mouseY > cursquare.y && mouseY < cursquare.y + cursquare.height) {
        time += 60;
        gameoverlay = false;
      } else {

        gameoverlay = false;
      }

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

  userProfile.specialmode = false;

  userProfile.encouragemode = false;

  // Save the resulting profile to local storage
  localStorage.setItem(PROFILE_USER_ANIGHTATTHEMOVIE, JSON.stringify(userProfile));
  bankeddata = true;
}
/**
The Dumbest Quiz
Noemie

*/

"use strict";

// Code goes here

//variables

let lives = 3;
let currentLevel = 1;
let level4Answer = `365.24`;
let level5Answer = `river`;
let level7Answer = `giraffe`;
let level8Answer = `w`;


$(`#lives`).text(lives);
//levels to hide
$(`.level1`).hide();
$(`.level2`).hide();
$(`.level3`).hide();
$(`.level4`).hide();
$(`.level5`).hide();
$(`.level6`).hide();
$(`.level7`).hide();
$(`.level8`).hide();
$(`.level9`).hide();
$(`.level10`).hide();
$(`.winingScreen`).hide();
$(`#answer-level7`).hide();


// menu
//play button
$(`.play`).on(`click`, function (event) {
  $(`#lives_box`).fadeIn(1000);
  $(`#Menu`).fadeOut(1000, level_1);


})
// Title spanify
let $title = $(`#title`);
colorspanify($title);

let $drag5 = $(`.drag5`);
dragspanify5($drag5);

let $drag8 = $(`.drag8`);
dragspanify8($drag8);




//schose random colors
$(`.random-color`)
  .each(function () {
    $(this)
      .css({
        color: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
      });
  });



//spanifying function applying colors
function colorspanify($element) {
  let text = $element.html();
  let characters = text.split(``);
  for (let i = 0; i < characters.length; i++) {
    characters[i] = `<span class="random-color">${characters[i]}</span>`;
  }
  let html = characters.join(``);
  $element.html(html);
}

//spanifying draging level 5
function dragspanify5($element) {
  let text = $element.html();
  let characters = text.split(``);
  for (let i = 0; i < characters.length; i++) {
    characters[i] = `<span class="secret">${characters[i]}</span>`;
  }
  let html = characters.join(``);
  $element.html(html);
}

function dragspanify8($element) {
  let text = $element.html();
  let characters = text.split(``);
  for (let i = 0; i < characters.length; i++) {
    characters[i] = `<span class="secret">${characters[i]}</span>`;
  }
  let html = characters.join(``);
  $element.html(html);
}

// In game
//wrong answer in game
$(`.wrong_answer`).on(`click`, function (event) {
  $(`#X`).show();
  setTimeout(function () {
    $(`#X`).hide();
    lives--;
    $(`#lives`).text(lives);
    if (lives <= 0) {
      $(`#gameover`).show();
      $(`.level1`).hide();
    }
  }, 2000);

})

//good answer in game
$(`.good_answer`).on(`click`, function (event) {
  $(`.level${currentLevel}`).hide();
  currentLevel++;
  $(`.level${currentLevel}`).show();
  if (currentLevel === 4) {
    level_4();
  }
  if (currentLevel === 5) {
    level_5();
  }
});
// gameover
//try again
$(`#tryagain`).on(`click`, function (event) {
  $(`#gameover`).hide();
  $(`#Menu`).show();
  $(`#lives_box`).hide();
  lives = 3;
  $(`#lives`).text(lives);
})

// other funcions
function ui() {
  $(`.Tittle`).fadeIn(2000);
  $(`.Tittle`).addClass(`game_ui`);


}

// levels functions
//level 1 animation
function level_1() {
  $(`.level1`).fadeIn(1000);
}

//level 4
function level_4() {
  $(`.move`).on(`click`, function (event) {
    $(`.move`).draggable({
      containment: `#year-container`
    });

  });

  //add random numbers
  let characters = [];
  for (let i = 0; i < 15; i++) {
    characters[i] = randomIntFromInterval(364, 366);
    let charactersSpan = `<span class="move">${characters[i]}</span>`;
    $(`#year-container`).append(charactersSpan);
  }
}
//random number btewtten 364-366
function randomIntFromInterval(min, max) {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
}


//level 5
//allowe to move and clone the movable numbers
$(`.secret`).on(`click`, function (event) {
  $(`.secret`).draggable({
    helper: "clone"
  });
});


// level 7
//L7 prep of the level
$(`#elephant`).draggable({
  containment: `#animal-container`
});
$(`#giraffe`).draggable({
  containment: `#animal-container`
});
$(`#elephant`).hide();

//L7 clicks
$(`#fridge`).one(`click`, function (event) {
  $(`#namefridge`).addClass(`open`);
  $(`#elephant`).show();

});

$(`#fridge`).on(`click`, function (event) {
  $(`#giraffe-fridge`).hide();
  let answer = $(`#giraffe-fridge`).text();
  answer = answer.toLowerCase();
  if (answer === level7Answer) {
    $(`#answer-level7`).show();
  }
});

//L7 droppable items and function
$(`#fridge`).droppable({
  drop: function (event, ui) {
    $(`#fridge`).append(`<span id= "giraffe-fridge">giraffe</span>`);
    $(ui.draggable).remove();
  }
});

$(`#animal-container`).droppable({
  drop: function (event, ui) {
    $(`#animal-container`).append(`Elephant`);
    $(ui.draggable).remove();
    disabledrop();
  }
});

function disabledrop() {
  $(`#animal-container`).droppable({
    disabled: true
  });
}






//Levle 4 answerbox functions
//L4 checking button
let btnfour = document.getElementById(`enterfour`);
btnfour.addEventListener(`click`, checkAnswerLevelfour)
let buttonremovefour = document.getElementById(`removefour`);
buttonremovefour.addEventListener(`click`, removeAnswerLevelfour);

function checkAnswerLevelfour() {
  //good 4 answer proceed
  let answer = $(`#answerbox4`).text();
  answer = answer.toLowerCase();
  if (currentLevel === 4) {
    if (answer === level4Answer) {
      $(`.level${currentLevel}`).hide();
      currentLevel++;
      $(`.level${currentLevel}`).show();
    }
  } else {
    removeAnswerLevelfour();

    //call the bad answer visual
    $(`#X`).show();
    setTimeout(function () {
      $(`#X`).hide();
      lives--;
      $(`#lives`).text(lives);
      if (lives <= 0) {
        $(`#gameover`).show();
        $(`.level1`).hide();
        $(`.level2`).hide();
        $(`.level3`).hide();
        $(`.level4`).hide();
        $(`.level5`).hide();
        $(`.level6`).hide();
        $(`.level7`).hide();
        $(`.level8`).hide();
        $(`.level9`).hide();
        $(`.level10`).hide();
        $(`.winingScreen`).hide();
      }
    }, 2000);
  }
}

//Level 4 answerbox specification
$(`#answerbox4`).droppable({
  drop: function (event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.remove();

  }
});

//Levle 5 answerbox and functions
//button 5 answering
let btnfive = document.getElementById(`enterfive`);
btnfive.addEventListener(`click`, checkAnswerLevelFive)
let buttonremovefive = document.getElementById(`removefive`);
buttonremovefive.addEventListener(`click`, removeAnswerLevelFive);

function checkAnswerLevelFive() {
  //good answer 5 proceed
  let answer = $(`#answerbox5`).text();
  answer = answer.toLowerCase();
  if (currentLevel === 5) {
    if (answer === level5Answer) {
      $(`.level${currentLevel}`).hide();
      currentLevel++;
      $(`.level${currentLevel}`).show();
    }
  } else {
    removeAnswerLevelFive();

    //call the bad answer visual
    $(`#X`).show();
    setTimeout(function () {
      $(`#X`).hide();
      lives--;
      $(`#lives`).text(lives);
      if (lives <= 0) {
        $(`#gameover`).show();
        $(`.level1`).hide();
        $(`.level2`).hide();
        $(`.level3`).hide();
        $(`.level4`).hide();
        $(`.level5`).hide();
        $(`.level6`).hide();
        $(`.level7`).hide();
        $(`.level8`).hide();
        $(`.level9`).hide();
        $(`.level10`).hide();
        $(`.winingScreen`).hide();
      }
    }, 2000);
  }
}

//L5 answerbox specifications
$(`#answerbox5`).droppable({
  drop: function (event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.addClass(`used`);



  }
});

// level 8 answerbox checks
//button 8 answering
let btneight = document.getElementById(`entereight`);
btneight.addEventListener(`click`, checkAnswerLevelEight)
let buttonremoveeight = document.getElementById(`removeeight`);
buttonremoveeight.addEventListener(`click`, removeAnswerLevelEight);

//check 8 answer
function checkAnswerLevelEight() {
  //good answer 8 proceed
  let answer = $(`#answerbox8`).text();
  answer = answer.toLowerCase();
  if (currentLevel === 8) {
    if (answer === level8Answer) {
      $(`.level${currentLevel}`).hide();
      currentLevel++;
      $(`.level${currentLevel}`).show();
    }
  } else {
    removeAnswerLevelEight();

    //call the bad answer visual
    $(`#X`).show();
    setTimeout(function () {
      $(`#X`).hide();
      lives--;
      $(`#lives`).text(lives);
      if (lives <= 0) {
        $(`#gameover`).show();
        $(`.level1`).hide();
        $(`.level2`).hide();
        $(`.level3`).hide();
        $(`.level4`).hide();
        $(`.level5`).hide();
        $(`.level6`).hide();
        $(`.level7`).hide();
        $(`.level8`).hide();
        $(`.level9`).hide();
        $(`.level10`).hide();
        $(`.winingScreen`).hide();
      }
    }, 2000);
  }
};

//L8 answerbox specifications
$(`#answerbox8`).droppable({
  drop: function (event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.addClass(`used`);



  }
});

//deletes answer for box
function removeAnswerLevelfour() {
  $(`#answerbox4`).text(``);
};

function removeAnswerLevelFive() {
  $(`#answerbox5`).text(``);
};

function removeAnswerLevelEight() {
  $(`#answerbox8`).text(``);
};
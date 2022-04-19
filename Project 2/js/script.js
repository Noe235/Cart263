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


$(`#lives`).text(lives);
//levels to hide
$(`.level1`).hide();
$(`.level2`).hide();
$(`.level3`).hide();
$(`.level4`).hide();
$(`.level5`).hide();
$(`.level6`).hide();
$(`.level7`).hide();
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

let $drag = $(`.drag`);
dragspanify($drag);




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

//spanifying function applying colors
function dragspanify($element) {
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

  let characters = [];
  for (let i = 0; i < 15; i++) {

    characters[i] = randomIntFromInterval(364, 366);

    let charactersSpan = `<span class="move">${characters[i]}</span>`;
    $(`#year-container`).append(charactersSpan);
  }
}

function randomIntFromInterval(min, max) { // min and max included
  return (Math.random() * (max - min + 1) + min).toFixed(2);
}


//level 5
$(`.secret`).on(`click`, function (event) {
  $(`.secret`).draggable({
    helper: "clone"
  });
});


// level 7


$(`#elephant`).draggable({
  containment: `#animal-container`
});
$(`#giraffe`).draggable({
  containment: `#animal-container`
});

$(`#elephant`).hide();

$(`#fridge`).one(`click`, function (event) {
  $(`#namefridge`).addClass(`open`);
  $(`#elephant`).show();

});

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

$(`#fridge`).on(`click`, function (event) {
  $(`#giraffe-fridge`).hide();
  let answer = $(`#giraffe-fridge`).text();
  answer = answer.toLowerCase();
  if (answer === level7Answer) {
    $(`#answer-level7`).show();
  }
});


//drag letter to the box
$(`#answerbox`).droppable({
  drop: function (event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.addClass(`used`);



  }
});

//button answering
let btn = document.getElementById(`enter`);
btn.addEventListener(`click`, checkAnswer)
//button removing answer
let buttonremove = document.getElementById(`remove`);
buttonremove.addEventListener(`click`, removeAnswer);

function checkAnswer() {
  //good answer proceed
  let answer = $(`#answerbox`).text();
  answer = answer.toLowerCase();
  if (currentLevel === 5) {
    if (answer === level5Answer) {
      $(`.level${currentLevel}`).hide();
      currentLevel++;
      $(`.level${currentLevel}`).show();
    }
  } else {
    removeAnswer();

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
      }
    }, 2000);
  }
}


$(`#answerbox4`).droppable({
  drop: function (event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.remove();

  }
});


let btnfour = document.getElementById(`enterfour`);
btnfour.addEventListener(`click`, checkAnswerLevelfour)
//button removing answer
let buttonremovefour = document.getElementById(`removefour`);
buttonremovefour.addEventListener(`click`, removeAnswerLevelfour);

function checkAnswerLevelfour() {
  //good answer proceed
  let answer = $(`#answerbox4`).text();
  answer = answer.toLowerCase();
  if (currentLevel === 4) {
    if (answer === level4Answer) {
      $(`.level${currentLevel}`).hide();
      currentLevel++;
      $(`.level${currentLevel}`).show();
    }
  } else {
    removeAnswer();

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
      }
    }, 2000);
  }
}
//deletes answer
function removeAnswerLevelfour() {
  $(`#answerbox4`).text(``);
}

//deletes answer
function removeAnswer() {
  $(`#answerbox`).text(``);
}
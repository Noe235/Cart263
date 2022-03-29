/**
The Dumbest Quiz
Noemie

*/

"use strict";

// Code goes here

//variables
let lives = 3;
let current_level = 1;
let level_5_answer = `ice`;

$(`#lives`).text(lives);
//levels to hide
$(`.level1`).hide();
$(`.level2`).hide();
$(`.level3`).hide();
$(`.level4`).hide();
$(`.level5`).hide();
$(`.level6`).hide();


// menu
//play button
$(`.play`).on(`click`, function (event) {
  $(`#lives_box`).fadeIn(1000);
  $(`#Menu`).fadeOut(1000, level_1);


})
// Title spanify
let $title = $(`#title`);
colorspanify($title);


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
  $(`.level${current_level}`).hide();
  current_level++
  $(`.level${current_level}`).show();
})

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

  // $(`.answer_space`).show();
}

// levels functions
function level_1() {
  $(`.level1`).fadeIn(1000);
}

//level 5
$(`.secret`).on(`click`, function (event) {
  console.log(`draggin`);
  $(`.secret`).draggable({
    helper: "clone"
  });
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
  if (answer === level_5_answer) {
    $(`.level${current_level}`).hide();
    current_level++
    $(`.level${current_level}`).show();
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
      }
    }, 2000);
  }
}

//deletes answer
function removeAnswer() {
  $(`#answerbox`).text(``);
}
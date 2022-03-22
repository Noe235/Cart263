/**
The Dumbest Quiz
Noemie

*/

"use strict";

// Code goes here


//levels to hide
$(`.level1`).hide();


//play button
$(`.play`).on(`click`, function (event) {
  $(`.Tittle`).fadeOut(1000);
  $(this).fadeOut(1000, level_1);
})

//wrong answer
$(`.wrong_answer`).on(`click`, function (event) {





})


function wrongAnswer() {

}

function ui() {
  $(`.Tittle`).fadeIn(2000);
  $(`.Tittle`).addClass(`game_ui`);
  // $(`.answer_space`).show();
}

function level_1() {
  $(`.level1`).fadeIn(1000);
}
/**
The Dumbest Quiz
Noemie

*/

"use strict";

// Code goes here

//variables
let lives = 3;
let current_level = 1;

$(`#lives`).text(lives);
//levels to hide
$(`.level1`).hide();
$(`.level2`).hide();
$(`.level3`).hide();


// menu
//play button
$(`.play`).on(`click`, function (event) {
  $(`#lives_box`).fadeIn(1000);
  $(`#Menu`).fadeOut(1000, level_1);


})



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
  $
  // $(`.answer_space`).show();
}

// levels functions
function level_1() {
  $(`.level1`).fadeIn(1000);
}
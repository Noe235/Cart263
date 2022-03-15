/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Code goes here
let rightAnswer = `Ice`;


let d = Math.floor(Math.random() * 2);
if (d === 0) {
  $(`.cat`).show()
  $(`.penguin`).hide()
  $(`.elephant`).hide()
  $(`.owl`).hide()
  rightAnswer = `cat`
}
if (d === 1) {
   $(`.cat`).hide()
  $(`.penguin`).show()
  $(`.elephant`).hide()
  $(`.owl`).hide()
    rightAnswer = `penguin`
}
if (d === 2) {
 $(`.cat`).hide()
  $(`.penguin`).hide()
  $(`.elephant`).show()
  $(`.owl`).hide()
    rightAnswer = `elephant`
}
if (d === 3) {
   $(`.cat`).hide()
  $(`.penguin`).hide()
  $(`.elephant`).hide()
  $(`.owl`).show()
    rightAnswer = `owl`
}







$(`#solved-dialog-good`).dialog({
  autoOpen: false,
  buttons: {
    "Yeah!": function(){
      $(this).dialog(`close`);

    }
  }
});

// $(`#solved-dialog-bad`).dialog({
//   autoOpen: false,
//   buttons: {
//     "Yeah!": function(){
//       $(this).dialog(`close`);
//
//     }
//   }
// });

$(`.secret`).on(`click`,function(event){
  console.log(`draggin`);
  $(`.secret`).draggable({
  helper:"clone"
});
  });

$(`.secret`).on(`click`,function(event) {
  $(this).addClass(`found`,500);
  // $(this).removeClass(`found`);
  // $(this).removeClass(`secret`);
  });



$(`#answer`).droppable({
  drop: function (event,ui){
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    // ui.draggable.off(`click`);


    }


})

// function guess(){
//   //check if they got it
//   if ($(`#answer`).text() === rightAnswer){
//     $(`#solved-dialog-good`).dialog(`open`);
//
// } else (){
//     $(`#solved-dialog-bad`).dialog(`open`);
// }


// }

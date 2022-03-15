/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Code goes here
let rightAnswer = `Ice`;

// $(`.secret`).on(`click`,function(event) {
//   $(this).addClass(`found`,500);
//
// });
//
// $(.`found`).on(`click`,function(event){
//   $(this).draggable()
// });
$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "Yeah!": function(){
      $(this).dialog(`close`);

    }
  }
});

$(`.secret`).one(`mouseover`,function(event) {
  $(this).addClass(`found`,500);
  $(this).draggable({
  helper:"clone"
  });
});

$(`#answer`).droppable({
  drop: function (event,ui){
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    // ui.draggable.off(`click`);

    //check if they got it
    if ($(this).text() === rightAnswer){
      $(`#solved-dialog`).dialog(`open`);

    }
  }

})

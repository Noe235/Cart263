/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let currentAnswer = `Click to begin.`;
let copypasta = undefined;


//hide and chose a copypasta
$(`.glasses`).hide()
$(`.justdoit`).hide()
$(`.niagarafalls`).hide()
$(`.minecraft`).hide()
let d = Math.floor(Math.random() * 4);
if (d === 0) {
  $(`.glasses`).show()
}
if (d === 1) {
  $(`.justdoit`).show()
}
if (d === 2) {
  $(`.niagarafalls`).show()
}
if (d === 3) {
  $(`.minecraft`).show()
}




$(`.top-secret`).on(`click`, redact);


setInterval(revelation, 500);
currentAnswer = guessCopyPasta;



// Is annyang available?
if (annyang) {
  // Create the guessing command
  let commands = {
    'I think it is *copypasta': guessCopyPasta

  };
  // Setup annyang and start
  annyang.addCommands(commands);
  annyang.start();

}



function redact(event) {

  $(this).removeClass(`redacted`);
  $(this).addClass(`revealed`);

}

function revelation() {
  $(`.revealed`).each(attemptReveal);
}

function attemptReveal() {
  let r = Math.random();
  if (r < 0.05) {
    $(this).removeClass(`revealed`);
    $(this).addClass(`redacted`);
  }
}

function guessCopyPasta(copypasta) {
  // Convert the guess to lowercase to match the answer format
  currentAnswer = copypasta.toLowerCase();
}
/**
Haiku Generator
Noemie

Haiku Generator
*/

// Make a synthesized voice read out the poem each time it changes or on a separate user interaction
//Change or add to the basic transition of a fade in and out (could you make new lines appear with a typewriter effect?)
//fix the ines at the top ÷
"use strict";

let fiveSyllablesLines = [
  'O, to be a tree',
  'The cat does not know',
  'We are all forests',
  'You have done your best',
  'They are all gone now',
];

let sevenSyllablesLines = [
  'Say the things left unsaid',
  "Never believe the wind's lies",
  'The autumn stretches its legs',
  'Nothing can satisfy you',
  'They will not come back again',
];
let bgs = [
  '#fb5458',
  '#6292e9',
  '#61bf99',
  '#fe9952',
  '#cbc6cc',
  '#95caee',
  '#fdd162',
  '#8c67aa',
  '#e08696',
  '#c699ee',
  '#e5b2d1',
  '#80c694',
  '#aed482',
  '#e07284',
  '#eae681',
  '#7fcdeb',
  '#e777ab',
  '#e89d51',
  '#7bc6ad',
  '#d5daf7',
  '#f6b749',
  '#c48dbc',
  '#d95f97',
  '#75c7cb',
  '#D4314E',
  '#229773',
  '#ECDF5C',


];
let lines = [
  random(fiveSyllablesLines),
  random(sevenSyllablesLines),
  random(fiveSyllablesLines),
];

let linesP = [
  lines[0],
  lines[1],
  lines[2],
];

let button = document.getElementById('btn');
let newer = document.getElementById('new');

//detect when lines are clicked
for (let i = 0; i < linesP.length; i++) {
  linesP[i] = document.getElementById(`line-${i}`);
  linesP[i].innerText = lines[i];
  linesP[i].addEventListener('click', lineClicked);

}

//check buttons being pressed
button.addEventListener('click', reading);
newer.addEventListener('click', generateNew);


//genertate a new Haiku
function generateNew() {
  linesP[0].innerText = random(fiveSyllablesLines);

  linesP[2].innerText = random(fiveSyllablesLines);

  linesP[1].innerText = random(sevenSyllablesLines);
  document.body.style['background-color'] = random(bgs);
}

//voice speaking the Haiku
function reading() {
  for (let i = 0; i < linesP.length; i++) {
    responsiveVoice.speak(linesP[i].innerText);
  }
}


//function to call the fade out
function lineClicked(event) {
  fadeOut(event.target, 1);

}

//animation of fadeOut
function fadeOut(element, opacity) {
  opacity -= 0.01;
  element.style['opacity'] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function () {
      fadeOut(element, opacity);
    })
  } else {
    setNewLine(element);
    fadeIn(element, opacity);
  }
}
//animation of fadein
function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style['opacity'] = opacity;
  if (opacity < 1) {
    requestAnimationFrame(function () {
      fadeIn(element, opacity);
    });
  }
}

//replace 1 line when clicked
function setNewLine(element) {
  if (element === linesP[0] || element === linesP[2]) {
    element.innerText = random(fiveSyllablesLines);

    if (element === linesP[0]) {
      lines.splice(0, 1)
    }

    if (element === linesP[0]) {
      lines.splice(2, 1)
    }

  } else if (element === linesP[1]) {
    element.innerText = random(sevenSyllablesLines);
    lines.splice(1, 1)

  }

}


//randomizer
function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
/**
Haiku Generator
Noemie

Haiku Generator
*/

// Make a synthesized voice read out the poem each time it changes or on a separate user interaction
//Change or add to the basic transition of a fade in and out (could you make new lines appear with a typewriter effect?)
//fix the ines at the top
"use strict";

let fiveSyllablesLines =[
  'O, to be a tree',
  'The cat does not know',
  'We are all forests',
  'You have done your best',
  'They are all gone now',
  ];

let sevenSyllablesLines=[
  'Say the things left unsaid',
  "Never believe the wind's lies",
  'The autumn stretches its legs',
  'Nothing can satisfy you',
  'They will not come back again',
  ];

let lines = [
  random(fiveSyllablesLines),
  random(sevenSyllablesLines),
  random(fiveSyllablesLines),
]

let linesP = [
  lines[0],
  lines[1],
  lines[2],
];


for (let i = 0; i<3;i++){
    linesP[i]= document.getElementById(`line-${i}`);
  linesP[i].innerText= lines[i];
   linesP[i].addEventListener('click',lineClicked);

 }


function lineClicked(event){
  fadeOut(event.target, 1);

}

function fadeOut(element, opacity){
  opacity-= 0.01;
  element.style ['opacity'] = opacity;
   if(opacity>0) {
     requestAnimationFrame(function(){
       fadeOut(element,opacity);
     }) } else {
   setNewLine(element);
   fadeIn(element,opacity);
     }
   }

function fadeIn(element,opacity){
  opacity+= 0.01;
element.style['opacity']= opacity;
if (opacity <1){
  requestAnimationFrame(function (){
  fadeIn(element,opacity);
});
}
}

function setNewLine(element){
  if (element=== linesP[0] || element=== linesP[2]){
    element.innerText= random (fiveSyllablesLines);

  } else if (element===linseP[1]){
    element.innerText= random (sevenSyllablesLines);

  }

}



function random(array){
  let index = Math.floor(Math.random()*array.length);
  return array[index];
}

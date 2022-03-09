/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let currentAnswer = `Click to begin.`;
let copypastaAnswer = undefined;

//glasses
let copypasta1 = `glasses are really versatile`;
let copypasta2 = `first you can have glasses-wearing girls take them off and suddenly become beautiful or have girls wearing glasses flashing those cute grins or have girls stealing the protagonist's glasses and putting them on like haha, got your glasses that's just way too cute`;
let copypasta3 = `also boys with glasses i really like when their glasses have that suspicious looking gleam and it's amazing how it can look really cool or just be a joke i really like how it can fulfill all those abstract needs`;
let copypasta4 = `being able to switch up the styles and colors of glasses based on your mood is a lot of fun too it's actually so much fun you have those half rim glasses or the thick frame glasses, everything it's like you're enjoying all these kinds of glasses at a buffet`;
let copypasta5 = `i really want Pippin to try others styles or Sharon to try some on to replace her curent ones we really need glasses to become a thing in cart 263 and start selling them for all the cart class`;
let copypasta6 = `don't you think we really need to officially give everyone glasses`;

//justdoit
let copypasta7 = `do it just do it don't let your dreams be dreams yesterday you said tomorrow so just do it make your dreams come true`;
let copypasta8 = `just do it some people dream of success while you're gonna wake up and work hard at it nothing is impossible`;
let copypasta9 = `you should get to the point where anyone else would quit and you're not gonna stop there`;
let copypasta10 = `no what are you waiting for do it just do it yes you can just do it`;
let copypasta11 = `if you're tired of starting over stop giving up`;

//niagarafalls
let copypasta12 = `basically the Niagara Falls is like a tourist attraction that is between both america and canada oh my god I almost said canadia. oh my god imagine being canadian and saying canadia ah couldn't be me`;
let copypasta13 = `anyway so the only difference is that the canada side is like actually really really pretty but the american side is just one like little streamline of water and they're like yeah this is our niagara falls`;
let copypasta14 = `but like honestly that's like kinda lame and as someone who's only ever gone to the like niagara falls ever like once because that shit's far as fuck like who the fuck would go there in their free time ever as a canadian`;
let copypasta15 = `like i don't know that's not me but like, like america you gotta up your game a little bit cause the niagara Falls are kinda wild.`;
//
// //minecraft
let copypasta16 = `hey sharon i'm begging you i'm on my knees here pleading please give me an extension tonight i am seriously begging here i am going to pass away please help extension is the only cure please sharon`;
let copypasta17 = `sharon please forgive me i am on my knees begging for you forgiveness i wouldn't put anything above you and cart class but fate has sealed me to this endless procrastination toture i beg for forgiveness`;



//hide and chose a copypasta
$(`.glasses`).hide()
$(`.justdoit`).hide()
$(`.niagarafalls`).hide()
$(`.minecraft`).hide()
let d = Math.floor(Math.random() * 4);
if (d === 0) {
  $(`.glasses`).show()
  $(`.justdoit`).hide()
  $(`.niagarafalls`).hide()
  $(`.minecraft`).hide()
  copypastaAnswer = copypasta1
}
if (d === 1) {
  $(`.justdoit`).show()
  $(`.glasses`).hide()
  $(`.niagarafalls`).hide()
  $(`.minecraft`).hide()
  copypastaAnswer = copypasta7
}
if (d === 2) {
  $(`.niagarafalls`).show()
  $(`.glasses`).hide()
  $(`.justdoit`).hide()
  $(`.minecraft`).hide()
  copypastaAnswer = copypasta12
}
if (d === 3) {
  $(`.minecraft`).show()
  $(`.glasses`).hide()
  $(`.justdoit`).hide()
  $(`.niagarafalls`).hide()
  copypastaAnswer = copypasta16
}

$(`h2`).on(`click`, function () {
  let r = Math.floor(Math.random() * 4);
  if (r === 0) {
    $(`.glasses`).show()
    $(`.justdoit`).hide()
    $(`.niagarafalls`).hide()
    $(`.minecraft`).hide()
    copypastaAnswer = copypasta1
  }
  if (r === 1) {
    $(`.justdoit`).show()
    $(`.glasses`).hide()
    $(`.niagarafalls`).hide()
    $(`.minecraft`).hide()
    copypastaAnswer = copypasta7
  }
  if (r === 2) {
    $(`.niagarafalls`).show()
    $(`.glasses`).hide()
    $(`.justdoit`).hide()
    $(`.minecraft`).hide()
    copypastaAnswer = copypasta12
  }
  if (r === 3) {
    $(`.minecraft`).show()
    $(`.glasses`).hide()
    $(`.justdoit`).hide()
    $(`.niagarafalls`).hide()
    copypastaAnswer = copypasta16
  }
});


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
  console.log(currentAnswer)

  if (copypastaAnswer === currentAnswer) {

    // for (let i = 0; i < 17; i++) {
    //   console.log(`working`)
    //   $(`#[i]`).addClass(`read`);
    //   copypasta[i] = copypasta[i + 1]
    // }
    switch (currentAnswer) {
    case copypasta1:
      $(`#1`).addClass(`read`);

      break;
    case copypasta2:
      $(`#2`).addClass(`read`);

      break;
    case copypasta3:
      $(`#3`).addClass(`read`);

      break;

    case copypasta4:
      $(`#4`).addClass(`read`);

      break;
    case copypasta5:
      $(`#5`).addClass(`read`);

      break;
    case copypasta6:
      $(`#6`).addClass(`read`);

      break;
    case copypasta7:
      $(`#7`).addClass(`read`);

      break;
    case copypasta9:
      $(`#8`).addClass(`read`);

      break;
    case copypasta10:
      $(`#10`).addClass(`read`);

      break;
    case copypasta11:
      $(`#11`).addClass(`read`);

      break;
    case copypasta12:
      $(`#12`).addClass(`read`);

      break;
    case copypasta13:
      $(`#13`).addClass(`read`);

      break;
    case copypasta14:
      $(`#14`).addClass(`read`);

      break;
    case copypasta15:
      $(`#15`).addClass(`read`);

      break;
    case copypasta16:
      $(`#16`).addClass(`read`);

      break;
    case copypasta17:
      $(`#17`).addClass(`read`);

      break;

    }
  }
}
/**

A Phaser scene to handle preloading assets before switching to the
play scene.

*/

class Boot extends Phaser.Scene {

  /**
  Just sets the scene's key name
  */
  constructor() {
    super({
      key: `boot`
    });
  }

  /**
  Loads the image assets then switches to the play scene on completion.
  */
  preload() {
    // Load images

    this.load.image(`avatar`, `assets/images/avatar.png`);
    // this.load.image(`thumbs-down`, `assets/images/thumbs-down.png`);
    // this.load.image(`thumbs-up`, `assets/images/thumbs-up.png`);
    // this.load.image(`ee`, `assets/images/ee.webp`);
    // this.load.image(`sh`, `assets/images/sh.webp`);
    let chance = Math.floor(Math.random() * 2);
    console.log(chance);
    if (chance === 1) {
      this.load.image(`thumbs-down`, `assets/images/heart,red.png`);
      this.load.image(`thumbs-up`, `assets/images/heart,pink.png`);
    } else {
      this.load.image(`thumbs-down`, `assets/images/thumbs-down.png`);
      this.load.image(`thumbs-up`, `assets/images/thumbs-up.png`);
    }

    this.load.image(`wall`, `assets/images/brick_1f9f1.png`);

    //load sound
    this.load.audio(`collect`, `assets/sounds/smw_coin.wav`);
    this.load.audio(`collision`, `assets/sounds/smw_kick.wav`);
    // Switch to the play scene on complete
    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  /**
  Nothing here, but could add a loading message for example
  */
  create() {

  }

  update() {

  }

}
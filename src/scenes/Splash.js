import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    //
    // load your assets
    //
    this.load.image('enemy', './assets/images/enemy.png')
    this.load.image('heart', './assets/images/heart.png')
    this.load.image('bullet', './assets/images/bullet.png')
    this.load.image('player', './assets/images/ship.png')

    this.load.image('enemyBullet', 'assets/images/enemy-bullet.png')

    this.load.spritesheet('kaboom', 'assets/images/explode.png', {
      frameWidth: 128,
      frameHeight: 128
    })
    this.load.image('bg0', 'assets/images/sprBg0.png')
    this.load.image('bg1', 'assets/images/sprBg1.png')
  }

  create () {
    this.scene.start('GameScene')
  }

  update () {}
}
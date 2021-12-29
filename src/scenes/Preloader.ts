import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  preload() {
    this.load.image('tiles', [
      './dungeon/stone_E.png',
      './dungeon/stoneWall_E.png',
    ]);
    this.load.image('person', './texture/32.png');
    this.load.tilemapTiledJSON('tilemap', './main-map/ilya.json');

    this.load.atlas(
      'person',
      './texture/DefineSprite_1508_man1/person-3.png',
      './texture/DefineSprite_1508_man1/person-3.json',
    );
  }

  create() {
    this.scene.start('game');
  }
}

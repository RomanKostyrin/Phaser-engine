import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  private platforms?: Phaser.Physics.Arcade.StaticGroup;
  private player: Phaser.Physics.Arcade.Sprite;
  constructor() {
    super('game');
  }

  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'tilemap' });
    const tilesat = map.addTilesetImage('floor', 'tiles');
    map.createLayer('floor', tilesat, 120, 120);

    this.player = this.physics.add.sprite(320, 660, 'person');
    console.log(this.player);

    // const tilesatWalls = map.createLayer('walls', tilesat);
    // const debugGraphics = this.add.graphics().setAlpha(0.7);
    // tilesatWalls.renderDebug(debugGraphics, {
    //   tileColor: null, // Color of non-colliding tiles
    //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
    // });
  }
}

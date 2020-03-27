class DemonPeonBullet extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, 'demon_peon_bullet');
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        console.log("ppa");
        this.setScale(2.7);
        this.anims.play('demon_peon_bullet');
        this.flipX = true;
        this.body.setSize(10, 13);
        this.body.setOffset(2, 19);
        this.body.setBounce(0.2);
      
    }
   
    update() {
        this.x--;

    }


}
export default DemonPeonBullet;
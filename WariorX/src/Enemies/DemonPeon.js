import DemonPeonBullet from "./DemonPeonBullet.js";

class DemonPeon extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, 'demon_peon');

        this.scene = config.scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.setScale(2.7);
        this.body.setSize(15, 13);
        this.body.setOffset(10, 19);
        this.body.setBounce(0.2);

        this.flipX = true;

        this.anims.play('demon_peon_idle');
        this.prevMov = 'demon_peon_idle';
        this.demon_peon_bullet = new DemonPeonBullet({
            scene: this.scene,
            x:config.x,
            y:config.y,
        });
        // this.physics.add.collider([this.demon_peon_bullet],this.wall_floor);
        // this.physics.add.collider([this.demon_peon_bullet],this.plataforms);
   
        this.scene.time.addEvent({
            delay: 3000,
            callback: this.dispara,
            //args: [],
            callbackScope: this,
            loop: false,
            paused:false
        });
    }
    dispara(){
        this.anims.play('demon_peon_attack');
        this.scene.time.addEvent({
            delay: 3000,
            callback: this.para,
            //args: [],
            callbackScope: this,
            loop: false,
            paused:false
        });
    }
    para(){
        this.anims.play('demon_peon_idle');
        this.scene.time.addEvent({
            delay: 3000,
            callback: this.dispara,
            //args: [],
            callbackScope: this,
            loop: false,
            paused:false
        });
    }
    update() {
        this.demon_peon_bullet.update();

    }


}
export default DemonPeon;
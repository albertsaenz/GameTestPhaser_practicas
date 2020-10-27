
class Bullet extends Phaser.Physics.Arcade.Sprite
{
    constructor (scene, x, y)
    {
        super(scene, x, y, 'demon_peon');
        this.setScale(2);
    }

    fire (x, y)
    {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocityY(-300);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.y <= -32)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}


// class DemonPeonBullet extends Phaser.GameObjects.Sprite {
//     constructor(config) {
//         console.log("config de bullet");
//         // console.log(config);
//         // console.log(config.y);
//         super(config.scene, config.x, config.y, 'demon_peon_bullet');
//         this.scene = config.scene;
//         this.scene.add.existing(this);
//         this.scene.physics.world.enable(this);
//         // console.log("ppa");
//         this.setScale(5);
//         this.anims.play('demon_peon_bullet');
//          this.scene.sys.displayList.add(this);
//         // scene.sys.updateList.add(this);
//         // this.scene.sys.arcadePhysics.world.enableBody(this, 0);
//         this.flipX = true;
//         this.body.setSize(10, 13);
//         this.body.setOffset(2, 19);
//         this.body.setBounce(0.2);
//         this.body.setGravityY(-300)
//         this.body.setCollideWorldBounds(true);
//         this.active = true;

//     }

//     update() {
//         this.body.setAllowGravity(false)
//         this.body.setVelocityY(0);
//         this.body.setVelocityX(-100);
//         this.scene.add.existing(this);
//         this.body.setCollideWorldBounds(true);
//         // this.active = true;

//         this.scene.physics.world.enable(this);

//     }


// }
export default Bullet;
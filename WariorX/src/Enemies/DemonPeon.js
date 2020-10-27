import Bullets from "./Bullets.js";
class DemonPeon extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'demon_peon');
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.scene= scene;
        this.x=x;
        this.y=y;
        this.setScale(2.7);
        this.body.setSize(15, 13);
        this.body.setOffset(10, 19);
        this.body.setBounce(0.2);
        this.flipX = true;

        this.anims.play('demon_peon_idle');
        this.prevMov = 'demon_peon_idle';

        this.scene.time.addEvent({
            delay: 3000,
            callback: this.dispara,
            //args: [],
            callbackScope: this,
            loop: false,
            paused: false
        });
    }
    dispara() {
        this.anims.play('demon_peon_attack');
        console.log("funcion dispara");
        this.bullets = new Bullets(this.scene);
        this.bullets.fireBullet(this.x,this.y);
        this.scene.time.addEvent({
            delay: 700,
            callback: this.para,
            //args: [],
            callbackScope: this,
            loop: false,
            paused: false
        });
    }
    para() {
        this.anims.play('demon_peon_idle');
        this.scene.time.addEvent({
            delay: 3000,
            callback: this.dispara,
            //args: [],
            callbackScope: this,
            loop: false,
            paused: false
        });
    }

}
// class DemonPeon extends Phaser.GameObjects.Sprite {
//     constructor(config) {
//         super(config.scene, config.x, config.y, 'demon_peon');
// // console.log("config de demonpeon");
// // console.log(config);
//         this.scene = config.scene;
//         this.x=config.x;
//         this.y=config.y;
//         this.scene.add.existing(this);
//         this.scene.physics.world.enable(this);
//         this.setScale(2.7);
//         this.body.setSize(15, 13);
//         this.body.setOffset(10, 19);
//         this.body.setBounce(0.2);

//         this.flipX = true;

//         this.anims.play('demon_peon_idle');
//         this.prevMov = 'demon_peon_idle';
//         this.group = this.scene.physics.add.group();
//         this.demon_peon_bullet = new DemonPeonBullet({
//             scene: this.scene,
//             x:config.x,
//             y:config.y,
//         });

//         this.group.add(this.demon_peon_bullet);

//         // this.physics.add.collider([this.demon_peon_bullet],this.wall_floor);
//         // this.physics.add.collider([this.demon_peon_bullet],this.plataforms);
//         this.scene.time.addEvent({
//             delay: 3000,
//             callback: this.dispara,
//             //args: [],
//             callbackScope: this,
//             loop: false,
//             paused:false
//         });
//     }
//     dispara(){
//         this.anims.play('demon_peon_attack');
//         // console.log("dipara x y y");
//         // console.log(this.x);
//         // console.log(this.y);

//         this.demon_peon_bullet = new DemonPeonBullet({
//             scene: this.scene,
//             x:this.x,
//             y:this.y,
//         });
//         this.group.add(this.demon_peon_bullet);
//         // console.log(this.group);
//         this.scene.time.addEvent({
//             delay: 700,
//             callback: this.para,
//             //args: [],
//             callbackScope: this,
//             loop: false,
//             paused:false
//         });
//     }
//     para(){
//         this.anims.play('demon_peon_idle');
//         this.scene.time.addEvent({
//             delay: 3000,
//             callback: this.dispara,
//             //args: [],
//             callbackScope: this,
//             loop: false,
//             paused:false
//         });
//     }

//     update() {
//         this.demon_peon_bullet.update();
//         // this.body.setCollideWorldBounds(true);

//         // this.body.setAllowGravity(false)

//     }


// }
export default DemonPeon;
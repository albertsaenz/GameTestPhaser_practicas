import Warrior from "../Player/Warrior.js";
import DemonPeon from "../Enemies/DemonPeon.js";

class Play extends Phaser.Scene {
    constructor() {
        super({key: 'Play'});
    }
    
    init() {
        console.log('Se ha iniciado la escena Play');
    }

    create() {
        // this.add.bitmapText(100,100, 'pixelFont', 'PRUEBA');
        this.wall_floor = this.physics.add.staticGroup();
        this.wall_floor.create(-16,0,'wall').setOrigin(0);
        this.wall_floor.create(this.scale.width-16,0,'wall').setOrigin(0).setFlipX(true);
        this.wall_floor.create(0,this.scale.height-20,'floor').setOrigin(0);
        this.wall_floor.create(0,this.scale.height-8,'sand').setOrigin(0);

        this.plataforms= this.physics.add.staticGroup();
        this.plataforms.create(100,267,'wall_h0').setScale(0.55).setOrigin(0).refreshBody();
        this.plataforms.create(300,267,'wall_h0').setScale(0.55).setOrigin(0).refreshBody();
        this.plataforms.create(200,194,'wall_h0').setScale(0.55).setOrigin(0).refreshBody();

        this.plataforms.create(412,104,'wall_h0').setScale(0.55).setOrigin(0).refreshBody();
        this.plataforms.create(518,104,'wall_h0').setScale(0.55).setOrigin(0).refreshBody();
        this.plataforms.create(218,117,'wall_h0').setScale(0.55).setOrigin(0).refreshBody();
        
        // console.log(this);
        this.wall_floor.refresh();

        //personaje
        this.warrior= new Warrior({
            scene: this,
            x:50,
            y:100,
        });

        //demomnio  peon
        this.demon_peon = new DemonPeon({
            scene: this,
            x:500,
            y:100,
        });
        this.physics.add.collider([this.warrior],this.wall_floor);
        this.physics.add.collider([this.warrior],this.plataforms);
console.log(this.demon_peon.demon_peon_bullet);
        this.physics.add.collider([this.demon_peon],this.wall_floor);
        this.physics.add.collider([this.demon_peon],this.plataforms);
       
        this.physics.add.collider([this.demon_peon.demon_peon_bullet],this.wall_floor);
        this.physics.add.collider([this.demon_peon.demon_peon_bullet],this.plataforms);

        this.physics.add.collider(this.warrior,this.demon_peon.demon_peon_bullet,()=>{this.warrior.visible=false;});
    }

    update() {
        this.warrior.update();
        this.demon_peon.update();
    }
}

export default Play;
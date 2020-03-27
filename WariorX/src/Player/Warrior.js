class Warrior extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, 'warrior');

        this.scene = config.scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.setScale(1.8);
        this.body.setSize(17,30);
        this.body.setOffset(6,2);

        this.body.setBounce(0.2);

        this.jumping = false;
        this.atack= false;

        this.anims.play('warrior_idle');
        this.prevMov='warrior_idle';

        this.hitDelay=true;

        this.cursor = this.scene.input.keyboard.createCursorKeys();

        // this.cursor.space.on("down",()=>{});
        
    }
    update(){
        if(this.cursor.left.isDown){
            this.body.setVelocityX(-200);
            this.flipX= true;
            this.body.setSize(18,30);
            this.body.setOffset(9,2);
            if(this.prevMov !== 'left' && !this.jumping){
                this.prevMov = 'left';
                this.anims.play('warrior_walk');
            }
        } else if(this.cursor.right.isDown){
            this.body.setVelocityX(200);
            this.flipX= false;
            this.body.setSize(18,30);
            this.body.setOffset(5,2);
            if(this.prevMov !== 'right' && !this.jumping){
                this.prevMov = 'right';
                this.anims.play('warrior_walk');
            }
        }
        else {
            this.body.setVelocityX(0);
            if(this.prevMov !== 'warrior_idle' && !this.jumping){
                this.prevMov = 'warrior_idle';
                this.anims.play('warrior_idle');
            }
        }

        if(Phaser.Input.Keyboard.JustDown(this.cursor.up) && !this.jumping && this.body.blocked.down){
            this.jumping = true;
            this.body.setVelocityY(-560);
            if(this.prevMov !== 'jump'){
                this.prevMov = 'jump';
                this.anims.play('warrior_jump');
            }
        } else if(this.body.blocked.down){
            this.jumping = false;
        }
        
        if(Phaser.Input.Keyboard.JustDown(this.cursor.space)&& !this.jumping &&!this.atack){
            if(this.prevMov !== 'space' ){
                this.anims.play('warrior_attack_sword');
                this.atack= true;
                this.scene.time.addEvent({
                    delay: 650,
                    callback:()=>{
                        this.prevMov = 'space';
                        this.atack= false;
                    }
                });
            }
        }
        


        
    }
}

export default Warrior;
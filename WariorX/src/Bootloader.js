class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        this.load.path = './assets/';

        this.load.image([
            // 'background',
            'sand',
            'floor',
            'wall',
            'wall_h0'
            // 'life'
        ]);

        // this.load.audio('bongo', 'bongojam_f.mp3');
        // this.load.audio('pop', 'pop.mp3');
        // this.load.audio('draw', 'draw.mp3');

        this.load.image('font', 'font/font.png');
        this.load.json('fontData', 'font/font.json');

        this.load.atlas('warrior', 'warrior/warrior.png', 'warrior/warrior_atlas.json');
        this.load.animation('warriorAnim', 'warrior/warrior_anim.json');

        this.load.atlas('demon_peon','enemy_peon/demon_peon.png','enemy_peon/demon_peon_atlas.json');
        this.load.animation('demon_peon_Anim','enemy_peon/demon_peon_anim.json');

        this.load.on('complete', () => {
            const fontData = this.cache.json.get('fontData');
            this.cache.bitmapFont.add('pixelFont', Phaser.GameObjects.RetroFont.Parse(this, fontData));

            this.scene.start('Play');
        });
    }
}
export default Bootloader;
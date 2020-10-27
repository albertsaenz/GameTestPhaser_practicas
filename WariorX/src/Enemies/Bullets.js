import Bullet from "./DemonPeonBullet.js";
class Bullets extends Phaser.Physics.Arcade.Group
{
    constructor (scene)
    {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 1,
            key: 'demon_peon',
            active: false,
            visible: false,
            classType: Bullet,
            setXY:{
              x:100,
              y:10
            }
        });
        
    }

    fireBullet (x, y)
    {
        let bullet = this.getFirstDead(false);

        if (bullet)
        {
            bullet.fire(x, y);
        }
    }
}

export default Bullets;
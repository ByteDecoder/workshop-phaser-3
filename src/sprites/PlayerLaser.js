import Entity from './Entity'

export default class PlayerLaser extends Entity {
  constructor (scene, x, y) {
    super(scene, x, y, 'bullet')
    this.body.velocity.y = -200
  }
}

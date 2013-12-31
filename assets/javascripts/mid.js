function Mid() {
  var texture = PIXI.Texture.fromImage("assets/images/bg-mid.png");
  PIXI.TilingSprite.call(this, texture, width=512, height=384)

  this.position.x = 0;
  this.position.y = 128;
  this.tilePosition.x = 0;
  this.tilePosition.y = 0;

  this.viewportX = 0;
}

Mid.constructor = Mid;
Mid.prototype = Object.create(PIXI.TilingSprite.prototype);

Mid.DELTA_X = 0.375;

Mid.prototype.setViewportX = function (newViewportX) {
  var distanceTravelled = newViewportX - this.viewportX;
  this.viewportX = newViewportX;
  this.tilePosition.x -= (distanceTravelled * Mid.DELTA_X);
}

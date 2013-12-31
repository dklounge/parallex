function Far() {
  var texture = PIXI.Texture.fromImage("assets/images/bg-far.png");
  PIXI.TilingSprite.call(this, texture, width=512, height=384)

  this.position.x = 0;
  this.position.y = 0;
  this.tilePosition.x = 0;
  this.tilePosition.y = 0;

  this.viewportX = 0;
}

Far.constructor = Far;
Far.prototype = Object.create(PIXI.TilingSprite.prototype);

Far.DELTA_X = 0.125;

Far.prototype.setViewportX = function (newViewportX) {
  var distanceTravelled = newViewportX - this.viewportX;
  this.viewportX = newViewportX;
  this.tilePosition.x -= (distanceTravelled * Far.DELTA_X);
}

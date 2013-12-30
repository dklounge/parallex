function init() {
  console.log("Initializing. Creating stage and calling renderer.")
  stage = new PIXI.Stage(0x66FF99);

  var width = document.getElementById("game-canvas").width; // 512
  var height = document.getElementById("game-canvas").height; // 384

  renderer = PIXI.autoDetectRenderer(width, height,
    document.getElementById("game-canvas")
  );
  console.log(renderer);

  var farTexture = PIXI.Texture.fromImage("assets/images/bg-far.png");
  far = new PIXI.TilingSprite(farTexture, 512, 256);
  far.position.x = 0;
  far.position.y = 0;
  far.tilePosition.x = 0;
  far.tilePosition.y = 0;
  stage.addChild(far);

  var midTexture = PIXI.Texture.fromImage("assets/images/bg-mid.png");
  mid = new PIXI.TilingSprite(midTexture, 512, 256);
  console.log(mid);
  mid.position.x = 0;
  mid.position.y = 128;
  mid.tilePosition.x = 0;
  mid.tilePosition.y = 0;
  stage.addChild(mid);

  requestAnimFrame(update);
}

function update() {
  far.tilePosition.x -= 0.125;
  mid.tilePosition.x -= 0.375;

  renderer.render(stage);

  requestAnimFrame(update);
}

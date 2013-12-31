SCROLL_SPEED = 1;

function init() {
  console.log("Initializing. Creating stage and calling renderer.")
  stage = new PIXI.Stage(0x66FF99);

  var width = document.getElementById("game-canvas").width; // 512
  var height = document.getElementById("game-canvas").height; // 384

  renderer = PIXI.autoDetectRenderer(width, height,
    document.getElementById("game-canvas")
  );
  console.log(renderer);

  scroller = new Scroller(stage)

  requestAnimFrame(update);
};

function update() {
  scroller.moveViewportXBy(SCROLL_SPEED);

  renderer.render(stage);
  requestAnimFrame(update);
};

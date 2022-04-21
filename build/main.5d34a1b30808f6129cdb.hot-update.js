"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const Player_1 = __webpack_require__(/*! ./Player */ "./src/Player.ts");
const Tile_1 = __webpack_require__(/*! ./Tile */ "./src/Tile.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
let stage;
let canvas;
let assetManager;
let player;
let tile;
let background;
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    background = assetManager.getSprite("spritesB", "TilesetSpritesheet/Background/Background");
    stage.addChild(background);
    player = new Player_1.Player(stage, assetManager);
    player.showMe();
    player.startMe();
    let xPos;
    let yPos;
    for (let i = 0; i < Constants_1.TILE_MAX; i++) {
        yPos = 660;
        xPos = +64;
        tile = new Tile_1.Tile(stage, xPos, yPos, assetManager);
        tile.showMe();
    }
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function monitorCollisions() {
    if ((0, Toolkit_1.boxHit)(player.sprite, tile.sprite)) {
        player.onGround == true;
    }
    function gravity() {
        if (this.onGround == false)
            this._sprite.y = this._sprite.y + GRAVITY_POWER;
        else if (this.onGround == true) {
            this._sprite.y = this._sprite.y + 0;
            console.log(this.onGround);
        }
    }
    function onTick(e) {
        document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
        monitorCollisions();
        player.update();
        stage.update();
    }
    function main() {
        canvas = document.getElementById("game-canvas");
        canvas.width = Constants_1.STAGE_WIDTH;
        canvas.height = Constants_1.STAGE_HEIGHT;
        stage = new createjs.StageGL(canvas, { antialias: true });
        assetManager = new AssetManager_1.AssetManager(stage);
        stage.on("allAssetsLoaded", onReady, null, true);
        assetManager.loadAssets(Constants_1.ASSET_MANIFEST);
    }
    main();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("496b0e7002be0c92a0aa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5d34a1b30808f6129cdb.hot-update.js.map
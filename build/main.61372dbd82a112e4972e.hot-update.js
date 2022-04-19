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
    for (let i = 0; i < Constants_1.TILE_MAX; i++) {
        tile.push(new Tile_1.Tile(stage, 720, 0, assetManager));
        tile[i].showMe();
    }
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onMoveSnake(e) {
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
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


/***/ }),

/***/ "./src/Tile.ts":
/*!*********************!*\
  !*** ./src/Tile.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tile = void 0;
const Tileset_1 = __webpack_require__(/*! ./Tileset */ "./src/Tileset.ts");
class Tile extends Tileset_1.Tileset {
    constructor(stage, x, y, assetManager) {
        super(stage, x, y, assetManager, "TilesetSpritesheet/Ground/MidMid");
    }
}
exports.Tile = Tile;


/***/ }),

/***/ "./src/Tileset.ts":
/*!************************!*\
  !*** ./src/Tileset.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tileset = void 0;
class Tileset {
    constructor(stage, x, y, assetManager, animation) {
        this.stage = stage;
        this._sprite = assetManager.getSprite("spritesB", animation, x, y);
    }
    get sprite() {
        return this._sprite;
    }
    tilePosition(x, y, assetManager, animation) {
        this._sprite = assetManager.getSprite("spritesB", animation, x, y);
    }
    showMe() {
        this.stage.addChild(this._sprite);
    }
    hideMe() {
        this._sprite.stop();
        this.stage.removeChild(this._sprite);
    }
    update() {
    }
}
exports.Tileset = Tileset;
Tileset.STATE_TOPLEFT = 1;
Tileset.STATE_TOPMID = 2;
Tileset.STATE_TOPRIGHT = 3;
Tileset.STATE_MIDLEFT = 4;
Tileset.STATE_MIDMID = 5;
Tileset.STATE_MIDRIGHT = 6;
Tileset.STATE_BOTLEFT = 7;
Tileset.STATE_BOTMID = 8;
Tileset.STATE_BOTRIGHT = 9;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d5b4b06e1280b1603cd2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.61372dbd82a112e4972e.hot-update.js.map
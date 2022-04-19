"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Character.ts":
/*!**************************!*\
  !*** ./src/Character.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Character = void 0;
class Character {
    constructor(stage, assetManager, animation) {
        this._state = Character.STATE_IDLE;
        this.stage = stage;
        this.xDisplace = 0;
        this.yDisplace = 0;
        this._sprite = assetManager.getSprite("sprites", animation, 300, 300);
    }
    set speed(value) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }
    get state() {
        return this._state;
    }
    get sprite() {
        return this._sprite;
    }
    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    toDegrees(radians) {
        return radians * (180 / Math.PI);
    }
    showMe() {
        this.stage.addChild(this._sprite);
    }
    hideMe() {
        this._sprite.stop();
        this.stage.removeChild(this._sprite);
    }
    rotateMe(degrees) {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.rotation = degrees;
    }
    startMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        let radians = this.toRadians(this._sprite.rotation);
        this.xDisplace = Math.cos(radians) * this._speed;
        this.yDisplace = Math.sin(radians) * this._speed;
        this._sprite.play();
        this._state = Character.STATE_MOVING;
    }
    stopMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.stop();
        this._state = Character.STATE_IDLE;
    }
    update() {
        if ((this._state == Character.STATE_DEAD) || (this._state == Character.STATE_IDLE))
            return;
        this._sprite.x += this.xDisplace;
        this._sprite.y += this.yDisplace;
    }
}
exports.Character = Character;
Character.STATE_IDLE = 1;
Character.STATE_MOVING = 2;
Character.STATE_DEAD = 3;


/***/ }),

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
let stage;
let canvas;
let assetManager;
let player;
let background;
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    background = assetManager.getSprite("spritesB", "TilesetSpritesheet/Background/Background");
    stage.addChild(background);
    player = new Player_1.Player(stage, assetManager);
    player.showMe();
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onMoveSnake(e) {
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
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

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const Character_1 = __webpack_require__(/*! ./Character */ "./src/Character.ts");
class Player extends Character_1.Character {
    constructor(stage, assetManager) {
        super(stage, assetManager, "CharacterSpritesheet/Player/RightIdle");
    }
}
exports.Player = Player;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a6e08e31b261ad0c1c38")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4e5cc1af9ac067ed677f.hot-update.js.map
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
        this.onGround = false;
        this._sprite = assetManager.getSprite("spritesA", animation, 50, 500);
    }
    set speed(value) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }
    set direction(value) {
        this._direction = value;
    }
    get direction() {
        return this._direction;
    }
    get state() {
        return this._state;
    }
    get movingState() {
        return this._state;
    }
    get sprite() {
        return this._sprite;
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
    moveMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        if (this._state = Character.STATE_IDLE) {
            this._state = Character.STATE_MOVING;
        }
    }
    stopMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        if (this._state = Character.STATE_MOVING) {
            this._state = Character.STATE_IDLE;
        }
    }
    update() {
        if ((this._state == Character.STATE_DEAD) || (this._state == Character.STATE_IDLE))
            return;
    }
}
exports.Character = Character;
Character.UP = 1;
Character.DOWN = 2;
Character.LEFT = 3;
Character.RIGHT = 4;
Character.STATE_IDLE = 1;
Character.STATE_MOVING = 2;
Character.STATE_JUMPING = 3;
Character.STATE_FALLING = 4;
Character.STATE_GROUNDED = 5;
Character.STATE_DYING = 6;
Character.STATE_DEAD = 7;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("77fd585f198ffcecbad0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.fc7150325e9ca6d4e224.hot-update.js.map
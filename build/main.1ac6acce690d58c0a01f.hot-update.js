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
        this._state = Character.STATE_IDLE_RIGHT;
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
    startMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.play();
    }
    stopMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.stop();
    }
    update() {
        if ((this._state == Character.STATE_DEAD) || (this._state == Character.STATE_IDLE_RIGHT) || (this._state == Character.STATE_IDLE_LEFT))
            return;
    }
}
exports.Character = Character;
Character.LEFT = 1;
Character.RIGHT = 2;
Character.STATE_IDLE_RIGHT = 1;
Character.STATE_IDLE_LEFT = 2;
Character.STATE_MOVING_RIGHT = 3;
Character.STATE_MOVING_LEFT = 4;
Character.STATE_JUMPING = 5;
Character.STATE_FALLING = 6;
Character.STATE_GROUNDED = 7;
Character.STATE_DYING = 8;
Character.STATE_DEAD = 9;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1f1cfc2f3a397c112de")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1ac6acce690d58c0a01f.hot-update.js.map
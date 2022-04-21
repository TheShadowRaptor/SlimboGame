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
    get state() {
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
Character.STATE_IDLE_RIGHT = 1;
Character.STATE_IDLE_LEFT = 2;
Character.STATE_JUMPING = 3;
Character.STATE_FALLING = 4;
Character.STATE_GROUNDED = 5;
Character.STATE_DYING = 6;
Character.STATE_DEAD = 7;
Character.STATE_MOVING_RIGHT = 3;
Character.STATE_MOVING_LEFT = 4;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("917e9b54f5a9de538ca8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1cd1088a471b7555dfb7.hot-update.js.map
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
        this._sprite = assetManager.getSprite("spritesA", animation, 100, 700);
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
    }
}
exports.Character = Character;
Character.STATE_IDLE = 1;
Character.STATE_MOVING = 2;
Character.STATE_DEAD = 3;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8b8fa54cf0784fd963bf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4e5b8524c388fcbc2a2f.hot-update.js.map
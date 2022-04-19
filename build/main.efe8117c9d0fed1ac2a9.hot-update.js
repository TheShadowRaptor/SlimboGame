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
        this._sprite = assetManager.getSprite("spritesA", animation, 50, 600);
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
    gravity() {
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
/******/ 	__webpack_require__.h = () => ("b6f2e974f2ee1ac4cd03")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.efe8117c9d0fed1ac2a9.hot-update.js.map
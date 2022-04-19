"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Tileset.ts":
/*!************************!*\
  !*** ./src/Tileset.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tileset = void 0;
class Tileset {
    constructor(stage, assetManager, animation) {
        this.stage = stage;
        this._sprite = assetManager.getSprite("spritesB", animation, 0, 0);
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
/******/ 	__webpack_require__.h = () => ("eda870f61127a6ddd6ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.64b3eb7d954217562026.hot-update.js.map
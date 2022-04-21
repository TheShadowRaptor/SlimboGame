"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Tile.ts":
/*!*********************!*\
  !*** ./src/Tile.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tile = void 0;
const Tileset_1 = __webpack_require__(/*! ./Tileset */ "./src/Tileset.ts");
class Tile extends Tileset_1.Tileset {
    constructor(stage, assetManager) {
        super(stage, assetManager, "TilesetSpritesheet/Ground/TopMid");
    }
    positionMe(xPos, yPos) {
        this._sprite.x = xPos;
        this._sprite.y = yPos;
    }
    update() {
        super.update();
    }
}
exports.Tile = Tile;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("708045a45c995f778f17")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e5e84633ff01d22c9781.hot-update.js.map
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
    constructor(stage, x, y, assetManager) {
        super(stage, x, y, assetManager, "TilesetSpritesheet/Ground/TopMid");
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
/******/ 	__webpack_require__.h = () => ("08d2db48943451292044")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a83beb52e6f02cc6db83.hot-update.js.map
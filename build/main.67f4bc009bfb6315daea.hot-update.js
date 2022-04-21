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
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Tile extends Tileset_1.Tileset {
    constructor(stage, x, y, assetManager) {
        for (let i = 0; i < Constants_1.TILE_MAX; i++) {
            super(stage, x, y, assetManager, "TilesetSpritesheet/Ground/TopMid");
        }
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
/******/ 	__webpack_require__.h = () => ("4887d2417268ce85e7b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.67f4bc009bfb6315daea.hot-update.js.map
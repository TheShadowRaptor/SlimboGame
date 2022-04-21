"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

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
    positionMe() {
    }
    isGrounded() {
        this.state == Character_1.Character.STATE_GROUNDED;
    }
    isFalling() {
        this.state == Character_1.Character.STATE_FALLING;
    }
    update() {
        super.update();
    }
}
exports.Player = Player;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1d87514363a99e0d4cc1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.87c0b7e125a7a454982c.hot-update.js.map
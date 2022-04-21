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
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Player extends Character_1.Character {
    constructor(stage, assetManager) {
        super(stage, assetManager, "CharacterSpritesheet/Player/RightIdle");
    }
    update() {
        this.gravity();
        super.update();
    }
    positionMe() {
    }
    gravity() {
        if (this.onGround == false)
            this._sprite.y = this._sprite.y + Constants_1.GRAVITY_POWER;
        else if (this.onGround == true)
            this._sprite.y = this._sprite.y + 0;
    }
}
exports.Player = Player;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("772b437cc640802bb9e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.71e7482fd3008b14e600.hot-update.js.map